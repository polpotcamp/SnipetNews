import { Flex, Tag, Typography } from "antd";
import React from "react";
import { IData_TagItem } from "../types";
interface ITagsProps {
  Tags: IData_TagItem[];
}
const TagList: React.FC<ITagsProps> = ({ Tags }) => {
  return (
    <Flex vertical={false}>
      {Tags.map((TagItem, index) => (
        <Tag key={index} className="tag">
          <Flex vertical={false} justify="space-between">
            <Typography.Text className="standartOpacity mr-10">
              {TagItem.value}
            </Typography.Text>
            <Typography.Text >
              {TagItem.count}
            </Typography.Text>
          </Flex>
        </Tag>
      ))}
    </Flex>
  );
};

export default TagList;
