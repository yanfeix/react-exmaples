import React from 'react';
import style from './index.css';

const Header = () => (
    <div className={`${style.todo_header} ${style.center}`}>
        <span className={style.title}>todos</span>
    </div>
);

export default Header;
