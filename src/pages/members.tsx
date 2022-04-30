import React from 'react';
import Layout from '@theme/Layout';


import members from '../data/members.data';
import TeamMemberProfileCard from '../components/TeamMemberProfileCard';

function MemberList() {
  return (
    <div className="row">
      {members.map(member => {
        return (
        <TeamMemberProfileCard
          key={member.githubUrl+member.name}
          className={'col col--3 margin-bottom--md'}
          name={member.name}
          avatar={member.avatar}
          children={member.description}
          githubUrl={member.githubUrl}
          blogUrl={member.blogUrl}
        />);
      })}
    </div>
  );
}

function MembersWall() {
  return (
    <Layout title="友情链接">
      <main>
        <div className="text--center margin-vert--lg">
          <h1>友情链接</h1>
          <p>Links</p>
        </div>
        <div className="container">
          <MemberList />
        </div>
        <div className="text--center margin-vert--lg">
          <p>
            <a
              className={'button button--lg button--primary'}
              href={"https://github.com/seven-innovation-base/official-website/edit/main/src/data/members.data.ts"}
              target={'_blank'}>
              送我上墙
              </a>
          </p>
        </div>
      </main>
    </Layout>
  );
}

export default MembersWall;

