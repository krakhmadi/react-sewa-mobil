import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Spinner } from 'reactstrap';
import Button from '../../component/Button';
import Form from '../../component/Form';
import Input from '../../component/Input';
import Segment from '../../component/Segment';
import SelectBox from '../../component/Selectbox';
import { fetchApi } from '../../config/services';

const categoryData = [{
    value: "small",
    label: "2 - 4 Orang"
}, {
    value: "medium",
    label: "4 - 6 Orang"
}, {
    value: "large",
    label: "6 - 8 Orang"
}]

const priceData = [{
    value: 400000,
    label: "Kurang dari Rp.400.000"
}, {
    value: 600000,
    label: " Rp. 400.000 - Rp. 600.000"
}, {
    value: 400000,
    label: "Lebih dari Rp.400.000"
}]

const statusData = [{
    value: true,
    label: "Disewa"
}, {
    value: false,
    label: "Tidak Disewa"
}]


const SearchCar = (props) => {
    const [value, setValue] = useState({
        carName: "",
        kapasitas: "",
        harga: "",
        status: ""
    })
    const navigate = useNavigate();
    const [data, setData] = useState([])
    const [backDrop, setBackDrop] = useState(false)
    const [loader, setloader] = useState("idle")
    const handleChange = (e) => {
        const { name, value } = e.target
        setValue(prev => ({
            ...prev,
            [name]: value
        }))
    }

    document.addEventListener("click", (e) => {
        if (e.target.id === "back-drop") {
            setBackDrop(false)
        }
    })

    const fetchingCar = useCallback((params = null) => {
        setloader('fetching')
        fetchApi('https://bootcamp-rent-cars.herokuapp.com/customer/v2/car', params).then(result => {
            setData(result.data.cars)
            setloader('resolve')
        }).catch(e => {
            setloader('reject')
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchingCar({
            name: value.carName,
            catgory: value.kapasitas,
            isRented: value.status,
            minPrice: value.harga,
            maxPrice: value.harga
        })
        // setBackDrop(false)
    }

    useEffect ( () => {
        fetchingCar()
    }, [fetchingCar])
    
    const formatNumber = (number) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(number);

    return(
        <>
            <Segment className="search-bar-section">
                <Segment className="container-search container">
                {backDrop && <div id="back-drop" className='backdrop'></div>}
                    <Form onSubmit={handleSubmit}>
                        <Segment className="search-bar">
                            {/* <h3 className="title-form">Pencarianmu</h3> */}
                            <Segment className="row search-form">
                                <Segment className="col-10">
                                    <Segment className="row">
                                        <Input 
                                            onFocus={() => { setBackDrop(true) }}
                                            onChange={handleChange}
                                            className="form-control col-md-3 search-form-item"
                                            name="carName"
                                            label="Nama Mobil"
                                            placeholder="Masukan Nama/Tipe Mobil" />
                                        <SelectBox 
                                            onFocus={() => { setBackDrop(true) }}
                                            onChange={handleChange}
                                            className="form-control col-md-3 search-form-item"
                                            name="kapasitas"
                                            title="Masukan Kapasitas Mobil"
                                            label="Kategori"
                                            data={categoryData}/>
                                        <SelectBox 
                                            onFocus={() => { setBackDrop(true) }}
                                            onChange={handleChange}
                                            className="form-control col-md-3 search-form-item"
                                            name="kapasitas"
                                            title="Masukan Harga Sewa Per Hari"
                                            label="Harga"
                                            data={priceData}/>
                                        <SelectBox
                                            onFocus={() => { setBackDrop(true) }}
                                            onChange={handleChange}
                                            className="form-control col-md-3 search-form-item"
                                            name="kapasitas"
                                            title="Disewa"
                                            label="Status"
                                            data={statusData}/>
                                    </Segment>
                                </Segment>
                                <Segment className="col-2 button-form-item">
                                    <Button className="btn btn-success btn-form-item">Cari Mobil</Button>
                                </Segment>
                            </Segment>
                        </Segment>
                    </Form>
                </Segment>
            </Segment>
            {loader !== "resolve" && <Segment className="text-center w-100"><Spinner size="md" color='success'>Loading</Spinner></Segment>}
            {loader === "resolve" && <Segment className="container card-item">
                <Row>
                    {
                        data.map((item, index) => {
                            return (
                                <Col key={index} md={4} className="pb-4">
                                    <Segment className="card card-size d-flex flex-column">
                                        <Segment className="card-image-placeholder">
                                            <img className="card-car-image" src={item.image} alt="pict-car" />
                                        </Segment>
                                        <Segment className="card-content px-4 pb-4">
                                            <h6 className='card-car-name'>{item.name}</h6>
                                            <p className='card-car-price'>{formatNumber(item.price)} / Hari</p>
                                            <p className='card-car-description'>
                                                Lorem ipsum dolor card-car-imagesit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            </p>
                                            <Button onClick={() => navigate(`/cari-mobil/${item.id}`)} type="button" className="btn btn-success w-100">Pilih Mobil</Button>
                                        </Segment>
                                    </Segment>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Segment>}
        </>
    )
}

export default SearchCar