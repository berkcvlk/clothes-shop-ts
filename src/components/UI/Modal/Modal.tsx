import { createPortal } from "react-dom";
import { useHistory } from "react-router";

import Close from "../Icons/Close";
import { Wrapper, Backdrop, Content, CloseIconButton } from "./styles";

const Modal: React.FC = ({ children }) => {
  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };

  const ModalRender = (
    <>
      <Backdrop onClick={goBackHandler} />
      <Wrapper>
        <Content>
          <CloseIconButton onClick={goBackHandler}>
            <Close />
          </CloseIconButton>
          {children}
        </Content>
      </Wrapper>
    </>
  );

  return (
    <>{createPortal(ModalRender, document.getElementById("modal-root")!)}</>
  );
};

export default Modal;
