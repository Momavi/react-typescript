import avatar from '../../../../assets/avatar.png';
import like from '../../../../assets/like.svg';
import share from '../../../../assets/share.svg';

function Post(props: { message: string, likesCounter: number }) {
  return (
    <div className="posts__wrapper">
      <div className="posts__item">
        <img className="posts__item-img" src={avatar} alt="avatar" />
        <p className="posts__item-text">{props.message}</p>
      </div>
      <div className="posts__social">
        <a className="posts__social-like" href="#!">
          <span className="posts__social-like-counter">{props.likesCounter}</span>
          <img className="posts__social-like-link" src={like} alt="like" />
        </a>
        <a className="posts__social-share" href="#!">
          <img className="posts__social-share-link" src={share} alt="share" />
        </a>
      </div>
    </div>
  );
}

export default Post;