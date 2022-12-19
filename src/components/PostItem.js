import React from "react";

export default function PostItem(props) {
  const { id, title, body } = props;
  return (
    <div>
      <div className="card">
        <div className="card-header">{id}</div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{body}</p>
          <a href="/" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
