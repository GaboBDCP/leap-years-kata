import { isLeapYear } from "./leap-year"

describe('leap years', () => {

  const leapYearsDivisibleBy400 = [2000, 2400, 2800]

  it('All years divisible by 400 ARE leap years', () => {
    leapYearsDivisibleBy400.forEach(year => {
      
      const result = isLeapYear(year)

      expect(result).toBe(true)
    })
  })

})