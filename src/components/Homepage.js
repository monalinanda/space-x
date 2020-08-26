import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="homepage-container">
      <div className="homepage-wrapper">
        <h1>SpaceX</h1>
        <div className="button-wrapper">
          <Link to="/spaceX/history" className="item  button">
            History
          </Link>
          <Link to="/spaceX/payloads" className="item button">
            Address
          </Link>
        </div>
      </div>
    </div>
  );
}
