import React from 'react';
import axios from 'axios';
import css from './index.module.scss';
// import Swiper from '../../../Components/Swiper'
import NewSwiper from '../../../Components/NewSwiper/index'

class Activity extends React.Component {

  

  state = {
    datalist:[],
    imgSrc:""
  }

  componentDidMount(){
    axios.get("/v2/page?pageId=1&tabId=1&currentPage=1&pageSize=8&_=1566542114655").then(res=>{
      this.setState({
        datalist:res.data.data.modules.slice(1,6),
      })
      console.log(this.state.datalist);
    })
  }
  render() {

    return <div>
      <NewSwiper></NewSwiper>
        <div className ={css.all}>{
             
              this.state.datalist.map((item,index)=>{

                    return<div key={index} className={css.lists}>
                            <div className={css.backgroundC}></div>
                            <div className={css.listTitle}>{item.moduleName}</div>
                            <div className={css.listPworld}>{item.moduleDescription}</div>
                            <img src={item.moduleContent.banners[0].bannerImgSrc} className={css.listimg}/>
                      </div>
                    
                  })
          }
        </div>
        

    </div>
  }
}


export default Activity