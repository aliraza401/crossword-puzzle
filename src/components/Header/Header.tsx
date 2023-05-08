import React from "react";
import { Col, Input, Row, Typography } from "antd";
import { HeaderProps } from "./Header.interface";
import { HeaderContainer } from "./Header.styled";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants";

export const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <HeaderContainer>
      <Link to={ROUTES.HOME}>
        <ArrowLeftOutlined style={{ color: "black" }} />
      </Link>
      <Typography.Title level={5} style={{ margin: 0 }}>
        {name}
      </Typography.Title>
      <div></div>
    </HeaderContainer>
  );
};
