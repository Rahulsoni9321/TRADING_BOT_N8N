import { Handle, Position } from "@xyflow/react"

const BackPack = ({ data, isConnectable }: {
    data: {
        metaData: any
    }, isConnectable: boolean
}) => {
    return (
        <div className="card p-3 flex flex-col gap-2 items-center w-44 rounded-lg border shadow ">
            <div className="flex items-center gap-2 w-full">
                <div className="rounded-full bg-accent text-accent-foreground size-7 center">📦</div>
                <div className="flex-1">
                    <div className="font-semibold">Backpack</div>
                    <div className="text-xs muted">Action</div>
                </div>
            </div>

            <div className="text-sm font-medium">{data.metaData.type}</div>
            <div className="muted text-sm">{data.metaData.symbol}</div>
            <div className="text-sm">Qty: <span className="font-medium">{data.metaData.qty}</span></div>

            <Handle type="target" position={Position.Left} />
            <Handle type="source" position={Position.Right} />
        </div>
    )
}

export default BackPack;