import { useState } from 'react'
import UserContextProvider from "./contexts/UserContextProvider.jsx"
import './App.css'
import Login from './components/login.jsx';
import Profile from './components/profile.jsx';

function App() {

  return (
    <UserContextProvider>
     <h1 className='text-white'>React With Chai </h1>
     <Login/>
     <Profile />
    </UserContextProvider>
  )
}

export default App;
