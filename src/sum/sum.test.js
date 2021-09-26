import { describe, Try } from "riteway"
import { sum } from "./sum.js"

describe("sum: add any number of parameters", async assert => {
  assert({
    given: "no parameters",
    should: "return 0",
    actual: sum(),
    expected: 0,
  })

  assert({
    given: "multiple parameters",
    should: "return the correct sum",
    actual: sum(2, 0, -1),
    expected: 1,
  })

  assert({
    given: "a parameter is not a number",
    should: "throw",

    // eslint-disable-next-line new-cap
    actual: Try(sum, 1, "3").toString(),
    expected: `TypeError: [sum] one of the provided parameters is not a number (index: 1 value: "3")`,
  })
})
