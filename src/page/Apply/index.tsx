import Nav from '@/components/Nav';
import React, {useState} from 'react';

import {
    Button,
    Form,
    Input,
    Radio,
    Select,
    Card
} from 'antd';

const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 4},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 20},
    },
};
const tailFormBtnLayout = {
    wrapperCol: {offset: 4, span: 20}
}

export default function Apply() {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div>
            <div id="header-wrapper">
                <div className="5grid-layout">
                    <div className="row">
                        <div className="12u">
                            <section id="header">
                                <Nav path='/apply'/>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <div id="main-wrapper">
                <div className="5grid-layout">
                    <div className="row">
                        <Card style={{width: 1000, margin: "auto"}}>
                            <Form
                                {...formItemLayout}
                                form={form}
                                name="register"
                                onFinish={onFinish}
                                initialValues={{
                                    residence: ['zhejiang', 'hangzhou', 'xihu'],
                                    prefix: '86',
                                }}
                                scrollToFirstError
                            >

                                <Form.Item name="nickname" label="API Name">
                                    <Input/>
                                </Form.Item>
                                <Form.Item name="nickname" label="Application Name">
                                    <Input/>
                                </Form.Item>
                                <Form.Item name="nickname" label="Description">
                                    <Input/>
                                </Form.Item>
                                <Form.Item name="nickname" label="Team Name">
                                    <Input/>
                                </Form.Item>
                                <Form.Item name="nickname" label="Department">
                                    <Input/>
                                </Form.Item>
                                <Form.Item name="nickname" label="Contact DL">
                                    <Input/>
                                </Form.Item>
                                <Form.Item name="nickname" label="Type">
                                    <Radio.Group onChange={() => {
                                    }} value={1}>
                                        <Radio value={1}>REST</Radio>
                                        <Radio value={2}>gRPC</Radio>
                                    </Radio.Group>
                                </Form.Item>

                                <Form.Item name="nickname" label="Swagger Json">
                                    <Input.TextArea rows={8}/>
                                </Form.Item>

                                <Form.Item {...tailFormBtnLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Register
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
