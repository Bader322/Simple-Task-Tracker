import "./Footer.css";
const Footer = () => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <div className="copyrightContainer">
      <a
        href="https://baldandbold.ca/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkToDev"
      >
        <img src="https://dev.baldandbold.ca/wp-content/uploads/2021/10/darkBlueLogoPNG.png" />
      </a>
      <span id="copyright">© &nbsp;{getYear()} All rights reserved</span>
    </div>
  );
};

export default Footer;
