import React, { createContext, useState } from "react";
import ModalDialog from "../shared/modal";

interface IProps {
  setDialog?: any;
  closeModalDialog?: () => void;
}

const ModalContext = createContext<IProps | null>(null);

const ModalProvider: React.FC<IProps> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState<React.FC>();

  const closeModalDialog = () => {
    setVisible(false);
  };

  const setDialog = (content: React.FC) => {
    setVisible(true);
    setContent(content);
  };

  return (
    <ModalContext.Provider value={{ setDialog, closeModalDialog }}>
      {children}
      <ModalDialog
        closeModalDialog={closeModalDialog}
        visible={visible}
        content={content}
      />
    </ModalContext.Provider>
  );
};
export const useModal = () =>
  React.useContext(ModalContext) as Required<IProps>;

export const useLabelConfirmDialog = () => {
  const { setDialog } = useModal();

  return () => {
    setDialog();
  };
};

export default ModalProvider;
