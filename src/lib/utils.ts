import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getNextTwelevemonths = () => {
  let firstDays = []
  let currentDate = new Date()

  // Get the current month and year
  let currentMonth = currentDate.getMonth()
  let currentYear = currentDate.getFullYear()

  for (let i = 1; i <= 12; i++) {
    let month = (currentMonth + i) % 12
    let year = currentYear + Math.floor((currentMonth + i) / 12)
    let firstDay = new Date(year, month, 1)
    firstDays.push(firstDay)
  }
  return firstDays
}
