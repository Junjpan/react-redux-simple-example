import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {connect} from "react-redux";
import {fetchPost} from '../action/postAction.js'

class Post extends Component { 
  componentWillMount(){
    this.props.fetchPost();
  }

  componentWillReceiveProps(a){
    if (a.post){
      this.props.posts.unshift(a.post)
    }


  }
  render() {
  const allPosts=this.props.posts.map(data=>{
    return(<div key={data.id}>
     <h3>{data.title}</h3>
     <p>{data.body}</p>
    </div>)
  });

    return (
      <div>
        <h1>POST</h1>
        {allPosts}
      </div>
    )
  }
}

const mapStateToProps=state=>({//bring the state from redux
  posts:state.allpost.items,
  post:state.allpost.item,
});

Post.propTypes={
fetchPost:PropTypes.func.isRequired,
posts:PropTypes.array.isRequired,
post:PropTypes.object,

}

export default connect(mapStateToProps,{fetchPost})(Post);// I think connnect is pass the function as props to componemnt Post