import Navbar from "./components/Shared/Navbar";
import React from "react";

// import Home from "./components/Views/Home";
// import Discover from "./components/Views/Discover";
// import Search from "./components/Views/Search";


function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



// export default function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div>
//         <Switch>
//           <Route path="/home">
//             <Home />
//           </Route>
//           <Route path="/discover">
//             <Discover />
//           </Route>
//           <Route path="/search">
//             <Search />
//           </Route>
//           {/* <Route path="/">
//             <Home />
//           </Route> */}
//         </Switch>
//       </div>
//     </Router>
//   );
// }
