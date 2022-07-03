import { Col, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const CommonCard = (props: any) => {
    const { _id, bookName, authorName, price } = props.bookData
    const navigate = useNavigate()
    const handleNavigate = (id: string) => {
        navigate(`/${id}`)
    }
    return (
        <>
            <Col span={6}>
                <Card style={{ width: 300, display: 'flex', justifyContent: 'center', border: "1px solid gray", margin: 5, backgroundColor: "#13c2c2" }}>
                    <p>Book Name : {bookName}</p>
                    <p>Author Name: {authorName}</p>
                    <p>Price: {price}</p>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button onClick={() => handleNavigate(_id)} style={{ marginBottom: 5, backgroundColor: "#87e8de", padding: 5 }} type="primary">Show</Button>
                    </div>
                </Card>
            </Col>
        </>
    );
};

export default CommonCard;