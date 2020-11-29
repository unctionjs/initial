/* eslint-disable no-magic-numbers */
import dropLast from "@unction/droplast";

export default function initial<A> (orderedList: OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string): OrderedArray<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string {
  return dropLast(1)(orderedList);
}
