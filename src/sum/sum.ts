/**
 * Add together all items inside an array
 *
 * @throws {TypeError} If any item is not a number
 *
 * @example
 * sum([1, 3, -1])
 * // => 3
 */

type SumType = (input?: number[]) => number

export const sum: SumType = (input = []) => {
  const firstNaNItemIndex = input.findIndex(
    item => typeof item !== "number" || Number.isNaN(item)
  )

  if (firstNaNItemIndex !== -1) {
    throw new TypeError(
      `[sum] one of the provided parameters is not a number (index: ${firstNaNItemIndex} value: "${input[firstNaNItemIndex]}")`
    )
  }

  return input.reduce((acc, item) => acc + item, 0)
}
