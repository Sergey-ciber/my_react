import './App.css';
import React from 'react';

function App() {
    return (
        <div className={'app-wrapper'}>
            <header className={'header'}>
                <img src="https://a.ripple.moe/36295?0"/>
            </header>
            <nav className={'nav'}>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>My game</a>
                </div>
            </nav>
            <div className={'content'}>
                <div>
                    <img
                        src={"https://sun9-23.userapi.com/impf/Q2FejchAxdNdxeedvl7pfVOGg0EtO1SzzoSd7g/IcN6vTD4SMc.jpg?size=510x200&quality=96&crop=0,0,1067,418&sign=360c225342f2d2d5dfcc0932898b0b04&type=vote"}/>
                </div>
                <div>Ava + description</div>
                <div>
                    My post
                    <div>New post</div>
                    <div>
                        <div>Post 1</div>
                        <div>Post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
