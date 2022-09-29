import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setUser } from '../../redux/user/slice';

import clearImg from '../../assets/images/clear.svg';

import style from './Login.module.scss';

export const Login = () => {
    const { username } = useSelector((state) => state.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        dispatch(setUser(e.target.value));
    };
    const clearField = () => {
        dispatch(setUser(''));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/messages');
    };

    return (
        <div className={style.intro}>
            <h1 className={style.title}>chat.</h1>
            <form onSubmit={handleSubmit} className='d-flex align-items-center flex-column'>
                <div className={style.inputBlock}>
                    <input
                        type="text"
                        placeholder="Enter name"
                        onChange={handleChange}
                        value={username}
                        required
                        className='border-0'
                    />
                    <img src={clearImg} alt="clear field" onClick={clearField} />
                </div>
                <button type="submit" className='button'>
                    Enter
                </button>
            </form>
        </div>
    );
};
