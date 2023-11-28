import Navigation from "@/components/Navigation";
import React, { ReactElement } from "react";
import { Container } from "react-bootstrap";

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <Navigation />
      <div className="py-5">
        <Container>{children}</Container>
      </div>
    </>
  );
}

export default Layout;
