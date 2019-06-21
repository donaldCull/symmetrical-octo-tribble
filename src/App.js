import React, { useState } from 'react';
import './App.css';

function Example() {
    const initialState = {firstName: "", lastName: ""};
    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({...values, [name]: value})
    };

    const addPerson = e => {
        e.preventDefault();
        const {firstName, lastName} = values;
        if (!firstName || !lastName) return;

        setPerson([...person, values]);
        setValues(initialState)
    };

    const [values, setValues] = useState(initialState);
    const [person, setPerson] = useState([]);

    return (
        <div style={{padding: 20}}>
            <h1>Add a person</h1>
            {
                person.length === 0 ? (<p>No people added</p>):
                person.map((person, index) => {
                return (<p key={index}>{`${index} ${person.firstName} ${person.lastName}`}</p>)
            })}
            <form>
                <p>first name</p>
                <input type="text" name={"firstName"} title={"firstName"} value={values.firstName} onChange={handleInputChange}/>
                <p>last name</p>
                <input type="text" name={"lastName"} title={"lastName"} value={values.lastName} onChange={handleInputChange}/>
                <button onClick={addPerson}>Add person</button>
            </form>
        </div>
    )
}

function Grid() {
    return (
        <div className="wrapper">
            <header className="main-head">The header</header>
            <nav className="main-nav">
                <ul>
                    <li><a href="">Nav 1</a></li>
                    <li><a href="">Nav 2</a></li>
                    <li><a href="">Nav 3</a></li>
                </ul>
            </nav>
            <article className="content">
                <h1>Main article area</h1>
                <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go
                    to a two column layout, and then to a three column layout by redefining the grid, and the placement
                    of items on the grid.</p>
            </article>
            <aside className="side">Sidebar</aside>
            <div className="ad">Advertising</div>
            <footer className="main-footer">The footer</footer>
        </div>    )
}
export default Grid;
