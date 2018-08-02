import React from "react";

import Bar from "./Bar.js";

class App extends React.Component{

  constructor(){
    super();
    this.state={
      "cart":[
        {"id":1,"name":"《活着》","price":69,"amount":1},
        {"id":2,"name":"《平凡的世界》","price":89,"amount":1},
        {"id":3,"name":"《影响力》","price":34,"amount":1},
        {"id":4,"name":"《人性的弱点》","price":54,"amount":1},
        {"id":5,"name":"《明朝那些事儿》","price":76,"amount":1},
        {"id":6,"name":"《许三观卖血记》","price":67,"amount":1}
      ]
    }

  }
    minus(id){
      this.setState({
        "cart":this.state.cart.map((item)=>{
          if(item.id!=id){return item;}
          return {...item,"amount":item.amount-1}
        })
      }
      );
    }

    adds(id){
      this.setState({
        "cart":this.state.cart.map((item)=>{
          if(item.id!=id){return item;}
          return {...item,"amount":item.amount+1}
        })
      }
      );
    }

       delete(id){
         this.setState({
         "cart":this.state.cart.filter((item)=>{
           return item.id!=id;
         })
       })

       }

     all(){
       var alls=0;
       this.state.cart.forEach((item)=>{alls += item.amount*item.price;})
       return alls;
     }
  render(){
       return <div><div className="bt">购物车</div>
         {JSON.stringify(this.state.cart)}
         {this.arr=this.state.cart.map((item,index)=>{
            return  <Bar name={item.name} price={item.price} amount={item.amount} id={item.id}
            adds={this.adds.bind(this)} delete={this.delete.bind(this)} minus={this.minus.bind(this)}></Bar>
         })}
         <div className="dbg"></div>
          <h1>总价：{this.all()}</h1>
         </div>
  }
}

export default App;
