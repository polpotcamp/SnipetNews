import React, { useState, useRef, useEffect } from "react";
import { Button, Typography } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
interface IHighlightsListProps {
  highlights: string;
}
const HighlightsList: React.FC<IHighlightsListProps> = ({ highlights }) => {
  const [showAll, setShowAll] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const renderHighlightText = (text: string) => {
    const parts = text.split(/(<kw>.*?<\/kw>)/g);
    return parts.map((part, index) => {
      if (part.startsWith("<kw>") && part.endsWith("</kw>")) {
        const keyword = part.replace(/<\/?kw>/g, "");
        return (
          <span key={index} className="highlightedSpan">
            {keyword}
          </span>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };
  useEffect(() => {
    if (containerRef.current) {
      const lineHeight = parseInt(
        getComputedStyle(containerRef.current).lineHeight
      );
      const maxHeight = lineHeight * 3;
      setIsClamped(containerRef.current.scrollHeight > maxHeight);
    }
  }, [highlights]);
  return (
    <div>
      <div
        ref={containerRef}
        style={{
          display: "-webkit-box",
          WebkitLineClamp: showAll ? "unset" : 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          lineHeight: 1.5,
        }}
      >
        <Typography.Paragraph className="mb-8">
          {renderHighlightText(highlights)}
        </Typography.Paragraph>
      </div>

      {isClamped && !showAll && (
        <Button
          type="link"
          onClick={() => setShowAll(true)}
          className="paddingNone"
          icon={<CaretDownOutlined />}
          iconPosition={"end"}
        >
          Show More
        </Button>
      )}

      {showAll && (
        <Button
          type="link"
          onClick={() => setShowAll(false)}
          className="paddingNone"
          icon={<CaretUpOutlined />}
          iconPosition={"end"}
        >
          Show Less
        </Button>
      )}
    </div>
  );
};
export default HighlightsList;
