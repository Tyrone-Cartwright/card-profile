import React from 'react';

const Likes = () => {
  return (
    <div>
      <a
        className='social'
        target='_blank'
        href='https://twitter.com/this_GuyTyrone'
        rel='noreferrer'
      >
        <i class='fab fa-twitter'></i>
      </a>
      <a
        className='social'
        target='_blank'
        href='https://github.com/Tyrone-Cartwright'
        rel='noreferrer'
      >
        <i class='fab fa-github'></i>
      </a>
      <a
        className='social'
        target='_blank'
        href='https://www.linkedin.com/in/tyrone-cartwright-2370b444/'
        rel='noreferrer'
      >
        <i class='fab fa-linkedin-in'></i>
      </a>
    </div>
  );
};

export default Likes;
