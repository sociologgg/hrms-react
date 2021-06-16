import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp3.licdn.com/dms/image/C4E03AQHXCWIwcLCp-A/profile-displayphoto-shrink_800_800/0/1610650206818?e=1628726400&v=beta&t=Cw-Hg3HwfUu1naqVs6kKyNS1QZqlcLp_iippLLWIr_k"
        />
        <Dropdown pointing="top right" text="Alim">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info" />
            <Dropdown.Item
              onClick={props.signOut}
              text="Çıkış Yap"
              icon="sign-out"
            />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
