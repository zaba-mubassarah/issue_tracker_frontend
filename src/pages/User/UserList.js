import React, { useState, useEffect } from "react";
import style from "./UserList.module.css";
import {
  fetchDataFromApi,
  deleteDatafromApi,
  saveData,
} from "../../services/httpRequestService";

import { Table, Row, Col, Button, Modal, Input } from "antd";
import { Breadcrumb } from "antd";

export default function UserList({}) {
  useEffect(() => {
    getUserData();
  }, []);
  const [tableData, setTableData] = useState([]);
  const [data, setData] = useState({
    name: "",
    age: "",
    gender: "",
  });

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
  const submitData = async () => {
    console.log(data);
    saveData(data);
    getUserData();
    setOpen(false);
  };
  const deleteItem = async (id) => {
    await deleteDatafromApi(id);
    getUserData();
  };
  const onChange = (e) => {
    console.log(e.target.value);
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
        title="Add User"
        centered
        open={open}
        onCancel={() => setOpen(false)}
        footer={[
          <Button key="back" onClick={() => setOpen(false)}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={submitData}>
            Submit
          </Button>,
        ]}
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
            <div style={style}>
              <Input
                placeholder="Enter Name"
                allowClear
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={12} style={{ marginBottom: 6 }}>
            <div style={style}>
              <Input
                placeholder="Enter Age"
                allowClear
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    age: e.target.value,
                  }));
                }}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div style={style}>
              <Input
                placeholder="Enter Gender"
                allowClear
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    gender: e.target.value,
                  }));
                }}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={12} style={{ marginBottom: 6 }}>
            <div style={style}>
              <Input
                placeholder="Enter fathers name"
                allowClear
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    f_name: e.target.value,
                  }));
                }}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div style={style}>
              <Input
                placeholder="Enter mothers name"
                allowClear
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    m_name: e.target.value,
                  }));
                }}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={12} style={{ marginBottom: 6 }}>
            <div style={style}>
              <Input
                placeholder="Enter type"
                allowClear
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    type: e.target.value,
                  }));
                }}
              />
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <div style={style}>
              <Input
                placeholder="Address"
                allowClear
                onChange={(e) => {
                  setData((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }));
                }}
              />
            </div>
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
