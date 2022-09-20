import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { Space, Table, Tag } from 'antd';
export default function dummyFuctionalComponent({}) {  
    useEffect(() => {
      getData();
      
    }, [])

    
   const getData = (()=>{
      console.log("yes it works")
   })
    return (
        <div>
           <p>nnnee</p>
        </div>
    );
}
