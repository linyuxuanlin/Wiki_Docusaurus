import React from 'react';

// className={'col col--6 margin-bottom--lg'}

export default function TeamMemberProfileCard({
  className,
  name,
  avatar,
  children,
  githubUrl,
  blogUrl
}) {
  return (
    <div className={className}>
      <div className="card card--full-height shadow--md">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={avatar}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <h3 className="avatar__name">{name}</h3>
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {githubUrl && (
              <a className="button button--secondary" href={githubUrl} target="_blank">
                GitHub
              </a>
            )}
            {blogUrl && (
              <a className="button button--secondary" href={blogUrl} target="_blank">
                Blog
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}