import React from "react";
import Header from "../../components/Header";
import Feed from "../../components/Feed";
import StroyItem from "../../components/StoryItem";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <>
        <Header his={this.props} />
        <div className="Main">
          {/* header */}
          <main>
            {/* main-left */}
            <div className="main-left">
              <Feed />
              <Feed />
            </div>
            {/* main-left */}
            {/* main-right */}
            <div className="main-right">
              <div className="userInfo">
                <div className="user">
                  <img
                    src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/25007874_506309469752451_193908878537129984_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=7rxRlThP888AX_zNjnD&oh=0f775fe01c91784c896f46107c5ff3f6&oe=5ED16CF6"
                    alt="사용자"
                  />
                  <div className="user-text">
                    <span className="user-id">
                      <b>ljtaek2</b>
                    </span>
                    <span className="user-name">정택</span>
                  </div>
                </div>
                <div className="story">
                  <div className="story-header">
                    <span className="story-show">스토리</span>
                    <span className="all-show">
                      <b>모두 보기</b>
                    </span>
                  </div>
                  <div className="story-items">
                    <StroyItem />
                    <StroyItem />
                    <StroyItem />
                    <StroyItem />
                  </div>
                </div>
                <div className="member">
                  <div className="member-header">
                    <span className="member-text">회원님을 위한 추천</span>
                    <span className="member-show">모두 보기</span>
                  </div>
                  <div className="member-items">
                    {/* <!-- 멤버 항목 1--> */}
                    <div className="member-item1">
                      <img
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/80347681_449199102423938_6437971580873080832_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=C3GeJUqbLBQAX_mkblA&oh=f8cacc31289d1c80ea4aaa3e18751e5d&oe=5ED5A4D8"
                        alt="팔로우 1"
                      />
                      <div className="member-info">
                        <div className="member-userId">zws941029</div>
                        <div className="member-following">
                          bagbyeonghun2650님 외 3명이 팔로우합니다
                        </div>
                      </div>
                      <div className="followBtn">
                        <span>팔로우</span>
                      </div>
                    </div>
                    {/* <!-- 멤버 항목 2--> */}
                    <div className="member-item2">
                      <img
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/80347681_449199102423938_6437971580873080832_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=C3GeJUqbLBQAX_mkblA&oh=f8cacc31289d1c80ea4aaa3e18751e5d&oe=5ED5A4D8"
                        alt="팔로우 2"
                      />
                      <div className="member-info">
                        <div className="member-userId">zws941029</div>
                        <div className="member-following">
                          bagbyeonghun2650님 외 3명이 팔로우합니다
                        </div>
                      </div>
                      <div className="followBtn">
                        <span>팔로우</span>
                      </div>
                    </div>
                    {/* <!-- 멤버 항목 2--> */}
                    <div className="member-item3">
                      <img
                        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/80347681_449199102423938_6437971580873080832_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=C3GeJUqbLBQAX_mkblA&oh=f8cacc31289d1c80ea4aaa3e18751e5d&oe=5ED5A4D8"
                        alt="팔로우 3"
                      />
                      <div className="member-info">
                        <div className="member-userId">zws941029</div>
                        <div className="member-following">
                          bagbyeonghun2650님 외 3명이 팔로우합니다
                        </div>
                      </div>
                      <div className="followBtn">
                        <span>팔로우</span>
                      </div>
                    </div>
                  </div>
                </div>
                <footer>
                  <div className="footer-info">
                    <ul>
                      <li>
                        <a href="#">소개</a>
                      </li>
                      <li>
                        <a href="#">도움말</a>
                      </li>
                      <li>
                        <a href="#">홍보 센터</a>
                      </li>
                      <li>
                        <a href="#">API</a>
                      </li>
                      <li>
                        <a href="#">채용 정보</a>
                      </li>
                      <br />
                      <li>
                        <a href="#">개인정보처리방침</a>
                      </li>
                      <li>
                        <a href="#">약관</a>
                      </li>
                      <li>
                        <a href="#">위치</a>
                      </li>
                      <li>
                        <a href="#">인기 계정</a>
                      </li>
                      <li>
                        <a href="#">해시태그</a>
                      </li>
                      <br />
                      <li>
                        <a href="#">언어</a>
                      </li>
                    </ul>
                  </div>
                  <div className="footer-text">
                    <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
                  </div>
                </footer>
              </div>
            </div>
            {/* main-right */}
          </main>
        </div>
      </>
    );
  }
}

export default Main;
