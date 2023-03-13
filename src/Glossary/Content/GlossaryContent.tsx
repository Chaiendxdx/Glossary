import { EditOutlined } from "@ant-design/icons";
import { Button, Col, Row, Tooltip } from "antd";
import styled from "styled-components";
const GlossaryContent = () => {
  return (
    <Container>
      <Row>
        <Col
          lg={{ span: 11 }}
          md={{ span: 8 }}
          xs={{ span: 6 }}
          sm={{ span: 4 }}
        >
          <span>Ket qua kinh doanh</span>
        </Col>
        <Col
          lg={{ span: 3, offset: 10 }}
          md={{ span: 4, offset: 12 }}
          xs={{ span: 6, offset: 12 }}
          sm={{ span: 4, offset: 16 }}
        >
          <Button
            type="primary"
            style={{
              backgroundColor: "#7147e8",
              width: "100%",
              height: "100%",
              whiteSpace: "normal",
            }}
          >
            Add term
          </Button>
        </Col>
      </Row>
      <Row>
        <span style={{ paddingRight: "8px" }}>Ket qua kinh doanh</span>
        <Tooltip title="Edit DisplayName" className="edit">
          <EditOutlined />
        </Tooltip>
      </Row>
      <Row className="glossary-content">
        <Col
          lg={{ span: 16 }}
          md={{ span: 12 }}
          xs={{ span: 10 }}
          className="description box"
        >
          <div className="description-title title">
            <span>Description</span>
            <Tooltip title="Edit description" className="edit">
              <EditOutlined />
            </Tooltip>
          </div>
          <div className="description-content">test</div>
        </Col>
        <Col
          lg={{ span: 4 }}
          md={{ span: 6 }}
          xs={{ span: 8 }}
          className="owner box"
        >
          <div className="owner-title title">
            <span>Owner</span>
            <Tooltip title="Update Owner" className="edit">
              <EditOutlined />
            </Tooltip>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  .edit {
    cursor: pointer;
    color: #8c6bed;
  }
  .glossary-content {
    .description {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .box {
      background-color: white;
      border-radius: 4px;
      border: 1px solid;
      padding: 8px 14px;
      margin-top: 60px;
      .title {
        display: flex;
        justify-content: space-between;
      }
    }
    .owner.box {
      margin-left: 8px;
    }
  }
`;
export default GlossaryContent;
