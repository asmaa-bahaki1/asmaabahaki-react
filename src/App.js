import React, { Component } from "react";

import Home from './Components/Home/Home';

import Bentley from './Components/Bentley/Bentley';

import Bentaygas from './Components/Bentaygas/Bentaygas';

import Bentaygab from './Components/Bentaygab/Bentaygab';

import Bentaygar from './Components/Bentaygas/Bentaygar';

import Bentaygag from './Components/Bentaygas/Bentaygag';

import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

class App extends Component{

render() {

return(
  <div>
    <Router>
  <div>
    <Routes>
      <Route path='/Bentaygas' element={<Bentaygas/>}/>
      <Route path='/Bentaygag' element={<Bentaygag/>}/>
      <Route path='/Bentaygab' element={<Bentaygab/>}/> 
      <Route path='/Bentaygar' element={<Bentaygar/>}/>
      <Route path='/Bentley' element={<Bentley/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </div>
    </Router>
  </div>
)
}
}

export default App;