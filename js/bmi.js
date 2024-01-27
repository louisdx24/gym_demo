const userNameE1 = document.querySelector("#username");
const heightE1 = document.querySelector("#height");
const weightE1 = document.querySelector("#weight");
const bmiE1 = document.querySelector("#bmi");
const commentE1 = document.querySelector("#comment");

function cleanForm() {
    userNameE1.value = "";
    heightE1.value = "";
    weightE1.value = "";
    bmiE1.innerText = "BMI";
    commentE1.innerText = "體位";
}


function getBMI(height, weight) {
    let bmi = weight / (height / 100) ** 2;
    if (isNaN(bmi)) {
        return ("數值錯誤");
    }
    return bmi.toFixed(2);
}

function calBMI() {
    let height = heightE1.value;
    let weight = weightE1.value;

    if (height == "" || weight == "") {
        alert("輸入不能為空");
        return;
    }

    //取得 BMI
    let bmi = getBMI(height, weight);
    //取得評語
    let comment;
    if (bmi < 18.5) {
        comment = "體重過輕";
    } else if (bmi < 24) {
        comment = "正常範圍";
    } else if (bmi < 27) {
        comment = "過重";
    } else if (bmi < 30) {
        comment = "輕度肥胖";
    } else if (bmi < 35) {
        comment = "中度肥胖";
    } else {
        comment = "重度肥胖";
    }

    console.log(bmi, comment);

    bmiE1.innerText = "BMI:" + bmi;
    commentE1.innerText = comment;
}