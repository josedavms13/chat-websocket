import male1 from '../media/avatarPics/man/my_character.svg'
import male2 from '../media/avatarPics/man/my_character (1).svg'
import male3 from '../media/avatarPics/man/my_character (2).svg'
import male4 from '../media/avatarPics/man/my_character (3).svg'
import male5 from '../media/avatarPics/man/my_character (4).svg'

import female1 from '../media/avatarPics/woman/my_character.svg'
import female2 from '../media/avatarPics/woman/my_character (1).svg'
import female3 from '../media/avatarPics/woman/my_character (2).svg'
import female4 from '../media/avatarPics/woman/my_character (3).svg'
import female5 from '../media/avatarPics/woman/my_character (5).svg'

import {useEffect, useState} from "react";


const AvatarSelection = ({avatarIndex}) => {

    const [maleAvatarSelectToggle, SetMaleAvatarSelectToggle] = useState(false);
    const [femaleAvatarSelectToggle, SetFemaleAvatarSelectToggle] = useState(false);

    const [genderSelected, SetGenderSelected] = useState(null);

    useEffect(() => {
        console.log(genderSelected);
        if (genderSelected) {
            if (genderSelected === 'male') {
                SetMaleAvatarSelectToggle(true);
                SetFemaleAvatarSelectToggle(false);
                console.log(maleAvatarSelectToggle);
                console.log(femaleAvatarSelectToggle);

            }
            if (genderSelected === 'female') {
                SetFemaleAvatarSelectToggle(true)
                SetMaleAvatarSelectToggle(false);

                console.log(maleAvatarSelectToggle);
                console.log(femaleAvatarSelectToggle);
            }
        }
    }, [genderSelected])


    return (
        <div>

            <div className="gender-selector">
                <button onClick={()=>{SetGenderSelected('male')}}>Male</button>
                <button onClick={()=>{SetGenderSelected('female')}}>Female</button>
            </div>


            {genderSelected &&
            <div className="avatar-menu">
                <h1>Choose your Avatar</h1>
                {maleAvatarSelectToggle&&
                <div className="male">
                    <div>

                        <img src={male1} alt=""/>
                    </div>
                    <div>

                        <img src={male2} alt=""/>
                    </div>
                    <div>

                        <img src={male3} alt=""/>
                    </div>
                    <div>

                        <img src={male4} alt=""/>
                    </div>
                    <div>

                        <img src={male5} alt=""/>
                    </div>
                </div>}
                {femaleAvatarSelectToggle&&
                <div className="male">
                    <div>

                        <img src={female1} alt=""/>
                    </div>
                    <div>

                        <img src={female2} alt=""/>
                    </div>
                    <div>

                        <img src={female3} alt=""/>
                    </div>
                    <div>

                        <img src={female4} alt=""/>
                    </div>
                    <div>

                        <img src={female5} alt=""/>
                    </div>
                </div>}
            </div>}
        </div>
    )
}
export default AvatarSelection