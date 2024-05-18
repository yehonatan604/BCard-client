import { Modal, Spinner } from "flowbite-react";
import { FormModalProps } from "./FormModal.props";

const FormModal = (props: FormModalProps) => {
  const { children, isOpen, formName, isLoading, setIsOpen } = props;

  return (
    <Modal show={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.Header>{formName}</Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {isLoading && <Spinner color="purple" aria-label="Loading spinner" />}
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
