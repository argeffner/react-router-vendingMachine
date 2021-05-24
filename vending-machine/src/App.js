import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import Chai from './snacks/Tea1';
import Black from './snacks/Tea2';
import Green from './snacks/Tea3';

function App() {
  return (
      <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <VendingMachine />
      </Route>
      <Route exact path='/chai-tea'>
        <Chai/>
      </Route>
      <Route exact path='/black-tea'>
        <Black/>
      </Route>
      <Route exact path='/green-tea'>
        <Green/>
      </Route>
      </BrowserRouter>
  );
}

export default App;
