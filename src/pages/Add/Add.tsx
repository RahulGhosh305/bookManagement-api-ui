import { Button, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import Navbar from '../../components/coomon/Navbar';
import { addBook } from '../../redux/actionCreatetors/actionCreatetors';

const Add = () => {
    const dispatch = useDispatch()
    const onFinish = (values: any) => {
        // console.log('Success:', values);
        dispatch<any>(addBook(values))
        // fetch("http://localhost:5000/", {
        //     method: 'POST',
        //     body: JSON.stringify(values),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         alert("Successfully Added");
        //     })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <Navbar />
            <h3 style={{ textAlign: "center" }}>Add Information</h3>
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
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Author Name"
                        name="authorName"
                        rules={[{ required: true, message: 'Please input your phone!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, message: 'Please input your email!' }]}
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

export default Add;