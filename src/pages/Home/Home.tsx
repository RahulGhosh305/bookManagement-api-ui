import { Row } from 'antd';
import { useEffect } from 'react';
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