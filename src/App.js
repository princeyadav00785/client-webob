import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Recommendation from "./Recommendation"

//  import { BrowserRouter as Router,Routes,  Route } from "react-router-dom";
//  import SearchPage from './SearchPage'

function App() {

  return (
    <div className='App'>
      <Header/>
      <Sidebar/>
      <Recommendation/>
      {/* <Router>
        <Header />
        <Routes>
          <Route path="/search/:searchTerm">
            <div className='app_page'>
              <Sidebar />
              <SearchPage/>
            </div>
          </Route> 
          <Route path="/">
            <div className='app_page'>
              <Sidebar />
              <Recommendation />
            </div>
          </Route>
        </Routes>
      </Router> */}
    </div>

  );
}

export default App;
