// ** Dependencies **//
import { Modal, Spinner } from "flowbite-react";
import { FormModalProps } from "./FormModal.props";
import Flex from "../components/shared/Flex/Flex.component";
import { FlexDirs } from "../../data/enums/FlexDirs.enum";

//** FormModal component **//
const FormModal = (props: FormModalProps) => {
  //** Props **//
  const { children, isOpen, formName, isLoading, setIsOpen } = props;

  //** JSX **//
  return (
    <Modal show={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.Header className="h-[15vh] overflow-hidden">
        <Flex dir={FlexDirs.Column} className="items-center">
          {formName}
        </Flex>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer className="flex w-full justify-center">
        <div>
          {isLoading && <Spinner color="info" aria-label="Loading spinner" />}
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
