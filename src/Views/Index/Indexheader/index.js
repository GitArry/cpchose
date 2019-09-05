import React from 'react'
import {NavLink} from 'react-router-dom'
import css from "./index.module.scss"
class Indexheader extends React.Component {
  render() {
    return <div className={css.indexheader}>
        <ul>
            <li><NavLink to="/index/activity" activeClassName={css.active} replace>推荐</NavLink></li>
            <li><NavLink to="/index/furniture" activeClassName={css.active} replace>家具</NavLink></li>
            <li><NavLink to="/index/home" activeClassName={css.active} replace>家居</NavLink></li>
            <li><NavLink to="/index/Recommend" activeClassName={css.active} replace>活动</NavLink></li>
        </ul>
    </div>
  }
}

export default Indexheader