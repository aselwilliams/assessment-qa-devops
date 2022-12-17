const {shuffleArray} = require('./utils')

const petsArr = [{'myPet':'hamster'},{'myPet':'cat'},{'myPet':'lizard'}]
const numArr = [2, 5, 9, 13, 7]
const strArr = ['almost','the','last','assessment']

describe('shuffleArray should', () => {
    test('return an array', ()=> {
        expect(Array.isArray(shuffleArray(petsArr))).toBe(true)
        expect(Array.isArray(shuffleArray(numArr))).toBe(true)
        expect(Array.isArray(shuffleArray(strArr))).toBe(true)
    })

    test('the input array and the returned array should have the same length', ()=> {
        expect(shuffleArray(petsArr)).toHaveLength(petsArr.length)
        expect(shuffleArray(numArr).length).toEqual(numArr.length)
        expect(shuffleArray(strArr)).toHaveLength(strArr.length)
    })
})