import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
//region import VIEW components
import Chat from "./Views/Chat";
import Login from "./Views/Login";
import HomePage from "./Views/HomePage";

//endregion import  view components
//region import COMPONENTS

//endregion import components

import {useSelector} from "react-redux";
import ProtectedRoute from "./provider/protectedPathds/protectedRoute";



function App() {


    function login(userLoginData) {
        console.log(userLoginData);
    }

    const isAuth = useSelector(state=> state.userReducer.currentUser.isAuth);
    console.log(isAuth);

    const homeMode = useSelector(state => state.homeReducer)
    console.log(homeMode);

    return (
        <Router>
            <Switch>
                <Route path={'/login'}><Login submit={data => login(data)}/></Route>

                <Route path={'/chat'}>
                    <ProtectedRoute path={'/chat'} component={Chat} isAuth={isAuth}/>
                </Route>

                <Route path={'/home'}>
                    <HomePage mode={homeMode} />
                </Route>

                <Route path={'/'}>
                    <Redirect to={'/home'}/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
