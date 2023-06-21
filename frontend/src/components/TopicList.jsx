import React from 'react';
import TopicListItem from './TopicListItem';
import useSearchForm from '../hooks/useSearchForm';
import '../styles/TopicList.scss';

const TopicList = (props) => {
  const {topics, handleTopicClick, onSubmit} = props;
  const initialValues = { searchKey: "" };

  const { formData, handleChange, handleSubmit } = useSearchForm(initialValues, onSubmit);

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
    <div className='top-nav-bar__photo-search'>
      <form onSubmit={handleSubmit}>
        <input className = 'top-nav-bar__input'
            type="text"
            name="searchKey"
            placeholder="Search by UseName or city"
            value={formData.name}
            onChange={handleChange}
          />
        <button>Search</button>
      </form>
    </div>
  </div>
  )
};

export default TopicList