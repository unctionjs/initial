/* eslint-disable no-magic-numbers */
import dropLast from "@unction/droplast";

export default function initial<A> (orderedList: OrderedArray<A> | Set<A> | RecordType<unknown, A> | string): OrderedArray<A> | Set<A> | RecordType<unknown, A> | string {
  return dropLast(1)(orderedList);
}
