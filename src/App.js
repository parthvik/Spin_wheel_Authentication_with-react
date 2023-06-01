import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Sucess from './components/Sucess';
import Game from './components/Game';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.isReg=false;
    this.inputs={};
    this.loginputs={};
    this.arr2=[];
    this.arr=[];
    this.flag=true;
    this.state = { isReg:this.isReg,inputs:this.inputs,arr:this.arr,flag:this.flag,loginputs:this.loginputs,
    arr2:this.arr2 };
  }
takeInputs(event){
this.inputs[event.target.id]=event.target.value;
this.setState({...this.state,inputs:this.inputs})

}
add(){
this.arr.push(this.inputs);
console.log(this.arr);
this.isReg=!this.isReg;
this.setState({...this.state,isReg:this.isReg});
}
log(event){
  this.loginputs[event.target.id]=event.target.value;
  this.arr2.push(this.loginputs);

}

current(){
this.flag=!this.flag;
for(let key of this.arr){
for(let value of this.arr2){
  if(key.name===value.logname && key.pass===value.logpass){
    this.setState({...this.state,flag:this.flag});
  }
}
}
}


  
  render() {
var login;
if(this.isReg===false){
 login= <Signup inp={this.takeInputs.bind(this)} add={this.add.bind(this)}/>
}
else if(this.flag===true){
  login=<Login log={this.log.bind(this)} current={this.current.bind(this)}/>
}
else{
 login= <Sucess style={style} name={this.inputs.name}/>
}


var style={
  color:'red',
  backgroundColor:'red'
}


return (
      <div>
      { login}
  </div>
    );
  }
}

export default App;

