import { isLeapYear } from "./leap-year"

describe('leap years', () => {

  const leapYearsDivisibleBy400 = [2000, 2400, 2800]
  const leapYearsDivisibleBy4ButNotBy100 = [2008, 2012, 2016]
  const leapYearsNotDivisibleBy4 = [2017, 2018, 2019]
  const leapYearsDivisibleBy100ButNotBy400 = [1700, 1800, 1900]

  it('All years divisible by 400 ARE leap years', () => {
    leapYearsDivisibleBy400.forEach(year => {
      
      const result = isLeapYear(year)

      expect(result).toBe(true)
    })
  })

  it('All years divisible by 100 but not by 400 are NOT leap years', () => {
    leapYearsDivisibleBy100ButNotBy400.forEach(year => {
      const result = isLeapYear(year)
      expect(result).toBe(false)
    })
  })

  it('All years divisible by 4 but not by 100 ARE leap years', () => {
    leapYearsDivisibleBy4ButNotBy100.forEach(year => {
      const result = isLeapYear(year)
      expect(result).toBe(true)
    })
  })

  it('All years not divisible by 4 are NOT leap years', () => {
    leapYearsNotDivisibleBy4.forEach(year => {
      const result = isLeapYear(year)
      expect(result).toBe(false)
    })
  })

})