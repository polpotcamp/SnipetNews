import { IData_SnippetNews } from "../types";
import { Flex, Typography, Button } from "antd";
import React from "react";
import TagList from "./TagList";
import HighlightsList from "./HighlightList";
import PostMetaInfo from "./PostMetaInfo";
import PostTopInfo from "./PostTopInfo";
import Duplicates from "./Duplicates";
import { DownOutlined } from "@ant-design/icons";
interface ISnippetNewsProps {
  data: IData_SnippetNews;
}
const SnippetNews: React.FC<ISnippetNewsProps> = ({ data }) => {
  return (
    <Flex vertical={true} className="snipetNews">
      <PostTopInfo REACH={data.REACH} DP={data.DP} TRAFFIC={data.TRAFFIC} />
      <Typography.Link>{data.TI}</Typography.Link>
      <PostMetaInfo
        DOM={data.DOM}
        CNTR_CODE={data.CNTR_CODE}
        CNTR={data.CNTR}
        LANG={data.LANG}
        AU={data.AU}
      />
      <HighlightsList highlights={data.HIGHLIGHTS.join(" ")} />
      <TagList Tags={data.KW} />
      <Button
        size="small"
       className="originalSource"
      >
        Original Source
      </Button>
      <Duplicates data={data} domen="ria.ru" />
      <Button
        ghost
        icon={<DownOutlined />}
        iconPosition={"start"}
        className="mt-15"
      >
        View Duplicates
      </Button>
    </Flex>
  );
};
export default SnippetNews;
