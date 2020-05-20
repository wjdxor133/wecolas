import React from "react";
import "./Comment.scss";

class Comment extends React.Component {
  render() {
    return (
      <li className="Comment">
        <span>
          <a className="userId" href="">
            {this.props.userId}
          </a>
        </span>
        <span>{this.props.commentText}</span>
      </li>
    );
  }
}

export default Comment;
