import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Spinner } from 'reactstrap';
import Button from '../../../component/Button';
import Segment from '../../../component/Segment';
import bca from '../../../assets/images/payment/bca.png'


const Payment = (props) => {
    
    const useToggle = (initialState) => {
        const [toggleValue, setToggleValue] = useState(initialState);
    
        const toggler = () => {setToggleValue(!toggleValue)};
        return [toggleValue, toggler]
    };
    
    const [toggle, setToggle] = useToggle();

    return(
        <>
            <Segment className="bg-search-bar-section-confirm"></Segment>
            <Segment className="container-search container">
                <Segment className="d-flex confirm-nav justify-content-between flex-row">
                    <Segment className="nav-left d-flex gap-4 align-items-center title-form ">
                        <i class="fa-solid fa-arrow-left"></i>
                        BCA Transfer
                    </Segment>
                    <Segment className="nav-right d-flex gap-2 align-items-center title-form justify-content-end">
                        Pilih Metode 
                        <i class="fa-solid fa-minus"></i>
                        Bayar
                        <i class="fa-solid fa-minus"></i>
                        Tiket
                    </Segment>
                </Segment>
            </Segment>
            <Segment className="contains-box contains-car">
                    <Row className='container p-0'>
                        <Col md={7}>
                            <Segment className="card p-4 mb-4">
                                <Segment className="title">
                                    <h6 className='title-form mb-4'>Selesaikan Pembayaran Sebelum</h6>
                                    <p className='paragraph-summary'>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
                                </Segment>
                            </Segment>
                            <Segment className="card p-4 mb-4">
                                <Segment className="title">
                                    <h6 className='title-form mb-4'>Lakukan Transfer Ke</h6>
                                    <Segment className='d-flex align-items-center gap-4 my-4'>
                                        <img src={bca} alt='bca' className='payment-image'></img>
                                        <Segment>
                                            <p className='my-0'>BCA Transfer</p>
                                            <p className='my-0'>a.n Binar Car Rental</p>
                                        </Segment>
                                    </Segment>
                                    <Segment className="mb-4">
                                        <p className='my-1 paragraph-summary'>Nomer Rakening</p>
                                        <Button
                                            className="btn btn-light d-flex mt-2 align-items-center justify-content-between"
                                            style={{borderColor:"rgb(228, 228, 228)", width:"100%"}}>
                                            54104257877
                                            <i class="fa-solid fa-copy"></i>
                                        </Button>
                                    </Segment>
                                    <Segment className="mb-4">
                                        <p className='my-1 paragraph-summary'>Total Bayar</p>
                                        <Button
                                            className="btn btn-light d-flex mt-2 align-items-center justify-content-between"
                                            style={{borderColor:"rgb(228, 228, 228)", width:"100%"}}>
                                            Rp 3.500.000
                                            <i class="fa-solid fa-copy"></i>
                                        </Button>
                                    </Segment>
                                </Segment>
                            </Segment>
                            <Segment className="card p-4">
                                <Segment className="title">
                                    <h6 className='title-form mb-4'>Instruksi Pembayaran</h6>
                                    <Segment className="d-flex flex-direction-row justify-content-between">
                                        <Col md={3}>
                                            <Button
                                                className="btn d-flex align-items-center justify-content-center"
                                                style={{width:"100%"}}>
                                                <h6 className='title-form mx-0'>ATM BCA</h6>
                                            </Button>
                                        </Col>
                                        <Col md={3}>
                                            <Button
                                                className="btn d-flex align-items-center justify-content-center"
                                                style={{width:"100%"}}>
                                                <h6 className='paragraph-form mx-0'>M-BCA</h6>
                                            </Button>
                                        </Col>
                                        <Col md={3}>
                                            <Button
                                                className="btn d-flex align-items-center justify-content-center"
                                                style={{width:"100%"}}>
                                                <h6 className='paragraph-form mx-0'>BCA Click</h6>
                                            </Button>
                                        </Col>
                                        <Col md={3}>
                                            <Button
                                                className="btn d-flex align-items-center justify-content-center"
                                                style={{width:"100%"}}>
                                                <h6 className='paragraph-form mx-0'>Internet Banking</h6>
                                            </Button>
                                        </Col>
                                    </Segment>
                                    <Segment className="line-1"></Segment>
                                    <Segment>
                                        <ul className='paragraph-form detail-paragraph-form my-4 mb-4'>
                                            <li>Masukkan kartu ATM, lalu PIN</li>
                                            <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                                            <li>Masukkan nomor BCA Virtual Account: 70020+Order ID Contoh: No. Peserta: 12345678, maka ditulis 7002012345678</li>
                                            <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                                            <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                                        </ul>
                                    </Segment>
                                </Segment>
                            </Segment>
                        </Col>
                        <Col md={5}>
                            <Segment className="card card-size d-flex flex-column p-4">
                                <Segment className="py-4 detail-car-subitem-2">
                                    <Segment className="py-1 paragraph-form d-flex align-items-center justify-content-center">Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</Segment>
                                    <Button
                                        onClick={setToggle}
                                        className="btn btn-success">
                                        Bayar
                                    </Button>
                                </Segment>
                            </Segment>
                        </Col>
                        {toggle &&(
                        <Col md={5}>
                            <Segment className="card card-size d-flex flex-column p-4">
                                <Segment className="py-4 detail-car-subitem-2">
                                    <h6 className='title-form mx-0'>Konfirmasi Pembayaran</h6>
                                    <p className='paragraph-form mx-0'>Terima kasih telah melakukan konfirmasi pembayaran. Pembayaranmu akan segera kami cek tunggu kurang lebih 10 menit untuk mendapatkan konfirmasi.</p>
                                    <h6 className='title-form mx-0'>Upload Bukti Pembayaran</h6>
                                    <p className='paragraph-form mx-0'>Untuk membantu kami lebih cepat melakukan pengecekan. Kamu bisa upload bukti bayarmu</p>
                                    <Button
                                        onClick={setToggle}
                                        className="btn btn-success">
                                        Upload
                                    </Button>
                                </Segment>
                            </Segment>
                        </Col>
                        )}
                    </Row>
                </Segment>
        </>
    )
}

export default Payment