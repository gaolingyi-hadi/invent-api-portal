import {Button, Form, Modal, Select, Space} from 'antd';
import React, {useState} from 'react';
import useOnMountRequest from "../../../common/hooks/useOnMountRequest";
import {generateGetRequest} from '../../../common/request.utils';
import {Option} from "antd/lib/mentions";
import axios from "axios";

const SubApiBtn: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const [loading, setLoading] = useState(true);
  const [inputApp, setInputApp] = useState('');
  const [options, setOptions] = useState<any[]>([]);

  const handleSearch = (value: string) => {
    axios(`http://localhost:8080/applications/${value}`)
      .then(res => {
        if (res?.data?.success == true) {
          let data = res?.data?.result;
          options.push(<Option value={data.name}>{data.name}</Option>);
        }
      })
  }

  return (
    <>
      <div className="space-align-block">
        <Space align="center">
          <Button type="primary" onClick={showModal}>
            Subscribe
          </Button>
        </Space>
      </div>
      <Modal
        title="Subscribe For Application"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{span: 6}}
          initialValues={{remember: true}}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Application"
            name="application"
            rules={[{required: true, message: 'Please input your application name!'}]}
          >
            <Select
              placeholder={"Please select applications"}
              onSearch={handleSearch}
              // onSelect={handleSelect}
              options={options}
              // loading={querying}
              showSearch={true}
            ></Select>
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
};

export default SubApiBtn;