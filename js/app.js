//Aux objects
const $ = selector => document.querySelector(selector);
const $_ = selector => document.querySelectorAll(selector);
const gameBoard = (()=>{

    let status = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]; //' '(Unfilled), 'X','O'

    const isAvailable = (x,y) => status[x][y] === ' ';
    const clear = () => status = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    const set = (marker,x,y) => {
        if(isAvailable(x,y)){
            status[x][y] = marker;
            return true;
        } 
        return false;
    }
    const get = (x,y) => status[x][y];
    
    return {clear,get,set};
})();

//Objeto renderer
const renderer = (()=>{
    let show = (x,y,marker)=>{
        let query = `.cell#${x}-${y}.${marker}`; //.cell#1-1.xmark || .cell#1-1.circle || .cell#1-1.ws
        $(query).classList.add('show');
    }
    let clearCell = (x,y) => {
        let query = `.cell#${x}-${y} *`;
    }
    return {show};
})();
//Objeto gameflow
//Objeto computer