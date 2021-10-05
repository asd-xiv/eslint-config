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
  let output = 0

  for (const [index, item] of input.entries()) {
    const isItemNaN = typeof item !== "number" || Number.isNaN(item)

    if (isItemNaN) {
      throw new TypeError(
        `[sum] item not a number (index: ${index} value: "${item}")`
      )
    }

    output = output + item
  }

  return output
}
