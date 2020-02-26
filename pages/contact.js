import Layout from '../components/MyLayout';

const profileStyle = {
  margin: 30,
  padding: 20,
  border: '1px solid #DDD',
  // width: 1500,
  // height: 150
};

export default function About() {
  return (
    <div>
    <Layout>
    </Layout>
    <div style={profileStyle}>
       <center> <h2>联系我们</h2></center>
        <p>网站的功能有,详细功能请见</p>

        <flex >
          <div>网站制作人: 田轶凡</div>
          <div>Email: yifant@uci.edu</div>
          <div>Github: yifant@github.com</div>
        </flex >
        <p> 微信公众号</p>

    </div>
    
    <style jsx>{`
        flex {
          display: flex;
          // background-color: DodgerBlue;
        }

        flex > div {
          background-color: #f1f1f1;
          margin: 10px;
          padding: 20px;
          font-size: 30px;
        }
      `}</style>
</div>
  );
}