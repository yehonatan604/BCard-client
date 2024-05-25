// ** Dependencies **//
import { Modal, Spinner } from "flowbite-react";
import { FormModalProps } from "./FormModal.props";
import Flex from "../../components/shared/Flex/Flex.component";
import { FlexDirs } from "../../../data/enums/FlexDirs.enum";
import Styles from "./Form.style";
import { FlexTypes } from "../../../data/enums/FlexTypes.enum";

//** Form Modal **//
const FormModal = (props: FormModalProps) => {
  //** Props **//
  const { children, isOpen, formName, isLoading, setIsOpen } = props;

  //** JSX **//
  return (
    <Modal show={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.Header className={Styles.header}>
        <Flex dir={FlexDirs.Column} items={FlexTypes.Center}>
          {formName}
        </Flex>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer className={Styles.footer}>
        <div>
          {isLoading && <Spinner color="info" aria-label="Loading spinner" />}
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default FormModal;
