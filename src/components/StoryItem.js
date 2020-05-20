import React from "react";
import "./StoryItem.scss";

function StoryItem() {
  return (
    <div className="StoryItem">
      {/* <!-- div안에 img를 넣고 부모 div한테 flex를 이용해 가운데 정렬하면 깔끔--> */}
      <img
        src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/87230044_713114806113983_690142068407795712_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=qUe9Gua8x5kAX95pWes&oh=17f1775895e2727ba65bbfb7f923ea91&oe=5ED1D843"
        alt="스토리 항목1"
      />
      <div className="story-info">
        <span className="story-user">jjjun_95</span>
        <span className="story-time">55분 전</span>
      </div>
    </div>
  );
}

export default StoryItem;
