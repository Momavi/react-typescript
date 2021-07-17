import React from 'react';
import Post from './Post/Post';

import './MyPosts.scss';

function MyPosts(props: any) {
  let postsElements = props.posts.map( (p: {message: string, likesCounter: number}) => <Post message={p.message} likesCounter={p.likesCounter}/>);
  let newPostElement: any = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }
  let onPostChange = () => {
    props.updateNewPostText(newPostElement.current.value);
  }

  return (
    <div>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText} />
        </div>
        <div>
          <button onClick={() => { onAddPost() }}>Add post</button>
        </div>
      </div>
      <div className="posts">
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
