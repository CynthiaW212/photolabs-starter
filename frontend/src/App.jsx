import React, { useState, useEffect } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';



// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const [searchedPhotos, setSearchedPhotos] = useState([]);
  const { state, actions } = useApplicationData();
  const { selectedPhoto, favouritedPhotos } = state;
  const { openModal, closeModal, selectFavourite } = actions;

  const handlePhotoItemClick = (photo) => {
    console.log(photo);
    openModal(photo);
  };

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => { setPhotos(data)})
      .catch((error) => console.error("Error fetching photos:", error));
    }, []);
  useEffect(() => {
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => { setTopics(data)})
      .catch((error) => console.error("Error fetching topics:", error));
    }, []);

    const handleTopicClick = (topicId) => {
      if (topicId) {
        fetch(`/api/topics/photos/${topicId}`)
          .then((response) => response.json())
          .then((data) => {
            setPhotos(data);
          })
          .catch((error) => {
            console.error(error);
          })
      }
    };

    useEffect(() => {
      handleTopicClick();
    }, []);

    const onSubmit = (name) => {
      const resultPhotos = [];
      console.log("name : ", name);
      photos.forEach((photo) =>{
        console.log(photo);
        console.log(photo.user);
        if(photo.user.username === name.searchKey){
          return resultPhotos.push(photo);
        }
        if(photo.user.name === name.searchKey){
          return resultPhotos.push(photo);
        }
        if(photo.location.city === name.searchKey){
          return resultPhotos.push(photo);
        }
        if(photo.location.country === name.searchKey){
          return resultPhotos.push(photo);
        }
      });
      setSearchedPhotos(resultPhotos);

    };
  
    useEffect(() => {
      onSubmit();
    }, []);

  return (
  <div className="App">
    <HomeRoute 
          topics = {topics}
          photos = {photos}
          handleTopicClick={handleTopicClick}
          onPhotoItemClick={handlePhotoItemClick}
          selectFavourite={selectFavourite}
          favouritedPhotos = {favouritedPhotos}
          onSubmit = {onSubmit}
          searchedPhotos = {searchedPhotos}
          />
    {selectedPhoto && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          favouritedPhotos = {favouritedPhotos}
          onPhotoItemClick={handlePhotoItemClick}
          onClose={closeModal}
          selectFavourite={selectFavourite}
        />
      )}
  </div>
)
  };

export default App;