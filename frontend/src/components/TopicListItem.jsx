import React from 'react';
import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  const { id, slug, title, handleTopicClick} = props;
  const handleClick = (event) => {
    event.preventDefault();
    handleTopicClick(id);
  };

  return(
  
  <div className="topic-list__item" onClick = {handleClick}>
    <span>{title}</span>
  </div>
  );
};

export default TopicListItem