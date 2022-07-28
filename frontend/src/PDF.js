function PDFfn() {
  const download = () => {
    window.print();
    // document.body.print()
    // console.log(window);
  };
  return (
    <div className="pdfButton">
      <button onClick={download}>Print</button>
    </div>
  );
}
export default PDFfn;
