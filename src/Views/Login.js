import React from 'react';
import {useForm} from "react-hook-form";
import {Route, Switch, useHistory} from "react-router-dom";

function Register() {
    return null;
}

function Login({submit}) {

    const history = useHistory();

    const {handleSubmit, register} = useForm();

    return (
        <div className={'login'}>

            <form onSubmit={handleSubmit(submit())}>
                <label htmlFor='user-name' >Type your Name</label>
                <input type="text" name={'user-name'} required={'required'} {...register('user-name')}/>

                <label htmlFor="password">Password</label>
                <input type="password" required={'required'} {...register('password')}/>

                <button type={'submit'}>Submit</button>
            </form>

            <button onClick={()=>history.push('/register')}>Register</button>

            <Switch>
                <Route exact to={'/register'}><Register /> </Route>
            </Switch>


        </div>
    );
}

export default Login;