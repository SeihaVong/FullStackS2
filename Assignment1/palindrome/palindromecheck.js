
function palindromeCheck(){

    var pa = document.getElementById("paInput").value;

    const paLen = pa.length;

    for (let i = 0; i < paLen/2 ; i++){
        if(pa[i] !== pa[paLen - 1 -i]){
            document.getElementById("output").innerHTML = "It is not palindrome.";
        }else{
            document.getElementById("output").innerHTML = "It is palindrome.";
        }
    }

}

document.getElementById("checkPa").addEventListener("click", palindromeCheck);