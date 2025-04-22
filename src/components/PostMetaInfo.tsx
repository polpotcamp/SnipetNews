import { Flex, Button, Typography } from "antd";
import { GlobalOutlined , BookOutlined, UserOutlined } from "@ant-design/icons";
import ReactCountryFlag from "react-country-flag";
import React from "react";
interface PostMetaInfoProps {
  DOM: string;
  CNTR_CODE: string;
  CNTR: string;
  LANG: string;
  AU: string[];
}

const PostMetaInfo: React.FC<PostMetaInfoProps> = ({
  DOM,
  CNTR_CODE,
  CNTR,
  LANG,
  AU,
}) => {
  function formatNames(names: string[]) {
    if (names.length === 0) return "";
    if (names.length === 1) return names[0];

    const firstTwo = names.slice(0, 2).join(", ");

    return names.length > 2 ? `${firstTwo}, et al.` : firstTwo;
  }
  return (
    <Flex vertical={false} gap={10}>
      <Flex vertical={false} align="center">
        <Button
          ghost
           className="borderNone"
          icon={<GlobalOutlined />}
        ></Button>
        <Typography.Link>{DOM}</Typography.Link>
      </Flex>
      <Flex vertical={false} align="center">
        <ReactCountryFlag
          countryCode={CNTR_CODE}
          svg
        />
        <Typography.Text className="standartOpacity ml-8">
          {CNTR}
        </Typography.Text>
      </Flex>
      <Flex vertical={false} align="center">
        <Button
          ghost
            className="borderNone"
          icon={<BookOutlined />}
        ></Button>
        <Typography.Text className="standartOpacity">{LANG}</Typography.Text>
      </Flex>
      <Flex vertical={false} align="center">
        <Button
          ghost
           className="borderNone"
          icon={<UserOutlined  />}
        ></Button>
        <Typography.Text className="standartOpacity">
          {formatNames(AU)}
        </Typography.Text>
      </Flex>
    </Flex>
  );
};

export default PostMetaInfo;
