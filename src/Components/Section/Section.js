import React from 'react';
import s from './Section.module.css';

function Section ({ title, children }) {
    return (
        <section className={s.feedback}>
        <h1>{title}</h1>
        { children }
       
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}

export default Section;