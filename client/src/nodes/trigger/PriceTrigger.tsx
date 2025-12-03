import type { PriceTriggerMetaData } from "@/types/NodeandEdge"
import { Handle, Position } from "@xyflow/react"

const PriceTrigger = ({ data, isConnectable }: {
    data: {
        metaData: PriceTriggerMetaData
    },
    isConnectable: Boolean
}) => {
    return (
        <div className="px-6 p-2 border shadow rounded-lg text-center " >
            <div>{data.metaData.asset}</div>
            <div>{data.metaData.price}</div>
            <Handle type="source" position={Position.Right} />
        </div>
    )
}


export default PriceTrigger