import "../Styles/FooterStyle.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        Copyright &copy; {new Date().getFullYear()} Nikolaos Boniatis. All right
        reserved.
      </footer>
    </>
  );
};

export default Footer;
