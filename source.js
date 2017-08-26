/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import dropLast from "@unction/droplast"

export default function initial (orderedList: ArrayType | string): ArrayType | string {
  return dropLast(1)(orderedList)
}
