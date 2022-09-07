const gameBoard = (()=>{

    let status = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']]; //' '(Unfilled), 'X','O'

    const isAvailable = (x,y) => status[x][y] === ' ';
    const clear = () => status = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];
    const set = (marker,x,y) => {
        status[x][y] = marker;
    }
    
    return {clear,set,isAvailable};
})();

const player = (name,marker)=>{
    
    let score = 0;
    
    const getName = () => name;
    const getMarker = () => marker;


    return {getName,getMarker};
}

