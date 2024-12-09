/**
 * Utility function to generate an array of random numbers selected from a given array.
 *
 * Parameters:
 * - `arr`: The source array of numbers to pick from.
 * - `count`: The number of random numbers to generate.
 *
 * Returns:
 * - An array of `count` random numbers selected from `arr`.
 *
 */
export const getRandomNumbers = (arr: number[], count: number) =>
  Array.from({ length: count }, () => arr[Math.floor(Math.random() * arr.length)])
