export const getRandomNumbers = (arr: number[], count: number) =>
  Array.from({ length: count }, () => arr[Math.floor(Math.random() * arr.length)])
