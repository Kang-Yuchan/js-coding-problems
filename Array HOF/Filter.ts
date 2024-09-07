Array.prototype.customFilter = function (callbackFn, thisArg) {
  const len = this.length; // thisで対象となるArrayを取得
  const result = [];

  for (let i = 0; i < len; i++) {
    const iValue = this[i];

    // それぞれの配列の要素がi in thisでインデックスとして存在しているかをチェックしてスパース配列の時も対応
    // .callでフィルタリング条件をて定義しているコールバック関数を呼び出し、配列の要素が条件を満たしているかをチェック
    if (i in this && callbackFn.call(thisArg, iValue, i, this)) {
      result.push(iValue);
    }
  }

  return result;
};
