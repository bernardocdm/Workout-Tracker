import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Items from "./pages/Items";
import Home from "./pages/home";
import SignUp from "./pages/signUp";

//create func with uppercase, create a route here and import too

//rfce
function App() {

  return(
    <div>      
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/items" element={<Items />} />
        <Route path="/home"  element={<Home/>}   />
        <Route path="/signup"  element={<SignUp/>}   />

      </Routes>
    </BrowserRouter>
  
    </div>

  );

}

export default App;
