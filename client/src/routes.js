import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import App from './components/App'

const router = (
    <BrowserRouter>
        <Route path={'/'} component={App}>
        </Route>
    </BrowserRouter>
)

export default router