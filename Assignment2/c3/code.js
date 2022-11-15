function removelength(){

    let pText = document.getElementById("pText").value;
    let pNum = document.getElementById("pNum").value;

    let cut = pText.substr(pNum);

    paragraph.innerHTML = cut;

}

document.getElementById("pNum").addEventListener("blur", removelength)