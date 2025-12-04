import type { PriceTriggerMetaData } from "@/types/NodeandEdge"
import { Handle, Position } from "@xyflow/react"

const PriceTrigger = ({ data }: {
    data: {
        metaData: PriceTriggerMetaData
    },
    isConnectable: Boolean
}) => {
    return (
        <div className="card p-3 flex flex-col gap-2 items-start w-44">
            <div className="flex items-center gap-2 w-full">
                <div className="rounded-full bg-primary text-primary-foreground size-7 center">🎯</div>
                <div className="flex-1">
                    <div className="font-semibold">Price Trigger</div>
                    <div className="text-xs muted">{data.metaData.asset}</div>
                </div>
            </div>

            <div className="mt-1 text-sm muted">Target</div>
            <div className="text-lg font-bold">{data.metaData.price}</div>

            <Handle type="source" position={Position.Right} />
        </div>
    )
}


export default PriceTrigger