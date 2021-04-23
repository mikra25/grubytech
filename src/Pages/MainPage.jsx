import {useState, useEffect} from "react";
import api from "../api/api";
import PostContent from "../Components/PostContent";

const MainPage = () => {

    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
         api.get('/posts?_embed').then(({data}) => {
             setPosts(data.map(post => {
                 return {
                     id: post.id,
                     title: post.title.rendered,
                     excerpt: post.excerpt.rendered,
                     image: post._embedded['wp:featuredmedia'][0].source_url,
                     slug: post.slug,
                 }
             }));
         })

    }, [page]);

    return(
        <>
            {posts.map(post => <PostContent key={post.id} {...post} /> )}
        </>
    )
}

export default MainPage;