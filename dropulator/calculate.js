//javascript code
var size = 3;
var i;

function printGrades() {
    // create the text panel for output
    var tabledata, tags, userin, drop, loc;
    var output = 0;
    const grades = [];
    //getting grades
    // getting table
    tabledata = document.getElementById("my-table");
    //getting rows
    tags = tabledata.getElementsByTagName("td");
    //getting each input and putting it in array
    for (i = 0; i < tags.length; i++) {
        userin = tags[i].getElementsByTagName("input");
        grades[i] = parseInt(userin[0].value);
    }
    //getting number of grades to remove
    drop = document.getElementById("dropAmount").value;
    if (isNaN(drop) || drop < 0) {
        alert("drop must be a non-negative number");
        return;
    }
    //finding average
    //getting rid of mins 
    deleteMins(grades, drop);
    //summing the array
    for (i = 0; i < size - drop; i++) {
        output += grades[i];
    }
    output = output / (size - drop);
    //changing output text
    document.getElementById("outputText").innerHTML = output.toFixed(2) + '%';

}
function buildTable(tableID) {

    //i wanna implement so that it goes in coloumns
    //make a second table it will go right next to it  
    let ht = getNumberOfGrades();
    if (ht <= 0 || isNaN(ht)) {
        alert("# of assignments must be a number greater than zero");
        return;
    }
    if (ht - size > 0) {
        for (var i = 0; i < ht - size; i++) {
            addRows(tableID);
        }
    }
    else {
        for (var i = 0; i > ht - size; i--) {
            deleteRows(tableID);
        }
    }
    // Get a reference to the table
    size = ht;
}


function addRows(tableID) {
    let tableRef = document.getElementById(tableID);

    // Insert a row at the end of the table
    let newRow = tableRef.insertRow(-1);

    // Insert a cell in the row at index 0
    let newCell = newRow.insertCell();
    // Append a text node to the cell
    let newbox = document.createElement("input");
    newbox.type = 'text';
    newbox.value = 'xx';
    newCell.appendChild(newbox);

    //label
    let newLabel = document.createElement("label");
    newLabel.innerHTML = '%';
    newLabel.style.color = "gold";
    newCell.appendChild(newLabel);


}
function deleteRows(tableID) {
    let table = document.getElementById(tableID);
    table.deleteRow(1);
}

function getNumberOfGrades() {
    numberOfGrades = document.getElementById('numberOfGrades').value;
    return numberOfGrades;
}

function deleteMins(grades, drop) {
    grades.sort(function(a,b){return a-b});
    console.log(grades);
    for (i = 0 ; i < drop ; i++){
        grades.shift();
    }
    
}
