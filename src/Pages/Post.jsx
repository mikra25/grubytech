import {useParams} from 'react-router-dom';
import {useEffect, useState} from "react";
import api from "../api/api";
import PostContent from "../Components/PostContent";
import CommentForm from "../Components/CommentForm";


const NotFound = () => {
    return(
        <>
            404 Error
        </>
    )
}


const Post = () => {
    const {slug} = useParams();
    const [notFound, setNotFound] = useState(false);
    const [post, setPost] = useState(null);

    useEffect(() => {
        api.get(`/posts?_embed&slug=${slug}`).then(response => {
            if(!response.data.length){
                setNotFound(true);
            }
            else{
                console.log(response.data[0])
                setPost({
                    id: response.data[0].id,
                    title: response.data[0].title.rendered,
                    image: response.data[0]._embedded['wp:featuredmedia'][0].source_url,
                    content: response.data[0].content.rendered
                });
            }
        })
    }, [])

    return(
        <>
            {notFound && <NotFound /> }
            {post &&
                <>
                    <PostContent {...post} />
                    <CommentForm id={post.id} />
                </>
            }
        </>
    )
}

export default Post;