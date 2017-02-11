// VARIABLES

var growButton = document.getElementById("growButton");
var userHeight = document.getElementById("userHeight");
var userCharacter = document.getElementById("userCharacter");

// FUNCTIONS

// Technically, growTree only takes a single object as its parameter.
// Of course, it relies on the defineTree function to assemble and validate the object.
// Hopefully that doesn't break the spirit of the assignment.
// function growTree(inputObject) {
// 	let character = inputObject.character;
// 	let space = " ";
// 	let targetWidth = (inputObject.height * 2) - 1;
// 	let treeSpaces = 1;
// 	let openSpaces = (targetWidth - 1) / 2;
// 	while (treeSpaces <= targetWidth) {
// 		let currTreeOutput = "";
// 		let currSpace = space.repeat(openSpaces);
// 		let currTree = character.repeat(treeSpaces);
// 		currTreeOutput = currSpace + currTree + currSpace;
// 		console.log(currTreeOutput);
// 		treeSpaces += 2;
// 		openSpaces -= 1;
// 	}
// };

function growTree(inputObject) {
	let character = inputObject.character;
	let space = " ";
	let targetWidth = (inputObject.height * 2) - 1;
	let treeSpaces = 1;
	let openSpaces = (targetWidth - 1) / 2;
	let outputToConsole = ""
	while (treeSpaces <= targetWidth) {
		let currSpace = space.repeat(openSpaces);
		let currTree = character.repeat(treeSpaces);
		outputToConsole += currSpace + currTree + currSpace + "\n";
		treeSpaces += 2;
		openSpaces -= 1;
	}
	console.log(outputToConsole);
};


function defineTree() {
	let userInput = {};
	userInput.height = document.getElementById("userHeight").value;
	userInput.character = document.getElementById("userCharacter").value;
	if (userInput.height === "" || userInput.character === "" || isNaN(userInput.height) === true) {
		alert("Please enter a valid number into the first field and a character into the second field.");
	} else {
	growTree(userInput);
	}
};

// EVENT LISTENERS

growButton.addEventListener("click", defineTree);

userHeight.addEventListener("keypress", function (e) {
	if (e.keyCode === 13) {
		defineTree();
	}
});

userCharacter.addEventListener("keypress", function (e) {
	if (e.keyCode === 13) {
		defineTree();
	}
});




