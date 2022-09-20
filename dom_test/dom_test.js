console.log("Original text: " + document.getElementById("test").innerHTML);
document.getElementById("test").innerHTML = "<h1>Testing Testing</h1>";
console.log("New text: " + document.getElementById("test").innerHTML);