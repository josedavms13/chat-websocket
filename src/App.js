import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
//region import VIEW components
import Chat from "./Views/Chat";

//endregion import  view components
//region import COMPONENTS
import Login from "./components/Login";

//endregion import components

import {useSelector} from "react-redux";


function App() {


    function login(userLoginData) {
        console.log(userLoginData);
    }


    return (
        <Router>
            <Switch>
                <Route path={'/login'}><Login submit={data => login(data)}/></Route>
                <Route path={'/chat'}> <Chat/> </Route>
                <Route path={'/'}>
                    <Redirect to={'/chat'}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
