import React, { forwardRef } from "react";
import "../../assets/css/custom.css";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import createSvgIcon from "@mui/icons-material/utils/createSvgIcon";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
      <div className="post__avatar">
          <img src={avatar} alt={username}></img>
      </div>

        
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          { image ? (<img src={image} alt="" />) : (<div></div>) }
          
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" className="button"/>
            <RepeatIcon fontSize="small" className="button"/>
            <FavoriteBorderIcon fontSize="small" className="button"/>
            <PublishIcon fontSize="small" className="button"/>
          </div>
        </div>
      </div>
    );
  }
);

export default Post;