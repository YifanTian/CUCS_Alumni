import Layout from '../components/MyLayout';
import img from './cucs1.jpg';

const profileStyle = {
  margin: 30,
  padding: 20,
  border: '1px solid #DDD',
  // width: 1500,
  // height: 150
};

const style1 = {
  margin: 30,
  padding: 20,
  border: '1px solid #DDD',
  border: '1px solid Blue',
}
const style2 = {
  margin: 30,
  padding: 20,
  border: '1px solid #DDD',
  border: '1px solid Orange',
}
const style3 = {
  margin: 30,
  padding: 20,
  border: '1px solid #DDD',
  border: '1px solid Red',
}
const style4 = {
  margin: 30,
  padding: 20,
  border: '1px solid #DDD',
  border: '1px solid Cyan',
}
const background_style = {
  backgroundImage: `url('${img}')`,
}


export default function About() {
  return (
    // <div style={background_style}>
    <div>
    <Layout>
    </Layout>

        <div style={style1}> 
          <center><h1 >CUCS学习网站介绍</h1></center>
              <p > 网站功能: 课程资料大全对各个课程的资料进行归纳整理，校友系统对UCI校友的信息进行整理呈现</p>
              制作人: CUCS学术部，田轶凡
              <br />
              Github: https://github.com/YifanTian/CUCS_Alumni
              <br />
              E-mail: yifant@uci.edu
              <br />
              将来计划: 完善课程资料，完善UI,如有功能上的建议，请发信至上述邮箱。
              <br />
        <center><h2 >CUCS</h2></center>
        <p > 社团简介: Chinese Union in Computer Science (CUCS) 成立于2017年4月，社团创立的初衷是希望建立一个能让ICS学院的所有中国学生进行学术或非学术性沟通交流的平台
          未来社团将会不定期举行学术分享会以及关于ICS学院Lower Level课程（如ICS 31, 32, 33）的Review Session，以此来帮助刚进入ICS学院，并不是很熟悉编程的同学们更好的学习掌握课程内容。</p>
            社长: 张诗翎，Cris，吉思云。
        </div>
        <flex >
<div style={style1}> 
  <center><h2 >学术部</h2></center>
<p>主要业务: ICS专业课程 ReviewSession, 常驻各课业群/ICS新生群, 搭建Project Platform, 组织完成Projects, 新生专业方面咨询
<br />
部长：田轶凡
<br />
邮箱: yifant@uci.edu
<br />
</p>
    {/* <flex >
      <div>负责人: 田轶凡</div>
      <div>Email: yifant@uci.edu</div> 
    </flex > */}
  </div> 

    <div style={style2}>
              <center><h2>活动部</h2></center>
              <p>主要业务: 
              <br />组织社团招新，社团团建活动。
<br />
部长：一闪
<br />
</p>
        {/* <flex >
          <div>负责人: </div>
          <div>Email: email</div> 
        </flex > */}
    </div>

     <div style={style3}>
              <center><h2>宣传部</h2></center>
              <p>主要业务:
              <br /> 对推文进行编排，对社团活动进行宣传。 
<br />
部长：杨雅迪
<br />
</p>
          {/* <flex >
            <div>负责人: email</div>
            <div>Email: email</div> 
          </flex > */}
        </div>
    
        <div style={style4}>
            <center><h2>外联部</h2></center>
            <p>主要业务: 
              <br />
              联系赞助商，对活动提供经费支持。 
      <br />
      部长：林浩文
      <br />
        </p>
        </div>

        </flex>

    <style jsx>{`
        // flex {
        //   display: flex;
        //   // background-color: DodgerBlue;
        // }

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

        // flex > div {
        //   background-color: #f1f1f1;
        //   margin: 10px;
        //   padding: 20px;
        //   font-size: 30px;
        // }

        flex > div {
          background-color: #f1f1f1;
          width: 400px;
          margin: 50px;
          text-align: center;
          line-height: 75px;
          font-size: 20px;
          border-style: solid;
          border-color: gray;
        }
        
      `}</style>
</div>
  );
}