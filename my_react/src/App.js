import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Game from "./components/Game/Game";

function App(props) {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route path={'/profile'} render={() => <Profile state={props.state.profilePage}
                                                                updateNewPostText={props.updateNewPostText}
                                                                addPost={props.addPost}/>}/>
                <Route path={'/dialogs'} render={() => <Dialogs state={props.state.dialogsPage}
                                                                updateNewMessageText={props.updateNewMessageText}
                                                                addMessage={props.addMessage}/>}/>
                <Route path={'/game'} render={() => <Game/>}/>
            </div>
        </div>
    );
}

export default App;
