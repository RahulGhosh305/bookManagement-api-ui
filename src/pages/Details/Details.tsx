import { Space, Table, Button, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/coomon/Navbar';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/actionCreatetors/actionCreatetors';

interface IData {
    authorName: string;
    bookName: string;
    price: number;
    _id?: string;
}

const Details = () => {
    const [bookdata, setBookData] = useState<IData>()
    console.log(bookdata);
    const navigate = useNavigate()
    const { id } = useParams()

    const dispatch = useDispatch()

    // Get Single Book Item
    useEffect(() => {
        fetch(`http://localhost:5000/${id}`)
            .then(res => res.json())
            .then(data => setBookData(data.data))
    }, [id])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'bookName',
            key: 'name',
        },
        {
            title: 'Address',
            dataIndex: 'authorName',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: () => (
                <Space style={{ display: "flex" }} size="middle">
                    <Button onClick={() => handleEdit(bookdata?._id)}>Edit</Button>
                    <Button onClick={() => handleDelete(bookdata?._id)}>Delete</Button>
                </Space>
            ),
        },
    ];


    const data = [
        {
            key: '1',
            bookName: bookdata?.bookName,
            authorName: bookdata?.authorName,
        }
    ];

    const handleEdit = (id: any) => {
        navigate(`/edit/${id}`)
    }

    // Delete Book Items
    const handleDelete = (id: any) => {
        console.log(id)

        dispatch<any>(deleteBook(id))



        // fetch(`http://localhost:5000/${id}`, {
        //     method: 'DELETE',
        // })
        //     .then(res => res.json())
        //     .then(data => alert("Deleted"))


    }

    return (
        <>
            <Navbar />
            <Row style={{ display: "flex", justifyContent: "center" }}>
                <Col span={24}>
                    <Table columns={columns} dataSource={data} />
                </Col>
            </Row>
        </>
    );
};

export default Details;

