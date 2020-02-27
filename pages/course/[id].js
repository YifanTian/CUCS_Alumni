import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

// Assuming logo.png is in the same folder as JS file
// import profile from './test.png';

const profileStyle = {
  margin: 30,
  padding: 20,
  border: '1px solid #DDD',
  // width: 1500,
  // height: 150
};

const Post = props => (
  <div>
    <Layout>
    </Layout>
    <div style={profileStyle}>
    <h1>{props.data.name}</h1>
    <p>简介: {props.data.summary}</p>

    <Link href={props.data.review}>
        <a>复习资料</a>
    </Link>

    <p> 课程测评: </p>
    <div style={profileStyle}>
      {props.data.rating.map((line, idx) => <p key={idx}>{line}</p >)}
    </div>
  
    </div>
  </div>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const data_all = require(`./course_data.json`); 
  const data = data_all[parseInt(id)-1]; 

  console.log(data);
  return { data };
};

export default Post;