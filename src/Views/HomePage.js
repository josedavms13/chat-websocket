import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";

const HomePage = ({mode})=>{

const history = useHistory();




    return(
        <div>
            <h1>Welcome</h1>

            {mode.mode === 1 ? <div>
                <h4>mode.name</h4>
            </div> : <button onClick={()=>history.push('/login')}>Register</button>}

        </div>
    )
}
export default HomePage