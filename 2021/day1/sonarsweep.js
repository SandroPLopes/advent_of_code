import { readFile } from 'fs';

//part1
readFile('input.txt', 'utf8', (data) => {

    const content = data.split("\n");

    let inc = 0;
    let bef = -1;
    
    content.forEach(line => {
        
        if(parseInt(line) > bef && bef != -1){inc++;}
        bef = parseInt(line);
        
    });

    console.log(inc);
})

/* ################################################### */

//part2
readFile('input.txt', 'utf8', (data) => {

    const content = data.split("\n");

    let inc = 0;
    let bef = -1;

    content.forEach((line, i) => {
        if (i < content.length-2) {
            let sum = content.slice(i, i+3).reduce((x, y) => x + y);
        }

        if(sum > bef && bef != -1){
            inc++;
        }

        bef = sum;

    })

    console.log(inc);
})

// geradot de passwords
// const generateP = ()=> {
//     var pass = '';
//     var str = 'ABMNOPQRSTUVWXYZ' + 
//             'apqrstuvwxyz0789|!#$%&bcdefghijklmno/()CDEFGHIJKL={[]123456}?-_*+<>';

//     for (let i = 0; i <= 7; i++) {
//         var char = Math.floor(Math.random()
//                     * str.length + 1);

//         pass += str.charAt(char)
//     }

//     console.log(pass);
// }

// generateP();