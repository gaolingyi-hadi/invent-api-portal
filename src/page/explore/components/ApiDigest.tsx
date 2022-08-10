import {List, Tag, Button} from 'antd';
import {ApiOutlined,} from '@ant-design/icons';

type ApiDigestProps = {
  teamName: string;
  applicationName: string;
  apiName: string;
  apiDesc: string;
  tags: string[];
}

interface props {
  data: ApiDigestProps
}

export default function ApiDigest(props: props) {
  let data = props.data;
  return (
    <List.Item actions={
      [<a key="list-loadmore-edit">subscribe</a>]
    }>
      <List.Item.Meta
        title={
          <span>

              <a href="src/page/explore/components/ApiDigest#">{data.applicationName}</a>&nbsp;/&nbsp;
              <a href="src/page/explore/components/ApiDigest#">{data.apiName}</a>&nbsp;&nbsp;
            <Button type="primary" size={"small"} shape={"round"} >
                {data.teamName}
              </Button>
            </span>
        }
        description={data.apiDesc}
      />
    </List.Item>
  )
}