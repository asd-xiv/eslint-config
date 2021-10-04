import test from "tape"
import { sum } from "./sum.js"

test("sum: add any number of parameters", t => {
  t.plan(3)

  t.equal(sum(), 0, "given [no parameter] should [return 0]")

  t.equal(
    sum([2, 0 - 1]),
    1,
    "given [multiple parameter] should [return the correct sum]"
  )

  t.throws(
    () => {
      // @ts-ignore-next
      sum([1, "3"])
    },
    {
      // @ts-ignore-next
      message: `[sum] one of the provided parameters is not a number (index: 1 value: "3")`,
    },
    "given [a parameter is not a number] should [trow]"
  )
})
