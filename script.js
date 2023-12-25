const loggedkey = localStorage.getItem("loggedkey")
greet = document.getElementById("greet")
greet.innerHTML = `Welcome ${loggedkey}`

// let username = document.getElementById('username').value;
// username = localStorage.getItem(userReg.username)
// console.log(username)

// greet.innerHTML = `welcome ${username}`

function register() {
  window.location = "./register.html"
}

function login() {
  window.location = "./login.html"
}

function getstarted() {
  window.location = "./register.html"
}

// USERNAME AS KEY

// function registerUser(){

//         let acno = document.getElementById('acnumber').value;
//         let username = document.getElementById('username').value;
//         let password = document.getElementById('password').value;

//         let user = {
//             acno: acno,
//             username: username,
//             password: password,
//             balance:0
//         };

//         if (acno === "" || username === "" || password === "") {
//             alert("Please fill all fields");
//         } else {
//             if (user.acno in localStorage) {
//                 alert("Account already exists!");
//             } else {
//                 localStorage.setItem(user.username, JSON.stringify(user));
//                 alert("Registration successful!");
//                 window.location='./login.html'
//             }
//         }
//     }

// accno as key


function registerUser() {
  let acno = document.getElementById("acnumber").value
  let username = document.getElementById("username").value
  let email = document.getElementById("email").value
  let pswd = document.getElementById("password").value

  let userReg = {
    acno: acno,
    username: username,
    password: pswd,
    balance: 0,
  }

  if (acno == "" || username == "" || password == "" || email == "") {
    alert("All Fields are required")
  } else {
    if (userReg.acno in localStorage) {
      alert("Account Already Exists! Please Login.")
    } else {
      localStorage.setItem(userReg.acno, JSON.stringify(userReg))
      alert("Registered Successfully!")
      window.location = "./login.html"
    }
  }
}

// ACNO AS KEY IN LOGIN

function loginUser() {
  let accNo = document.getElementById("acnumber1").value
  let pass = document.getElementById("password1").value
  let username = document.getElementById("username1").value

  if (accNo == "" || pass == "" || username == "") {
    alert("Empty Field Found!")
  } else {
    if (accNo in localStorage) {
      let user = JSON.parse(localStorage.getItem(accNo))
      if (user.password === pass) {
        alert("Logged In Successfully!")
        // added username here
        localStorage.setItem("loggedkey", username)
        window.location = "./home.html"
      } else {
        alert("Wrong Password!")
        document.getElementById("password1").value = ""
      }
    }
  }
}

// username as key

// function loginUser(){
//     // let key=acnumber1.value;
//     // console.log(key);

//     let username = username1.value;
//     console.log(username1);
//     let key1=password1.value;
//     console.log(key1);

//     if(username==''||key1==''){
//         alert('Fields cannot be empty');
//     }else{
//         if(username in localStorage){
//             let data=JSON.parse(localStorage.getItem(username));
//             if(data.password===key1){
//                 localStorage.setItem('loggedObj',JSON.stringify(data));
//                 localStorage.setItem("loggedkey",username);

//                 alert("Login successful");
//                 window.location='./home.html';

//         }else{
//             alert("Invalid Password");
//             document.getElementById("password1").value="";
//         }
//     }else{
//         alert("User doesn't exist, PLease register")
//     }
// }
// }

// }
//     var userdata= JSON.parse(localStorage.getItem(key));
//     console.log(userdata);
// let username = document.getElementById("username").value
// localStorage.setItem("loggedkey", username)

// if (userdata == null) {
//     alert("No such Account");
//     } else {
//       if(userdata.acno===acnumber1.value && userdata.password===password1.value){
//         alert("Logged In Successfully")
//         window.location='./home.html';

// var userdata= JSON.parse(localStorage.getItem(key));

// document.getElementById('welcome').innerText=` hi ${userdata.username}`

//           }
//         }
// }

let amount = 0
// let withdraw=0;
let totalbalance = 0

function deposit() {
  amount = dep_amnt.value
  acno = dep_acnumber.value
  amount = Math.floor(amount)

  if (acno in localStorage) {
    accountDetails = JSON.parse(localStorage.getItem(acno))
    if (acno == accountDetails.acno && amount <= 0) {
      alert("Please enter a positive amount")
    } else {
      accountDetails.balance += amount

      localStorage.setItem(acno, JSON.stringify(accountDetails))

      alert("Deposit Successful")
      document.getElementById("balance").innerHTML = `<div style="color:green; font-weight:500">Your current balance is ${accountDetails.balance}</div>`
    }
  } else {
    alert("incorrect account number")
  }
}

function withdraw() {
  amount = with_amnt.value
  acno = with_acnumber.value
  amount = Math.floor(amount)

  if (acno in localStorage) {
    accountDetails = JSON.parse(localStorage.getItem(acno))
    if (acno == accountDetails.acno && amount <= 0) {
      alert("Please enter a positive amount")
    } else {
      accountDetails.balance -= amount
      localStorage.setItem(acno, JSON.stringify(accountDetails))

      alert("withdraw Successful")
      document.getElementById("with_balance").innerHTML = `<div style="color:red; font-weight:500">Your current balance is ${accountDetails.balance}</div>`
    }
  } else {
    alert("incorrect account number")
  }
}

function logout() {
  localStorage.clear()
  window.location.href = "index.html"
}


