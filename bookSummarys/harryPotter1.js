const fs = require('fs');

const data = fs.readFileSync('./harryPotter1script.txt', 'utf8');

console.log(data);
console.log('--------------')
console.log('Word Count: '+data.length)