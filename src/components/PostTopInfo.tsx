import { Flex, Typography, Statistic, Button } from "antd";
import { BorderOutlined } from "@ant-design/icons";
import { IData_TrafficItem } from "../types";
interface PostTopInfoProps {
  DP: string;
  REACH: number;
  TRAFFIC: IData_TrafficItem[];
}

const PostTopInfo: React.FC<PostTopInfoProps> = ({ DP, REACH, TRAFFIC }) => {
  const date = new Date(DP);
  const day = date.getDate();
  const monthYear = `${date.toLocaleString("default", {
    month: "long",
  })} ${date.getFullYear()}`;
  return (
    <Flex vertical={false} justify="space-between">
      <Flex vertical={false} gap={5} align="center">
        <Flex vertical={false} align="center">
          <Typography.Text>{day}</Typography.Text>
          <Typography.Text className="standartOpacity ml-8">
            {monthYear}
          </Typography.Text>
        </Flex>
        <Flex vertical={false} align="center">
          <Typography.Text>{REACH}</Typography.Text>
          <Typography.Text className="standartOpacity ml-8">
            Reach
          </Typography.Text>
        </Flex>
        <Flex vertical={false} align="center">
          <Typography.Text className="standartOpacity ml-8">
            Top Traffic:
          </Typography.Text>
          {TRAFFIC.map((country, index) => (
            <Flex vertical={false} align="center" key={index} gap={2}>
              <Typography.Text className="standartOpacity ml-8">
                {country.value}
              </Typography.Text>
              <Typography.Text>
                <Statistic
                  value={`${(country.count * 100).toFixed(1)}%`}
                  valueStyle={{
                    fontSize: "14px",
                    fontWeight: 400,
                  }}
                />
              </Typography.Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex vertical={false} align="center">
        <Typography.Text
          color="lime"
          className="borderNone grade"
        >
          Positive
        </Typography.Text>
        <Button
          ghost
          className="borderNone"
          icon={
            <div
            className="realeativeInlineBlock"
            >
              <BorderOutlined />
              <span
               className="letterI"
              >
                i
              </span>
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
  );
};

export default PostTopInfo;
