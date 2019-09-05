import React from 'react';
import axios from 'axios';
import css from '../Furniture/index.module.scss'

class Recommend extends React.Component {

  state = {
    datalist:[]
  }

  componentDidMount(){
    axios.get("/v2/page?pageId=1&tabId=10010&currentPage=1&pageSize=8&_=1566802878386").then(res=>{
      console.log(res);
      this.setState({
        datalist:res.data.data.modules.slice(1,5)
      })
      console.log(this.state.datalist)
    })
  }

  render() {
    return <div>
      <img src="https://img.wowdsgn.com/page/banners/80cd106d-9d5d-49b0-95e0-0fba76916626_2dimension_750x500.jpg?imageslim"/>
      <div className={css.listbox}>
              {
                  this.state.datalist.map((item,index)=>
                      
                      <div className={css.listbox1} key={index}>
                        <div className={css.boxline}></div>
                        <div className={css.listName}>{item.moduleName}</div>
                        <div className={css.listds}>{item.moduleDescription}</div>
                        {
                              item.moduleContent.products.length>6?
                              item.moduleContent.products.slice(0,6).map((value,index)=>
                                
                                  <div className={css.thingBox} key={index}>
                                    <img src={value.productImg}/>
                                    <div className={css.thingName}>{value.productName}</div>
                                    <div className={css.price} >￥{value.sellPrice}</div>
                                  </div>
                                )
                            :
                            item.moduleContent.products.map((value,index)=>
                            
                            <div className={css.thingBox} key={index}>
                              <img src={value.productImg}/>
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

export default Recommend