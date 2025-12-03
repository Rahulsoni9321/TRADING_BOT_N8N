
import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, type EdgeChange, type Connection } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { nodeTypes, type EdgeType, type NodeKind, type NodeMetaData, type NodeType } from '../types/NodeandEdge';
import TriggerSheet from './TriggerSheet';


export default function CreateWorkflow() {
    const [nodes, setNodes] = useState<NodeType[]>([]);
    const [edges, setEdges] = useState<EdgeType[]>([]);

    const onNodesChange = useCallback(
        (changes: any) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );
    const onConnect = useCallback(
        (params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    const onConnectEnd = useCallback((params: any, connectionInfo: any) => {
        console.log("this is the connection info;.", connectionInfo.fromNode.type);
    }, [])

    return (
        <div style={{ width: '100vw', height: '100vh' }}>

            {nodes.length === 0 && <TriggerSheet onSelect={(kind: NodeKind, metaData: NodeMetaData) => {
                setNodes([...nodes, {
                    id: Math.random().toString(),
                    position: { x: 0, y: 0 },
                    type: kind,
                    data: {
                        kind: "trigger",
                        metaData
                    },
                }])
            }}></TriggerSheet>}
            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onConnectEnd={onConnectEnd}
                fitView
            />
        </div>
    );
}
