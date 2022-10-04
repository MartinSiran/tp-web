import React from "react";
import Button from 'react-bootstrap/Button';

const Report = (props) => {
  return (
    <Button variant='primary' href={props.file}>{props.fileName}</Button>
  );
}

export default Report;
