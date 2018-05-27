/* eslint-disable flowtype/require-parameter-type, flowtype/require-return-type, no-magic-numbers */
import dropLast from "@unction/droplast";
export default function initial(orderedList) {
  return dropLast(1)(orderedList);
}
