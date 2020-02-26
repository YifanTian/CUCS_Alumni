import Link from 'next/link'
// import cucs from './cucs1.ipg'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';


const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    // <div class="container #e8f5e9 green lighten-5" styles={{ backgroundImage:`url(${cucs})` }}>
    <div class="nav-wrapper teal lighten-2">
      <Link href="/about">
        <a style={linkStyle}>CUCS</a>
      </Link>
      <Link href="/contact">
        <a style={linkStyle}>联系我们</a>
      </Link>
      <Link href="/courses">
        <a style={linkStyle}>课程资料</a>
      </Link>
      <Link href="/">
        <a style={linkStyle}>校友系统</a>
      </Link>
      {/* <Link href="/people">
        <a style={linkStyle}>校外校友</a>
      </Link> */}
      {/* <Link href="/login">
        <a style={linkStyle}>Login</a>
      </Link> */}

      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="Page One" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="Page Two" href="/trash" {...a11yProps(1)} />
          <LinkTab label="Page Three" href="/spam" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
    // </div>
  )
}