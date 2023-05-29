import { Routes,Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Map from './pages/map';
import Search from './pages/search';
import Save from './pages/save';
import Feedback from './pages/feedBack';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route exact path='/' element={<Dashboard/>}>
        <Route index element={<Map/>}/>
        <Route  path='/search' element={<Search/>} />
        <Route path='/save' element={<Save/>}/> 
        <Route path='/feedback' element={<Feedback/>}/>

      </Route>
     </Routes>
    </div>
  );
}

export default App;
