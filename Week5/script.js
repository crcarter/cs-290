// Used to set the number of rows and columns in the table
var numCols = 4;
var numRows = 4;
// position of the currently selected cell
var selectedRow = 1;
var selectedCol = 0;

function createTable(node) {
	var newTable = document.createElement("table");
	newTable.style.border = "1px solid";

	// Create the header row
	var hRow = document.createElement("tr");
	for( var i = 0; i < numCols; i++) {
		var header = document.createElement("th");
		header.textContent = "header " + (i + 1);
		header.style.border = "1px solid";
		hRow.appendChild(header);
	}
	newTable.appendChild(hRow);

	// Create the other rows
	for( var i = 0; i < numRows - 1; i++) {
		var row = document.createElement("tr");
		for( var j = 0; j < numCols; j++) {
			var header = document.createElement("td");
			header.textContent = (j + 1) + ", " + (i + 1);
			header.style.border = "1px solid";
			row.appendChild(header);
		}
		newTable.appendChild(row);
	}
	
	node.appendChild(newTable);
}

// Creates the 5 buttons giving the direction ones the moveCell function
function createButtons(node) {
	var bUp = document.createElement("button");
	bUp.textContent = "up";
	bUp.addEventListener("click", function() { moveCell(0, -1) });
	node.appendChild(bUp);

	var bDown = document.createElement("button");
	bDown.textContent = "down";
	bDown.addEventListener("click", function() { moveCell(0, 1) });
	node.appendChild(bDown);

	var bLeft = document.createElement("button");
	bLeft.textContent = "left";
	bLeft.addEventListener("click", function() { moveCell(-1, 0) });
	node.appendChild(bLeft);

	var bRight = document.createElement("button");
	bRight.textContent = "right";
	bRight.addEventListener("click", function() { moveCell(1, 0) });
	node.appendChild(bRight);

	var bMark = document.createElement("button");
	bMark.textContent = "Mark Cell";
	bMark.addEventListener("click", function() {
		myTable.rows[selectedRow].cells[selectedCol].style.backgroundColor = "yellow";
	});
	node.appendChild(bMark);
}

// Shows the cell is selected by giving it a bold border
function selectCell(cell) {
	cell.style.border = "5px solid";
}

// Shows the cell is not selected by giving it a regular border
function deselectCell(cell) {
	cell.style.border = "1px solid";
}

// Function to check that moving does not go out of bounds then updates cells
function moveCell(addCol, addRow) {
	if ((selectedRow + addRow < numRows && selectedRow + addRow > 0) && 
		(selectedCol + addCol < numCols && selectedCol + addCol >= 0)) {

		deselectCell(myTable.rows[selectedRow].cells[selectedCol]);
		selectedRow += addRow;
		selectedCol += addCol;
		selectCell(myTable.rows[selectedRow].cells[selectedCol]);
	}
}

// Add the table and buttons to the page
createTable(document.body);
var myTable = document.body.getElementsByTagName("table")[0];
selectCell(myTable.rows[selectedRow].cells[selectedCol]);
createButtons(document.body);
