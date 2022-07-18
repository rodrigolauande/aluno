import React, { useState } from 'react';
import { BrowserRouter} from 'react-router-dom';
// import './App.css'
import Header from './components/header';
import Footer from './components/footer';
import Login from './pages/login';
import Routes from './config/Routes';

function App() {
  
  const [user, setUser] = useState(null);

  const actionLoginData = (a) => {
    let newUser = {
      id: a.uid,
      name: a.displayName,
      avatar: a.photoURL
    }
    setUser(newUser);
  }
  
  // const actionLoginProf = (u) => {
  //   let newUser = {
  //     id: u.uid,
  //     name: u.displayName,
  //     avatar: u.photoURL
  //   }
  //   setUser(newUser);
  // }

  // const actionLoginDataFacebook = async (u) => {
  //   let newUser = {
 //     id: u.uid,
  //     name: u.displayName,
  //     avatar: u.photoURL
  //   }
  //   setUser(newUser)
  // }

  if(user === null){
    return(
      <div  className={`
      h-screen flex justify-center justify-items-center	
      bg-gradient-to-r from-blue-500 to-purple-500`}>
        <div>
      <Login onReceiveAluno={actionLoginData}/>

        </div>
      </div>
      // <Login />
    );
  }


  return (
    
    <div className='app'>
      <div className={`
      h-screen flex-col justify-center justify-items-center
      bg-gradient-to-r from-blue-500 to-purple-500`}>


    {(user)? (
      
      <BrowserRouter >
      
      
      <Header user={user} />
      
      
      <Routes />
      
      
      <Footer />
      
    
  
      </BrowserRouter>
    ):
    <BrowserRouter>
    <Login/>
    </BrowserRouter>
  }
  </div>
    </div>
    );
}

export default App;

//npm install styled-components --save

//componente -> styled-components

//npm install react-router-dom --save

// npm install @material-ui/core @material-ui/icons