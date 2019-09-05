import React from 'react';
import axios from 'axios';
import css from '../Furniture/index.module.scss'
import NewSwiper from '../../../Components/NewSwiper/index-2'
import MinSwiper from '../../../Components/MinSwiper/index-1'


class Home extends React.Component { 

  state = {
    datalist:[]
  }

  componentDidMount(){
    axios.get("/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1566802014202").then(res=>{
      console.log(res.data);
      this.setState({
        datalist:res.data.data.modules.slice(2,8)
      })
      console.log(this.state.datalist)
    })                      
  }

  render() {
    return <div>
                  <NewSwiper></NewSwiper> 
                  

<div className={css.listbox} >
              {
                  this.state.datalist.map((item,index)=>
                      
                      <div className={css.listbox1} key={index} >
                        <div className={css.boxline}></div>
                        <div className={css.listName}>{item.moduleName}</div>
                        <div className={css.listds}>{item.moduleDescription}</div>

                        <MinSwiper></MinSwiper>
                        {
                              item.moduleContent.products.length>6?
                              item.moduleContent.products.slice(0,6).map((value,index)=>
                                
                                  <div className={css.thingBox} key={index} >
                                    <img src={value.productImg}/>
                                    <div className={css.thingName}>{value.productName}</div>
                                    <div className={css.price} >￥{value.sellPrice}</div>
                                  </div>
                                ) 
                            :
                            item.moduleContent.products.map((value,index)=>
                            
                            <div className={css.thingBox} key={index} >
                              <img src={value.productImg} />
                              <div className={css.thingName}>{value.productName}</div>
                              <div className={css.price} >￥{value.sellPrice}</div>
                            </div>
                          )
                          }
                       
                      </div>
                    )
                }
              </div>
          </div>
          
  }

}

export default Home