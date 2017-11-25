import React from 'react';
import SessionFormContainer from './session_form_container';
import TrackUploadContainer from './track_upload_container';
import ModalBackgroundContainer from './modal_background_container';

const ModalRoot = ({ modalType }) => {

  switch(modalType) {
    case 'signup':
    case 'signin':
      return (
        <ModalBackgroundContainer>
          <SessionFormContainer formType={modalType} />
        </ModalBackgroundContainer>
      );
    case 'track-upload':
      return (
        <ModalBackgroundContainer>
          <TrackUploadContainer />
        </ModalBackgroundContainer>
      );
    default:
      return null;
  }
};

export default ModalRoot;
