import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import offers from '../reports'
import Report from "./Report";

const Reports = () => {

  const importAll = (r) => {
    return r.keys().map(r);
  };

  const [files, setFiles] = useState(importAll(require.context("../reports", false, /\.pdf$/)))
  const [files2, setFiles2] = useState(importAll(require.context("../reports2", false, /\.pdf$/)))
  console.log(files)

  files.forEach(file => {
    console.log(file)
  });

  return (
    <Container>
      <h1 class="mt-3">Zápisnice</h1>
      <h2 className="mt-2">Zimný semester</h2>
        {files.map((file, index) => (
          <Row>
            <Report key={file.toString()} file={file} fileName={"Zápisnica č. " + (index + 1)} />
          </Row>
        ))}
      <h2 className="mt-2">Letný semester</h2>
        {files2.map((file, index) => (
          <Row>
            <Report key={file.toString()} file={file} fileName={"Zápisnica č. " + (index + 1)} />
          </Row>
        ))}
    </Container>
  );
}

export default Reports;
