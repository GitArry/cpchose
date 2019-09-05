import React from 'react'
import Header from './Header'
// import axios from 'axios'
import css from '../Category/Header/index.module.scss'
class Category extends React.Component {
    state = {
      datalist: ["沙发", "椅凳", "床", "柜架", "餐具", "茶几和边桌", "书桌"]
    }
    state2 = {
      datalist: ["灯具", "用餐", "时尚生活", "收纳", "烹饪", "纺织品", "家饰","卫浴",]
    }
    // componentDidMount(){
    //     axios.get("/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1566609934219").then(res=>{
    //         console.log(res.data);
    //     })
    // }
  render(){
     return <div className={css.all}>
        <Header></Header>
        < img src = "https://m.wowdsgn.com/static/img/furniture.png" />

        <ul>
            {
                this.state.datalist.map(item=>
                        <li key={item} onClick={()=>this.handleClick(item)}><span>{item}</span><p>》</p></li>
                    )
            }
        </ul>
        < img src = "https://m.wowdsgn.com//static/img/household.png"/>
        <ul>
         { this.state2.datalist.map(item=>
            <li key={item} onClick={()=>this.handleClick(item)}><span>{item}</span><p>》</p></li>
                )
        }

      </ul>
    </div>
  }
  handleClick(id){
      console.log("click",id)
      console.log(this.props.history)
      this.props.history.push(`/detail/${id}`)
  }
}

export default Category