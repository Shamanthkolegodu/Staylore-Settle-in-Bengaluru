import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import HomePage from "./components/homepageafterthelogin.component";
import Navbar2 from "./components/navbar2.component"
import Houses from "./components/houses.component";
import SellHouse from "./components/sellhouse.component";
import PredictHouse from "./components/predict.component";
import Contact from "./components/contact.component";

function App() {
  return (
    <Router>
      <div >
      <Navbar2 />
      <div>
      <Route path="/" exact component={HomePage} />
      <Route path="/data/" exact component={Houses} />
      <Route path="/sell" exact component={SellHouse} />
      <Route path="/predict" exact component={PredictHouse} />
      <Route path = "/support" exact component = {Contact} />
      </div>
      </div>
    </Router>
  );
}

export default App;
