import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Game from "./components/Game/Game";

function App(props) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile state={props.state.ProfilePage}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs state={props.state.messagesPage}/>}/>
                <Route path={'/game'} render={() => <Game/>}/>
            </div>
        </div>
    );
}

export default App;
