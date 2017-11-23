import React from 'react';
import SessionFormContainer from './session_form_container';

const ModalRoot = ({ modalType }) => {
  if (modalType === 'signup' || modalType === 'signin') {
    return <SessionFormContainer formType={modalType} />;
  } else {
    return null;
  }
};

export default ModalRoot;
