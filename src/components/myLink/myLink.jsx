import { Link } from "react-router";

export const MyLink = ({ children, color, to }) => {
  return (
    <Link to={to} style={{ textDecoration: "none" }}>
      {children}
    </Link>
  );
};
