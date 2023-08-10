// // This will be the file I will import the importall file(and since I have exported all of my components in it, it brings along all of them) of my components and then call them also
// // App.js is the house of our components; and components in react are reusable bits of code
// import "./index.css";
// import { Square, Board, Game } from "./components/importall.js";

// // Now lets write a function the arrow notation way

// const App = ()=>{
//     return(
//         <>
//         {/* <></>: This is called react fragments and they prevent us from running out of scope; I can easily wrap all of it inside a parent div but React fragments are fun to us */}

//         <Square />;
//         <Board />
//         <Game />

//         </>
//     )

// }

// // Exporting the App.js file
// export default App

import "./index.css";
import { useState } from "react";
// import { Square, Board, Game } from "./components/importall.js";

export function Square() {
  const [value, setValue] = useState(null);
  // above is how we use states: value stores the value and the setValue is a function to help in changing the value
  // THe null passed to useState is used as initial value for this state variable. 
  function handleCLick(){
    console.log("CLicked!");
  }

  // Never forget: a functions value remainds undefined until the retuen keyword is used to return something for the function
  return <button
  className="square"
  onClick={handleCLick()
  }
  // To make our component remember the box that was clicked, we use states so we can fill it with an X when clicked upon
  // React provides a special function called useState that we can call from our component to let it "remember things "
  >{value}
  </button>
  // Now our squares all have 1 inside them, we do not want that; to fix it, we make use of props to pass the value each square should have from the parent component (Board) to its child (Square)
  // We want to render the Javascript variable called value from our component, not the word value; 
  // to escape into Javascript from JSX, we need to make use of curly braces. After doing that, now we have an empty board
  // The reason for the empty board is because the Board component hasn't passed the value prop to each Square component it renders, to fix this, we add value prop to each Square component rendered bu the Board component
  // TO make an interactive component, one where when we tap on it, it shows X.... We declare a handleClick() function insdie of the Square, then add onCLick() to the props of the button JSX element returned from the Square
  
} 

export function Board() {
  return (
    <>
      {/* Normally  our return type wont let us return more than one thing; but thanks to the React fragments we are able to build up our board */}
      <div className="board-row">

          {/* <Square value="1" />--- we remove the value props since we now have useState, and the Square component no longer accepts props anymore  */}
          <Square />
          <Square />
          <Square />
      </div>
      <div className="board-row">
          <Square />
          <Square />
          <Square />
      </div>
      <div className="board-row">
          <Square />
          <Square />
          <Square />
      </div>
    </>
    // Drying up our code now, I dont want to repeat myself multiple times; thanks to React components, I can just create a Square component and call it repeated times

  );

  // <>
  //   return <button className="square">X</button>
  // <button className="square">X</button>
  // <button className="square">X</button>;
  // </>
}

const App = () => {
  return (
    <>
      <div>Hekko Woeld</div>
      <div>I am Dynasty</div>
      {/* <br> */}
      {/* <Square />
      <Board />
      <Game /> */}

      <Board />
    </>
  );
};

export default App;
