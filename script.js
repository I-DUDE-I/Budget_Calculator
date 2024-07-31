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
        emailReg = false
        j =1
        for(let i in localStorage) {
            if (j > localStorage.length) {
                break
            }
            if(JSON.parse(localStorage.getItem(i)).EMAIL == document.getElementById("registerEmail").value){
                emailReg = true
            }
            j += 1
        }
        if(emailReg) {
            alert("Email already registered")
            document.getElementById("registerEmail").value = ""
        }
        else if (document.getElementById("registerUsername").value in localStorage) {
            alert("Username already taken")
            document.getElementById("registerUsername").value = ""
        }
        else {
            array = {
                EMAIL: document.getElementById("registerEmail").value,
                PASSWORD : document.getElementById("registerPassword").value,
                EXPENSEamount: [],
                EXPENSEtype:[],
                EXPENSEtime: [],
                EXPENSEbalance: [],
                INCOMEamount: [],
                INCOMEtype:[],
                INCOMEbalance:[],
                INCOMEtime:[],
                BALANCE:0
            }
            localStorage.setItem(document.getElementById("registerUsername").value,JSON.stringify(array))
            alert("User registered successfully")
            document.getElementById("registerUsername").value = ""
            document.getElementById("registerEmail").value = ""
            document.getElementById("registerPassword").value = ""
        }
    }
}


function login() {
    user = ""
    if (document.getElementById("loginUsername").value == "" || document.getElementById("loginPassword").value == "") {
        alert("Fill all the empty fields")
    }
    else if(document.getElementById("loginUsername").value in localStorage) {
        if (JSON.parse(localStorage.getItem(document.getElementById("loginUsername").value)).PASSWORD == document.getElementById("loginPassword").value) {
            window.location = "./dashboard/index.html" 
            user = document.getElementById("loginUsername").value
            localStorage.setItem(",.12@" ,user)
        }
        else {
            alert("Incorrect Password")
            document.getElementById("loginPassword").value = ""
        }
    }
    else{
        alert("Invalid username")
        document.getElementById("loginUsername").value = ""
    }
}
function clearr() {
    localStorage.clear()
}

function logout() {
    localStorage.removeItem(",.12@")
    window.location="../index.html"
}

function addIncome() {
    if (document.getElementById("incomeAmount").value == "" || document.getElementById("incomeType").value == "" ) {
        alert("Fill the empty fields")
    }
    else{
        user = localStorage.getItem(",.12@")
        array = JSON.parse(localStorage.getItem(user))
        balance = Number(array.BALANCE)
        balance += Number(document.getElementById("incomeAmount").value)
        array.INCOMEamount.push(document.getElementById("incomeAmount").value)
        array.INCOMEtype.push(document.getElementById("incomeType").value)
        array.BALANCE = balance
        totalBalance.innerHTML = `Rs ${balance}/-`
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        let dateObj = new Date();

        let month = String(dateObj.getMonth() + 1)
            .padStart(2, '0');
            
        let day = String(dateObj.getDate())
            .padStart(2, '0');

        let year = dateObj.getFullYear();

        let output = day + '/' + month + '/' + year + " " + hours + ":" + minutes + ":" + seconds

        array.INCOMEtime.push(output)
        array.INCOMEbalance.push(balance)

        localStorage.setItem(user,JSON.stringify(array))

        htmlContent = `
            <tr>
                <td>${document.getElementById("incomeType").value}</td>
                <td>${document.getElementById("incomeAmount").value}</td>
                <td>${balance}</td>
                <td>${output}</td>
            </tr>
        `
        tbodyIncome.innerHTML += htmlContent
        document.getElementById("incomeAmount").value =""
        document.getElementById("incomeType").value =""
    }
}

function addExpense() {
    if (document.getElementById("expenseAmount").value == "" || document.getElementById("expenseType").value == "" ) {
        alert("Fill the empty fields")
    }
    else{
        user = localStorage.getItem(",.12@")
        array = JSON.parse(localStorage.getItem(user))
        balance = Number(array.BALANCE)
        balance -= Number(document.getElementById("expenseAmount").value)
        array.EXPENSEamount.push(document.getElementById("expenseAmount").value)
        array.EXPENSEtype.push(document.getElementById("expenseType").value)
        array.BALANCE = balance
        totalBalance.innerHTML = `Rs ${balance}/-`
        expense = array.EXPENSEamount.reduce((a,b) => Number(a) + Number(b),0)
        totalExpense.innerHTML = `Rs ${expense}/-`
        let now = new Date();
        let hours = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();

        let dateObj = new Date();

        let month = String(dateObj.getMonth() + 1)
            .padStart(2, '0');
            
        let day = String(dateObj.getDate())
            .padStart(2, '0');

        let year = dateObj.getFullYear();

        let output = day + '/' + month + '/' + year + " " + hours + ":" + minutes + ":" + seconds

        array.EXPENSEtime.push(output)
        array.EXPENSEbalance.push(balance)

        localStorage.setItem(user,JSON.stringify(array))

        htmlContent = `
            <tr>
                <td>${document.getElementById("expenseType").value}</td>
                <td>${document.getElementById("expenseAmount").value}</td>
                <td>${balance}</td>
                <td>${output}</td>
            </tr>
        `
        tbodyExpense.innerHTML += htmlContent
        document.getElementById("expenseAmount").value =""
        document.getElementById("expenseType").value =""
    }
}

function clearData() {
    user = localStorage.getItem(",.12@")
    array = JSON.parse(localStorage.getItem(user))
    array.EXPENSEamount = []
    array.EXPENSEbalance = []
    array.EXPENSEtype = []
    array.EXPENSEtime = []
    array.BALANCE = 0
    array.INCOMEamount = []
    array.INCOMEbalance = []
    array.INCOMEtime = []
    array.INCOMEtype = []
    if (confirm("Are you sure you want to clear the entire data")) {
        localStorage.setItem(user,JSON.stringify(array))
        location.reload()
    }
    else{
        console.log(1);
    }
}