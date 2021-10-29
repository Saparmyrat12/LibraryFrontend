import React, { useState, useEffect } from 'react';
import Table from './Table';
import PostForm from './PostForm';

function DataListFromSource() {

  const url = "https://jsonplaceholder.typicode.com/posts";
  const [ posts, setPosts ] = useState();
  const [ title, setTitle] = useState();
  const [ body, setBody] = useState();

  useEffect(() => {
    if(posts === undefined)
    { 
      setInterval(() => getPosts(), 5000);
      getPosts();
    }
  });

  const getPosts = () => {
    fetch(url)
    .then(result => result.json())
    .then(result => setPosts(result));
  }

  const deletePost = (id) => {
    console.log("Delete post with id: " + id);
    fetch(url + "/" + id, {
      method: 'DELETE'
    })
    .then(res => console.log(res));
  }

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  }

  const addPost = () => {
    console.log("Add post: Title: " + title + ", Body: " + body);
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
      }),
      headers: {
          "Content-Type": "application/json",
      },
    })
    .then(res => console.log(res));
  }

  return (
    <div className="col-12 row">
      <div className="col-10 row mx-auto">
        <div className="col-12 row mx-auto">
          <PostForm setTitle={handleTitleChange} setBody={handleBodyChange} addPost={addPost}/>
        </div>
        <Table posts={posts} deletePost={deletePost}/>
      </div>
    </div>
  );
}

export default DataListFromSource;
