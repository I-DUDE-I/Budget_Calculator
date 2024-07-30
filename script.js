function registerWindow() {
    main.innerHTML = `
    <div class="content" id="reg">
        <div class="topBar1"></div>
        <div class="topBar">
            <div class="div1"></div>
            <div class="login1">
                <div class="login" onclick="loginWindow()">Login</div>
            </div>
            <div class="register1">
                <div class="register">Register</div>
            </div>
            <div class="div2">
                <div class="div3"></div>
            </div>
        </div>
        <div class="topBar2"></div>
        <div class="form">
            <input type="text" placeholder="Username" id="registerUsername">
            <input type="email" placeholder="Email" id="registerEmail">
            <input type="password" placeholder="Password" id="registerPassword">
            <button class="btn btn-outline-light" onclick="register()">Register</button>
        </div>
    </div>
    `
}

function loginWindow() {
    main.innerHTML = `
        <div class="content" id="log">
            <div class="topBar1"></div>
            <div class="topBar">
                <div class="div1"></div>
                <div class="login1">
                    <div class="login">Login</div>
                </div>
                <div class="register1">
                    <div class="register" onclick="registerWindow()">Register</div>
                </div>
                <div class="div2"></div>
            </div>
            <div class="topBar2"></div>
            <div class="form">
                <input type="text" placeholder="Username" id="loginUsername">
                <input type="password" placeholder="Password" id="loginPassword">
                <button class="btn btn-outline-light" onclick="login()">Login</button>
            </div>
        </div>
    `
}

function register() {
    if (document.getElementById("registerUsername").value == "" || document.getElementById("registerEmail").value == "" || document.getElementById("registerPassword").value == "") {
        alert("Fill all the empty fields")
    }
    else {
        localStorage.setItem("username",document.getElementById("registerUsername").value)
        localStorage.setItem("email",document.getElementById("registerEmail").value)
        localStorage.setItem("password",document.getElementById("registerPassword").value)
        alert("User registered successfully")
        document.getElementById("registerUsername").value = ""
        document.getElementById("registerEmail").value = ""
        document.getElementById("registerPassword").value = ""
    }
}

function login() {
    if (document.getElementById("loginUsername").value == "" || document.getElementById("loginPassword").value == "") {
        alert("Fill all the empty fields")
    }
    else if(document.getElementById("loginUsername").value != localStorage.getItem("username") || document.getElementById("loginPassword").value != localStorage.getItem("password")) {
        alert("Invalid user credentials")
    }
    else{
        alert("success")
    }
    window.location = "./dashboard/index.html"
}