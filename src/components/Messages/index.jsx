import axios from 'axios';
import React from 'react';

import { useSelector } from 'react-redux';

import { useNavigate, Link } from 'react-router-dom';

import style from './Messages.module.scss';

const fetchUsers = (username, setter, navigate) => {
    try {
        (async () => {
            if (username === '') {
                navigate('/');
            }
            const { data } = await axios.get('http://localhost:8800/' + username);
            setter(data.messages);
        })();
    } catch (err) {
        console.log(err);
    }
};

export const Messages = () => {
    const { username } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        fetchUsers(username, setMessages, navigate);
        const interval = setInterval(() => fetchUsers(username, setMessages), 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <>
            <div
                className={'accordion accordion-flush ' + style.messages}
                id="accordionFlushExample">
                {messages.reverse().map((message) => (
                    <div className="accordion-item" key={message.id}>
                        <h2 className={"accordion-header " + style.header} id={'flush-heading' + message.id}>
                            <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={'#flush-collapse' + message.id}
                                aria-expanded="false"
                                aria-controls={'flush-collapse' + message.id}>
                                {message.topic}
                            </button>
                        </h2>
                        <div
                            id={'flush-collapse' + message.id}
                            className="accordion-collapse collapse"
                            aria-labelledby={'flush-heading' + message.id}
                            data-bs-parent="#accordionFlushExample">
                            <div className="accordion-body">
                                <p className={style.sender}>From {message.sender}</p>
                                <p className={style.message}>{message.message}</p>
                                <p className={style.createdAt}>
                                    Sent at{' '}
                                    {message.createdAt
                                        .substring(0, 19)
                                        .split('T')
                                        .reverse()
                                        .join(' ')}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};
