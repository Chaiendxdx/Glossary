import { PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
type Props = {
  handleAdd: Function;
  statusAdd: boolean;
};

function AddGlossary({ handleAdd, statusAdd }: Props) {
  return (
    <Button
      icon={<PlusOutlined />}
      style={{
        width: "100%",
        margin: "8px 0",
        color: "#8c6bed",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        whiteSpace: "normal",
      }}
      onClick={(e) => handleAdd()}
    >
      Add Glossary
    </Button>
  );
}
export default AddGlossary;
