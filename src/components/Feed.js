import React from "react";
import more from "../images/more.png";
import heart from "../images/heart.png";
import comment from "../images/comment.png";
import dm from "../images/dm.png";
import bookmark from "../images/bookmark.png";
import Comment from "./Comment";
import "./Feed.scss";

class Feed extends React.Component {
  constructor() {
    super();

    this.state = {
      commentList: [],
      commentText: "",
      userId: "ljtaek2",
      inputLenCheck: false,
      commentBtnColor: "",
      commentBtnBold: "",
    };
  }

  // Input창 댓글 값 확인
  commentState = (event) => {
    if (event.target.value.length === 0) {
      //버튼 활성화
      this.setState({ commentBtnColor: "#0095f6", commentBtnBold: "" });
    } else {
      this.setState({ commentBtnColor: "blue", commentBtnBold: "bold" });
    }
    this.setState(
      {
        commentText: event.target.value,
      },
      () => console.log("commentText", this.state.commentText)
    );
  };

  // 댓글 추가
  commentAdd = () => {
    const commentText = this.state.commentText;
    //const commentArr = [];
    this.state.commentList.push(commentText);
    this.setState({
      commentList: this.state.commentList,
      commentText: "",
    });
    // 댓글 API 연동
    // fetch("http://10.58.5.168:8000/api/user", {
    //   method: "POST",
    //   headers: {
    //     Authorization: "token",
    //   },
    //   body: JSON.stringify({
    //     commentList: this.state.commentList,
    //   }),
    // }).then((res) => res.json())
    // .then((res) => {
    //   this.setState({commentList: res.commentList})
    // });
  };

  render() {
    return (
      <div className="Feed">
        <div className="feed-header">
          <div className="feed-header-item">
            <img
              className="feed-header-img1"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/25007874_506309469752451_193908878537129984_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=7rxRlThP888AX_zNjnD&oh=0f775fe01c91784c896f46107c5ff3f6&oe=5ED16CF6"
              alt="사용자"
            />
            <span>
              <b>ljtaek2</b>
            </span>
            <img className="feed-header-img2" src={more} alt="img-more" />
          </div>
        </div>
        <div className="feed-picture"></div>
        {/* 부모에게 미리 크기를 지정하면 자식의 크기가 더 커졌을 때, px 깨짐 주의 */}
        <div className="feed-icons">
          <div className="feedIcon-left">
            <img src={heart} alt="하트" />
            <img src={comment} alt="말풍선" />
            <img src={dm} alt="쪽지" />
          </div>
          <div className="feedIcon-right">
            <img src={bookmark} alt="북마크" />
          </div>
        </div>
        <div className="feed-bottom">
          <div className="like-text">
            <span>
              <a>lahmjun_94</a>님 <b>여러 명</b>이 좋아합니다
            </span>
          </div>
          <div className="userInfo">
            <span>
              <a className="userId" href="">
                ljtaek2
              </a>
            </span>
            <span>제주도 여행 언제가지?</span>
            <span>더 보기</span>
          </div>
          <div className="commentList">
            <ul>
              {this.state.commentList.map((item, idx) => {
                return (
                  <Comment
                    key={idx}
                    userId={this.state.userId}
                    commentText={item}
                  />
                );
              })}
            </ul>
          </div>
          <div className="feed-time">
            <span>1시간 전</span>
          </div>
        </div>
        <div className="chat-write">
          <div className="chatting">
            <input
              type="text"
              placeholder="댓글 달기..."
              className="chatText"
              onChange={this.commentState}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  this.commentAdd();
                }
              }}
              value={this.state.commentText}
            />
            <button
              type="button"
              className="chatBtn"
              onClick={this.commentAdd}
              style={{
                color: this.state.commentBtnColor,
                fontWeight: this.state.commentBtnBold,
              }}
            >
              게시
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
