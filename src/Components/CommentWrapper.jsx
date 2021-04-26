import Comment from "./Comment";
import CommentForm from "./CommentForm";
import api from "../api/api";
import {useEffect, useState} from "react";

const CommentWrapper = ({id}) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        api.get(`/comments?post=${id}`)
            .then(({data}) => {
                setComments(data);
            })
    }, []);

    return(
        <>
            {comments.length > 0 && <ul className="comment-list">
                {comments.map(comment => <Comment key={comment.id} {...comment} />)}
            </ul>}
            {!comments.length && <div className="no-comments">Brak komentarzy! <p className="sub">Dodaj pierwszy i rozpocznij dyskusję.</p></div>}
            <CommentForm id={id} />
        </>
    )




}

export default CommentWrapper;