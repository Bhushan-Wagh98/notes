function Helpfn() {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#faee7a",
          padding: "10px 0px",
        }}
      >
        <a href="/" target={"_blank"}>
          <button className="createNew">create new note</button>
        </a>
      </div>
      <h1 style={{ textAlign: "center", lineHeight: "10px" }}>Help</h1>
      <h3
        style={{
          textAlign: "center",
          fontWeight: "400",
          lineHeight: "19px",
          width: "80%",
          margin: "auto",
        }}
      >
        You don't need to share your personal information with us. Just visit{" "}
        <a className="subheadlink" href="/" target={"_blank"}>
          Share Notes
        </a>
        and improve your productivity.
      </h3>
      <div className="helpDiv">
        <div>
          <h2>1. Get Started</h2>
          <img
            src="https://raw.githubusercontent.com/Bhushan-Wagh98/notes/main/screenshots/copy.jpg"
            alt="copy"
          />
          <ul>
            <li>
              After opening our website{" "}
              <code>http://share-note.netlify.app/</code> your note will create
              automatically.
            </li>
            <li>
              As you can see in the above image, you can copy the link of you
              note and share it to anywhere and to anyone.
            </li>
            <li>
              And you can also create a fresh note after clicking the{" "}
              <code>create new note</code> button.
            </li>
          </ul>
        </div>
        <div>
          <h2>2. Output</h2>
          <img
            src="https://raw.githubusercontent.com/Bhushan-Wagh98/notes/main/screenshots/live%20change.png"
            alt="live change"
          />
          <ul>
            <li>
              You can edit your note as well as anyone with the link can edit
              and make changes in your note.
            </li>
            <li>
              As you can see the obove image, when you edit the note, the output
              is shown everywhere.
            </li>
          </ul>
        </div>
        <div>
          <h2>3. Additional Feature</h2>
          <img
            src="https://raw.githubusercontent.com/Bhushan-Wagh98/notes/main/screenshots/print%20button.jpg"
            alt="print button"
          />
          <ul>
            <li>We provided you the print button as additional feature.</li>
          </ul>
        </div>
        <div>
          <h2>4. Print</h2>
          <img
            src="https://raw.githubusercontent.com/Bhushan-Wagh98/notes/main/screenshots/print.png"
            alt="print"
          />
          <ul>
            <li>
              After clicking the <code>Print</code> button, you can print your
              note or you can save your note as <code>PDF</code>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Helpfn;
