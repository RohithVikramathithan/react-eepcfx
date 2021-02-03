import React from 'react';

export default class Header extends React.Component{

constructor(props)
{
  super();
  this.state={name:'Well Hello newbie',count:0};
  this.props={count:0};
}
update(e)
{
 this.setState({name:e.target.value});
}
changeValue(e)
{
  var newCount=this.state.count+1;
this.setState({count:newCount})
}
render()
{
  return(
    <div>
   <header>Hello ,{this.state.name}</header>
   <input type='text' value={this.state.name} onChange={this.update.bind(this)} />
   <header>counter = {this.state.count}</header>
   <button onClick={this.changeValue.bind(this)}>click for counter</button>
   </div>
  );
}
}
