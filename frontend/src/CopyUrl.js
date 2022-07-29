import { useEffect, useState } from "react";

function CopyUrl() {
  const [enter, setEnter] = useState(false);
  const [coppied, setCopy] = useState(false);
  const [URL, setUrl] = useState(document.URL);

  function asdf() {
    setTimeout(() => {
      setEnter(false);
    }, 3500);
  }

  useEffect(() => {
    setUrl(document.URL);
    asdf();
    setEnter(true);
  }, []);
  function copyfn() {
    navigator.clipboard.writeText(URL);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  }
  return (
    <div className="copyUrl">
      <div className={coppied ? "showcopy" : "hidecopy"}>Coppied</div>
      <div className="copyForm">
        <input type="text" value={URL} />
        <button
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          className="copyText"
          onClick={copyfn}
        >
          <img
            src="https://raw.githubusercontent.com/Bhushan-Wagh98/notes/a25e55054d981b6e83546de2db9777d36bff583b/copy-solid.svg"
            alt="copy"
            style={{ height: "20px" }}
          />
        </button>
      </div>
      <a href="/" target={"_blank"}>
        <button className="createNew">create new note</button>
      </a>
      <a
        href="/help"
        target={"_blank"}
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
          style={{ height: "50px" }}
        />
      </a>
      <div className={enter ? "showhelp" : "hidehelp"}>
        Need help? Click on the below "?" button.
      </div>
    </div>
  );
}
export default CopyUrl;
