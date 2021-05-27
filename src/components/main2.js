import React from "react";
import { NavLink } from 'react-router-dom';


export const App = () => {

    return (
        <>
        <div>222</div>
        <NavLink to="/" activeClassName="active">register now!</NavLink>
        </>
    );
};

export default App;