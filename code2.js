const fs = require('fs');

fs.writeFile('hello.txt', 'Hello, world', (err) => {
    if (err) throw err;
    console.log("Сообщение записанно в файл");
});