import type {ColumnsType} from 'antd/es/table';
import {NavLink} from "react-router-dom";
import {Avatar, Button, Card, List, Space} from 'antd';
import ApiDigest from "./components/ApiDigest";
import {BookOutlined, LikeOutlined, MessageOutlined, StarFilled, StarOutlined} from "@ant-design/icons";
import React, {useEffect, useState, useCallback} from "react";
import SubApiBtn from "./components/SubApiBtn";
import {generateGetRequest, PRODUCTION_BASE_URL} from "../../common/request.utils";
import Nav from '.././../components/Nav';


interface DataType {
    teamName: string;
    applicationName: string;
    apiName: string;
    apiDesc: string;
    swaggerJson: string;
    tags?: string[];
    star?: boolean
}

const columns: ColumnsType<DataType> = [
    {
        title: 'API Name',
        dataIndex: 'apiName',
        key: 'apiName',
        render: (text, record) => {
            return <ApiDigest data={record}/>
        },
    }
];

const data: DataType[] = [
    {
        teamName: 'Messaging',
        applicationName: 'besmanager',
        apiName: 'oracle event',
        apiDesc: 'query/create/update/delete oracle event',
        tags: ['BES', 'event'],
        star: true
    }, {
        teamName: 'Messaging',
        applicationName: 'besmanager',
        apiName: 'BES2 event',
        apiDesc: 'query/create/update/delete BES2 event',
        tags: ['BES2', 'event'],
    }, {
        teamName: 'Rheos',
        applicationName: 'rheosmanager',
        apiName: 'kafka topic',
        apiDesc: 'query/create/update/delete kafka topic',
        tags: ['Rheos', 'kafka', 'topic'],
        star: true
    }, {
        teamName: 'Messaging',
        applicationName: 'besmanager',
        apiName: 'BES2 consumer',
        apiDesc: 'query/create/update/delete BES2 consumer',
        tags: ['BES2', 'consumer'],
    },
];

const IconText = ({icon, text}: { icon: React.FC; text: string }) => (
    <Space>
        {React.createElement(icon)}
        {text}
    </Space>
);
export default function Apply() {
    const [apiList, setApiList] = useState(data)
    // request
    useEffect(() => {
        generateGetRequest('http://localhost:5173/api/apis/list').then((res) => {
            const x = {
                teamName: 'Messaging',
                applicationName: 'besmanager',
                apiName: 'BES2 producer',
                apiDesc: 'query/create/update/delete BES2 producer',
                tags: ['BES2', 'producer'],
                star: true
            }
            const {success, result} = res.data
            if (success) {
                const newList = result.map((item: DataType) => ({...x, ...item}))
                setApiList(() => newList)
            }
        })
    }, [])

    const jumpSwagger = (swaggerJson: string) => {
        try {
            const _json = JSON.parse(swaggerJson)

            console.log(_json)
        } catch (e) {
            console.log(e, swaggerJson)
        }
    }

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
                <div style={{maxWidth: 1500, margin: "auto"}}>
                    <Card>
                        <List
                            itemLayout="vertical"
                            size="large"
                            pagination={{
                                pageSize: 7,
                            }}
                            dataSource={apiList}
                            renderItem={item => (
                                <List.Item
                                    key={item.teamName + item.applicationName + item.apiName}
                                    actions={[
                                        <IconText icon={item.star ? StarFilled : StarOutlined} text="156"
                                                  key="list-vertical-star-o"/>,
                                        <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
                                        <IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
                                    ]}
                                    extra={
                                        <SubApiBtn/>
                                    }
                                >
                                    <List.Item.Meta
                                        avatar={<Avatar><BookOutlined/></Avatar>}
                                        title={
                                            <span>
                                                <a href="#">{item.applicationName}</a> &nbsp; / &nbsp;
                                                <NavLink
                                                    to={'detail/' + JSON.stringify({aa:1})}>{item.apiName} </NavLink>  &nbsp;&nbsp;
                                                <Button shape={"round"}>{item.teamName}</Button>
                                            </span>
                                        }
                                        description="updated 3 hours ago"
                                    />
                                    {item.apiDesc}
                                </List.Item>
                            )}
                        />
                    </Card>
                </div>
            </div>
        </div>
    )
}
