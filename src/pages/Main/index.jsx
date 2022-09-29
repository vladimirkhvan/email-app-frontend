import React from 'react';
import { Messages } from '../../components/Messages';
import { MessageCreator } from '../../components/MessageCreator';

import style from './Main.module.scss'

export const Main = () => {
    return (
        <div className={style.mainFrame}>
            <Messages/>
            <MessageCreator/>
        </div>
    );
};
