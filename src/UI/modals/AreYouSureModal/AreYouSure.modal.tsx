// ** Dependencies **//
import { Button, Modal } from "flowbite-react";
import { AreYouSureModalProps } from "./AreYouSure.props";
import Styles from "./AreYouSure.style";

//** AreYouSure Modal **//
const AreYouSureModal = (props: AreYouSureModalProps) => {
  //** Props **//
  const { isOpen, setIsOpen, onYes, onNo, title, question } = props;

  const handleYes = () => {
    onYes();
    setIsOpen(false);
  };

  const handleNo = () => {
    onNo && onNo();
    setIsOpen(false);
  };

  //** JSX **//
  return (
    <Modal show={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Body>
        <h1 className={Styles.question}>{question}</h1>
      </Modal.Body>
      <Modal.Footer className={Styles.footer}>
        <Button gradientMonochrome={"success"} onClick={handleYes}>
          Yes
        </Button>
        <Button gradientMonochrome={"failure"} onClick={handleNo}>
          No
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AreYouSureModal;
