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

const Cstyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  // backgroundImage: "url('45c.png')",
  backgroundSize: "100%  100%",
};

const Jstyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
  // backgroundImage: "url('45j.png')",
  backgroundSize: "100%  100%",
};

const styleBigAvatar = {
  width: '150px',
  height: '150px',
  // margin: '0px auto 15px',
};


const Index = props => (
  <div>
  <Layout>
  </Layout>
  <center><h1>课程资料汇总</h1></center>
    <div style={layoutStyle}>
    {/* <ul>
      {props.shows.map(show => (
        <div style={profileStyle}>
          <h2>{show.name}</h2>
        <li key={show.id}>
          <Link href="https://www.lingoffer.com/preview">复习资料</Link>
        </li>
        </div>
      ))}
    </ul> */}

  <flex >

      {props.courses.map(course => (
        // <div style={profileStyle}>
        //   <h2>{course.name}</h2>
        // <li key={course.id}>
        //   <Link href="https://www.lingoffer.com/preview">资料大全</Link>
        // </li>
        // </div>

          <Link href="/course/[id]" as={`/course/${course.id}`} >
          <a>
          <div style={profileStyle}>
            <h2>{course.name}</h2>
          </div>
          <p>{course.summary}</p>
          </a>
          </Link>
      ))}

        {/* <Link href="/course/[id]" as={`/course/${1}`} >
          <a>
          <div style={profileStyle}>
            <h1>ICS-31</h1>
          </div>
          <p>Python introduction</p>
          </a>
        </Link>
      
        <Link href="https://www.lingoffer.com/preview">
          <a>
          <div style={profileStyle}>
            <h1>ICS-32</h1>
          </div>
          </a>
        </Link>

        <Link href="https://www.lingoffer.com/preview">
          <a>
          <div style={profileStyle}>
            <h1>ICS-33</h1>
          </div>
          </a>
        </Link>

        <Link href="https://www.lingoffer.com/preview">
          <a>
          <div style={Cstyle}>
            <h1>ICS-45C</h1>
          </div>
          </a>
        </Link>

        <Link href="https://www.lingoffer.com/preview">
          <a>
          <div style={Jstyle}>
            <h2>ICS-45J</h2>
          </div>
          </a>
        </Link>

        <Link href="https://www.lingoffer.com/preview">
          <a>
          <div style={Jstyle}>
            <h1>ICS-46</h1>
          </div>
          </a>
        </Link>

        <Link href="https://www.lingoffer.com/preview">
          <a>
          <div style={Jstyle}>
            <h1>ICS-53</h1>
          </div>
          </a>
        </Link>

        <Link href="https://www.lingoffer.com/preview">
          <a>
          <div style={Jstyle}>
            <h1>CS-161</h1>
          </div>
          </a>
        </Link>

        <Link href="https://www.lingoffer.com/preview">
          <a>
          <div style={Jstyle}>
            <h1>CS-171</h1>
          </div>
          </a>
        </Link>

        <Link href="https://www.lingoffer.com/preview">
          <a>
          <div style={Jstyle}>
            <h1>CS-178</h1>
          </div>
          </a>
        </Link>

        <Link href="https://www.lingoffer.com/preview">
          <a>
          <div style={Jstyle}>
            <h1>CS-121</h1>
          </div>
          </a>
        </Link>

        <Link href="https://www.lingoffer.com/preview">
          <a>
          <div style={Jstyle}>
            <h2>CS-122B</h2>
          </div>
          </a>
        </Link> */}

        {/* <div style={Jstyle}>
          <h2>ICS-456</h2>
          <Link href="https://www.lingoffer.com/preview">资料大全</Link>
        </div> */}

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
//   const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  var data = require('./course/course_data.json'); 
//   const data = await res.json();
  // console.log(data)
  
  console.log(`Show data fetched. Count: ${data.length}`);

  return {
    courses: data
  };
};

export default Index;
