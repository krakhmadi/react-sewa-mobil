import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Col, Row, Spinner } from 'reactstrap';
import Button from '../../../component/Button';
import Input from '../../../component/Input';
import Segment from '../../../component/Segment';
import SelectBox from '../../../component/Selectbox';
import { fetchApi } from '../../../config/services';

const carSize = {
    small: "2 - 4 Orang",
    medium: "4 - 6 Orang",
    large: "6 - 8 Orang"
}

const DetailCar = (props) => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [loader, setloader] = useState("idle");
    const { id } = useParams();
    const fetchingCar = useCallback((params = null) => {
        setloader("fetching")
        fetchApi(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`, params).then(result => {
            setData(result.data)
            setloader("resolve")
        }).catch(e => {
            setloader("reject")
        })
    }, [id])

    useEffect(() => {
        fetchingCar()
    }, [fetchingCar])

    const formatNumber = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);

    return (
        <>
            <Segment className="detail-section">
                <Segment className="bg-search-bar-section">
                </Segment>
                <Segment className="container-search container">
                    <Segment className="search-bar">
                        <h3 className="title-form">Pencarianmu</h3>
                        <Segment className="row search-form">
                            <Input 
                                disabled={true}
                                className="form-control col-md-3 search-form-item"
                                name="carName"
                                label="Nama Mobil"
                                placeholder="Masukan Nama/Tipe Mobil" />
                            <SelectBox 
                                disabled={true}
                                className="form-control col-md-3 search-form-item"
                                name="kapasitas"
                                title="Masukan Kapasitas Mobil"
                                label="Kategori"/>
                            <SelectBox 
                                disabled={true}
                                className="form-control col-md-3 search-form-item"
                                name="kapasitas"
                                title="Masukan Harga Sewa Per Hari"
                                label="Harga"/>
                            <SelectBox
                                disabled={true}
                                className="form-control col-md-3 search-form-item"
                                name="kapasitas"
                                title="Disewa"
                                label="Status"/>
                        </Segment>
                    </Segment>
                </Segment>
                {loader !== "resolve" && <Segment className="contains-box contains-car text-center"><Spinner size="md" color='success'>Loading</Spinner></Segment>}
                {loader === "resolve" && <Segment className="contains-box contains-car">
                    <Row className='container p-0'>
                        <Col md={7}>
                            <Segment className="card p-4">
                                <Segment className="title pb-4">
                                    <h6 className='title-form'>Tentang Paket</h6>
                                </Segment>
                                <Segment className="body">
                                    <h6 className='title-form'>Includes</h6>
                                    <ul className='paragraph-form detail-paragraph-form'>
                                        <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam.</li>
                                        <li> Sudah termasuk bensin selama 12 jam.</li>
                                        <li>Sudah termasuk Tiket Wisata.</li>
                                        <li>Sudah termasuk pajak.</li>
                                    </ul>
                                </Segment>
                                <Segment className="body">
                                    <h6 className='title-form'>Exclude</h6>
                                    <ul className='paragraph-form detail-paragraph-form'>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam .</li>
                                        <li>Tidak termasuk akomodasi penginapan.</li>
                                    </ul>
                                </Segment>
                                <Segment className="body">
                                    <h6 className='title-form'>Refund, Reschedule, Overtime</h6>
                                    <ul className='paragraph-form detail-paragraph-form'>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam.</li>
                                        <li>Tidak termasuk akomodasi penginapan.</li>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam.</li>
                                        <li> Tidak termasuk akomodasi penginapan.</li>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari.</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam.</li>
                                        <li>Tidak termasuk akomodasi penginapan.</li>
                                    </ul>
                                </Segment>
                            </Segment>
                        </Col>
                        <Col md={5}>
                            <Segment className="card card-size d-flex flex-column p-4">
                                <img className="img-car-detail" src={data?.image} alt="pict-car" />
                                <Segment className="py-4 detail-car-subitem-2">
                                    <Segment className="py-1 title-form">{data?.name}</Segment>
                                    <Segment className="py-1 paragraph-form">
                                        <i className='fa fa-users'></i> {carSize[data?.category]}
                                    </Segment>
                                    <Segment className='py-1 detail-paragraph-form'>
                                        <p>Tentukan lama sewa mobil (max. 7 hari)</p>
                                    </Segment>
                                    <Segment>
                                        
                                    </Segment>
                                    <Segment className="d-flex justify-content-between py-1">
                                        <Segment className="title-form">Total</Segment>
                                        <Segment className="title-form">{formatNumber(data?.price)}</Segment>
                                    </Segment>
                                    <Button
                                        onClick={() => navigate('/payment')}
                                        className="btn btn-success">
                                        Lanjutkan Pembayaran
                                    </Button>
                                </Segment>
                            </Segment>
                        </Col>
                    </Row>
                </Segment>}
            </Segment>
            
        </>
    )
}

export default DetailCar