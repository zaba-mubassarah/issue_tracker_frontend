import React, { useState, useEffect } from "react";
import style from "./UserList.module.css";
import {
  fetchDataFromApi,
  deleteDatafromApi,
  saveData,
  editDataFromApi,
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
    f_name: "",
    m_name: "",
    type: "",
    address: "",
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
            <Button
              onClick={() => editItem(record.id, record)}
              type="primary"
              style={{ marginRight: 3 }}
            >
              Edit
            </Button>
            <Button onClick={() => deleteItem(record.id)} type="primary" danger>
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const getUserData = async () => {
    console.log("c;;;;");
    const dataList = await fetchDataFromApi();
    console.log("dataList", dataList);
    setTableData(dataList);
  };
  const submitData = async () => {
    console.log(data);
    await saveData(data);
    getUserData();
    setOpen(false);
  };
  const deleteItem = async (id) => {
    await deleteDatafromApi(id);
    getUserData();
  };
  const editItem = async (id, data) => {
    setOpen(true);
    setData(data);
    // await editDataFromApi(id, data);
    // getUserData();
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
                value={data.name}
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
                value={data.age}
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
                value={data.gender}
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
                value={data.f_name}
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
                value={data.m_name}
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
                value={data.type}
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
                value={data.address}
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
