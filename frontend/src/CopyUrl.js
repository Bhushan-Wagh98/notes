import { useEffect, useState } from "react";

function CopyUrl() {
  const [coppied, setCopy] = useState(false);
  const [URL, setUrl] = useState(document.URL);

  useEffect(() => {
    setUrl(document.URL);
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
    </div>
  );
}
export default CopyUrl;
