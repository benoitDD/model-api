import {div, mul, sum} from './utils'

describe('Test sum function', () => {
    test('Sum 5 and 6', () => {
        expect(sum(5, 6)).toBe(11)
    })

    test('Sum -11 and 3', () => {
        expect(sum(-11, 3)).toBe(-8)
    })
})

describe('Test mul function', () => {
    test('Mul 5 and 6', () => {
        expect(mul(5, 6)).toBe(30)
    })

    test('Mul -11 and 3', () => {
        expect(mul(-11, 3)).toBe(-33)
    })
})

describe('Test div function', () => {
    test('Div 30 on 6', () => {
        expect(div(30, 6)).toBe(5)
    })

    test('Div 30 on 0', () => {
        expect(() => div(30, 0)).toThrowError('The second argument musn\'t be to 0')
    })
})