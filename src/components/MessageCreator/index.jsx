import React from 'react';
import axios from 'axios';

import { useSelector } from 'react-redux';

import style from './MessageCreator.module.scss';

export const MessageCreator = () => {
    const { username } = useSelector((state) => state.user);

    const [message, setMessage] = React.useState({
        receiver: '',
        body: '',
        topic: '',
    });

    const handleChange = (e) => {
        setMessage((prevMessage) => ({ ...prevMessage, [e.target.name]: e.target.value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8800/', {
            topic: message.topic,
            message: message.body,
            receiver: message.receiver,
            sender: username,
        });
        setMessage({
            receiver: '',
            body: '',
            topic: '',
        });
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                className={'d-flex flex-column align-items-center '}
                autocomplete="on">
                <div className="mb-3">
                    <label className="form-label">
                        Receiver
                        <input
                            type="text"
                            className={'form-control ' + style.formInput}
                            placeholder="Vladimir"
                            name="receiver"
                            autocomplete="on"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Topic
                        <input
                            type="text"
                            className={'form-control ' + style.formInput}
                            placeholder="News"
                            name="topic"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">
                        Enter message
                        <textarea
                            className={'form-control ' + style.formInput}
                            rows="3"
                            name="body"
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit" className="button">
                    send
                </button>
            </form>
        </div>
    );
};
