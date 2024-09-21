import * as React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import FullName from './components/FullName';
import Email from './components/Email';
import Phone from './components/Phone';
import Address from './components/Address';
import Agree from './components/Agree';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <Router>
    <div className="flex w-full h-screen">
      <div className='w-full flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<Welcome/>}/>
          <Route path='FullName' element={<FullName/>}/>
          <Route path='Email' element={<Email/>}/>
          <Route path='Phone' element={<Phone/>}/>
          <Route path='Address' element={<Address/>}/>
          <Route path='Agree' element={<Agree/>}/>
          <Route path='ThankYou' element={<ThankYou/>}/>
          <Route path='Welcome' element={<Welcome/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  );
}

export default App;