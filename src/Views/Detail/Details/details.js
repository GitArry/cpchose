import React from 'react'
import axios from 'axios'
import NewSwiper from '../../../Components/NewSwiper/index-2';


class Details extends React.Component{
    state ={
        datalist:[]
    }
    componentDidMount(){
        axios.get("https: //m.wowdsgn.com/itemdetail/spuInfos/10206?_=1566950993115").then(res=>{
            console.log(res.data);
            // this.setState({
            //     datalist:res.data.data.
            // })
            console.log(this.state.datalist)
        })
    }
    render(){
        return <div>
            <NewSwiper></NewSwiper>
            <div className={CSS.box}>
                {/* {
                    this.state.datalist.map((item,index)=>

                    )
                } */}

            </div>
        </div>
    }
}
export default Details
