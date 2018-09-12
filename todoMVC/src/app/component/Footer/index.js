import React from 'react';
import style from './index.css';

const Footer = () => (
    <div className={style.todo_footer}>
        <div className={style.description}>Double-click to edit a todo</div>
        <div className={style.description}>Created by Yanfei.Xue</div>
        <div className={style.description}>Part of TodoMVC</div>
    </div>
);
export default Footer;
