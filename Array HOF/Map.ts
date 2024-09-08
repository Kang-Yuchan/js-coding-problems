Array.prototype.customMap = function (callbackFn, thisArg) {
  const len = this.length;
  const result = new Array(len); // 対象の配列の数と同じ長さの空配列を作る

  for (let i = 0; i < len; i++) {
    const val = this[i]; // それぞれの配列の要素がi in thisでインデックスとして存在しているかをチェックしてスパース配列の時も対応
    const calculatedVal = callbackFn.call(thisArg, val, i, this); // .callで各要素への処理を定義しているコールバック関数を呼び出す
    if (i in this) {
      result[i] = calculatedVal; // 存在しているインデックスの要素のところだけ処理された要素が入るようになる
    }
  }

  return result;
};
