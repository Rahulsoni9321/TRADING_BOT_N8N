import type { TimeTriggerMetaData } from "@/types/NodeandEdge"
import { Handle, Position } from "@xyflow/react"

const TimeTrigger = ({ data, isConnectable }: {
  data: {
    metaData: TimeTriggerMetaData
  },
  isConnectable: Boolean
}) => {
  return (
    <div className="card p-3 flex flex-col gap-2 items-center w-44 rounded-lg border shadow ">
      <div className="flex items-center gap-2 w-full">
        <div className="rounded-full bg-secondary text-secondary-foreground size-7 center">⏱️</div>
        <div className="flex-1">
          <div className="font-semibold">Time Trigger</div>
          <div className="text-xs muted">Interval</div>
        </div>
      </div>

      <div className="mt-1 text-lg font-medium">{data.metaData.time} s</div>

      <Handle type="source" position={Position.Right} />
    </div>
  )
}

export default TimeTrigger