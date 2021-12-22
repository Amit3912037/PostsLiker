import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import PageNumbers from './PageNumbers';
import Post from './Post';

function Pagination({ postsArray, totalPages, postsPerPage }) {
  const params = useParams();
  const currentPage = +params.mypage;

  if (currentPage > totalPages) {
    return (
      <Redirect to='/1' />
    )
  }

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsArray.slice(indexOfFirstPost, indexOfLastPost);


  return (
    <React.Fragment>
     <PageNumbers totalPages={totalPages} />
      {currentPosts.map((user) => (
        <Post key={Math.random()} user={user} />
      ))}
     
    </React.Fragment>
  );
}

export default Pagination;