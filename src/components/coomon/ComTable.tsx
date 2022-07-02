import { Space, Table, Tag, Button, Row, Col } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New Yke Park',

    }
];

const ComTable: React.FC = () => {
    const navigate = useNavigate()

    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space style={{ display: "flex" }} size="middle">
                    <Button onClick={() => handleEdit()}>Edit</Button>
                    <Button onClick={() => handleDelete()}>Delete</Button>
                </Space>
            ),
        },
    ];
    const handleEdit = () => {
        navigate('/edit')
    }
    const handleDelete = () => {
        console.log("delete")
    }

    return (
        <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col span={12} offset={6}>
                <Table columns={columns} dataSource={data} />
            </Col>
        </Row>
    )
};

export default ComTable; 