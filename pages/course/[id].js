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
    {/* <img src={props.data.image} alt="my image" width="200" height="200"/> */}
    <p>简介: {props.data.summary}</p>

    <Link href={props.data.review}>
        <a>复习资料</a>
    </Link>

    {/* <p>课程测评: {props.data.rating[0]}</p> */}

    <p> 课程测评: </p>
    <div style={profileStyle}>
      {props.data.rating.map((line, idx) => <p key={idx}>{line}</p >)}
    </div>


    {/* <Link href={props.data.review}>
        <a>project 1</a>
    </Link> */}
  
    </div>
  </div>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const data_all = require(`./course_data.json`); 
  // console.log(data_all);

  // const data = require(`./data_${id}.json`); 
  const data = data_all[parseInt(id)-1]; 

//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();
//   console.log(`Fetched show: ${show.name}`);
//   return { show };
  console.log(data);
  return { data };
};

export default Post;