import React from "react";

const Header = props => (
  <div className="header">
    <div className="title">Lemon</div>
    <div className="scores">
      Score: {props.currentScore} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;