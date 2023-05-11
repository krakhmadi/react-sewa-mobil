import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Spinner } from 'reactstrap';
import Button from '../../../component/Button';
import Form from '../../../component/Form';
import Input from '../../../component/Input';
import Segment from '../../../component/Segment';
import SelectBox from '../../../component/Selectbox';
import Summary from '../../../component/Summary';
import bca from '../../../assets/images/payment/bca.png'
import bni from '../../../assets/images/payment/bni.png'
import mandiri from '../../../assets/images/payment/mandiri.png'

const Payment = (props) => {
    const navigate = useNavigate()
    // const changeIcon = (icon) => icon.classList.toggle("fa-solid fa-chevron-down");
    const [toggle, setToggle] = useState(true);
    const handleClick = () => {
        setToggle(!toggle);
      };
    
    return(
        <>
            <Segment className="bg-search-bar-section"></Segment>
            
            <Segment className="container-search container">
                <Segment className="d-flex payment-nav justify-content-between flex-row">
                    <Segment className="nav-left d-flex gap-4 align-items-center title-form ">
                        <i class="fa-solid fa-arrow-left"></i>
                        Pembayaran
                        
                    </Segment>
                    <Segment className="nav-right d-flex gap-2 align-items-center title-form justify-content-end">
                        Pilih Metode 
                        <i class="fa-solid fa-minus"></i>
                        Bayar
                        <i class="fa-solid fa-minus"></i>
                        Tiket
                    </Segment>
                </Segment>
                <Segment className="search-bar">
                    <h3 className="title-form">Detail Pesananmu</h3>
                    <Segment className="row search-form">
                        <Summary md={3} className='search-form-item' disabled={true} label="Nama Mobil" p="Innova"/>
                        <Summary md={3} className='search-form-item' disabled={true} label="Kategori" p="6 - 8 Orang"/>
                        <Summary md={3} className='search-form-item' disabled={true} label="Tanggal Mulai Sewa" p="2 Jun 2022"/>
                        <Summary md={3} className='search-form-item' disabled={true} label="Tanggal Akhir Sewa" p="8 Jun 2022"/>
                    </Segment>
                </Segment>
            </Segment>
            <Segment className="contains-box contains-car">
                    <Row className='container p-0'>
                        <Col md={7}>
                            <Segment className="card p-4">
                                <Segment className="title">
                                    <h6 className='title-form mb-4'>Pilih Bank Transfer</h6>
                                    <p className='paragraph-summary'>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                                </Segment>
                                <Segment className="payment-bank">
                                   <Segment className='d-flex align-items-center gap-4 my-4'>
                                        <img src={bca} alt='bca' className='payment-image'></img>
                                        <p className='my-0'>BCA Transfer</p>
                                   </Segment>
                                   <Segment className='d-flex align-items-center gap-4 my-4'>
                                        <img src={bni} alt='bni' className='payment-image'></img>
                                        <p className='my-0'>BNI Transfer</p>
                                   </Segment>
                                   <Segment className='d-flex align-items-center gap-4 my-4'>
                                        <img src={mandiri} alt='mandiri' className='payment-image'></img>
                                        <p className='my-0'>Mandiri Transfer</p>
                                   </Segment>
                                </Segment>
                            </Segment>
                        </Col>
                        <Col md={5}>
                            <Segment className="card card-size d-flex flex-column p-4">
                                <Segment className="py-4 detail-car-subitem-2">
                                    <Segment className="py-1 title-form">Inova</Segment>
                                    <Segment className="mb-4 py-1 paragraph-form">
                                        <i className='fa fa-users'> 6 - 8 </i>
                                    </Segment>
                                    <Segment className="d-flex align-items-center justify-content-between">
                                        <Segment className="py-1 title-form d-flex gap-2 align-items-center">Total 
                                        <Button onClick={handleClick} class="fa-solid fa-chevron-up" style={{background:"none", border:"none"}}></Button></Segment>
                                        <Segment className="py-1 title-form">Rp 3.500.000</Segment>
                                    </Segment>
                                    {toggle ?
                                        <Segment>
                                            <Segment className="py-2">
                                                <Segment className="py-1 title-form">Harga</Segment>
                                                <Segment className="py-1 d-flex align-items-center justify-content-between paragraph-form">
                                                    <li>Sewa Mobil Rp.500.000 x 7 Hari</li>
                                                    <Segment>Rp 3.500.000</Segment>
                                                </Segment>
                                            </Segment>
                                            <Segment className="py-2">
                                                <Segment className="py-1 title-form">Biaya Lainnya</Segment>
                                                <Segment className="py-1 d-flex align-items-center justify-content-between paragraph-form">
                                                    <li>Pajak</li>
                                                    <Segment>Termasuk</Segment>
                                                </Segment>
                                                <Segment className="py-1 d-flex align-items-center justify-content-between paragraph-form">
                                                    <li>Biaya Makan Supir</li>
                                                    <Segment>Termasuk</Segment>
                                                </Segment>
                                            </Segment>
                                            <Segment className="py-2">
                                                <Segment className="py-1 title-form">Belum Termasuk</Segment>
                                                <Segment className="py-1 d-flex align-items-center justify-content-between paragraph-form">
                                                    <li>Bensin</li>
                                                </Segment>
                                                <Segment className="py-1 d-flex align-items-center justify-content-between paragraph-form">
                                                    <li>Tol dan Parkirr</li>
                                                </Segment>
                                            </Segment>
                                        </Segment>
                                        :
                                        <></>
                                    }
                                    
                                    <Segment className="line-1"></Segment>
                                    <Segment className="py-2 d-flex align-items-center justify-content-between title-form">
                                        <Segment className="py-1">Total</Segment>
                                        <Segment className="py-1">Rp 3.500.000</Segment>
                                    </Segment>
                                    <Button
                                        onClick={() => navigate('/confirm')}
                                        className="btn btn-success">
                                        Bayar
                                    </Button>
                                </Segment>
                            </Segment>
                        </Col>
                    </Row>
                </Segment>
        </>
    )
}

export default Payment