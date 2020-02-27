import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Avatar from '@material-ui/core/Avatar';


const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: '1px solid #DDD'
};

const profileStyle = {
  margin: 20,
  padding: 20,
  // border: '1px solid #DDD',
  // backgroundImage: "url('python_o.png')",
  backgroundSize: "100%  100%",
};


const Index = props => (
  <div>
  <Layout>
  </Layout>
  <center><h1>课程资料汇总</h1></center>
    <div style={layoutStyle}>

  <flex >

      {props.courses.map(course => (

          <Link href="/course/[id]" as={`/course/${course.id}`} >
          <a>
          <div style={profileStyle}>
            <h2>{course.name}</h2>
          </div>
          <p>{course.summary}</p>
          </a>
          </Link>
      ))}

  </flex>

    </div>
    <style jsx>{`
        h1,

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          font-family: 'Arial';
          color: black;

          text-decoration: none;
          background-color: #f1f1f1;
          width: 280px;
          height: 280px;
          margin: 40px;
          text-align: center;
          line-height: 25px;
          font-size: 25px;
          border-style: solid;
          border-color: gray;
        }

        a:hover {
          // opacity: 0.9;
          color: white;
          background-color: #142163;
        }

        flex {
          display: flex;
          margin: 25px;
          flex-wrap: wrap;
          // background-color: Black;
          // background-image: url("/profile_1.png");
          justify-content: center;
          // border-style: solid;
          // border-color: red;
        }
        
        flex > div {
          background-color: #f1f1f1;
          width: 200px;
          margin: 40px;
          text-align: center;
          line-height: 75px;
          font-size: 30px;
          border-style: solid;
          border-color: gray;
        }
      `}</style>

  </div>
);

Index.getInitialProps = async function() {
  var data = require('./course/course_data.json'); 
  
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    courses: data
  };
};

export default Index;
