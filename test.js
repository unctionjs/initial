/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type */
import {test} from "tap"

import initial from "./"

test(({same, end}) => {
  same(
    initial(["a", "b", "c"]),
    ["a", "b"]
  )

  end()
})

test(({same, end}) => {
  same(
    initial("abc"),
    "ab"
  )

  end()
})
