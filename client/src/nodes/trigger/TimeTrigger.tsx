import type { TimeTriggerMetaData } from "@/types/NodeandEdge"
import { Handle, Position } from "@xyflow/react"

const TimeTrigger = ({ data, isConnectable }: {
  data: {
    metaData: TimeTriggerMetaData
  },
  isConnectable: Boolean
}) => {
  return (
    <div className="p-4 border shadow rounded-lg" >
      <div className=" text-md font-sans">Every {data.metaData.time / 3600} seconds it will run.</div>
      <Handle type="source" position={Position.Right} />
    </div>
  )
}

export default TimeTrigger