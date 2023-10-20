import Client from './Client/Client';
import Person from './player/Person';
import Home from './Home/Home'
import HomeRow from './Home/HomeRow/HomeRow';

import {BrowserRouter ,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Home/>
      <Routes>
        <Route path='/' element={<HomeRow/>}></Route>
        <Route path='/person' element={<Person/>}></Route>
        <Route path='/client' element={<Client/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
