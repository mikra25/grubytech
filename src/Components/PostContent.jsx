import {Link} from "react-router-dom";
import Helper from "../helpers/helper";
import ReactHtmlParser from 'react-html-parser';

const PostContent = (post) => {
    const {image, title, excerpt, slug, content} = post;

    return(
        <article className="post">
            <div className="post-image-wrapper">
                <picture>
                    <img className="post-image" src={image} />
                </picture>
            </div>
            <h2><Link to="/" className="post-title">{title}</Link></h2>
            {excerpt && <p className="post-excerpt">{Helper.removeMarkers(excerpt)}</p>}
            {slug && <Link className="read-more" to={slug}>Czytaj dalej</Link>}
            {content && <div>{ReactHtmlParser(content)}</div>}
        </article>
    )
}

export default PostContent;