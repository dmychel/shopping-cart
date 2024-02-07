import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>

      <p>
        Go to the
        <Link to="/" style={{ textDecoration: "underline", color: "white" }}>
          HomePage
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
