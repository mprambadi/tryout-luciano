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

var counts = {};
for (var i = 0; i < myArray.length; i++) {
    counts[myArray[i]] = 1 + (counts[myArray[i]] || 0);
}
console.log("Jumlah kata yang unik dan jumlahnya masing-masing: ");

Object.keys(counts).forEach(function(key) {

    console.log(key+" : "+counts[key]);

});


var numberPattern = /\d+/g;
var angka = data.match( numberPattern )

var s = "";
for(var i = 0; i < angka.length; i += 1) {
  s += angka[i] + " ";
}

console.log("Ada "+i+" Angka :"+ s);

var arrayOfNumbers = angka.map(Number);
		

var sum = arrayOfNumbers.reduce((a, b) => a + b, 0);
console.log("Jumlah semua angka: "+sum); // 6

});

