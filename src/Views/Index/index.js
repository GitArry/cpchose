import React from 'react'
import Activity from './Activity'
import Furniture from './Furniture'
import Home from './Home'
import Recommend from './Recommend'
// import Route from '../../Router'
import {Route,Redirect,Switch} from 'react-router-dom'
import Indexheader from './Indexheader'
import Header from './Header/index'

class Index extends React.Component{
    render(){
        return <div>
            <Header></Header>
            <Indexheader></Indexheader>
            
            <Switch> 
                <Route path = "/index/activity" component = {Activity}/>
                <Route path = "/index/furniture" component = { Furniture }/>
                <Route path = "/index/home" component = {Home}/>
                <Route path = "/index/recommend" component = {Recommend}/>
                <Redirect from="/index" to="/index/activity"/>      
            </Switch>
        </div>
    }
}








export default Index