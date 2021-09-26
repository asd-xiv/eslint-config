export const sum = (...params) => {
  const nanItemIndex = params.findIndex(
    item => typeof item !== "number" || Number.isNaN(item)
  )

  if (nanItemIndex !== -1) {
    throw new TypeError(
      `[sum] one of the provided parameters is not a number (index: ${nanItemIndex} value: "${params[nanItemIndex]}")`
    )
  }

  return params.reduce((acc, item) => acc + item, 0)
}
