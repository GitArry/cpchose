import React from 'react'
import { NavLink } from 'react-router-dom'
import css from './index.module.scss'
import '../../assets/iconfont/iconfont.css'

class Wd extends React.Component {
  render() {
    return <div className={css.all}>
      <div className={css.header}>
        <h2>我</h2>
      </div>
      <NavLink to="/" className={css.userinfo}>
        <img src="https://m.wowdsgn.com/static/img/default_portrait.png" />
        <div className={css.user}>
          <p className={css.username}>wow_18752165</p>
          <span className= "iconfont">&#xe64c;</span>
        </div>
      </NavLink>
      {/* //全部订单 */}
      <div className={css.orderall}>
        <NavLink to="/" className={css.title}>全部订单</NavLink>
        <NavLink to="/">
          <img src="https://m.wowdsgn.com/static/img/waite-pay.png" />
          <p>待付款</p>
          <span className="iconfont">&#xe64c;</span>
        </NavLink>
        <NavLink to="/">
          <img src="https://m.wowdsgn.com/static/img/waite-delivery.png" />
          <p>待发货</p>
          <span className="iconfont">&#xe64c;</span>
        </NavLink>
        <NavLink to="/">
          <img src="https://m.wowdsgn.com/static/img/waite-goods.png" />
          <p>待收货</p>
          <span className="iconfont">&#xe64c;</span>
        </NavLink>
        <NavLink to="/">
          <img src="https://m.wowdsgn.com/static/img/finished.png" />
          <p>待评论</p>
          <span className="iconfont">&#xe64c;</span>
        </NavLink>
        <NavLink to="/">
          <img src="https://m.wowdsgn.com/static/img/returns.png" />
          <p>退换货</p>
          <span className="iconfont">&#xe64c;</span>
        </NavLink>
      </div>
      <div className={css.sale}>
        <NavLink to="/" className={css.title}>我的收藏
            <span className="iconfont">&#xe64c;</span>
        </NavLink>
        <NavLink to="/" className={css.title}>我的礼券
            <span className="iconfont">&#xe64c;</span>
        </NavLink>
        <NavLink to="/" className={css.title}>客服电话
          <i>周一至周五9:00-18:30</i>
          <span className="iconfont">&#xe64c;</span>
        </NavLink>
      </div>

    </div>
  }
}

export default Wd