import Modal, { ModalRefType, ModalTypes } from "../components/Modal/Modal";
import { useRef, useState } from "react";
import { AnyObject } from "yup";

export default function useModal<T = unknown, CType = unknown>(
  Component: React.ComponentType<any> = Modal,
  props: Omit<
    CType extends AnyObject ? CType & ModalTypes : ModalTypes,
    "modalRef"
  >
) {
  const { onClose, ...rest } = props ?? {};
  const modalRef = useRef<ModalRefType>();
  const [modalState, setModalState] = useState<T>();

  function openModal(data?: T) {
    modalRef.current?.open();
    if (data) {
      setModalState(data);
    }
  }
  function closeModal() {
    modalRef.current?.close();
    onClose?.();
  }
  function toggleModal() {
    modalRef.current?.toggle();
  }
  return {
    openModal,
    closeModal,
    toggleModal,
    modalRef,
    setModalState,
    modalState,
    Modal: (
      <Component
        modalRef={modalRef}
        onClose={closeModal}
        setData={setModalState}
        data={modalState}
        {...rest}
      />
    ),
  };
}
