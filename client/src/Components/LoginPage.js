import React from 'react';

export default function LoginPage(props){
    return(
        <div className='login'>
            <div className='login--container'>
                <div className='login--switch'>
                    <button className='btt--profesor switchBtts' onClick={props.Login}>Profesor</button>
                    <button className='btt--ucenik switchBtts' onClick={props.Login}>Ucenik</button>
                </div>           
                <form className='form--login' action="">
                    <p>{props.loginType}</p>
                    <input type="email" name="email" id="email" />
                    <input type="password" name="password" id="password" />
                    <input type="submit" value="Prijavi se" />
                </form>
            </div>        
        </div>
    )
}