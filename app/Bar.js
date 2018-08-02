import React from "react";

class Bar extends React.Component{
   constructor(){
    super();
  }

  minusp(id){
    if(this.props.amount==1){
      if(confirm("你确定要删除"+this.props.name+"吗？")){
        this.props.delete(this.props.id);
      }
    }
    else{
    this.props.minus(this.props.id);}
  }

  render(){

    return <div>
          <div className="dbg">
        <p className="bg">{this.props.name}</p>
        <p className="bg">{this.props.price}</p>
        <p className="bg">
             <button onClick={()=>{this.minusp(this.props.id)}}>-</button>
             {"  "}
             <input type="text" className="sl" value={this.props.amount}/>
             {"  "}
             <button onClick={()=>{this.props.adds(this.props.id)}}>+</button>
        </p>
        <p className="bg">{(this.props.price)*(this.props.amount)}</p>
        </div>
    </div>
  }
}

export default Bar;
