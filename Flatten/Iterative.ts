import type { ArrayValue } from "./type";

export default function flatten(value: Array<ArrayValue>): Array<any> {
  const result: Array<any> = [];
  const copy = value.slice(); // 初期引数の配列のコピー [...value]でもいける

  // copyの中身がなくなるまでループ => 全ての要素が配列ではなくなってresultに格納された状態になるまでcopyの中を展開していく
  while (copy.length) {
    const el = copy.shift(); // 先頭の要素を抜き出し、copyは先頭の部分だけ減らされてる状態
    const isArrayEl = Array.isArray(el); // 抜き出した先頭の要素が配列かをArray.isArray(arg)で判別

    if (isArrayEl) {
      copy.unshift(...el); // もし要素が配列であれば、元の配列に要素をスプレッド演算子で配列である要素全体に1段配列要素を剥がして先頭に戻す
    } else {
      result.push(el); // 要素が配列でなければそのままresultに入れる
    }
  }

  return result;
}
