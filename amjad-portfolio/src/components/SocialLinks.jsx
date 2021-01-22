import React from 'react';

const SocialLinks = (props) => {
  return (
    <div className="social">
      <a href="https://www.linkedin.com/in/alsamman-amjad/" target="_blank" rel="noopener noreferrer" title="Link to author's linkedin profile">
        {' '}
        <i class="fab fa-linkedin" />
      </a>
      <a id="profile-link" href="https://github.com/AmjadWebDev" target="_blank" rel="noopener noreferrer" title="Link to author's GitHub Profile">
        {' '}
        <i className="fab fa-github" />
      </a>
    </div>
  );
};

export default SocialLinks;
