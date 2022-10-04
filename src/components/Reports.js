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
  console.log(files)

  files.forEach(file => {
    console.log(file)
  });

  return (
    <Container>
      <h1 class="mt-3">Zápisnice</h1>
        {files.map((file, index) => (
          <Row>
            <Report key={file.toString()} file={file} fileName={"Zápisnica - " + (index + 1) + ". týždeň"} />
          </Row>
        ))}
    </Container>
  );
}

export default Reports;
