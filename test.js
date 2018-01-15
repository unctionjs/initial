/* eslint-disable flowtype/require-parameter-type */
import {test} from "tap"

import initial from "./"

test("Array", ({same, end}) => {
  same(
    initial(["a", "b", "c"]),
    ["a", "b"]
  )

  end()
})

test("String", ({same, end}) => {
  same(
    initial("abc"),
    "ab"
  )

  end()
})
