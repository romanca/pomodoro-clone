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
        borderRadius: theme.borderRadiuss[2],
        overflow: "visible",
      }}
      closeModalDialog={closeModalDialog}
    >
      {content && content}
    </PopPop>
  );
};

export default ModalDialog;
