import React, { useState } from 'react'
import Image from '../image/Image'
import './comment.css'
import EmojiPicker from 'emoji-picker-react'

const Comments = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='comments'>
            <div className="commentList">
                <div className="commentCount">5 comments</div>
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">Luyen Kieu</span>
                        <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span className="commentTime">1h</span>
                    </div>
                </div>

                {/* Comment */}
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">Luyen Kieu</span>
                        <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span className="commentTime">1h</span>
                    </div>
                </div>
                {/* Comment */}
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">Luyen Kieu</span>
                        <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span className="commentTime">1h</span>
                    </div>
                </div>
                {/* Comment */}
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">Luyen Kieu</span>
                        <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span className="commentTime">1h</span>
                    </div>
                </div>
                {/* Comment */}
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">Luyen Kieu</span>
                        <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span className="commentTime">1h</span>
                    </div>
                </div>
                {/* Comment */}
                <div className="comment">
                    <Image path="/general/noAvatar.png" alt="" />
                    <div className="commentContent">
                        <span className="commentUsername">Luyen Kieu</span>
                        <p className='commentText'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span className="commentTime">1h</span>
                    </div>
                </div>
            </div>
            <form className='commentForm'>
                <input type="text" placeholder="Add a comment" />
                <div className="emoji">
                    <div onClick={() => setOpen(prev => !prev)}>🤔</div>
                    {open && (
                        <div className="emojiPicker">
                            <EmojiPicker />
                        </div>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Comments