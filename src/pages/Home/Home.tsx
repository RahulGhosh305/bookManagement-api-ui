import { Row } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CommonCard from '../../components/coomon/CommonCard';
import Navbar from '../../components/coomon/Navbar';
import { getBook } from '../../redux/actionCreatetors/actionCreatetors';

const Home = () => {
    const { books } = useSelector((state: any) => state)
    const dispatch = useDispatch()
    // console.log(books);

    useEffect(() => {
        dispatch<any>(getBook())
    }, [])

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:5000/")
    //         .then(res => res.json())
    //         .then(data => setData(data.data))
    // }, [])
    // console.log(data);
    return (
        <>
            <Navbar />
            <Row style={{ display: 'flex', justifyContent: 'center', flexWrap: "wrap" }}>
                {
                    books.map((book: any) => <CommonCard bookData={book} key={Math.random()} />)
                }
            </Row>
        </>
    );
};

export default Home;