import React from 'react';
import { implementSignInWithEmailAndPassword } from '../../firebase/auth';
import UserForm from '../Common/UserForm';

const Login = () => {
    return (
        <UserForm
            linkText="Not registered yet? Go to Sign Up"
            onSubmitForm={implementSignInWithEmailAndPassword}
        />
    );
};

export default Login;
