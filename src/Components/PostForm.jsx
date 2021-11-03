import React from 'react';

function PostForm({setTitle, setBody, addPost}) {
    return(
        <div className="col-4 row mt-4">
            <div className="col-12 row">
                <p className="h4 col-4 row d-flex">Title</p>
                <div className="col-8 row">
                    <input 
                        type="text"
                        className="form-control-lg"
                        onChange={setTitle}
                    />
                 </div>
            </div>
            <div className="col-12 row mt-1">
                <p className="h4 col-4 row d-flex">Body</p>
                <div className="col-8 row">
                    <input 
                        type="text" 
                        className="form-control-lg"
                        onChange={setBody}
                    />
                </div>
            </div>
            <div className="col-6 row mt-2"><button className="btn-lg btn-primary" onClick={() => addPost()}>Add post</button></div>
        </div>
    );
}

export default PostForm;