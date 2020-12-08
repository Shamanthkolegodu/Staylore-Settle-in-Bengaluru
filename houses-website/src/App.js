import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import HomePage from "./components/homepage.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Houses from "./components/houses.component";
import SellHouse from "./components/sellhouse.component";
import PredictHouse from "./components/predict.component";
import AboutHouse from "./components/aboutpage.component";
import Contact from "./components/contact.component";

function App() {
  return (
    <Router>
      <div >
      <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route path="/data/" exact component={Houses} />
      <Route path="/sell" exact component={SellHouse} />
      <Route path="/predict" exact component={PredictHouse} />
      <Route path="/about" exact component={AboutHouse} />
      <Route path="/contact" exact component={Contact} />
      </div>
      </div>
    </Router>
  );
}

export default App;
