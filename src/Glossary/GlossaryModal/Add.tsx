import styled from "styled-components";
import React, { useState } from "react";
import { Button, Checkbox, Col, Form, Input, Row, Select } from "antd";
import "@toast-ui/editor/dist/toastui-editor.css";
import { glossary } from "../Glossary";
import TextArea from "antd/es/input/TextArea";

type Props = {
  statusAdd: boolean;
};

function Add({ statusAdd }: Props) {
  const [isFinish, setIsFinish] = useState(false);
  const [dataGlossary, setDataGlossary] = useState(Array<glossary>);

  const handleChangeTag = (value: string) => {
    console.log(`selected ${value}`);
  };
  const onFinish = (values: glossary) => {
    console.log("Success:", values);
    setDataGlossary((prev): Array<glossary> => [...prev, values]);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Container>
      {statusAdd ? (
        <>
          <Form
            name="basic"
            layout="vertical"
            // labelCol={{ span: 8 }}
            // wrapperCol={{ span: 16 }}
            style={{ minWidth: "42rem", padding: "28px 20px" }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <h4>Add Glossary</h4>
            <Form.Item label="Name:" name="name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Description:"
              name="description"
              rules={[{ required: true }]}
            >
              <TextArea rows={10} placeholder="Write your description" />
            </Form.Item>
            <Form.Item label="Tag:" name="tag">
              <Select
                onChange={handleChangeTag}
                options={[
                  { value: "jack", label: "Jack" },
                  { value: "lucy", label: "Lucy" },
                  { value: "Yiminghe", label: "yiminghe" },
                  { value: "disabled", label: "Disabled", disabled: true },
                ]}
                placeholder="Add tags"
              />
            </Form.Item>
            <Form.Item>
              <Row>
                <Col offset={16} span={4}>
                  <Button type="default">Cancel</Button>
                </Col>
                <Col span={4}>
                  <Button type="primary" htmlType="submit">
                    Save
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </>
      ) : (
        <></>
      )}
    </Container>
  );
}

const Container = styled.div`
  .ant-input:hover {
    border-color: #7147e8;
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(87, 168, 233, 0.2);
    box-shadow: 0 0 0 2px rgba(87, 168, 233, 0.2);
  }
  font-size: 14px;
  background-color: yellow;
  position: absolute;
  z-index: 99;
  left: 50%;
  transform: translateX(-50%);
  .ant-btn-default {
    color: #7147e8;
  }
  .ant-btn-primary {
    background-color: #7147e8;
  }
  .ant-btn-primary:hover {
    background-color: #5523e0;
  }
`;
export default Add;
