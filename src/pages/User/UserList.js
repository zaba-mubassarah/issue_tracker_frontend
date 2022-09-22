import React, { useState, useEffect } from "react";
import style from "./UserList.module.css";
import {
  fetchDataFromApi,
  deleteDatafromApi,
} from "../../services/httpRequestService";

import { Space, Table, Row, Col, Button, Modal } from "antd";
import { Breadcrumb } from "antd";

export default function UserList({}) {
  useEffect(() => {
    getUserData();
  }, []);
  const [tableData, setTableData] = useState([]);
  const [open, setOpen] = useState(false);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Fathers Name",
      dataIndex: "f_name",
      key: "f_name",
    },
    {
      title: "Mothers Name",
      dataIndex: "m_name",
      key: "m_name",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => {
        return (
          <div>
            <button onClick={() => deleteItem(record.id)}>Delete</button>
          </div>
        );
      },
    },
  ];

  const getUserData = async () => {
    const dataList = await fetchDataFromApi();
    console.log("dataList", dataList);
    setTableData(dataList);
  };
  const deleteItem = async (id) => {
    await deleteDatafromApi(id);
    getUserData();
  };
  return (
    <div>
      <Breadcrumb
        style={{
          margin: "16px 0",
        }}
      >
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>User</Breadcrumb.Item>
      </Breadcrumb>
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col className="gutter-row" span={12}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div style={style}>col-6</div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div style={style}>col-6</div>
          </Col>
        </Row>
      </Modal>
      <Row justify="space-between">
        <Col span={24}>
          <div className={style.content}>
            <div>
              <h2>User List</h2>
            </div>
            <div>
              <Button size="large" type="primary" onClick={() => setOpen(true)}>
                Add new
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table columns={columns} dataSource={tableData} />
        </Col>
      </Row>
    </div>
  );
}
