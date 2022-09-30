import React from "react";
import '../assets/styles/TodoWrapper.css'

const TodoWrapper = ({ children }) => {

    const classes = 'todo-wrapper'

    return (
        <section className={classes}>
            {children}
        </section>
    )
}

export default TodoWrapper