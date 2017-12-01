import React from 'react';
import SessionFormContainer from './session_form_container';
import ArtistEditContainer from './artist_edit_container';
import ModalBackgroundContainer from './modal_background_container';


import TrackFormContainer from './track_form_container';

const ModalRoot = ({ modalType, content }) => {

  switch(modalType) {
    case 'signup':
    case 'signin':
      return (
        <ModalBackgroundContainer>
          <SessionFormContainer formType={modalType} message={content} />
        </ModalBackgroundContainer>
      );
    case 'track-upload':
    case 'track-edit':
      return (
        <ModalBackgroundContainer>
          <TrackFormContainer formType={modalType} track={content} />
        </ModalBackgroundContainer>
      );
    case 'artist-edit':
      return (
        <ModalBackgroundContainer>
          <ArtistEditContainer />
        </ModalBackgroundContainer>
      );
    default:
      return null;
  }
};

export default ModalRoot;
