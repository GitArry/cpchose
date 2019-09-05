import React from 'react'
import css from './index.module.scss'

class Header extends React.Component {
   render() {
     return <div className={css.box}>
         <div className={css.searchInfor}>
        <img src ="https://m.wowdsgn.com/static/img/searchIcon-e103f6f03f8488bbc144da2ef8684396.png" className={css.searchIcon}/>
        <input type="search" name="searchInput" id="searchInput" placeholder="搜索我的尖叫好物"/>
        </div>

        </div>
     
  }
}


export default Header 
