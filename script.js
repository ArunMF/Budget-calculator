function register(){
    username=uName.value;
    accountno=accNo.value;
    pswd=psword.value;

    accountDet={
        username,
        accountno,
        pswd
    }

    if(accNo in localStorage){
        alert("Account number already present.");
    }
    else{
        localStorage.setItem(accountno,JSON.stringify(accountDet));
        alert("Account registered successfully.");
        window.location="./Login.html";
        regForm.reset();
    }
}

// var logAccNo=null;
function login(){
    logAccNo=logAcc.value;
    logPsword=logPswd.value;

    if (logAccNo in localStorage) {
        accountDet=JSON.parse(localStorage.getItem(logAccNo))
        if (logPsword==accountDet.pswd) {
            alert("Login success");
            window.location="./home.html";
            // console.log(logAccNo);
        } else {
            alert("Login failed.")
        }
    }
    else{
        alert("Account not present.")
    }
}


function homeFunc(){
    var account=JSON.parse(localStorage.getItem(12345));
    console.log(account.username);
    welcUser.innerHTML=`Welcome ${account.username}`;
    console.log("Home page started.");
}


function addIncome(){
    incDescription=incomeDesc.value;
    incAmount=incomeAmt.value;
    savingsAmt.value+=incAmount;
    console.log(incDescription,incAmount);
    // income={};
    incomeDet={
        incDescription,
        incAmount
    }
    localStorage.setItem("income",JSON.stringify(incomeDet));
    console.log();
    incForm.reset();
    incStorage=JSON.parse(localStorage.getItem("income"));
    console.log(incStorage);
    htmldata=`<tr>
    <td class="text-success">${incStorage.incDescription}</td>
    <td class="text-success">${incStorage.incAmount}</td>
    </tr>`
    incHistory.innerHTML+=htmldata;
}

function addExpense(){
    expDescription=expenseDesc.value;
    expAmount=expenseAmt.value;
    savingsAmt.value-=expAmount;
    console.log(expDescription,expAmount);
    expenseDet={
        expDescription,
        expAmount
    }
    localStorage.setItem("expense",JSON.stringify(expenseDet));
    expStorage=JSON.parse(localStorage.getItem("expense"));
    console.log(expStorage);
    htmldata1=`<tr>
    <td class="text-danger">${expStorage.expDescription}</td>
    <td class="text-danger">${expStorage.expAmount}</td>
    </tr>`
    expHistory.innerHTML+=htmldata1;
    console.log();
    expForm.reset();
}