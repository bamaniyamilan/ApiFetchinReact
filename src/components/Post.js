import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";

const Post = () => {
  const [users, setUsers] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <h1>
          <center>Api Fetching of Users Post</center>
        </h1>
        <div className="row">
          {users.map((user) => {
            return (
              <div className="col-md-3">
                <PostItem id={user.id} title={user.title} body={user.body} />
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Post;
