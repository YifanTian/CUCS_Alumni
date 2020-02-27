import Layout from '../components/MyLayout';
import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Avatar from '@material-ui/core/Avatar';
import MaterialTable from 'material-table'

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


const styleBigAvatar = {
  width: '75px',
  height: '75px',
  // margin: '0px auto 15px',
};

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: '1px solid #DDD'
};

const style1 = {
  margin: 30,
  padding: 20,
  // border: '1px solid #DDD',
  // border: '1px solid Blue',
}

const profileStyle = {
  margin: 30,
  padding: 20,
  border: '1px solid #DDD',
  // width: 1500,
  height: 50
};

const Index = props => (
  <div>
  <Layout>
  </Layout>
    
    <center><h1>CUCS 校友系统</h1></center>
    
  <div style={style1}>
  <MaterialTable
    icons={tableIcons}
  title="工作校友"
  columns={[
    { title: 'Avatar', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{width: 40, borderRadius: '50%'}}/> },
    { title: '姓名', field: 'name' },
    { title: '专业', field: 'direction' },
    { title: '公司', field: 'company' },
    // { title: '公司', field: 'company', type: 'numeric' },
    { title: 'E-mail', field: 'email'},
    // { title: 'LinkedIn', field: 'linkedIn'},
  ]}
  data={[
    { name: '田轶凡', direction: '数据科学', company: '在校', 性别:'male', email: 'yifant@uci.edu', imageUrl: './male1.jpeg'},
    { name: '舒扬雨', direction: '软件工程', company: 'PayPal', 性别:'female', email: 'yangyushu3@gmail.com', imageUrl: './female1.jpeg'},
    { name: 'CUCS', direction: 'all', company: '在校', 性别:'', email: '', imageUrl: './profile_2.png'},
  ]}        
  options={{
    filtering: false,
    headerStyle: {
      backgroundColor: '#01579b',
      color: '#FFF',
      fontSize: 20,
    },
    rowStyle: {
      // backgroundColor: '#EEE',
      fontSize: 20,
    },
    search: {
      searchFieldAlignment: 'left',
    }
  }}
/>
</div>

  <div style={style1}>
  <MaterialTable
    icons={tableIcons}
  title="在读校友"
  columns={[
    { title: 'Avatar', field: 'imageUrl', render: rowData => <img src={rowData.imageUrl} style={{width: 40, borderRadius: '50%'}}/> },
    { title: '姓名', field: 'name' },
    { title: '专业', field: 'direction' },
    { title: '公司', field: 'company' },
    // { title: '公司', field: 'company', type: 'numeric' },
    { title: 'E-mail', field: 'email'},
    // { title: 'LinkedIn', field: 'linkedIn'},
  ]}
  data={[
    { name: 'Yifan', direction: '数据科学', company: '在校', 性别:'male', email: 'yifant@uci.edu', imageUrl: './profile_2.png'},
    { name: 'CUCS', direction: 'all', company: '在校', 性别:'', email: '', imageUrl: './profile_2.png'},
  ]}        
  options={{
    filtering: false,
    headerStyle: {
      backgroundColor: '#01579b',
      color: '#FFF'
    }
  }}
/>
</div>
  </div>
);

Index.getInitialProps = async function() {
  var data = require('./people.json'); 
  console.log(data);
  
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.profile)
  };
};

export default Index;
