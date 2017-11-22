import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal_actions';

const _nullModal = {
  modalType: null
};

const modalReducer = (state = _nullModal, { type, modalType }) => {
  switch (type) {
    case SHOW_MODAL:
      return { modalType: modalType };
    case HIDE_MODAL:
      return _nullModal;
    default:
      return state;
  }
};

export default modalReducer;
