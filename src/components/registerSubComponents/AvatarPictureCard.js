import {useEffect, useState} from "react";

const AvatarPictureCard = ({picture, isSelected, avatarIndex, handleClick}) => {

    const [style, SetStyle] = useState({border: 'black solid 1px'})

    useEffect(()=>{
        if(isSelected){
            SetStyle({
                border: 'yellow solid 4px'
            })
        }else {
            SetStyle({
                border: 'black solid 1px'
            })

        }
    },[isSelected])

    return (
        <div style={style} onClick={()=>handleClick(avatarIndex)}>
            <img src={picture} alt="man"/>
        </div>
    )
}
export default AvatarPictureCard