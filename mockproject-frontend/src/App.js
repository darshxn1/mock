import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Search from './components/Search'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';
// import {searchLocalData} from './setupTests';
import axios from 'axios';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';


function App() {
  const [search, setSearch] = useState('')
  const [searchData, setSearchData] = useState([])

  useEffect(()=>{
    const getData = async () => {
      const data = await axios.get('http://3.83.117.61:8000/api/getUserData/');
      setSearchData(data.data.msg)
    }
    getData();
  }, [search])
  return (
    <>
      <Navbar setSearch = {setSearch} search={search}/>
      {/*  */}
      <Routes><Route exact path='/home' element={< Home />}></Route>
      <Route exact path='/profile/:username' element={<Profile searchData = {searchData} />}></Route>
      <Route exact path='/search' element={<Search searchData = {searchData} search={search}/>}></Route>
      

      </Routes>
      
      
    </>
  );
}

export default App;
