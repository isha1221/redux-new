import React from "react";
import "./App.css";

// import React from "react";
import SignIn from "./SignIn";
import "./App.css";
import  PayCard  from "./components/card";
import NewCard from "./components/card2";
import { Link,Route,Routes } from "react-router-dom";
import GitUsers from "./GitUsers";
import Layout from "./Layout";
// import PayCard  from "./components/card";

function App() {
  
  return (
    
    <div className="App">
     <Routes>
     <Route path ="/" element={<SignIn/>}></Route>
     <Route path="/main" element={<Layout />}>
     <Route index path ="Git" element={<GitUsers/>}></Route>
     </Route>
      
      <Route path ="/*" element={<SignIn/>}></Route>
      <Route path ="/new" element={<PayCard/>}></Route>
      
     </Routes>
      
    </div>
     
    
  );
}
export default App;





// import React from "react";
// import SignIn from "./SignIn";
// import "./App.css";
// import  PayCard  from "./components/card";
// import NewCard from "./components/card2";
// import { Link,Route,Routes } from "react-router-dom";

// function App() {
//   return (
//     <>
//     <nav>
//     <ul>
//         <li><Link to='/'>PayCard</Link></li>
//       </ul>
//       <ul>
//         <li><Link to='/new'>NewCard</Link></li>
//       </ul>
//       <ul>
//         <li><Link to='/signin'>SignIn</Link></li>
//       </ul>
//     </nav>
    
//      <Routes>
//       <Route path ="/" element={<PayCard/>}></Route>
{/* <Route path ="/new" element={<NewCard/>}></Route> */}
//       <Route path ="/signin" element={<SignIn/>}></Route>
      
//      </Routes>
//      </>
     
    
//   );
// }
// export default App;


// App.js
// import React from 'react';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import store from './store';
// import HomePage from './HomePage';
// import AboutPage from './AboutPage';

// const App = () => {
//   return (
//     <>
//     <Provider store={store}>
//       <Router> {/* Only one Router component here */}
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//           </ul>
//         </nav>
//         <Routes>
//           <Route path="/" exact element={HomePage} />
//           <Route path="/about" element={AboutPage} />
//         </Routes>
//       </Router>
//     </Provider></>
//   );
// };

// export default App;







//  {/* <SignIn /> */}
//       {/* <PayCard/> */}
//      {/* <NewCard/> */}
    // style={{display: "flex", flexWrap:'wrap'}}