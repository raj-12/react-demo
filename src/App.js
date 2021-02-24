import React, { Component } from 'react';

import './App.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import  Parent  from "./parent";
import  Child from "./Child";

import  API from "./apis";


// const initialState = {
//   parentCounter: 0,
//   childCounter: 0,
//   strings:["Raj","skejrhkf"],
// };

// function reducer(state = initialState, action) {
//   switch (action.type) {
//       case "INCREMENT_PARENT":
//           return { ...state, parentCounter: state.parentCounter + 2 };
//       case "INCREMENT_CHILD":
//           return { ...state, childCounter: state.childCounter + 1 };
//       case "STRING":
//           return { ...state, string : state.strings+ "hello" };
//       default:
//           return state;
//   }
// }
// const store = createStore(reducer);

class App extends Component { 

 render() {
   return (
     <div className="App" style={{}}>
       {/* <Provider store={store}>
                  <Parent />
                  <Child />
        </Provider> */}

        <API/>
     </div>
   );
 }
}

export default App;









// export default function App() {
//   return (
//     <div className="App">
//       <Provider store={store}>
//         <Parent />
//       </Provider>
     
//     </div>
//   );
// }







// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src="" className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
