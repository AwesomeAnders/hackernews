import { setup, createPage } from '@nuxt/test-utils/e2e'
import { describe, expect, test } from 'vitest'

await setup()

describe('Page tests', async () => {
  const page = await createPage('')

  test('Stories appear in ascending order by score', async () => {
    const scoreElements = await page.getByTestId('score').allTextContents()

    const numericScores = scoreElements.map((score) => {
      const numericValue = parseInt(score.replace('Article score:', ''))
      expect(numericValue).toBeGreaterThanOrEqual(0)
      return numericValue
    })

    const sortedScores = [...numericScores].sort((a, b) => a - b)
    expect(numericScores).toEqual(sortedScores)
  })
})
