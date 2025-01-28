import { isLeapYear } from "./leap-year"

describe('leap years', () => {

  const leapYearsDivisibleBy400 = [2000, 2400, 2800]

  it('All years divisible by 400 ARE leap years', () => {
    leapYearsDivisibleBy400.forEach(year => {
      
      const result = isLeapYear(year)

      expect(result).toBe(true)
    })
  })

  it('All years divisible by 100 but not by 400 are NOT leap years', () => {
    const year = 1900
    const result = isLeapYear(year)
    expect(result).toBe(false)
  })

})