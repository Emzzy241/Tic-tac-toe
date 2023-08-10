import Board from "./Board.jsx";


const Game = ()=> {
    
      return (
        <div className="game">
          <div className="game-board">
            {/* How we call a react component... Remember that a react component is a chunk of code that we separate into different(.jsx or .js files) and then we use them to dry up our code(i.e avoiding us from repeating ourselves) */}
  
            <Board />
          </div>
          <div className="game-info">
            <div>{/* Status */}</div>
            <div>{/* TODO */}</div>
          </div>
        </div>
      );
    
  }


  export default Game