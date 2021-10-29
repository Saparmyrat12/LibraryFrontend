import React from 'react';

function PostForm({setTitle, setBody, addPost}) {
    return(
        <div className="col-12 row">
            <div className="col-12 row">
                <p className="h4 d-flex">Title</p>
                <div className="col-3 row">
                    <input 
                        type="text"
                        className="form-control-lg"
                        onChange={setTitle}
                    />
                 </div>
            </div>
            <div className="col-12 row">
                <p className="h4 d-flex">Body</p>
                <div className="col-3 row">
                    <input 
                        type="text" 
                        className="form-control-lg"
                        onChange={setBody}
                    />
                </div>
            </div>
            <button className="col-2 row btn-lg btn-primary" onClick={() => addPost()}>Add post</button>
        </div>
    );
}

export default PostForm;