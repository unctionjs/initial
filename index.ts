/* eslint-disable no-magic-numbers */
import dropLast from "@unction/droplast";
import {OrderedEnumerableType} from "./types";

export default function initial<A> (orderedList: OrderedEnumerableType<A>): OrderedEnumerableType<A> {
  return dropLast(1)(orderedList);
}
