import { useState, useCallback } from 'react';

import InsightGraph from '@components/insightGraph';
import WebSocketListener from '@components/insightGraph/webSocketListener';

const InsightGraphPage = () => {
  const [nodes, setNodes] = useState([]);

  const addNode = useCallback((newNode) => {
    setNodes((prev) => {
      const newState = [...prev];
      newState.push(newNode);
      return newState;
    });
  }, []);

  return (
    <>
      <WebSocketListener onMessage={addNode} />
      <InsightGraph nodes={nodes} />
    </>
  );
};

export default InsightGraphPage;
