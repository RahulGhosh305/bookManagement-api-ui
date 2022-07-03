import { Row } from 'antd';
import { useEffect, useState } from 'react';
import CommonCard from '../../components/coomon/CommonCard';
import Navbar from '../../components/coomon/Navbar';

const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/")
            .then(res => res.json())
            .then(data => setData(data.data))
    }, [])
    console.log(data);
    return (
        <>
            <Navbar />
            <Row style={{ display: 'flex', justifyContent: 'center', flexWrap: "wrap" }}>
                {
                    data && data.map((book) => <CommonCard bookData={book} key={Math.random()} />)
                }
            </Row>
        </>
    );
};

export default Home;