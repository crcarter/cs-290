console.log("Hello World!");console.log("Lets make sure JavaScript is working.");
var name = "Christian"; //Replace this with your first name
console.log("The unicode characters of your name are:")
for (var i = 0; i < name.length; i++){
	console.log(name.charCodeAt(i));
}
console.log("Copy and paste these values for activity credit.")

console.log(triple(3));

function triple( num ) {
	return num * 3;
};

console.log(cube(4));

var cube = function( num ) {
	return num * num * num;
};