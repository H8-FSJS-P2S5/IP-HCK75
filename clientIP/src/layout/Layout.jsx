import { Outlet } from "react-router-dom";

import Nav from "../component/Nav";

export default function RootLayout() {
  return (
    // <div>
    <>
      <Nav />
      {/* DIMANA CHILDREN NYA AKAN DI RENDER? */}
      <Outlet />
    </>
    // </div>
  );
}
