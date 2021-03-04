import React from "react";
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

function Header() {
    return (
        <>
            <header className={css(style.header)}>
                <img src={logo} className={css(style.logo)} alt="logo" />
                <h1>School dashboard</h1>
            </header>
        </>
    );
}

const style = StyleSheet.create({
    header: {
        width: '100%',
        borderBottom: '4px solid red',
        color: 'red',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold',
    },
    logo: {
        height: '200px',
        width: '200px',
    },
})

export default Header;