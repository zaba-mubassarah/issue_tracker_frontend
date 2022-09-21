import React, { useState, useEffect, useRef } from "react";
import { fetchDataFromApi,deleteDatafromApi } from "../../services/httpRequestService";
import { Space, Table, Tag } from 'antd';
import { Breadcrumb } from 'antd';


export default function UserList({}) {  


   useEffect(() => {
      getUserData();
      
    }, [])
    const [tableData, setTableData] = useState([]);
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
      {
        title: 'Fathers Name',
        dataIndex: 'f_name',
        key: 'f_name',
      },
      {
        title: 'Mothers Name',
        dataIndex: 'm_name',
        key: 'm_name',
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => {
          return (
              <div>

                 <button  onClick={() => deleteItem(record.id)}>Delete</button>

              </div>
          );
      },
      },
    ];

   const getUserData = async()=>{
    const dataList = await fetchDataFromApi();
    console.log("dataList",dataList);
    setTableData(dataList);    
   } 
   const deleteItem = async(id)=>{
    await deleteDatafromApi(id);
    getUserData();
   }
    return (
        <div>
           <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>User</Breadcrumb.Item>
            </Breadcrumb>
          <Table columns={columns} dataSource={tableData} />
        </div>
    );
}
