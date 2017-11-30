import { SHOW_MODAL, HIDE_MODAL } from '../actions/modal_actions';

const _nullModal = {
  modalType: null,
  content: null
};

const modalReducer = (state = _nullModal, { type, modalType, content }) => {
  Object.freeze(state);

  switch (type) {
    case SHOW_MODAL:
      return { modalType: modalType, content: content };
    case HIDE_MODAL:
      return _nullModal;
    default:
      return state;
  }
};

export default modalReducer;
