
const { Builder, Capabilities, By } = require("selenium-webdriver")

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4005/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clicking the Draw button displays the div with id = “choices”', async ()=> {
    const drawClicked = await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const displayed = await driver.findElement(By.id('choices')).isDisplayed()
    await driver.sleep(2000)
    expect(displayed).toBeTruthy()
})

test('clicking an “Add to Duo” button displays the div with id = “player-duo”', async ()=> {
    const drawClicked = await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const addToDuoClicked = await driver.findElement(By.xpath('//button[contains(@class,"bot-btn")]')).click()
    await driver.sleep(2000)
    const displayed = await driver.findElement(By.id("player-duo")).isDisplayed()
    await driver.sleep(2000)
    expect(displayed).not.toBeFalsy()
})

test('when a bot is “Removed from Duo”, that it goes back to “choices” ', async ()=> {
    const drawClicked = await driver.findElement(By.id('draw')).click()
    await driver.sleep(2000)
    const addToDuoClicked = await driver.findElement(By.xpath('//button[contains(@class,"bot-btn")]')).click()
    await driver.sleep(2000)
    let countBefore = 0
    let countAfter = 0
    const displayedBefore = await driver.findElements(By.xpath("//*[@id='choices']/div")).then(elements =>{ console.log(elements.length)
    return countBefore = elements.length})
    const removedFromDuoClicked= await driver.findElement(By.xpath('//button[contains(text(),"Remove from Duo")]')).click()
    await driver.sleep(2000)
    const displayedAfter = await driver.findElements(By.xpath("//*[@id='choices']/div")).then(elements => {
    console.log(elements.length)
    return countAfter = elements.length})
    expect(countAfter).toBeGreaterThan(countBefore)
})