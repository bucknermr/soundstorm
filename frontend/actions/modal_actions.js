export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const showModal = (modalType, content) => ({
  type: SHOW_MODAL,
  modalType,
  content
});

export const hideModal = () => ({
  type: HIDE_MODAL
});
