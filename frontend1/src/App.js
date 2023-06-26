import React, {  } from "react";
import "./App.css";
 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
 
import Header from './Component/Header';
import Home from './Component/Home';
import Addmember from './Component/Addmember';
import Memberlist from './Component/Memberlist';
import Editmember from './Component/Editmember';
import Footer from './Component/Footer';
function App() {
  return (
    <div className="App">
        <Router>
        {/* <Editmember /> */}
            <Header/>
            
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/addmember" element={<Addmember/>}/>
              <Route exact path="/memberlist" element={<Memberlist/>}/> 
              {/* <Route path="/editmember/id" element={<Editmember />} /> */}
              <Route path="editmember/:id/edit" element={<Editmember />} />
            </Routes>
            <Footer/> 
        </Router>
        
 </div>
  );
}
 
export default App;