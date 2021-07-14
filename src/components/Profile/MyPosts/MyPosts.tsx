import './MyPosts.scss';
import Post from './Post/Post';

function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="posts">
        <Post message="hi, how are you" likesCounter={4} />
        <Post message="It's my first post" likesCounter={7}/>
        <Post message="Mda kak ze mnogo koda i papok" likesCounter={104}/>
      </div>
    </div>

  );
}

export default MyPosts;