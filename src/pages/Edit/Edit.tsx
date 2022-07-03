import { Button, Form, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/coomon/Navbar';

const Edit = () => {
    const [bookData, setBookData] = useState()
    const { id } = useParams()
    // console.log(id);
    console.log(bookData);

    useEffect(() => {
        fetch(`http://localhost:5000/${id}`)
            .then(res => res.json())
            .then(data => setBookData(data.data))
    }, [id])

    // Update Book
    const onFinish = (values: any) => {
        console.log('Success:', values);
        fetch(`http://localhost:5000/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(values),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => alert(data.message))
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Navbar />
            <h3 style={{ textAlign: "center" }}>Update Information</h3>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Book Name"
                        name="bookName"
                        rules={[{ required: true, message: 'Please input your bookName!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Author Name"
                        name="authorName"
                        rules={[{ required: true, message: 'Please input your authorName!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please input your price!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default Edit;