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
        //let query = `.cell#c${x}-${y}.${marker}`; //.cell#1-1.xmark || .cell#1-1.circle || .cell#1-1.ws
        //$(query).classList.add('show');
    }
    let clearCell = (x,y) => {
        $_(`.cell#c${x}-${y} *`).forEach(e => e.classList.add('hide'));
    }
    const clear = ()=>{
        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                clearCell(i,j);
            }
        }
    }
    return {show,clear};
})();
//Objeto Player
const player = (name_,marker) => {
    let score = 0;
    let name = name_;

    const addScore = () => score += 1;
    const resetScore = () => score = 0;
    const setName = (nname) => name = nname;

    return {name,addScore,resetScore,marker,setName}
}   
//Objeto computer
const computer = (()=>{
    const compute = ()=>{
        //Do something
        //let statusArray = ["","tie","X","game"];
        return "game";//Math.floor((Math.random()*3)+1)
    }
    return {compute};
})();
//Objeto gameflow
const gameController = (()=>{
    let players = [];
    players.push(player("Player 1","X"));
    players.push(player("Player 2","O"));
    let playersTurn = 0;
    let status = "";
    const reset = ()=>{
        playersTurn = Math.round(Math.random()); //0=>O ; 1=> X
        status = "game";
        gameBoard.clear();
        renderer.clear();
    }
    const toggleTurn = () => playersTurn===0?1:0;
    const move = (x,y)=>{
        let marker = players[playersTurn].marker;
        if(status !== "game"){
            reset();
            return;
        }
        //Intenta cambiar el gameboard
        let result = gameBoard.set(marker,x,y);
        if(!result) return;
        renderer.show(x,y,marker);
        playersTurn = toggleTurn();
        result = computer.compute();
    }
    return {playersTurn,status,move,reset}
})();