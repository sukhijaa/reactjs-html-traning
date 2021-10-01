import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getLoginTimeSelector, getUserLoggedInSelector} from "../../store/reducers/bookReducer/bookSelectors";
import {setUserLoggedOutAction} from "../../store/reducers/bookReducer/bookActions";
import {useHistory} from "react-router";

const SessionTimer = (props) => {

    const loginTime = useSelector(getLoginTimeSelector);
    const loggedIn = useSelector(getUserLoggedInSelector);
    const dispatch = useDispatch();
    const [timerValue, setTimerValue] = useState(1);

    let interval = 0;

    // Each and every useEffect will be triggered atleast once in component lifecycle
    // If entities in dependencies array change, it will be triggered again
    // componentDidMount should be triggered only once - Hence we pass an empty dependency array
    // componentDidUpdate should be triggered everytime prop changes - Hence we pass the dependency in dependency array
    // componentWillUnmount should be triggered right before unmounting
        // Whatever is returned from useEffect, becomes componentWillUnmount;

    // ComponentDidMount
    useEffect(() => {
        interval = setInterval(() => {
            setTimerValue(Math.floor((new Date().getTime() - loginTime) / 1000));
        }, 1000);
        // componentWillUnmount
        return () => {
            clearInterval(interval);
        };
    }, []);

    // componentDidupdate -> Itself checking if loginTime has changed
    useEffect(() => {
        if (loggedIn) {
            setTimerValue(Math.floor((new Date().getTime() - loginTime) / 1000) || 1);
        }
    }, [loginTime, loggedIn]);

    const handleUserLogout = () => {
        dispatch(setUserLoggedOutAction());
    };

    return (
        <div className={"session-timer"}>
            My Time: {`${Math.floor(timerValue / 3600)} : ${Math.floor(timerValue / 60)} : ${Math.floor(timerValue % 60)}`}
            <br/>
            <div onClick={handleUserLogout}>Logout</div>
        </div>
    );
};

export default SessionTimer;