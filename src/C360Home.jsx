import React, { useState } from "react";

import "./C360Home.css";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import FormSubscribe from "./Form";

function C360Home() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <>
      <div className="cars-container flex flex-wrap justify-evenly ">
        <div className="card">
          {/* <p>Customer 360</p> */}
          <img src="https://alphzbqgpo.cloudimg.io/v7/www.growmodo.com/wp-content/uploads/2019/05/growmodo-blog-image-daisy-discount-01.jpg" />
        </div>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Customer 360</h2>
        <div className="modal-info-cont">
          <div className="img-cont">
            <img src="https://alphzbqgpo.cloudimg.io/v7/www.growmodo.com/wp-content/uploads/2019/05/growmodo-blog-image-daisy-discount-01.jpg" />
          </div>
          <FormSubscribe></FormSubscribe>
        </div>
      </Modal>
    </>
  );
}

export default C360Home;
