const Board = (i) => {
  // Let us pass data from our Board component into our square component
  // What they want us to do is pass a prop called value into the Square component





  const status = "Next player: x";

  return (
    // Having done what they asked us to do: so whatever is passed into the renderSquare() method the value will be equal

    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
      </div>
      <div className="board-row">
        {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
      </div>
      <div className="board-row">
        {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
