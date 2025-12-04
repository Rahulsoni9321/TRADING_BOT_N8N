import { useState, useCallback } from 'react';
import { ReactFlow, applyNodeChanges, applyEdgeChanges, addEdge, type EdgeChange, type Connection, type FinalConnectionState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { nodeTypes, type EdgeType, type NodeKind, type NodeMetaData, type NodeType } from '../types/NodeandEdge';
import TriggerSheet from './TriggerSheet';
import ActionSheet from './ActionSheet';
import { Button } from './ui/button';

interface ActionType {
    nodeId: string,
    position: { x: number, y: number }
}

export default function CreateWorkflow() {
    const [nodes, setNodes] = useState<NodeType[]>([]);
    const [edges, setEdges] = useState<EdgeType[]>([]);
    const [actionSheet, setActionSheet] = useState<ActionType | null>(null);

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

    const onConnectEnd = useCallback((params: any, connectionInfo: FinalConnectionState) => {
        console.log("this is the connection info;.", connectionInfo);
        if (connectionInfo && !connectionInfo.isValid) {
            console.log("From Node Id.", connectionInfo.fromNode?.id);
            // console.log("position....", connectionInfo.);
            setActionSheet({
                nodeId: connectionInfo.fromNode!.id,
                position: connectionInfo.to!
            });
        }

    }, [])

    return (
        <div className="app-root">
            <header className="app-header">
                <div className="app-title">Workflow Builder</div>
                <div className="toolbar">
                    <Button variant="ghost" size="sm">Help</Button>
                </div>
            </header>

            <main className="app-main app-container">
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

                {
                    actionSheet && <ActionSheet onSelect={(kind: NodeKind, metaData) => {
                        const nodeId = Math.random().toString();
                        setNodes([...nodes, {
                            id: nodeId,
                            type: kind,
                            data: {
                                kind: "action",
                                metaData
                            },
                            position: actionSheet.position
                        }])
                        setEdges([...edges, { id: `${actionSheet.nodeId}-${nodeId}`, source: actionSheet.nodeId, target: nodeId }])
                        setActionSheet(null)
                    }}></ActionSheet>
                }

                <div className="card" style={{ padding: 0 }}>
                    <div style={{ width: '100%', height: '75vh' }}>
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
                </div>
            </main>
        </div>
    );
}
