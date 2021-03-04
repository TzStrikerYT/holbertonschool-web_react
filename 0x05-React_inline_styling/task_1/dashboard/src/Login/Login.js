import React from "react";
import { StyleSheet, css } from 'aphrodite';

function Login() {
    return (
        <div className={styles.login}>
            <p>Login to access the full dashboard</p>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" className={css(styles.input)}/>

            <label htmlFor="password">Password:</label>
            <input id="password" name="password" className={css(styles.input)}/>
            <button>OK</button>
        </div>
    );
}

const styles = StyleSheet.create({
    login: {
        margin: '50px',
        flexGrow: 1,
    },
    input: {
        margin: '0 10px',
    },
})

export default Login;