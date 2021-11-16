import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from "react-router-dom";
import Game from "./components/Game/Game";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile store={props.store}/>}/>
                <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}/>}/>
                <Route path={'/game'} render={() => <Game/>}/>
            </div>
        </div>
    );
}

export default App;
