import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';


export function FooterLoggedIn({ brandName }) {
  const year = new Date().getFullYear();

  const routes= [
    { name: "Contact Us", path: "/about" },
    { name: "About Us", path: "/contact" },
    { name: "Blog", path: "" },
    { name: "License", path: "" },
  ]

  return (
    <footer className="py-2 px-0 poppins font-semibold ">
      <div className="flex w-full flex-wrap items-center justify-center gap-2 px-2 md:justify-between text-[9px] md:text-[12px] lg:text-md lg:px-20">
      <div className="flex">
      <Typography  className="font-normal text-[9px] md:text-[12px] lg:text-md text-inherit">
          &copy; {year} {''}
          <Link to="/home"
            className="transition-colors hover:text-red font-bold"
          >
            {brandName}
          </Link>{" "}
        </Typography>
        <ul className="flex list-disc list-inside mb-0 ml-10 space-x-2">
            <li className="pl-0 hover:text-red cursor-pointer">Privacy</li>
            <li className="pl-0 hover:text-red cursor-pointer">Terms</li>

          </ul>
      </div>
        <ul className="flex items-center gap-4">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Link
                to={path}
                target="_blank"
                className="py-0.5 px-1  text-inherit transition-colors hover:text-red"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

FooterLoggedIn.defaultProps = {
  brandName: "Trust Market.",
};

FooterLoggedIn.propTypes = {
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};


export default FooterLoggedIn;
