import { Outlet, NavLink } from "react-router-dom";
import { useEffect } from "react";

const HelpLayout = () => {
  useEffect(() => {
    console.log("window scroll run");
    window.scrollTo(0, document.body.scrollHeight);
  }, []);
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque quas
        debitis quibusdam deserunt repellat hic molestias ipsum commodi aut
        odit!
      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default HelpLayout;
