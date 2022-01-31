import * as fs from 'fs/promises';

//part 1

const read = await fs.readFile('input.csv', 'utf8');
const content = read.split('\n');

let depth = 0;
let horiz =0;

content.forEach(line => {
    
    const cmd = line.split(" ")[0];
    const x = line.split(" ")[1];

    if(cmd === "forward") horiz+=parseInt(x);
    if(cmd === "up") depth-=parseInt(x);
    if(cmd === "down") depth+=parseInt(x)
});

let res = horiz * depth;
console.log(res);

/*################################################## */

//part2

depth= 0;
horiz = 0;
let aim=0;

content.forEach(line => {
    
    const cmd = line.split(" ")[0];
    const x = line.split(" ")[1];

    if(cmd === 'forward'){
        horiz+=parseInt(x)
        depth+=(aim*parseInt(x))
    }

    if (cmd === 'up') {
        aim-=parseInt(x)
    }

    if (cmd === 'down') {
        aim+=parseInt(x)
    }
});

res = horiz * depth
console.log(res);