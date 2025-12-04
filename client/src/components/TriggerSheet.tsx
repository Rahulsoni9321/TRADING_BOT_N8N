import type { NodeKind, NodeMetaData, PriceTriggerMetaData, TimeTriggerMetaData, triggerType } from '@/types/NodeandEdge';
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from 'react';
import { Input } from './ui/input';
import { SUPPORTED_ASSET, SUPPORTED_TRIGGER } from '@/config';





const TriggerSheet = ({ onSelect }: { onSelect: (kind: NodeKind, metaData: NodeMetaData) => void }) => {

    const [selectedTrigger, setSelectedTrigger] = useState(SUPPORTED_TRIGGER[0].id);
    const [metaData, setMetaData] = useState<PriceTriggerMetaData | TimeTriggerMetaData>({
        time : 3600
    })

    return (
        <Sheet defaultOpen={true}>
            <SheetContent className='p-6 glass'>
                <SheetHeader>
                    <SheetTitle>Trigger</SheetTitle>
                    <SheetDescription>
                        Select the type of trigger that you want.
                    </SheetDescription>
                </SheetHeader>
                <Select value={selectedTrigger} onValueChange={(value: NodeKind) => {
                    setSelectedTrigger(value)
                }}>
                    <SelectTrigger className="w-full p-4 rounded-md shadow-sm">
                        <SelectValue placeholder="Select a trigger" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectGroup>
                            {
                                SUPPORTED_TRIGGER.map(({ id, title }: triggerType) => {
                                    return <>
                                        {/* <SelectLabel>{title}</SelectLabel> */}
                                        <SelectItem value={id}>{title}</SelectItem>
                                    </>
                                })
                            }
                        </SelectGroup>
                    </SelectContent>
                </Select>

                {
                    selectedTrigger === "price-trigger" && <> <Select onValueChange={(value: NodeKind) => {
                        setMetaData({
                            ...metaData,
                            asset: value
                        })
                    }}>
                        <SelectTrigger className="w-full p-4 rounded-md shadow-sm">
                            <SelectValue placeholder="Select an asset" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectGroup>
                                {
                                    SUPPORTED_ASSET.map((value) => {
                                        return <>
                                            {/* <SelectLabel>{title}</SelectLabel> */}
                                            <SelectItem value={value}>{value}</SelectItem>
                                        </>
                                    })
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                        <Input className="mt-3" placeholder='trigger price' value={metaData?.price} onChange={(e) => setMetaData({ ...metaData, price: Number(e.target.value) })}></Input>
                    </>
                }
                {
                    selectedTrigger === "time-trigger" && <Input className='rounded-md shadow-sm border mt-3' placeholder='enter time interval ( in seconds )' value={metaData?.time} onChange={e => setMetaData((metaData: NodeMetaData) => ({ ...metaData, time: Number(e.target.value) }))}></Input>
                }
                <SheetFooter className="flex gap-2 justify-end">
                    <Button onClick={() => onSelect(selectedTrigger, metaData)} type="submit">Create Trigger</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default TriggerSheet