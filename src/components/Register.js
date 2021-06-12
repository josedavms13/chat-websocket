import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useHistory} from "react-router";
import AvatarSelection from "./AvatarSelection";
import {useDispatch } from "react-redux";

function Register({registerSubmit}) {

    //region routing hooks
    const history = useHistory()


    // form hooks and password confirm check
    const {handleSubmit, register} = useForm();

    const [checkPassword, SetCheckPassword] = useState('')

    const [passwordDontMatchToggle, SetPasswordDontMatchToggle] = useState(false);



    // avatar states
    const [avatarIndex, SetAvatarIndex] = useState(null);

    const [isAvatarSelected, SetAvatarSelected] = useState(false);


    // redux stuff
    const dispatch = useDispatch();

    console.log(dispatch)

    function signUpSubmit(data) {

        console.log(avatarIndex);
        console.log(data);
        console.log(isAvatarSelected);

        // If user selected an avatar can submit
        if(isAvatarSelected){
            console.log('can continue');

            const toSaveInLocal = {
                avatarIndex : avatarIndex,
                name : data.name,
                email : data.email,
                password : data.password,
            }

            console.log(toSaveInLocal);

        }
        else{
            console.log('cannot continue');
            noneAvatarSelectedError();
        }
    }



    // Check that user selected an avatar
    useEffect(() => {

        console.log(avatarIndex);
        console.log('called')
        if(avatarIndex) {
            SetAvatarSelected(true);
        }

    }, [avatarIndex])




    //region Errors UI display

    function handleDontMatchError(error) {
        SetPasswordDontMatchToggle(true);
        setTimeout(() => {
            SetPasswordDontMatchToggle(false)
        }, 3000)
    }

    const [noneAvatarSelectedErrorToggle, SetNoneAvatarSelectedErrorToggle ] = useState(false);

    function noneAvatarSelectedError(){
        SetNoneAvatarSelectedErrorToggle(true);
        setTimeout(() => {
            SetNoneAvatarSelectedErrorToggle(false)
        }, 3000)
    }

    //endregion Errors UI display


    return (
        <div className={'sign-up'}>
            <h1>Register</h1>
            <form onSubmit={handleSubmit((values)=>{signUpSubmit(values)} , errors => handleDontMatchError(errors))}>
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
                <button type={'button'} onClick={() => {
                    history.push('/chat')
                }}>Cancel
                </button>

                {passwordDontMatchToggle && <div className={'password-dont-match'}>
                    <h1>Passwords Dont Match</h1>
                    <h6>Please Re type it</h6>
                </div>}

                {noneAvatarSelectedErrorToggle && <div className={'none-avatar-selected'}>
                    <h1>You didn't select any avatar</h1>
                    <h6>Please choose one</h6>
                </div>}
            </form>

            <AvatarSelection avatarIndex={(avatarIndex) => {
                SetAvatarIndex(avatarIndex);
            }}/>
        </div>

    );

}

export default Register