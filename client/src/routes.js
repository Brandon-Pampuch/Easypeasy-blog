import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './components/App'
import BlogPost from './components/BlogPost'

const router = (
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={App}>
                <Route exact path={'/posts/:id'}
                   render={(props)=> <BlogPost{...props}/>}
                >
                </Route>
            </Route>
            
        </Switch>
    </BrowserRouter>
    
)
export default router