/* eslint-disable flowtype/require-parameter-type */
import initial from "./index";

test("Array", () => {
  expect(initial(["a", "b", "c"])).toEqual(["a", "b"]);
});

test("String", () => {
  expect(initial("abc")).toEqual("ab");
});
