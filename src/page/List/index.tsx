import Nav from '@/components/Nav';
import type {ColumnsType} from 'antd/es/table';
import {Button, Form, Input, Select, Table, Tag, Card} from 'antd';

const {Option} = Select;

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}


const columns: ColumnsType<DataType> = [
    {
        title: 'ID',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    }, {
        title: 'API Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    }, {
        title: 'Application Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    }, {
        title: 'Type',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{123}</a>,
    },
    {
        title: 'Description',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Team Name',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Department',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: 'Contact DL',
        dataIndex: 'age',
        key: 'age',
    }

];

const data: DataType[] = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];


export default function Apply() {
    return (
        <div>
            <div id="header-wrapper">
                <div className="5grid-layout">
                    <div className="row">
                        <div className="12u">
                            <section id="header">
                                <Nav path='/list'/>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
            <div id="main-wrapper">
                <div style={{width: 1500, margin: "auto"}}>
                    <Card>
                        <Form
                            layout="inline"
                            className="components-table-demo-control-bar"
                            style={{marginBottom: 16, justifyContent: "end"}}
                        >

                            <Form.Item name="note" rules={[{required: true}]}>
                                <Select defaultValue="lucy" style={{width: 120}} bordered={false}>
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="Yiminghe">yiminghe</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="note" rules={[{required: true}]}>
                                <Tag color="blue">blue</Tag>
                            </Form.Item>

                            <Form.Item name="note" rules={[{required: true}]}>
                                <Input/>
                            </Form.Item>

                            <Form.Item name="gender" rules={[{required: true}]}>
                                <Button type="primary">Search</Button>
                            </Form.Item>
                        </Form>
                        <Table columns={columns} dataSource={data}/>
                    </Card>
                </div>
            </div>
        </div>
    )
}
