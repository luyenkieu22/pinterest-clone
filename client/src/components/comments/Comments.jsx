import './comment.css'
import { useQuery } from '@tanstack/react-query'
import apiRequest from '../../utils/apiRequest'
import Comment from './Comment'
import CommentForm from './CommentForm'

const Comments = ({ id }) => {

    const { isPending, error, data } = useQuery({
        queryKey: ["comments", id],
        queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
    });

    if (isPending) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data) return <div>Comments not found!</div>;

    return (
        <div className='comments'>
            <div className="commentList">
                <span className="commentCount">
                    {data.length === 0 ? "No comments" : data.length + " comments"}
                </span>
                {/* Comment */}
                {data.map((comment) => (
                    <Comment comment={comment} key={comment._id} />
                ))}
            </div>
            <CommentForm id={id} />
        </div>
    )
}

export default Comments