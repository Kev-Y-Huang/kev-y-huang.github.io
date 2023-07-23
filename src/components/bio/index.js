import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

function Bio({ author }) {
  if (!author) return null;
  const { bio, social, name } = author;
  return (
    <div className="bio">
      <div className="introduction english">
        <p className="title">
          Hi{' '}
          <span role="img" aria-label="Hi">
            👋
          </span>
          <br />
          my name is
          <br />
          <strong>{name}</strong>
          .<br />
        </p>
        <p className="description">
          I'm a{' '}
          <strong>
            <ReactRotatingText items={bio.roles} />
          </strong>
          <br />
        </p>
        <div className="social-links">
          <IconButtonBar links={social} />
        </div>
      </div>
      <div className="thumbnail-wrapper">
        <Image style={{ width: 250, height: 250, borderRadius: "50%" }} src={bio.thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
}

export default Bio;
