import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row, Spinner } from 'reactstrap';
import Button from '../../../component/Button';
import Segment from '../../../component/Segment';
import BackButton from '../../../component/BackButton';
import Summary from '../../../component/Summary';
import bca from '../../../assets/images/payment/bca.png'
import bni from '../../../assets/images/payment/bni.png'
import mandiri from '../../../assets/images/payment/mandiri.png'

const Payment = (props) => {
    const navigate = useNavigate()
    const [show, toggleShow] = useState(true);
    
    const [selectBank, setSelectBank] = useState([])
    const bank = [
        {id: 1, img: bca, name: "BCA Transfer"},
        {id: 2, img: bni, name: "BNI Transfer"},
        {id: 3, img: mandiri, name: "Mandiri Transfer"},
    ]
    const handleClick = (params) => {
        setSelectBank(params)
    }
    
    return(
        <>
            <Segment className="bg-search-bar-section"></Segment>
            
            <Segment className="container-search container">
                <Segment className="d-flex payment-nav justify-content-between flex-row">
                    <Segment className="nav-left">
                        {/* <i style={{cursor: "pointer"}} onClick={goBack} class="fa-solid fa-arrow-left"></i> */}
                        <BackButton>Pembayaran</BackButton>
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
                                    <>{bank.map((item, index) => {
                                        return <Segment className="d-flex align-items-center justify-content-between">
                                            <Button className='d-flex align-items-center gap-4 my-3' 
                                                    style={{width: "100%", border:"none", background: "none"}} 
                                                    onClick={() => handleClick(item.id)}>
                                                        <img src={item.img} className='payment-image'></img>
                                                        <p className='my-0 paragraph-summary'>{item.name}</p>
                                                        <i className="line-1"></i>
                                            </Button>
                                            {item.id === selectBank && 
                                            <Segment>
                                                <p className="fa-solid fa-check d-flex align-items-center my-0" style={{color: "#5CB85F"}}></p>
                                            </Segment>
                                            }
                                        </Segment>
                                    })}</>
                                </Segment>
                            </Segment>
                        </Col>
                        <Col md={5}>
                            <Segment className="card card-size d-flex flex-column p-4">
                                <Segment className="py-4 detail-car-subitem-2">
                                    <Segment className="py-1 title-form">Inova</Segment>
                                    <Segment className="mb-4 py-1 paragraph-form d-flex gap-2">
                                        <i className='fa fa-users'></i>
                                        <p className='my-0'>6 - 8 Orang</p>
                                    </Segment>
                                    <Segment className="d-flex align-items-center justify-content-between">
                                        <Segment className="py-1 title-form d-flex gap-2 align-items-center">Total 
                                        <Button onClick={() => toggleShow(!show)} style={{background:"none", border:"none"}}>{show ? <i className='fa-solid fa-chevron-up'></i> : <i className='fa-solid fa-chevron-down'></i>}</Button></Segment>
                                        <Segment className="py-1 title-form">Rp 3.500.000</Segment>
                                    </Segment>
                                    {show &&
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
                                                    <Segment style={{color:'#5CB85F'}}>Termasuk</Segment>
                                                </Segment>
                                                <Segment className="py-1 d-flex align-items-center justify-content-between paragraph-form">
                                                    <li>Biaya Makan Supir</li>
                                                    <Segment style={{color:'#5CB85F'}}>Termasuk</Segment>
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