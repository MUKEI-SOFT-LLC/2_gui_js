// 計算する。
function keisan_suru() {

    const nyuryoku1 = document.getElementById('seisu_1').value;
    if (nyuryoku1 === '') {
        alert('整数１が入力されていません');
        return;
    }

    const nyuryoku2 = document.getElementById('seisu_2').value;
    if (nyuryoku2 === '') {
        alert('整数２が入力されていません');
        return;
    }

    const seisu1 = parseInt(nyuryoku1);
    const seisu2 = parseInt(nyuryoku2);
    const enzanshi = document.getElementById('enzanshi').value;
    let kotae;
    if (enzanshi === '+') {
        kotae = seisu1 + seisu2;
    } else if (enzanshi === '-') {
        kotae = seisu1 - seisu2;
    } else if (enzanshi === '*') {
        kotae = seisu1 * seisu2;
    } else {
        // セレクトボックスは４パターンしかないため、上記以外は「割り算」と判定する。
        kotae = seisu1 / seisu2;
    }
    // 答えを表示する。
    document.getElementById('kotae').innerText = kotae;
    
    if ((kotae % 3) === 0) {
        // 答えが０以外でかつ、３の倍数であれば爆発させる。
        bakuhatsu();
    } else {
        // それ以外ならリセットする。
        reset();
    }
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