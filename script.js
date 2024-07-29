function registerWindow() {
    console.log("registerWindow");
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
    console.log("loginWindow");
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