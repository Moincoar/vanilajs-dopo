const headTitle = document.getElementById("head--title");
const loginForm = document.getElementById("login");
const loginName = document.getElementById("login__name");

let username = localStorage.getItem("username");

const changeHeader = (username) => {
    headTitle.innerText = `Hello ${username}`;
};

const submitLoginForm = (event) => {
    event.preventDefault();
    username = loginName.value;
    localStorage.setItem("username", username);
    changeHeader(username);
    loginName.value = "";
};

if (username === null) {
    loginForm.addEventListener("submit", submitLoginForm);
} else {
    changeHeader(username);
}
