import { Row } from 'antd';
import CommonCard from '../../components/coomon/CommonCard';
import Navbar from '../../components/coomon/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <Row style={{ display: 'flex', justifyContent: 'center', flexWrap: "wrap" }}>
                <CommonCard />
            </Row>
        </>
    );
};

export default Home;