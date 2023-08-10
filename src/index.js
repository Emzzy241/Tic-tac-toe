// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import './index.css';




// Below, ReactDOM is used to create roots and then as an argument to this function, it has document.GetElementById("root").
// const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(
//   <React.StrictMode>
    
//     <App />
    
//     </React.StrictMode>
// );


// class Square extends React.Component {
//   render(i) {
//     return <button className="square">
//       {/* change the Square's render method to show the value we are replacing */}
//       {this.props.value}
      
//       </button>;
//   }
// }

// class Board extends React.Component {
//   // Let us pass data from our Board component into our square component
//   // What they want us to do is pass a prop called value into the Square component
//   renderSquare(i) {
//     return <Square value={i}/>;
//   }
//   // Having done what they asked us to do: so whatever is passed into the renderSquare() method the value will be equal 

//   render() {
//     const status = "Next player: x";

//     return (
//       <div>
//         <div className="status">{status}</div>
//         <div className="board-row">
//           {this.renderSquare(0)}
//           {this.renderSquare(1)}
//           {this.renderSquare(2)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(3)}
//           {this.renderSquare(4)}
//           {this.renderSquare(5)}
//         </div>
//         <div className="board-row">
//           {this.renderSquare(6)}
//           {this.renderSquare(7)}
//           {this.renderSquare(8)}
//         </div>
//       </div>
//     );
//   }
// }


// // Emmanuel this is another way to create a react component... The first way you know is by manually creating the react component folder and then creating the components(Square, Board, and Game) into their own respective .js or .jsx files

// class Game extends React.Component {
//   render() {
//     return (
//       <div className="game">
//         <div className="game-board">
//           {/* How we call a react component... Remember that a react component is a chunk of code that we separate into different(.jsx or .js files) and then we use them to dry up our code(i.e avoiding us from repeating ourselves) */}

//           <Board />
//         </div>
//         <div className="game-info">
//           <div>{/* Status */}</div>
//           <div>{/* TODO */}</div>
//         </div>
//       </div>
//     );
//   }
// }


// this file is where we are bringing the app components and this is where we are also rendering(separation of parts) our app components
// and putting it inside of the root div which is created in the public/index.html file


// And all of this is just how we work with modularization in Javascript. How we import and export files, objects, etc
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Below, ReactDOM is used to create roots and then as an argument to this function, it has document.GetElementById("root").
const root = ReactDOM.createRoot(document.getElementById('root'));
// Above also, its worthy to note that while we create our root, we are also getting an element with id="root" from our index.html 

// the line below is rendering our App.js components(bits of code)  inside of the root div which has been saved as a constant variable

root.render(
  <React.StrictMode>
    {/* NOTICE that React components work like tags
       In our App.js file which was created as a function but in the index.js file, here its been called like a regular html tag
        THat is how components are called in react. In React components(bits of reusable code) are called like components

    */}
    <App />

    {/* We wont be editing this file, as it serves as the bridge between the component we created in App.js and the browser */}
    
  </React.StrictMode>
);
