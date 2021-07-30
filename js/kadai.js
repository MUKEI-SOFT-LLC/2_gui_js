// 計算する。
function keisan_suru() {
    // TODO 3. 数値が入力されていなかったら、alertを表示して処理を終了する。
    const seisu1 = parseInt(document.getElementById('seisu_1').value);
    const seisu2 = parseInt(document.getElementById('seisu_2').value);
    const enzanshi = document.getElementById('enzanshi').value;
    let kotae;
    if (enzanshi === '+') {
        kotae = seisu1 + seisu2;
    } else if (enzanshi === '-') {
        kotae = seisu1 - seisu2;
    } else if (enzanshi === '*') {
        kotae = seisu1 * seisu2;
    } else {
        kotae = seisu1 / seisu2;
    }
    // 答えを表示する。
    document.getElementById('kotae').innerText = kotae;

    // TODO 2. kotaeが３の倍数の場合、計算機を爆発させる。それ以外だったら計算機を普通に戻すためにリセットする。
}

// 計算機を爆発させる。
function bakuhatsu() {
    const keisanBox = document.getElementById('keisan-box');
    keisanBox.setAttribute('class', 'keisan-box-bakuhatsu');
    const kotaeLabel = document.getElementById('kotae');
    kotaeLabel.setAttribute('class', 'kotae-bakuhatsu');
}

// 計算機をリセットする。
function reset() {
    const keisanBox = document.getElementById('keisan-box');
    keisanBox.setAttribute('class', 'keisan-box-futuu');
    const kotaeLabel = document.getElementById('kotae');    
    kotaeLabel.setAttribute('class', 'kotae-futuu');
}