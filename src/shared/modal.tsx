import React from "react";
import PopPop from "react-poppop";
import theme from "./theme";
interface IProps {
  content?: any;
  closeModalDialog: () => void;
  visible: boolean;
}

const ModalDialog: React.FC<IProps> = ({
  visible,
  closeModalDialog,
  content,
}) => {
  return (
    <PopPop
      open={visible}
      contentStyle={{
        transition: "all 0.3s",
        borderRadius: theme.borderRadiuss[2],
        zIndex: theme.space[45],
        position: "relative",
        width: theme.space[46],
      }}
      closeModalDialog={closeModalDialog}
    >
      {content && content}
    </PopPop>
  );
};

export default ModalDialog;
