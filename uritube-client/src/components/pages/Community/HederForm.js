import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { Header } = Layout;

const HeaderForm = props => {
  return (
    <Header className="header">
      {console.log(props)}
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
<<<<<<< HEAD
        <Menu.Item key="0">Uritube</Menu.Item>
        <Menu.Item key="1">title</Menu.Item>
        <Menu.Item key="2">
          <Link to="/community/login">Login </Link>
=======
        <Menu.Item
          key="0"
          style={{
            display: "static",
            alignContent: "space-between"
          }}
        >
          Uritube
        </Menu.Item>
        <Menu.Item
          key="1"
          style={{
            display: "static",
            justifyContent: "space-between",
            alignSelf: "center"
          }}
        >
          title
        </Menu.Item>
        <Menu.Item
          key="2"
          style={{
            display: "static",
            alignContent: "space-between",
            float: "right"
          }}
        >
          Login
>>>>>>> 4443845647a35ca0b287ab5e2861d314b2892335
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default HeaderForm;

// import React from "react";
// // import { Link, Route, Switch } from 'react-router-dom';
// import { Layout, Menu } from "antd";
// const { Header } = Layout;

// const HeaderForm = () => {
//   return (
//     <Header className="header">
//       <div className="logo" />
//       <Menu
//         theme="dark"
//         mode="horizontal"
//         defaultSelectedKeys={["2"]}
//         style={{ lineHeight: "64px" }}
//       >
//         <Menu.Item key="0">Uritube</Menu.Item>
//         <Menu.Item key="1">title</Menu.Item>
//         <Menu.Item key="2">nav 1</Menu.Item>
//       </Menu>
//     </Header>
//   );
// };

// export default HeaderForm;
