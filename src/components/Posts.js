import {useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';

export default function Posts() {
  const [posts, setPosts] = useState();

  // TODO: add a side effect function to request posts here

  return (
      <>
        {posts === undefined ?
            <Spinner animation="border" />
            :
            posts.map(post => {
              return (
                  <p key={post.id}>
                    <b>{post.author.username}</b> &mdash; {post.timestamp}
                    <br/>
                    {post.text}
                  </p>
              );
            })
        }
      </>
  );
}