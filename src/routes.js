import React from 'react';
import HomePage from './pages/HomePages/HomePage';


const routes = [
    {
        path : '/', 
        exact : true,
        main : () => <HomePage/>
    }
];

export default routes;