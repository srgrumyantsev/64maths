function retrieveRecords(){ //retrieves items in the localStorage
    var final-score = localStorage.getItem('ged-score'); //searches for the key in localStorage
    var paragraph = document.createElement("p");
    var infor = document.createTextNode(records);
    paragraph.appendChild(infor);
    var element = document.getElementById("retrieve");
    element.appendChild(paragraph);
}
