//javascript : html(뼈), CSS(겉피부), JS(내부근육)
const wrapperBox = document.getElementByld("wrapper");
const inputFieldGroup = document.getElementsByClassName("inputGroup");
//console.log(`inputFieldGroup = ${inputFieldGroup}`);
const allInputs =  document.querySelectorSelector("input");/*하단부터는 다 변하는 데이터*/
const userNickname = document.getElementByld("nickname");
const userEmail = document.getElementByld("email");
const userPassword = document.getElementByld("userPassword");
const ConfirmPassword= document.getElementByld("ConfirmPassword");
const userPhone = document.getElementByld("phone");
const registrationForm = document.getElementByld("registrationForm");
//(이상 없음.)

const updateHelperText = (input,message,isVaild)=>{
    const inputGroup = input.parentElement;//한개의 input태그의 부모 태그에 접근하는 것.  
    console.log(userEmail.parentElement);
    //예시로,input태그를 저희가 userEmail로 접근하였다고 하면, 아래 태그들의 최상위 태그를 의미한다.
    //<div class = "inputGroup">
    //<label for = "userEmail"> 이메일 주소 </label>
    //<input type = "email"
    const helperText = inputGroup.getElementsByClassName("helperText")[0];
    //=> 알림.


updateHelperText = inputGroup.getElementsByClassName("HelperText")[0];
//=>알림
    if(isVaild == true){
        //usVaild에는 boolean데이터 true/false
        inputGroup.classList.remove('invaild');
        inputGroup.classList.add('vaild');
        helperText.style.visibility = 'hidden';
    }

    if(isVaild == false){
        inputGroup.classList.remove('vaild');
        inputGroup.classList.add('invaild');
        helperText.style.visibility = 'visible';
        helperText.innerText = message;
    }
};
//알림이 사용되는 것까지는 설정을 하는데, 언제 사용이 되어야 하는지는 조건을 설정하지 않음.
//입력필드가 비어있는지 확인하는 함수기능
const checkEmptyInput = (input)=>{
    if(input.value.trim() === ''){

        updateHelperText(input,'값을 입력해주세요',false);
        return false;
    }else{
        updateHelperText(input,"",true);
    }
}

const validateEmailFormat = (input)=>{
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    if(emailPattern.test(input.value.trim())==true)
    {
        updateHelperText(input,"",true);
        return true;
    }else{
        updateHelperText(input,"유효한 이메일 주소를 입력부탁드립니다.",false);
    }
    //정규식 => 마법, 이메일에 골뱅이가 안 들어가거나,.com.co.kr 표현이 안 될떄
    //검사로 하여금 T or F 리턴.
}
//비밀번호 강도 설정
const checkPasswordStrength = (password) =>{
    const strongPattern = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.[0-9]).{8,15}$/;
    if(stringPatter.test(password.value)== true){
        updateHelperText(password,"비밀번호 강도 :강함",true);
        return true;
    }else{
        updateHelperText(password,"비밀번호는 8자 이상이어야 하며, 대문자, 소문자, 특수문자를 포함하여야 합니다.")
        return false;
    }
}

//비밀번호와 확인 입력칸이 같은 지 확인.
const validatePasswordStrength = (passwordInput, confirmInput) =>{
    if(passwordInput.value !== confirmInput.value){
        updateHelperText(confirmInput,"비밀번호가 일치하지 않습니다.",false);
        return false;
    }else{
        updateHelperText(confirmInput,"",true);
        return true;
    }
}

//전화번호가 올바른 형식인지 확인하는 함수
const validatePhoneNumber =(input) =>{
    const phonePattern =/^(01[016789]{1})-?[0-9]{3,4}-?[0-9]{4}$/;
    if(phonePattern.test(input.value.trim())==true){
        updateHelperText(input,"",true);
        return true;
    }else{
        updateHelperText(input,"유효한 전화번호를 입력해주세요.(예:010-1234-1234)")
        return false;
    }
}

const validateForm =()=>{
    const isNicknameVaild = checkEmptyInput(userNickname);//boolean값으로 에러 검사시 문제가 없으면 true -> false 전환
    const isEmailVaild = validateEmailFormat(userEmail);//boolean값으로 에러 검사시 문제가 없으면 true -> false 전환
    const isPasswordStrong = checkPasswordStrength(userPassword);
    const isPasswordMatch = validatePasswordMatch(userPassword,confirmPassword);
    const isPhoneVaild = vaildatePhoneNumber(userPhone);
    //모든 검사를 해서 통과해야 회원가입버튼을 눌렀을 떄 회원가입이 진행되게끔 전환.
    return isNicknameVaild&isEmailVaild&&isPasswordStrong&&isPasswordMatch&&isPhoneVaild;
}//모든 조건들 isNickmaneVaild이런변수들은 전부 현재 boolean데이터를 가지고 있고 전부 true가 되어야 값을 반환한다.

registrationForm.addEventListener('submit',(e)=>{
    //폼안의 submit타입의 버튼을 눌렀을 때 이벤트 발생. 기능등이 발생하겠지.
    //근데, 여기서 그런 버튼을 눌렀을 떄 발생하는 기능들을 압축하여 객체[key:value]기능들을 모아놓은 것들을 e라고 한다.
    e.preventDefault();//유효성검사

    //폼태그에서 submit버튼을 누르면 자동수행 기능. 폼 제출 동작을 먹는 것.
    //폼제출동작은 자동수행되는 기능이 있는데, 새로고침이다.인풋태그의 에러확인(유효성검사)이 불가해진다.

    if(validateForm() == true){
        console.log("모든 필드가 유효합니다. 즉, 사용이 가능합니다.");
    }else{
        console.log("위 필드 중 일부분이 에러가 터집니다. 유효성검사 실패.")
    }
   
    console.log(e);
})

//각 input태그 입력을 눌렀을 때, 테두리 색깔이나 알림이 뜨게 하고 싶다.
document.querySelectorAll("input"),forEach(input =>{
    //forEach는 배열안의 데이터들을 각각 뽑아오고 싶을 떄 이용합니다.
    input.addEventListener('input',()=>{
        switch(input.id){
            case 'nickname':
                checkEmptyInput(input);
                break;
            case 'email':
                validateEmailFormat(input);
                break;
            case 'userPassword':
                checkPasswordStrength(input);
                break;    
            case 'confirmPassword':
                validatePasswordMatch(input[2],input[3]);
                break;
            case 'phone':
                vaildatePhoneNumber(input);123
                break

        }
    })
})

//let, var(변수), const(상수) 초기화
//null = 0이라는 데이터도 없는 '빈 데이터'
//undefined : 변수 선언 그러나 값은 없음(int(let) a;)
//형 변환 : 암시적 형변환(데이커 크기 자동으로 확장), 명시적 형변환.-> 숫자를 문자로, 문자를 숫자로.....
//조건식 - 연산식을 통해 T/F 도출. 조건문: 문장의 문, S + V(조건 + 문장 형식.)
//"hello${age}" 작성시 'hello,37' 결과 산출. 
//배열 : 순서가 있는 데이터의 리스트, 순서가 있는 데이터들을 한 줄로 나열하여 일정한 순서대로 한줄로 표현한 것. 대괄호로 표기.
//명시적 형변환 : 데이터 크기를 강제적으로 축소 변환 가능, 데이터 타입을 더 낮은 쪽으로 강제 축소.