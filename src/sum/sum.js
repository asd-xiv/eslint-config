export const sum = (...params) => {
  const firstNaNItemIndex = params.findIndex(
    item => typeof item !== "number" || Number.isNaN(item)
  )

  if (firstNaNItemIndex !== -1) {
    throw new TypeError(
      `[sum] one of the provided parameters is not a number (index: ${firstNaNItemIndex} value: "${params[firstNaNItemIndex]}")`
    )
  }

  return params.reduce((acc, item) => acc + item, 0)
}
