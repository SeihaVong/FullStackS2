function capEach(stringInput){

    var splitString = stringInput.split(" ");

    for (let i = 0; i < splitString.length; i++) {
        splitString[i] = splitString[i].charAt(0).toUpperCase() + splitString[i].substr(1);
    }

    return splitString.join(" ");
}

document.getElementById("test").innerHTML = capEach("in the future, i want to be a doctor.");