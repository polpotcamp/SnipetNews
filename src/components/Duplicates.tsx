import { Flex, Typography, Button } from "antd";
import { IData_SnippetNews } from "../types";
import {
  DownOutlined,
  BorderOutlined,
  GlobalOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ReactCountryFlag from "react-country-flag";
interface DuplicatesProps {
  data: IData_SnippetNews;
  domen: string;
}

const Duplicates: React.FC<DuplicatesProps> = ({ data, domen }) => {
  function formatNames(names: string[]) {
    if (names.length === 0) return "";
    if (names.length === 1) return names[0];

    const firstTwo = names.slice(0, 2).join(", ");

    return names.length > 2 ? `${firstTwo}, et al.` : firstTwo;
  }
  const date = new Date(data.DP);
  const day = date.getDate();
  const monthYear = `${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;
  return (
    <>
      <Flex justify="space-between">
        <Flex>
          <Typography.Text className="standartOpacity mr-10">
            Duplicates
          </Typography.Text>
          <Typography.Text>192</Typography.Text>
        </Flex>
        <Flex align="center">
          <Typography.Text className="standartOpacity mr-10">
            By Relevance
          </Typography.Text>
          <Button ghost className="borderNone" icon={<DownOutlined />}></Button>
        </Flex>
      </Flex>
      <Flex className="snipetNewsItem " vertical={true}>
        <Flex vertical={false} justify="space-between">
          <Flex vertical={false} align="center">
            <Typography.Text>{day}</Typography.Text>
            <Typography.Text className="standartOpacity ml-8">
              {monthYear}
            </Typography.Text>
            <Typography.Text className="ml-8">
              {data.REACH} Top Reach
            </Typography.Text>
          </Flex>
          <Flex vertical={false} align="center">
            <Button
              ghost
              className="borderNone"
              icon={
                <div className="realeativeInlineBlock">
                  <BorderOutlined />
                  <span className="letterI">i</span>
                </div>
              }
            ></Button>
            <Button
              ghost
              className="borderNone"
              icon={<BorderOutlined />}
            ></Button>
          </Flex>
        </Flex>
        <Typography.Link>{data.TI}</Typography.Link>
        <Flex vertical={false} gap={10}>
          <Flex vertical={false} align="center">
            <Button
              ghost
              className="borderNone"
              icon={<GlobalOutlined />}
            ></Button>
            <Typography.Link>{domen}</Typography.Link>
          </Flex>
          <Flex vertical={false} align="center">
            <ReactCountryFlag countryCode={data.CNTR_CODE} svg />
            <Typography.Text className="standartOpacity ml-8">
              {data.CNTR}
            </Typography.Text>
          </Flex>
          <Flex vertical={false} align="center">
            <Button
              ghost
              className="borderNone"
              icon={<UserOutlined />}
            ></Button>
            <Typography.Text className="standartOpacity ">
              {formatNames(data.AU)}
            </Typography.Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Duplicates;
