import ReactHtmlParser from 'react-html-parser';
import avatar from '../img/avatar.jpeg';

const Comment = (comment) => {
    console.log(comment);
    return(
        <li className="comment">
            <img src={avatar} className="avatar" />
            <div className="content-wrapper">
                <h4 className="author">{comment.author_name}</h4>
                <time className="date">{new Date(comment.date).toLocaleString()}</time>
                <div className="content">{ReactHtmlParser(comment.content.rendered)}</div>
            </div>

        </li>
    )
}

export default Comment;