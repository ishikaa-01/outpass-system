import React,{ useState } from "react";
import parts from "../Navbar-parts";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Route, Link, Routes } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled(Nav)`
  .nav-link:hover {
    background-color: rgba(226, 232, 240, 0.3); /* Set your desired highlight color */
    border-radius: 5px;
  }
`;

function PartComponent({ component: Component, ...props }) {
  return <Component {...props} />;
}

function Navbarr() {
  const [collapsed, setCollapsed] = useState(true);
  function toggleCollapse() {
    setCollapsed(!collapsed);
  }
  return (
    <div>
      <Navbar expand="lg" className="custom-navbar shadow p-3 mb-5" style={{position: "sticky"}} fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            DASHBOARD
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleCollapse}/>
          <Navbar.Collapse id="basic-navbar-nav">
            <StyledNav className="me-auto">
              {parts.map((part) => (
                <Nav.Link
                  key={part.key}
                  as={Link}
                  to={`/${part.name.replace(/\s/g, "")}`}
                  component={part.component}
                  style={{ color: collapsed ? 'white' : 'white' }}
                >
                  {part.name}
                </Nav.Link>
              ))}
            </StyledNav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        {parts.map((part) => (
          <Route
            key={part.key}
            path={`/${part.name.replace(/\s/g, "")}`}
            element={<PartComponent component={part.component} {...part.props}/>}
          />
        ))}
      </Routes>
    </div>
  );
}

export default Navbarr;
