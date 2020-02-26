import Layout from '../../components/MyLayout';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

// Assuming logo.png is in the same folder as JS file
// import profile from './test.png';

const Post = props => (
  <Layout>
    <h1>{props.data.name}</h1>
    <img src={props.data.image} alt="my image" width="200" height="200"/>
    <p>简介: {props.data.summary.replace(/<[/]?[pb]>/g, '')}</p>
    <Link href={props.data.page}>
        <a>个人主页</a>
    </Link>
  </Layout>
);

Post.getInitialProps = async function(context) {
  const { id } = context.query;
  const data = require(`./data_${id}.json`); 

//   const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
//   const show = await res.json();
//   console.log(`Fetched show: ${show.name}`);
//   return { show };

  return { data };
};

export default Post;