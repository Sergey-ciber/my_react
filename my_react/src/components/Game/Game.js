import React from 'react';
import style from './Game.module.css';

const Game = () => {
    return(
        <div className={style.game}>
           <div>
               Level name
           </div>
            <div>
                Level content
                <div>
                    <input onBlur={() => {alert('Hello!')}}/>
                </div>
            </div>
            <div>
                Input answer
            </div>
        </div>
    )
}
export default Game;