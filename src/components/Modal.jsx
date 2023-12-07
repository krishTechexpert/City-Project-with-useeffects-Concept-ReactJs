import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, open }) => {
  const dialog = useRef();
  useEffect(() => {
    if (open) {
      dialog.current.show();
    } else {
      dialog.current.close();
    }
  }, [open]);

  return createPortal(
    <dialog className="modal" ref={dialog}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal"),
  );
};

export default Modal;
