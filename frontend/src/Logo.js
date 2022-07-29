function Logo() {
  // const [enter, setEnter] = useState(false);
  return (
    <div className="logodiv">
      <img
        src="https://raw.githubusercontent.com/Bhushan-Wagh98/notes/main/logo192.png"
        alt="logo"
      />
      <h1>Share Notes</h1>
      {/* <a
        href="/help"
        className="helpButton"
        onMouseEnter={() => {
          setEnter(true);
        }}
        onMouseLeave={() => {
          setEnter(false);
        }}
      >
        <img
          src="https://raw.githubusercontent.com/Bhushan-Wagh98/notes/cc54f99807eb426c1f507cb6f5c1f524142bb720/circle-question-solid.svg"
          alt="help"
          style={{ height: "30px" }}
        />
      </a>
      <div className={enter ? "showhelp" : "hidehelp"}>
        Need help? Click on the above "?" button.
      </div> */}
    </div>
  );
}
export default Logo;
