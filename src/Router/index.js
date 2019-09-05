import React from 'react'
import App from '../App'
import {HashRouter ,Route,Redirect,Switch} from 'react-router-dom'
import Category from '../Views/Category'
import Index from '../Views/Index'
import News from '../Views/News'
import Shoppingcar from '../Views/Shoppingcar'
import Wd from '../Views/Wd'
import Detail from "../Views/Detail"
import Details from "../Views/Detail/Details/details"



const router = <HashRouter>
    <App>
        <Switch>
            <Route path = "/index" component = {Index}/>
            <Route path="/category" component={Category}/>
            <Route path = "/shoppingcar" component = {Shoppingcar}/>
            <Route path = "/news" component = {News}/>
            <Route path = "/wd" component = {Wd}/>
            <Route path="/detail/:id" component={Detail} />
            <Route path='/details/:id' component={Details}/>
            <Redirect from="/" to="/index"/>
        </Switch>
    </App>
</HashRouter>

export default router;