export type NodeKind = "price-trigger" | "time-trigger" | "hyperliquid" | "backpack" | "lighter";
export interface NodeType {
    data: {
        type: "action" | "trigger",
        kind: NodeKind,
        metaData : NodeMetaData,
        label : string,
    },
    id: string,
    position: { x: number, y: number }
}

export interface EdgeType {
    id: string,
    source: string,
    target: string
}

export type NodeMetaData = any;