import * as fs from "fs/promises"

const read = await fs.readFile('input.txt', 'utf8');
const content = read.split("\n");

const get_col = (arr, col) => arr.map(el => el[col]);

const bit_counter = (col) => {
    
    let count = [0,0];
    col.forEach(el => {
        if(el === '0'){
            count[0]++
        }else{count[1]++}
    });

    if (count[0]>count[1]) {
        return ["0", "1"]
    } else {
        return ["1", "0"]
    }
}

const report = (ctt) => {

    let gam_rate = []
    let epi_rate = []
    
    for (let i = 0; i < ctt[0].length; i++) {
        
        const col = get_col(ctt, i)
        const [gbit, ebit] = bit_counter(col)

        gam_rate.push(gbit)
        epi_rate.push(ebit)
    }

    return parseInt(gam_rate.join(""),2) * parseInt(epi_rate.join(""),2)
}

//console.log(report(content));

/*##################################################################################*/

// part2

const bit_counterg = (col) => {
    
    let count = [0,0];
    col.forEach(el => {
        if(el === '0'){
            count[0]++
        }else{count[1]++}
    });
    if (count[0]>count[1]) {return "0"}
    else if(count[0]===count[1]) {return "1"}
    else {return "1"}
    
}

const bit_countere = (col) => {
    
    let count = [0,0];
    col.forEach(el => {
        if(el === '0'){
            count[0]++
        }else{count[1]++}
    });

    if (count[0]>count[1]) {return "1"}
    else if(count[0]===count[1]) {return "0"}
    else {return "0"}
    
}

const ls_rating = (ctn)=> {

    let ogr = ctn
    let csr = ctn

    for (let i = 0; i < ctn[0].length; i++) {

        const gcol = get_col(ogr, i)
        const ecol = get_col(csr, i)
        const gbit = bit_counterg(gcol)
        const ebit = bit_countere(ecol)

        if (ogr.length !== 1) {
            ogr = ogr.filter((el)=>{if(el[i] === gbit) return true})
        }
        if (csr.length !== 1) {
            csr = csr.filter((el)=>{if(el[i] === ebit) return true})
        }
    }

    return parseInt(ogr[0],2) * parseInt(csr[0],2)
}

console.log(ls_rating(content));