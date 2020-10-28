import React, { useState } from 'react';

import firebase from 'firebase/app';

export default function SignUp() {
    const [email, setEmail] = useState(''); //number function object undefinded null string boolean
    const [password, setPassword] = useState('');

    const signUpInWithEmail = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    return (
        <div>
            <input placeholder="email" value={email} onChange={({target}) => {
               
                setEmail(target.value)}
                }/>

<input placeholder="password" value={password} onChange={({target}) => {
                
                setPassword(target.value)}
                }/>
<button onClick={signUpInWithEmail}>
    SignUp
    </button>
        </div>
    )
}