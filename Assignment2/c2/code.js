function upperCase(){
    let text = document.getElementById("textInput");
    text.value = text.value.toUpperCase();

    letter.innerHTML = text.value;
}

document.getElementById("textInput").addEventListener("blur",upperCase);