import React from 'react'
import axios from 'axios'
import Detailheader from './Detailheader/index'
import Swiper from './Swiper/index'
import Biaotou from './Biaotu'
import css from './index.module.scss'

class Detail extends React.Component{
    state={
        datalist:[]
    }
    componentDidMount(){
        axios({
            url:
              "/pages/category/21?currentPage=1&sort=onShelfTime&order=desc&_=1566788794696",
        }).then(res=>{
            console.log(res.data.data)
            this.setState({
                datalist: res.data.data
            })
        })
    }
    render(){
        return <div>
                    <Detailheader></Detailheader>
                    <Swiper></Swiper>
                    <Biaotou></Biaotou>
        <div className={css.box}>            
            <ul>
                {
                    this.state.datalist.map((item,index)=>
                        <li key={index} onClick={()=>this.handleClick(item.parentProductId)}>
                            <img src={item.productImg} style={{width:"100%"}}/>
                            <p>{item.productTitle}</p>
                            <span>￥{item.sellPrice}</span>
                        </li>
                        )
                }

            </ul>

         </div>
        </div>
    }
     handleClick(id) {
       console.log("click",id)
       console.log(this.props.history)
       this.props.history.push(`/Details/${id}`)
     }

}
export default Detail