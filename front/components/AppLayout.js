import React from "react";
import { Menu, Icon, Input } from "antd";

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu>
        <Menu.Item key="home">노드버드</Menu.Item>
        <Menu.Item key="profile">프로필</Menu.Item>
        <Menu.Item key="mail">
          <Input.Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
          />
        </Menu.Item>
        {children}
      </Menu>
    </div>
  );
};

export default AppLayout;
