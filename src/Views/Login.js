import React from 'react';
import {useForm} from "react-hook-form";
import {Route, Switch, useHistory, useRouteMatch} from "react-router-dom";
import Register from "../components/Register";



function Login({submit}) {

    const history = useHistory();

    const {handleSubmit, register} = useForm();
    let {path, url} = useRouteMatch();

    return (
        <div className={'login'}>

            <form onSubmit={handleSubmit(()=>submit())}>
                <label htmlFor='user-name' >Type your Name</label>
                <input type="text" name={'user-name'} required={'required'} {...register('user-name')}/>

                <label htmlFor="password">Password</label>
                <input type="password" required={'required'} {...register('password')}/>

                <button type={'submit'}>Submit</button>
            </form>

            <button onClick={()=>history.push(`${url}/register`)}>Register</button>

            <Switch>
                <Route exact path={`${path}`}>  </Route>
                <Route exact path={`${path}/register`}><Register /> </Route>
            </Switch>


        </div>
    );
}

export default Login;