import React from 'react'
import css from '../Detailheader/index.module.scss'

class Biaotou extends React.Component{
    render(){
        return <div className={css.hd}>
            <ul className={css.headerline}>
            <li className={css.on}><a href="">上新</a></li>
            <li className={css.liselect}><a href="">销量</a></li>
            <li className={css.array}><a href="">价格</a></li>
            </ul>
        </div>
    }
}
export default Biaotou