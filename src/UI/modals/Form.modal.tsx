// ** Dependencies **//
import { Modal, Spinner } from "flowbite-react";
import { FormModalProps } from "./FormModal.props";

//** FormModal component **//
const FormModal = (props: FormModalProps) => {
  //** Props **//
  const { children, isOpen, formName, isLoading, setIsOpen } = props;

  //** JSX **//
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
