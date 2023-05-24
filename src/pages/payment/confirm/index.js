import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Row, Spinner } from "reactstrap";
import Button from "../../../component/Button";
import Segment from "../../../component/Segment";
import bca from "../../../assets/images/payment/bca.png";
import BackButton from "../../../component/BackButton";
import CountdownTimerDays from "../../../component/CountdownTimerDays";
import CountdownTimer from "../../../component/CountdownTimer";
import UploadImage from "../../../component/UploadImage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Tiket from "../e-tiket";
import file from "../../../component/UploadImage";

const Payment = (props) => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState(false);

  const { state } = useLocation();
  console.log(UploadImage);
  // const { state } = this.props.location
  const notify = () => toast("Coppied to Clipboard");

  return (
    <>
      <Segment className="bg-search-bar-section-confirm"></Segment>
      <Segment className="container-search container">
        <Segment className="d-flex confirm-nav justify-content-between flex-row">
          <Segment className="nav-left d-flex gap-4 align-items-center title-form ">
            <BackButton>BCA Transfer</BackButton>
          </Segment>
          <Segment className="nav-right d-flex gap-2 align-items-center title-form justify-content-end">
            <Segment className="d-flex gap-2 align-items-center">
              <p
                className="paragraph-form px-1 py-1 m-0 nav-item-list"
                style={{
                  backgroundColor: "#0D28A6",
                  color: "white",
                }}
              >
                <i class="fa-solid fa-check fa-sm m-0 p-0"></i>
              </p>
              <p className="paragraph-form m-0">Pilih Metode</p>
            </Segment>
            <Segment class="line-2" style={{ width: "30px" }}></Segment>
            <Segment className="d-flex gap-2 align-items-center">
              <p
                className="paragraph-form px-1 py-1 m-0 nav-item-list"
                style={{
                  backgroundColor: "#0D28A6",
                  color: "white",
                }}
              >
                2
              </p>
              <p className="paragraph-form m-0">Bayar</p>
            </Segment>
            <Segment class="line-2" style={{ width: "30px" }}></Segment>
            <Segment className="d-flex gap-2 align-items-center">
              <p className="paragraph-form px-1 py-1 m-0 nav-item-list">3</p>
              <p className="paragraph-form m-0">Tiket</p>
            </Segment>
          </Segment>
        </Segment>
        <p className="paragraph-form order-nav">Order ID: 86754231</p>
      </Segment>
      <Segment className="contains-box contains-car">
        <Row className="container p-0">
          <Col md={7}>
            <Segment className="card p-4 mb-4 d-flex flex-row justify-content-between">
              <Segment className="title">
                <h6 className="title-form mb-4">
                  Selesaikan Pembayaran Sebelum
                </h6>
                <p className="paragraph-summary">
                  Rabu, 19 Mei 2022 jam 13.00 WIB
                </p>
              </Segment>
              <Segment>
                <CountdownTimerDays />
              </Segment>
            </Segment>
            <Segment className="card p-4 mb-4">
              <Segment className="title">
                <h6 className="title-form mb-4">Lakukan Transfer Ke</h6>
                <Segment className="d-flex align-items-center gap-4 my-4">
                  <img
                    src={state?.img}
                    alt="bca"
                    className="payment-image"
                  ></img>
                  <Segment>
                    <p className="my-0">{state?.name}</p>
                    <p className="my-0">a.n Binar Car Rental</p>
                  </Segment>
                </Segment>
                <Segment className="mb-4">
                  <p className="my-1 paragraph-summary">Nomer Rakening</p>
                  <Button
                    className="btn btn-light d-flex mt-2 align-items-center justify-content-between"
                    onClick={notify}
                    style={{
                      borderColor: "rgb(228, 228, 228)",
                      width: "100%",
                    }}
                  >
                    54104257877
                    <i class="fa-solid fa-copy"></i>
                  </Button>
                  <ToastContainer
                    position="bottom-center"
                    autoClose={2000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover
                    theme="dark"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </Segment>
                <Segment className="mb-4">
                  <p className="my-1 paragraph-summary">Total Bayar</p>
                  <Button
                    className="btn btn-light d-flex mt-2 align-items-center justify-content-between"
                    onClick={notify}
                    style={{
                      borderColor: "rgb(228, 228, 228)",
                      width: "100%",
                    }}
                  >
                    Rp 3.500.000
                    <i class="fa-solid fa-copy"></i>
                  </Button>
                  <ToastContainer
                    position="bottom-center"
                    autoClose={2000}
                    hideProgressBar={true}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable={false}
                    pauseOnHover
                    theme="dark"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  />
                </Segment>
              </Segment>
            </Segment>
            <Segment className="card p-4">
              <Segment className="title">
                <h6 className="title-form mb-4">Instruksi Pembayaran</h6>
                <Segment className="d-flex flex-direction-row justify-content-between">
                  <Col md={3}>
                    <Button
                      className="btn d-flex align-items-center justify-content-center"
                      style={{ width: "100%" }}
                    >
                      <h6 className="title-form mx-0">ATM {state?.bank_id}</h6>
                    </Button>
                  </Col>
                  <Col md={3}>
                    <Button
                      className="btn d-flex align-items-center justify-content-center"
                      style={{ width: "100%" }}
                    >
                      <h6 className="paragraph-form mx-0">
                        M-{state?.bank_id}
                      </h6>
                    </Button>
                  </Col>
                  <Col md={3}>
                    <Button
                      className="btn d-flex align-items-center justify-content-center"
                      style={{ width: "100%" }}
                    >
                      <h6 className="paragraph-form mx-0">
                        {state?.bank_id} Click
                      </h6>
                    </Button>
                  </Col>
                  <Col md={3}>
                    <Button
                      className="btn d-flex align-items-center justify-content-center"
                      style={{ width: "100%" }}
                    >
                      <h6 className="paragraph-form mx-0">Internet Banking</h6>
                    </Button>
                  </Col>
                </Segment>
                <Segment className="line-1"></Segment>
                <Segment>
                  <ul className="paragraph-form detail-paragraph-form my-4 mb-4">
                    <li>Masukkan kartu ATM, lalu PIN</li>
                    <li>
                      Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek{" "}
                      {state?.bank_id} Virtual Account”
                    </li>
                    <li>
                      Masukkan nomor {state?.bank_id} Virtual Account:
                      70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis
                      7002012345678
                    </li>
                    <li>
                      Layar ATM akan menampilkan konfirmasi, ikuti instruksi
                      untuk menyelesaikan transaksi
                    </li>
                    <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                  </ul>
                </Segment>
              </Segment>
            </Segment>
          </Col>
          {!isShow ? (
            <Col md={5}>
              <Segment className="card card-size d-flex flex-column p-4">
                <Segment className="py-4 detail-car-subitem-2">
                  <Segment className="py-1 paragraph-form d-flex align-items-center justify-content-center">
                    Klik konfirmasi pembayaran untuk mempercepat proses
                    pengecekan
                  </Segment>
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsShow(!isShow);
                    }}
                    className="btn btn-success"
                  >
                    Bayar
                  </Button>
                </Segment>
              </Segment>
            </Col>
          ) : (
            <Col md={5}>
              <Segment className="card card-size d-flex flex-column p-4">
                <Segment className="detail-car-subitem-2">
                  <Segment className="d-flex justify-content-between align-items-center">
                    <h6 className="title-form mx-0">Konfirmasi Pembayaran</h6>
                    <CountdownTimer />
                  </Segment>
                  <p className="paragraph-form mx-0">
                    Terima kasih telah melakukan konfirmasi pembayaran.
                    Pembayaranmu akan segera kami cek tunggu kurang lebih 10
                    menit untuk mendapatkan konfirmasi.
                  </p>
                  <h6 className="title-form mx-0">Upload Bukti Pembayaran</h6>
                  <p className="paragraph-form mx-0">
                    Untuk membantu kami lebih cepat melakukan pengecekan. Kamu
                    bisa upload bukti bayarmu
                  </p>
                  <UploadImage />
                  {/* {file ? (
                    <Button
                      className="btn btn-success"
                      onClick={() => navigate("/tiket")}
                    >
                      Upload
                    </Button>
                  ) : (
                    <Button className="btn btn-success" disabled={true}>
                      Upload
                    </Button>
                  )} */}
                  <Button
                    onClick={() => navigate("/tiket")}
                    className="upload-btn btn btn-success"
                    disabled={!file}
                  >
                    Upload
                  </Button>
                </Segment>
              </Segment>
            </Col>
          )}
        </Row>
      </Segment>
    </>
  );
};

export default Payment;
