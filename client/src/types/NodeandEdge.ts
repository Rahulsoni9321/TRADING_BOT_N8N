import type { SUPPORTED_ASSET } from "@/config";
import BackPack from "@/nodes/action/Backpack";
import HyperLiquid from "@/nodes/action/HyperLiquid";
import Lighter from "@/nodes/action/Lighter";
import PriceTrigger from "@/nodes/trigger/PriceTrigger";
import TimeTrigger from "@/nodes/trigger/TimeTrigger";

export type NodeKind = "price-trigger" | "time-trigger" | "hyperliquid" | "backpack" | "lighter";
export interface NodeType {
    type: NodeKind,
    data: {
        kind: "action" | "trigger",
        metaData: NodeMetaData,
        label?: string,
    },
    id: string,
    position: { x: number, y: number }
}

export interface EdgeType {
    id: string,
    source: string,
    target: string
}

export interface PriceTriggerMetaData {
    asset: string,
    price: number
}

export const nodeTypes = {
    'price-trigger': PriceTrigger,
    'time-trigger': TimeTrigger,
    'backpack': BackPack,
    'hyperliquid': HyperLiquid,
    'lighter': Lighter
}

export interface TimeTriggerMetaData {
    time: number
}

export interface TradingMetaData {
    type: "LONG" | "SHORT",
    qty: number,
    symbol: string
}


export interface triggerType {
    id: NodeKind,
    title: string,
    description: string
}


export type NodeMetaData = TradingMetaData | PriceTriggerMetaData | TimeTriggerMetaData ;