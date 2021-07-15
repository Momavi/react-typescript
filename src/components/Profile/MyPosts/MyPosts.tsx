import React from 'react';
import './MyPosts.scss';
import Post from './Post/Post';

function MyPosts(props: any) {

  let postsElements = props.posts.map((p: any) => <Post message={p.message} likesCounter={p.likesCounter} />);
  let newPostElement: any = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
  }
  return (
    <div>
      My posts
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <button onClick={() => { addPost }}>Add post</button>
      </div>
      <div className="posts">
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
