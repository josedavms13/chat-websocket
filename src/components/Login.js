import React from 'react';
import {useForm} from "react-hook-form";


function Login({submit}) {

    const {handleSubmit, register} = useForm();

    return (
        <div className={'login'}>

            <form onSubmit={handleSubmit(submit())}>
                <label htmlFor='user-name'>Type your Name</label>
                <input type="text" name={'user-name'} required={'required'} {...register('user-name')}/>

                <label htmlFor="password">Password</label>
                <input type="password" required={'required'} {...register('password')}/>

                <button type={'submit'}>Submit</button>
            </form>

        </div>
    );
}

export default Login;