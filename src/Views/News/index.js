import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import css from './index.module.scss'
import '../../assets/iconfont/iconfont.css'

class News extends Component {
  render() {
    return <div>
      <div className={css.header}>
        <NavLink to="/">
          <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/home-07bdcdd36c9df74ef30110623d2d708b.png" className={css.icon} />
        </NavLink>
        <h2>消息中心</h2>
        <NavLink to="/">
          <img src="https://m.wowdsgn.com/static/img/bottom-tap-icon/me.png" className={css.icon} />
        </NavLink>
      </div>
      {/* //message1 */}
      <div className={css.messageInfor}>
        <img src="https://m.wowdsgn.com/static/img/official_message.png" className={css.messageicon} />
        <div className={css.messageInforRight}>
          <div className={css.messageInforRightTop}>
            <span>尖叫精选</span>
            <NavLink to="/">
              <span className="iconfont">&#xe64c;</span>
            </NavLink>
          </div>
          <NavLink to="/">
            <p className={css.messageflag}>一个国外妈妈坚持日记2年，温馨洋气的家其实根本就不贵！</p>
            <p className={css.messagetime}>22小时前</p>
          </NavLink>
        </div>
      </div>
      {/* message2 */}
      < div className = {css.messageInfor} >
        <img src="https://m.wowdsgn.com/static/img/system_message.png" className={css.messageicon} />
        <div className={css.messageInforRight}>
          <div className={css.messageInforRightTop}>
            <span>系统通知</span>
            <NavLink to="/">
              <span className="iconfont">&#xe64c;</span>
            </NavLink>
          </div>
          <NavLink to="/">
            <p className={css.messageflag}>欢迎加入尖叫设计，我们已将9张优惠券送入您的账户中，请查收</p>
            < p className = {css.messagetime}> 1 天前</p>
          </NavLink>
        </div>
      </div>
    </div>
  }
}

export default News