import React,{Component} from 'react'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
import axios from 'axios'


class NewSwiper extends Component{

  state={
    datalist:[]
  }


  componentDidMount(){

        axios({
          url:'/v2/page?pageId=1&tabId=10006&currentPage=1&pageSize=8&_=1566873120089',
          headers:{
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY'
          }
        }).then(res=>{
          console.log(res.data.data.modules[0].moduleContent.banners)
          this.setState({
            datalist:res.data.data.modules[0].moduleContent.banners
          })
          new Swiper('.e', {
                      loop: true,     //循环
                    //   slidesPerView: 3,    //一页多个效果
                    //   spaceBetween: 30,
                      autoplay:{      //自动播放，注意：直接给autoplay:true的话，在点击之后不能再自动播放了
                          delay: 500,
                          disableOnInteraction: false,    //户操作swiper之后，是否禁止autoplay。默认为true：停止。
                      },
                      pagination: {
                          el: '.swiper-pagination',
                          clickable: true,    // 允许点击跳转
                      },
                      navigation: {
                          nextEl: '.swiper-button-next',
                          prevEl: '.swiper-button-prev',
                      },
                  });
        })

                
      

        }

    render() {
              return (

                    
              <div className="swiper-container e">
                  <div className="swiper-wrapper">
                    {this.state.datalist.map(item=><div className="swiper-slide" key={item.id}>
                      <img src={item.bannerImgSrc} style={{width:'100%'}}></img>
                    </div>
                    )}

                    
                  </div>
                  <div className="swiper-pagination"></div>
                  
              </div>  
                        
                
                        
                                
                        )
          }
    }
export default NewSwiper