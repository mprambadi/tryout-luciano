if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(1);
}
// Read the file and print its contents.
var fs = require('fs')
  , filename = process.argv[2];
fs.readFile(filename, 'utf8', function(err, data) {
  if (err) throw err;
  // console.log(data)

var myArray = data.split(" ");
var unique = myArray.filter((v, i, a) => a.indexOf(v) === i); 

console.log("Jumlah semua kata: "+myArray.length);
console.log("Jumlah kata unik: " +unique.length)


console.log("Jumlah kata yang unik dan jumlahnya masing-masing: ");
var counts = {};
for (var i = 0; i < myArray.length; i++) {
    counts[myArray[i]] = 1 + (counts[myArray[i]] || 0);
}

console.log(counts)


});

