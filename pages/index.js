import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Avatar from '@material-ui/core/Avatar';

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

const profileStyle = {
  margin: 10,
  padding: 20,
  border: '1px solid #DDD'
};

const Index = props => (
  <div>
  <Layout>
  </Layout>
    <div style={layoutStyle}>
    <center><h1>CUCS 校友系统</h1></center>
    <ul>
      {props.shows.map(show => (
        <div style={profileStyle}>
          <Avatar
            src={show.image}
            style={styleBigAvatar}
          />
          <br />
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
        <br />
        </div>
      ))}
    </ul>
    </div>
  </div>
);

Index.getInitialProps = async function() {
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  var data = require('./data.json'); 
//   const data = await res.json();
  // console.log(data)
  
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    shows: data.map(entry => entry.profile)
  };
};

export default Index;
