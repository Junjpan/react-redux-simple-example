import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createPost} from '../action/postAction.js';

class Postform extends Component {
  constructor(props){
    super(props);
    this.state={
      title:"",
      body:" "
    };
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

onChange(e){
this.setState({[e.target.name]:[e.target.value]});
}



onSubmit(e){
  e.preventDefault();
  const newPost={title:this.state.title,body:this.state.body};
  //call action
  this.props.createPost(newPost);
}


  render() {
    return (
      <div>
       <h3>ADD POST </h3>
       <form onSubmit={this.onSubmit}>
         <div>
         <label>TITLE</label><br /> 
         <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
         </div>
         <br />
         <div>
         <label>BODY</label><br />
         <textarea name="body" onChange={this.onChange} value={this.state.body}/>
         </div><br />
         <button type="submit">SUMBIT</button>
         </form>
      </div>
    )
  }
}

Postform.propTypes={
  createPost:PropTypes.func.isRequired,
  
}
export default connect(null,{createPost})(Postform);