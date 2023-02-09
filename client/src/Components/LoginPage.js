import React from 'react';

export default function LoginPage(){
    return(
        <div className='login'>
            <button className='btt--profesor'>Profesor</button>
            <form action="">
                <input type="email" name="email" id="" />
                <input type="password" name="password" id="" />
                <input type="submit" value="Prijavi se" />
            </form>
        </div>
    )
}