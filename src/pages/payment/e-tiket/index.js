import React from "react";
import Segment from "../../../component/Segment";
import { render } from "@testing-library/react";
import { Card } from "reactstrap";

const Tiket = () => {
  return (
    <>
      <Segment className="container">
        <div className="ticket m-4 p-4">
          <div className="ticket-title d-flex flex-column gap-2 align-items-center justify-content-center">
            <i
              className="d-flex align-items-center justify-content-center fa-solid fa-circle-check fa-2xl"
              style={{ color: "#91CF93", width: "50px", height: "50px" }}
            ></i>
            <div className="title-form my-2">Pembayaran Berhasil</div>
            <div className="paragraph-form mb-4">
              Tunjukkan invoice ini ke petugas BCR di titik temu.
            </div>
          </div>
          <Segment className="d-flex align-items-center justify-content-center">
            <Card className="mb-4" style={{ width: "700px", padding: "24px" }}>
              <div className="d-flex gap-4 align-items-center justify-content-between">
                <p className="my-0 title-form">Invoice</p>
                <button
                  className="btn d-flex gap-2 align-items-center px-4 py-2 mb-2"
                  style={{
                    border: "solid",
                    borderColor: "#0D28A6",
                    color: "#0D28A6",
                  }}
                >
                  <i class="fa-solid fa-download"></i>Download
                </button>
              </div>

              <div>
                <div
                  className="upload-file d-flex align-items-center justify-content-center gap-4"
                  style={{
                    width: "100%",
                    background: "#EEEEEE",
                    height: "200px",
                    borderRadius: "5px",
                    border: "dashed",
                    borderColor: "#D0D0D0",
                    cursor: "pointer",
                  }}
                >
                  <i class="fa-regular fa-image fa-2xl"></i>
                  PDF Viewer
                </div>
              </div>
            </Card>
          </Segment>
        </div>
      </Segment>
    </>
  );
};

export default Tiket;
