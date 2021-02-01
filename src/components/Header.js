import React from 'react';

export default class Header extends React.Component{

constructor(props)
{
  super();
  this.state={name:'Well Hello newbie'}
}
update(e)
{
 this.setState({name:e.target.value});
}
render()
{
  return(
    <div>
   <header>Hello ,{this.state.name}</header>
   <input type='text' value={this.state.name} onChange={this.update.bind(this)} />
   </div>
  );
}
}
