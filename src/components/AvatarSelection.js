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
import AvatarPictureCard from "./registerSubComponents/AvatarPictureCard";


const AvatarSelection = ({avatarIndex}) => {

    const [maleAvatarSelectToggle, SetMaleAvatarSelectToggle] = useState(false);
    const [femaleAvatarSelectToggle, SetFemaleAvatarSelectToggle] = useState(false);

    const [genderSelected, SetGenderSelected] = useState(null);

    const maleArray = [
        {
            avatarIndex : 'm1',
            picture: male1,
            isSelected: false
        },
        {
            avatarIndex: 'm2',
            picture: male2,
            isSelected: false,
        },
        {
            avatarIndex: 'm3',

            picture: male3,
            isSelected: false
        },
        {
            avatarIndex: 'm4',

            picture: male4,
            isSelected: false
        }, {
            avatarIndex: 'm5',

            picture: male5,
            isSelected: false
        }]

    const femaleArray = [
        {
            avatarIndex : 'f1',
            picture: female1,
            isSelected: false
        },
        {
            avatarIndex: 'f2',
            picture: female2,
            isSelected: false,
        },
        {
            avatarIndex: 'f3',

            picture: female3,
            isSelected: false
        },
        {
            avatarIndex: 'f4',

            picture: female4,
            isSelected: false
        }, {
            avatarIndex: 'f5',

            picture: female5,
            isSelected: false
        }]

    const [avatarArrayState, SetAvatarArrayState] = useState(null)


    function setAvatarSelected(data) {

        console.log(data)

        avatarIndex = data;
        const tempArray = [... avatarArrayState];

        const elementIndex = tempArray.findIndex((element)=>element.avatarIndex === data)

        tempArray.forEach((avatar)=>avatar.isSelected=false);

        tempArray[elementIndex].isSelected = true;

        SetAvatarArrayState(tempArray);
        console.log(maleArray)


    }



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


    function handleClick(element) {
        console.log(element)
    }

    return (
        <div>
            <div className="gender-selection">
                <button onClick={()=>SetAvatarArrayState(maleArray)}>Male</button>
                <button onClick={()=>SetAvatarArrayState(femaleArray)}>Female</button>
            </div>

            {avatarArrayState && avatarArrayState.map((element, key) => {
                return <AvatarPictureCard picture={element.picture} key={key} isSelected={element.isSelected}
                                          handleClick={(element) => setAvatarSelected(element)} avatarIndex={element.avatarIndex}/>
            })}


        </div>
    )
}
export default AvatarSelection