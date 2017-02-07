// VARIABLES

var growButton = document.getElementById("growButton");
var userHeight = document.getElementById("userHeight");
var userCharacter = document.getElementById("userCharacter");
var outputTree = "";

// FUNCTIONS

// Technically, growTree only takes a single object as its parameter.
// Of course, it relies on the defineTree function to assemble and validate the object.
// Hopefully that doesn't break the spirit of the assignment.
function growTree(inputObject) {
	let character = inputObject.character;
	let space = " ";
	let targetWidth = (inputObject.height * 2) - 1;
	let treeSpaces = 1;
	let openSpaces = (targetWidth - 1) / 2;
	while (treeSpaces <= targetWidth) {
		let currTreeOutput = "";
		let currSpace = space.repeat(openSpaces);
		let currTree = character.repeat(treeSpaces);
		currTreeOutput = currSpace + currTree + currSpace;
		console.log(currTreeOutput);
		treeSpaces += 2;
		openSpaces -= 1;
	}
};

function defineTree() {
	let userInput = {};
	userInput.height = document.getElementById("userHeight").value;
	userInput.character = document.getElementById("userCharacter").value;
	if (userInput.height === "" || userInput.character === "") { //checks if the user's entered a character
		alert("Please enter a value into both fields.");
		return;
	}
	growTree(userInput);
};

// EVENT LISTENERS

growButton.addEventListener("click", defineTree);

userHeight.addEventListener("keypress", function (e) {
	if (13 === e.keyCode) {
		defineTree();
	}
});

userCharacter.addEventListener("keypress", function (e) {
	if (13 === e.keyCode) {
		defineTree();
	}
});




