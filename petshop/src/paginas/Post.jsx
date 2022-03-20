import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { busca } from '../api/api';
import '../assets/css/post.css';

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    busca(`/posts/${id}`, setPost);
  }, [id]);

  return (
    <main className='container flex flex--centro'>
      <article className='cartao post'>
        <h2 className='cartao__titulo'>{post.title}</h2>
        <p className='carta__texto'>{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
