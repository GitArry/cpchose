import React from 'react';
import './App.css';
import Tabbar from './Components/Tabbar'
// import Detail from './Views/Detail';

class App extends React.Component{
  render(){
    return <div>
      <Tabbar></Tabbar>
       {this.props.children}
    </div>
  }
}


export default App;
