import styles from './Post.module.css';
import {useState} from 'react';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRetweet, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons';


const Post = (props) => {
    const [likes, setLikes] = useState(props.user.likes);
    const [isLiked, setIsLiked] = useState(false);

    const onLikeHandler = (event) => {
        if (isLiked === false) {
            setLikes(likes + 1);
            setIsLiked(true);
        }
        else {
            setLikes(likes - 1);
            setIsLiked(false);
        }

    }
    return (
        <div className={styles.post}>

            <div >
                <div className={styles.side}>
                    <Avatar src={`https://avatars.dicebear.com/api/human/${props.user.likes*1000}.svg`} />
                    <div>
                        <div className={styles.info}>
                            <div className={styles.name}>
                                {props.user.name}
                            </div>
                            <div className={styles.icon}>
                                <VerifiedUserIcon />
                            </div>
                            <div className={styles.username}>
                                {props.user.username}
                            </div>
                            <div className={styles.dot}>
                                <span>.</span>
                            </div>
                            <div className={styles.time}>
                                <span>3h</span>
                            </div>

                        </div>
                        <div className={styles.hashtag}>
                            <span>#love #bts #yolo</span>
                        </div>
                    </div>
                </div>

                <div className={styles.image} onClick={onLikeHandler}>
                    <img src={props.user.img} alt='alt-photos'></img>
                </div>
                <div className={styles.actions}>
                    <div className={styles.comment}>
                        <FontAwesomeIcon className={styles.icon} icon={faComment} size="lg" />
                        <span>25k</span>
                    </div>
                    <div className={styles.retweet}>
                        <FontAwesomeIcon className={styles.icon} icon={faRetweet} size="lg" />
                        <span>44.3k</span>
                    </div>
                    <div className={styles.like}>
                        <FontAwesomeIcon onClick={onLikeHandler} className={`${styles.icon} ${isLiked ? styles.liked : ""}`} icon={faHeart} size="lg" />
                        <span>{likes}</span>
                    </div>
                    <div className={styles.share}>
                        <FontAwesomeIcon className={styles.icon} icon={faShareAlt} size="lg" />
                    </div>

                </div>
            </div>

        </div>
    )

}

export default Post;