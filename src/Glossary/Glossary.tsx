import React, { useState } from "react";

import { Anchor, Col, Row, TreeSelect, Tree } from "antd";
import styled from "styled-components";
import { Layout } from "antd";
import SearchInput from "./SearchInput";
import AddGlossary from "./AddGlossary";
import GlossaryContent from "./Content/GlossaryContent";
import Add from "./GlossaryModal/Add";

const { DirectoryTree } = Tree;
const treeData = [
  {
    title: "parent 0",
    key: "0-0",
    children: [
      {
        title: "leaf 0-0",
        key: "0-0-0",
        isLeaf: true,
      },
      {
        title: "leaf 0-1",
        key: "0-0-1",
        isLeaf: true,
      },
    ],
  },
  {
    title: "parent 1",
    key: "0-1",
    children: [
      {
        title: "leaf 1-0",
        key: "0-1-0",
        isLeaf: true,
      },
      {
        title: "leaf 1-1",
        key: "0-1-1",
        isLeaf: true,
      },
    ],
  },
  {
    title: "parent 2",
    key: "0-2",
  },
];
const { Content } = Layout;
export type term = {
  name?: string;
  description?: string;
};
export type glossary = {
  name: string;
  description: string;
  tag?: string;
  term?: Array<term>;
};
type Item = {
  key: string;
  href: string;
  title: string;
};
type Items = {
  key: string;
  href: string;
  title: string;
  children?: Array<Item>;
};

const Glossary: React.FC = () => {
  const [statusAdd, setStatusAdd] = useState(false);
  const [listGlossary, setListGlossary] = useState(Array<glossary>);

  const handleAdd = () => {
    setStatusAdd(true);
  };

  return (
    <Container>
      {/* <Add statusAdd={statusAdd} /> */}
      <Row>
        <Col span={5}>
          {" "}
          <Layout
            className="site-layout sider"
            style={{
              width: "100%",
              backgroundColor: "white",
              padding: "0 16px",
            }}
          >
            <div style={{ padding: "8px 0", backgroundColor: "white" }}>
              Glossary
            </div>
            <SearchInput />
            <AddGlossary handleAdd={handleAdd} statusAdd={statusAdd} />

            <DirectoryTree
              multiple
              defaultExpandAll
              treeData={treeData}
            ></DirectoryTree>
          </Layout>
        </Col>
        <Col span={19}>
          <Layout style={{ padding: "8px 16px", minHeight: "100vh" }}>
            <Content>
              <div
                style={{
                  marginTop: 8,
                }}
              ></div>
              <GlossaryContent />
            </Content>
          </Layout>
        </Col>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .sider {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #000000;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    background: #fff;
    border-radius: 4px;

    .ant-tree-treenode-selected {
      &::before {
        background-color: #f4f0fd !important;
        border-left: 1px solid #8c6bed !important;
      }
      .ant-tree-switcher {
        color: black;
      }
      .ant-tree-node-selected {
        color: #8c6bed !important;
        background-color: #f4f0fd;
      }
    }
  }
`;

export default Glossary;
