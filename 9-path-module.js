const path =  require("path");

// Path separator
console.log(path.sep);

// Normalises the path
const filePath = path.join("/content", "subfolder", "test.txt")
console.log(filePath);

// Show the file
const base = path.basename(filePath)
console.log(base);

// Return absolute path
const absolute = path.resolve(__dirname,"content", "subfolder", "test.txt")
console.log(absolute);