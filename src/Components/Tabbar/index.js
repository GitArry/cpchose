import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import css from './index.module.scss'
class Tabbar extends Component {
    render() {
        return <div className={css.tabbar}>
            <ul>
                <li><NavLink to="/index" activeClassName={css.active} replace>
                    <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/home.png" />首页
                    </NavLink>
                </li>
                <li><NavLink to="/category" activeClassName={css.active} replace>
                    <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/category.png" />分类
                    </NavLink>
                </li>
                <li><NavLink to="/shoppingcar" activeClassName={css.active} replace>
                    <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/buy.png" />购物车
                    </NavLink>
                </li>
                <li><NavLink to="/news" activeClassName={css.active} replace>
                    <img src="https://m.wowdsgn.com/static/img/message.png" />消息
                    </NavLink>
                </li>
                <li><NavLink to="/wd" activeClassName={css.active} replace>
                    <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/me.png" />我
                    </NavLink>
                </li>
            </ul>
        </div>
    }
}

export default Tabbar