import { Link } from "react-router";

export const MyLink = ({ children, to }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
};
