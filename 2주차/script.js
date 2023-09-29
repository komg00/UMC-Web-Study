let uname = document.getElementById("name");
let nickname = document.getElementById("nickname");
let email = document.getElementById("email");
let password = document.getElementById("password");
let passwordCheck = document.getElementById("passwordCheck");
let isValid = [false, false, false, false, false];
let button = document.getElementById("signUpBtn");
let modal = document.getElementById("modalWrap");
let closeButton = document.getElementById("closeButton");

uname.addEventListener("keyup", function () {
  let nameError = document.getElementById("nameError");
  if (uname.value === "") {
    nameError.innerHTML = "필수 입력 항목입니다!";
    nameError.style.color = "red";
    isValid[0] = false;
  } else {
    nameError.innerHTML = "멋진 이름이네요!";
    nameError.style.color = "green";
    isValid[0] = true;
  }
  checkSignUpButton();
});

nickname.addEventListener("keyup", function () {
  let nicknameError = document.getElementById("nicknameError");
  if (nickname.value.length < 2 || nickname.value.length > 5) {
    nicknameError.innerHTML = "닉네임은 2~5글자로 구성해주세요!";
    nicknameError.style.color = "red";
    isValid[1] = false;
  } else {
    nicknameError.innerHTML = "멋진 닉네임이군요!";
    nicknameError.style.color = "green";
    isValid[1] = true;
  }
  checkSignUpButton();
});

email.addEventListener("keyup", function () {
  let emailError = document.getElementById("emailError");
  if (!(email.value.includes("@") && email.value.includes(".com"))) {
    emailError.innerHTML = "올바른 메일 형식이 아닙니다!";
    emailError.style.color = "red";
    isValid[2] = false;
  } else {
    emailError.innerHTML = "올바른 메일 형식입니다!";
    emailError.style.color = "green";
    isValid[2] = true;
  }
  checkSignUpButton();
});

password.addEventListener("keyup", function () {
  let passwordError = document.getElementById("passwordError");
  let passwordPattern =
    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordPattern.test(password.value)) {
    passwordError.innerHTML = "영어+숫자+특수문자를 조합하여 작성해주세요.";
    passwordError.style.color = "red";
    isValid[3] = false;
  } else {
    document.getElementById("passwordError").innerHTML =
      "안전한 비밀번호입니다!";
    passwordError.style.color = "green";
    isValid[3] = true;
  }
  checkSignUpButton();
});

passwordCheck.addEventListener("keyup", function () {
  let passwordCheckError = document.getElementById("passwordCheckError");
  if (password.value !== passwordCheck.value) {
    passwordCheckError.style.color = "red";
    passwordCheckError.innerHTML = "비밀번호가 일치하지 않습니다.";
    isValid[4] = false;
  } else {
    passwordCheckError.innerHTML = "비밀번호가 일치합니다.";
    passwordCheckError.style.color = "green";
    isValid[4] = true;
  }
  checkSignUpButton();
});

function checkSignUpButton() {
  let hasErrors = true;
  for (let i = 0; i < isValid.length; i++) {
    if (isValid[i] === false) {
      hasErrors = false;
      break;
    }
  }
  if (!hasErrors) {
    button.style.backgroundColor = "rgba(0, 0, 0, 0.17)";
  } else {
    button.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  }
  console.log(hasErrors);
}

button.addEventListener("click", function () {
  if (button.style.backgroundColor === "rgba(0, 0, 0, 0.7)") {
    modal.style.display = "flex";
  }
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});
