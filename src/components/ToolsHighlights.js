import React, { useState } from "react";
import styled from "styled-components";

const Table = styled.table`
  width: 100%;
  margin-top: 1.5rem;
  background: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  border-collapse: collapse;
  box-shadow: 0 2px 8px #f0f0f0;
  margin-bottom: 1.5rem;
  min-height: 300px;
`;

const TabRow = styled.tr``;

const Th = styled.th`
  background: ${({ active, projectColor }) =>
    active ? `${projectColor}15` : "#f6f8f6"};
  color: #204034;
  font-weight: 600;
  padding: 1rem 1.5rem;
  text-align: center;
  font-size: 1.05rem;
  cursor: pointer;
  border-bottom: 2px solid #eee;
  width: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ projectColor }) => `${projectColor}10`};
  }
`;

const Td = styled.td`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #f0f0f0;
  color: #204034;
  background: ${({ highlight }) => (highlight ? "#f6f8f6" : "#fff")};
  font-size: 1rem;
`;

const Highlight = styled.span`
  color: ${(props) => props.$projectColor || "#f7c948"};
  font-weight: 500;
`;

const ScreenshotsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0.5rem;
  justify-content: flex-start;
  align-items: center;
  height: auto;
  min-height: 200px;
`;

const ScreenshotImage = styled.img`
  width: 220px;
  height: auto;
  border-radius: 0.5rem;
  object-fit: cover;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  flex-grow: 1;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

const Screenshot = styled.div`
  flex: 1;
  background: #eee;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #aaa;
  font-size: 0.9rem;
  min-height: 200px;
`;

const ToolsHighlights = ({ tools, screenshots = [], projectColor }) => {
  const [activeTab, setActiveTab] = useState("tools");

  return (
    <Table activeTab={activeTab}>
      <thead>
        <TabRow>
          <Th
            active={activeTab === "tools"}
            onClick={() => setActiveTab("tools")}
            projectColor={projectColor}
          >
            Tools used
          </Th>
          <Th
            active={activeTab === "highlights"}
            onClick={() => setActiveTab("highlights")}
            projectColor={projectColor}
          >
            Highlights
          </Th>
        </TabRow>
      </thead>
      <tbody>
        {activeTab === "tools" ? (
          tools.map((row, idx) => (
            <tr key={idx}>
              <Td>{row.tool}</Td>
              <Td>
                <Highlight $projectColor={projectColor}>
                  {row.highlight}
                </Highlight>
              </Td>
            </tr>
          ))
        ) : (
          <tr>
            <Td colSpan={2}>
              <ScreenshotsContainer>
                {screenshots.length > 0 ? (
                  screenshots.map((src, idx) => (
                    <ScreenshotImage
                      key={idx}
                      src={src}
                      alt={`Screenshot ${idx + 1}`}
                    />
                  ))
                ) : (
                  <Screenshot>No screenshots yet</Screenshot>
                )}
              </ScreenshotsContainer>
            </Td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};

export default ToolsHighlights;
