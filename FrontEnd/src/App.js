import React from "react";
import Demo from "./Demo";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Calculator from "./components/Calculator";
import TodoApp from "./components/TodoApp";

class App extends React.Component
{
  state = {
    companyName : "Codegnan",
    pi : 3.14,
    year : 2023
  }

  render()
  {
    return(
      <div>

      <BrowserRouter>
        <Navigation />
        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/calculator" element={<Calculator/>} />
          <Route path="/todo" element={<TodoApp/>} />
        </Routes>
      </BrowserRouter>

        {/* <h1> Hii!! 😎 This is M J N V Sai </h1>
        <p> Compnay Name is : {this.state.companyName} & Year is {this.state.year} </p>
        <p> The value of Pi is : {this.state.pi} </p>
        <Demo name="sai" dept="it" /> */}
        {/* <Demo name="ajay" dept="cse" /> */}
      </div>
    )
  }
}

export default App