import type { triggerType } from "./types/NodeandEdge"

export const SUPPORTED_TRIGGER: triggerType[] = [
    {
        id: "time-trigger",
        title: "Timer",
        description: "Run this trigger after every x seconds/minutes"
    },
    {
        id: "price-trigger",
        title: "Price Trigger",
        description: "Runs when price goes above or below a certain number for an asset."
    },
]


export const SUPPORTED_ASSET: string[] = [
    'BTC',
    'SOL',
    'USD'
]

export const SUPPORTED_ACTIONS: any[] = [
    {
        id: "hyperliquid",
        title: "HyperLiquid",
        description: "Place a trade on hyper liquid."
    },
    {
        id: "lighter",
        title: "Lighter",
        description: "Place a trade on lighter."
    },
    {
        id: "backpack",
        title: "Backpack",
        description: "Place a trade on Backpack."
    },
]

