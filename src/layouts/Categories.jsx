import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div>
      {" "}
      <Menu pointing vertical>
        <Menu.Item name="İş İlanları" as={Link} to={"/jobadts"} />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>
    </div>
  );
}
