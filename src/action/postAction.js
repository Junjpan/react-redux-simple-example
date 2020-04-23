import {FETCH_POSTS,NEW_POST} from './type.js';

export const fetchPost=()=>dispatch=>{
   
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>response.json())//fetch return the promise and will give us the result to needed to be match with JSON
    .then(posts=>dispatch({//action
        type:FETCH_POSTS,
        payload:posts
    })
);
};

export const createPost=(newPost)=>dispatch=>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"post",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(newPost)
      })
      .then(result=>result.json())
      .then(data=>dispatch({
          type:NEW_POST,
          payload:data
      }))
};
