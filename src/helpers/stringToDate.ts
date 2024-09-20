import type { player } from '@/types'

export const stringToDateFormatter = (str: string) => {
  const date = new Date(str)
  return date.toISOString().slice(0, 10)
}

export const sortedInDescdingOrder = (data: player[]): player[] => {
  return data
}
