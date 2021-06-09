import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router";
import AvatarSelection from "./AvatarSelection";

function Register({registerSubmit}) {

    const history = useHistory()

    const {handleSubmit, register} = useForm();

    const [checkPassword, SetCheckPassword] = useState('')

    const [passwordDontMatchToggle, SetPasswordDontMatchToggle] = useState(false);

    function signUpSubmit(data){
        console.log(data)
    }

    function handleDontMatchError(error) {
        SetPasswordDontMatchToggle(true);
        setTimeout(() => {
            SetPasswordDontMatchToggle(false)
        }, 3000)}

        return (
            <div className={'sign-up'}>
                <h1>Register</h1>
                <form onSubmit={handleSubmit(signUpSubmit)}>
                    <label htmlFor="user-name">Name</label>
                    <input type="text" {...register('name')}/>

                    <label htmlFor="user-email">Email</label>
                    <input type="email" {...register('email')}/>

                    <label htmlFor="password">Password</label>
                    <input type="password" onChange={(e) => SetCheckPassword(e.target.value)}/>

                    <label htmlFor="confirm">Confirm</label>
                    <input
                        type="password" {...register('password', {validate: value => value === checkPassword || 'Password dont match'})}/>


                    <button type={'submit'}> Submit</button>
                    <button type={'button'} onClick={()=>{history.push('/chat')}}>Cancel
                    </button>

                    {passwordDontMatchToggle && <div className={'password-dont-match'}>
                        <h1>Passwords Dont Match</h1>
                        <h6>Please Re type it</h6>
                    </div>}
                </form>

                <AvatarSelection />
            </div>

        );

}

export default Register