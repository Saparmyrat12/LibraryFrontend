import React from 'react';
import PropTypes from 'prop-types';

function Table({posts, deletePost}) {
    return(
        <table className="table table-striped">
            <thead>
                <tr>
                    <th className="text-center">Title</th>
                    <th className="text-center">Body</th>
                    <th className="text-center">Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts.map((post, index) => {
                        return <tr key={index}>
                            <td className="text-center">{post.title}</td>
                            <td className="text-center">{post.body}</td>
                            <td className="text-center"><button className="btn btn-outline-danger" onClick={() => deletePost(post.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    );
}

Table.propTypes = {
    posts: PropTypes.array,
    deletePost: PropTypes.func,
}

Table.defaultProps = {
    posts: [],
    deletePost: () => {},
}

export default Table;