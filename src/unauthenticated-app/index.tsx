import React, {useState} from 'react';
import {RegisterScreen} from "unauthenticated-app/register";
import {LoginScreen} from "unauthenticated-app/login";

export const UnauthenticatedApp = ()=>{
    const [isResgiter,setIsRegister] = useState(false)

    return(
        <div>
            {
                isResgiter ? <RegisterScreen/> : <LoginScreen/>
            }
            <button onClick={()=>{setIsRegister(!isResgiter)}}>切换到{isResgiter? '登录' : '注册'}</button>
        </div>

    )
}
