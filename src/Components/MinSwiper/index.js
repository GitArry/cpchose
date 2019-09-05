import React,{Component} from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'


class MinSwiper extends Component{

  state={
    datalist:[]
  }


  componentDidMount(){

        axios({
          url:'/v2/page?pageId=1&tabId=10005&currentPage=1&pageSize=8&_=1566873416766',
          headers:{
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY'
          }
        }).then(res=>{
          console.log(res.data.data.modules[1].moduleContent.products)
          this.setState({
            datalist:res.data.data.modules[1].moduleContent.products
          })
          new Swiper('.a', {
        //               loop: true,     //循环
                      slidesPerView: 3.5,    //一页多个效果
                      spaceBetween: 10,
        //               autoplay:{      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
        //                   delay: 2500,
        //                   disableOnInteraction: false,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
        //               },
        //               pagination: {
        //                   el: '.swiper-pagination',
        //                   clickable: true,    // 允许点击跳转
        //               },
        //               navigation: {
        //                   nextEl: '.swiper-button-next',
        //                   prevEl: '.swiper-button-prev',
        //               },
                  });
        })

                
      

        }

    render() {
              return (

                    
              <div className="swiper-container a">
                  <div className="swiper-wrapper">
                    {this.state.datalist.map(item=><div className="swiper-slide" key={item.productId}>
                      <img src={item.productImg} style={{width:'100%'}}></img>
                      <p style={{color:'gray', overflow:'hidden', fontSize:'10px', whiteSpace:'nowrap',textOverflow:'ellipsis' }}>{item.productName}</p>
                      <span style={{fontSize:'10px'}}>￥{item.sellPrice}</span>
                    </div>
                    )}

                    
                  </div>
                  <div className="swiper-pagination"></div>
                  
              </div>  
                        
                
                        
                                
                        )
          }
    }
export default MinSwiper