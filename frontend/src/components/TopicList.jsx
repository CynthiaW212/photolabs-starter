import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

const TopicList = (props) => {
  const {topics, handleTopicClick} = props;

  return (
  <div className="top-nav-bar__topic-list">
    {Array.isArray(topics) && topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          slug={topic.slug}
          title={topic.title}
          handleTopicClick = {handleTopicClick}
        />
      ))} 
  </div>
  )
};

export default TopicList