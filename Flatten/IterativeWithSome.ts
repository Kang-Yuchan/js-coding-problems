import type { ArrayValue } from "./type";

export default function flatten(value: Array<ArrayValue>): Array<any> {
  // 配列の要素を含んでるかどうかのチェックをして、配列の要素がなくなるまでループ
  while (value.some(Array.isArray)) {
    value = [].concat(...value); // arr.concat(arr2)は配列同士であるarrにarr2を結合させて新たな配列を返すメソッドで、この場合は元の配列から1回展開した配列になる
  }

  return value;
}
