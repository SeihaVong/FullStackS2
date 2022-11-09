function reverse(){

    var num = document.getElementById("number").value;
    document.getElementById("numberReverse").innerText = "Output : " + num.split("").reverse().join("");

}


document.getElementById("clickBtn").addEventListener("click", reverse);