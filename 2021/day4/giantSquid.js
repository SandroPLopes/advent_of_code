import * as fs from "fs/promises";

const read = await fs.readFile('teste.txt', 'utf8');
const content = read.split("\n");

const get_col = (arr, col) => arr.map(el => el[col]);

const arrange = (content) => {

    const drawnums = content[0].split(",");

    let initboards = content.slice(2, content.length+1);
    initboards.forEach((el, i, arr)=>{
        
        arr[i] = el.split(" ").filter((e)=>{return e !== ''})
    });

    let  board = [];
    let finalboards = [];

    initboards.push([]);
    initboards.forEach((el)=>{

        if (el.length !==0) {
            board.push(el)
        }
        else if (el.length === 0) {
            finalboards.push(board)
            board = []
        }
    });

    return [drawnums, finalboards]
}

const [nums, boards] = arrange(content);

//console.log(callnum(nums,  boards));

// boards[0][0][0] = 1;
// boards[0][1][0] = 2;
// boards[0][2][0] = 3;
// boards[0][3][0] = 4;
// boards[0][4][0] = 5;

const verifycol = (b) => {
    
    let res = false;
    let rescol = []

    b.forEach((el) => {

        let c=0;
        while (c<el.length) {
            
            let col = get_col(el, c);
            let test = col.filter((e)=>{
                if(typeof(e) === "number"){return true}
            });


            if (test.length === 5) {
                res = true;
                rescol = test;
            }

            c++;
        }

    });

    return [res, rescol];
}

const callnum = (n , b) => {
    
    n.forEach(el => {
        b.forEach(bd => {
        
            bd.forEach((ln) => {
                
                if (ln.includes(el)) {
                    ln.splice(ln.indexOf(el) ,1);
                }
            });
        });
    });

    return b;
};

//console.log(boards);
//console.log(verifycol(boards));
console.log(callnum(nums, boards));

const eq = (el1, el2) => {

    if (el1 === el2) {
        return true;
    }
    else{
        return false;
    }
}

//console.log(eq("79edd68c72c1bc8d9c26c49aa306a5c953b498db","79edd68c72c1bc8d9c26c49aa306a5c953b498db"));