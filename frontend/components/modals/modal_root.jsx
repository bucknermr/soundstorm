import React from 'react';
import SessionFormContainer from './session_form_container';
import TrackUpload from './track_upload';
import ModalBackgroundContainer from './modal_background_container';

const ModalRoot = ({ modalType }) => {
  if (modalType) {
    return (
      <ModalBackgroundContainer>

        {(modalType === 'signup' || modalType === 'signin') ? (
          <SessionFormContainer formType={modalType} />
        ) : null }

        {(modalType === 'track-upload' ) ? (
          <TrackUpload />
        ) : null }

      </ModalBackgroundContainer>
    );
  } else {
    return null;
  }
};

export default ModalRoot;
