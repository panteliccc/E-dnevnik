import React from 'react';
import LoginPage from './Components/LoginPage';
import './style.css';

export default function App() {

  const [loginType, setLoginType] = React.useState("Profesor")
  const switchBtts = document.getElementsByClassName("switchBtts")

  function Login(event){
    if(event.target.className === "btt--profesor switchBtts") setLoginType(() => "Profesor")
    else setLoginType(() => "Ucenik")

    for(var i = 0; i < switchBtts.length; i++) switchBtts[i].style.borderWidth = "1px"
    event.target.style.borderWidth = "3px"
  }

  return (
    <div className="App">
      <LoginPage 
        Login={Login}
        loginType={loginType}
      />
    </div>
  )
}
