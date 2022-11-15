function formValidation(){

    let memNum = parseInt(document.getElementById("memberNumber").value);
    let passWord = document.getElementById("pass").value;

    if (!isNaN(memNum)){
        if (passWord.length > 4)
        {
            alert("All validation is correct");
            return true;
        }
        else
        {
            alert("Password must be longer than 4 characters !");
            memNum.focus();
            return false;
        }
    }
    else{
        
        alert("Member number must be a number!");
        passWord.focus();
        return false;
    }

}