import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Offer = () => {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  }

  const loadPreviousPage = () => {
    if ((pageNumber - 1) <= 0) {
      setPageNumber(numPages)
    } else {
      setPageNumber(pageNumber - 1)
    }
  }

  const loadNextPage = () => {
    if ((pageNumber + 1) > numPages) {
      setPageNumber(1)
    } else {
      setPageNumber(pageNumber + 1)
    }
  }

  return (
    <Container>
      <h1 className="mt-3">Ponuka</h1>
      <p className="mt-2">
        <Button onClick={loadPreviousPage}><FaArrowLeft /></Button> Page {pageNumber} of {numPages} <Button onClick={loadNextPage}><FaArrowRight /></Button>
      </p>
      <Document file="./TP1_Ponuka.pdf" onLoadError={console.error} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} scale={0.75} className="text-center" />
      </Document>
      <p>
        <Button onClick={loadPreviousPage}><FaArrowLeft /></Button> Page {pageNumber} of {numPages} <Button onClick={loadNextPage}><FaArrowRight /></Button>
      </p>
    </Container>
  );
}

export default Offer;
