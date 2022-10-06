import { createPortal } from "react-dom";

const ReactPortal = ({ children, containerElement }) => {
  return createPortal(children, document.querySelector(containerElement));
};

export default ReactPortal;
