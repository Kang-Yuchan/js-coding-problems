import type { ArrayValue } from "./type";

export default function flatten(value: Array<ArrayValue>): Array<any> {
  return value.reduce(
    (acc, currValue) =>
      acc.concat(Array.isArray(currValue) ? flatten(currValue) : currValue),
    []
  ); // .reduce((累積値, 現在値) => 処理, 初期値)を利用して、初期値に空の配列から要素が配列であれば再起的にその要素を新たな対象の配列として呼び出し、累積値.concatによって展開された要素が累積値の配列と結合
}

console.log(flatten([1, 2, 3, [4, 5, [6]]]));
