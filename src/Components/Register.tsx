import React from 'react';
import { implementCreateUserWithEmailAndPassword } from '../firebase/auth';
import UserForm from './Common/UserForm';

const Register = () => {
    return (
        <UserForm
            linkText="Already have an account? Sign in"
            onSubmitForm={implementCreateUserWithEmailAndPassword}
        />
    );
};

export default Register;
