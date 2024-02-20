import React, { useState } from "react";
import styled from "styled-components";

const SideMenus = styled.div`
  flex: 1;
  font-size: 2rem;
  display: flex;
  flex-direction: row-reverse;
`;

const MenuItem = styled.li`
  padding: 10px;
  cursor: pointer;
  &:hover {
    color: #f76301;
  }
`;

export default function SideMenu({ onItemClick }) {
  return (
    <SideMenus>
      <ul>
        <MenuItem onClick={() => onItemClick("About")}>About</MenuItem>
        <MenuItem i onClick={() => onItemClick("Experience")}>
          Experience
        </MenuItem>
        <MenuItem onClick={() => onItemClick("Education")}>Education</MenuItem>
      </ul>
    </SideMenus>
  );
}
