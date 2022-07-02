import { Col, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const CommonCard = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/id')
    }
    return (
        <>
            <Col span={6}>
                <Card style={{ width: 300, display: 'flex', justifyContent: 'center', border: "1px solid gray", margin: 5, backgroundColor: "#13c2c2" }}>
                    <p>Name : ExampleName</p>
                    <p>Email: example@gmail.com</p>
                    <p>Phone: xxxxxxxxxx</p>
                    <p>Address: example</p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button onClick={() => handleNavigate()} style={{ marginBottom: 5, backgroundColor: "#87e8de", padding: 5 }} type="primary">Show</Button>
                    </div>
                </Card>
            </Col>
        </>
    );
};

export default CommonCard;