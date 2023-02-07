import React, { useState } from "react";
import PropTypes from "prop-types";
import "./post.css";

// "border: 1px solid #eee;padding: 20px;margin-left: 10px"
const Post = ({ url, name, species, gender }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const boxStyle = {
    background: `url("${url}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: isHover ? "left" : "center",
    backgroundSize: isHover ? "600px" : "300px"
  };

  return (
    <div
      style={boxStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      class="card card0"
    >
      <div class="border">
        <h2>{name}</h2>
        <h4>species:{species}</h4>
        <h4>gender:{gender}</h4>
        <div class="icons">
          <i class="fa fa-codepen" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-dribbble" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-facebook" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};
Post.propTypes = {
  url: PropTypes.string,
  gender: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string
};
Post.defaultProps = {
  url:
    "https://i.pinimg.com/originals/28/d2/e6/28d2e684e7859a0dd17fbd0cea00f8a9.jpg",
  species: "",
  name: "",
  gender: ""
};

export default Post;
