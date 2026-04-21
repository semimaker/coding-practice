console.log("JS 연결됨");
// 로그인 기능
function login() {
    const user = document.getElementById("user").value;
    const pw = document.getElementById("pw").value;

    if(user === "adlwoals23" && pw === "dlwoals@0223") {
        document.querySelector(".login-box").style.display = "none";
        document.getElementById("main").classList.remove("hidden");
    } else {
        alert("로그인 실패");
    }
}
// 계산기
let expression = "";

function calc(value) {
    expression += value;
    document.getElementById("calc-display").value = expression;
}

function result() {
    try {
        expression = eval(expression).toString();
        document.getElementById("calc-display").value = expression;
    } catch {
        alert("계산 오류");
    }
}

function clearCalc() {
    expression = "";
    document.getElementById("calc-display").value = "";
}
