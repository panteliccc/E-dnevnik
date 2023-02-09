import React from 'react';

export default function LoginPage(){
    return(
        <div className='login'>
            <div className='login--container'>
                <div className='login--switch'>
                    <button className='btt--profesor'>Profesor</button>
                    <button className='btt--ucenik'>Ucenik</button>
                </div>           
                <form className='form--login' action="">
                    <p>Profesor</p>
                    <input type="email" name="email" id="email" />
                    <input type="password" name="password" id="password" />
                    <input type="submit" value="Prijavi se" />
                </form>
            </div>        
        </div>
    )
}