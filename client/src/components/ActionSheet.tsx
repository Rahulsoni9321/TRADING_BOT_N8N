import type { NodeKind, NodeMetaData, PriceTriggerMetaData, TimeTriggerMetaData, TradingMetaData } from '@/types/NodeandEdge';
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
import { SUPPORTED_ACTIONS, SUPPORTED_ASSET } from '@/config';

interface actionType {
    id: NodeKind,
    title: string,
    description: string
}





const TriggerSheet = ({ onSelect }: { onSelect: (kind: NodeKind, metaData: NodeMetaData) => void }) => {

    const [selectedAction, setSelectedAction] = useState(SUPPORTED_ACTIONS[0].id);
    const [metaData, setMetaData] = useState<TradingMetaData | {}>({})

    return (
        <Sheet defaultOpen={true}>
            <SheetContent className='p-4'>
                <SheetHeader>
                    <SheetTitle>Action</SheetTitle>
                    <SheetDescription>
                        Select the type of action that you want.
                    </SheetDescription>
                </SheetHeader>

                <Select onValueChange={(value) => setSelectedAction(value)}>
                    <SelectTrigger>
                        <SelectValue placeholder="select an action" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectGroup>
                            {
                                SUPPORTED_ACTIONS.map(({ id, title }: any) => {
                                    return <>
                                        {/* <SelectLabel>{title}</SelectLabel> */}
                                        <SelectItem value={id}>{title}</SelectItem>
                                    </>
                                })
                            }
                        </SelectGroup>
                    </SelectContent>
                    <div>Type</div>
                </Select>
                <Select value={metaData?.type} onValueChange={(value: string) => setMetaData(metaData => ({ ...metaData, type: value }))}>
                    <SelectTrigger>
                        <SelectValue placeholder="select type" />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectGroup>
                            {
                                ['LONG', 'SHORT'].map((value) => {
                                    return <>
                                        {/* <SelectLabel>{title}</SelectLabel> */}
                                        <SelectItem value={value}>{value}</SelectItem>
                                    </>
                                })
                            }
                        </SelectGroup>
                    </SelectContent>
                    <div>Assets</div>
                </Select>
                <Select value={metaData?.symbol} onValueChange={(value: any) => setMetaData(metaData => ({ ...metaData, asset: value }))}>
                    <SelectTrigger>
                        <SelectValue placeholder="select an asset" />
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
                <div>Qty</div>
                <Input placeholder='enter quantity' onChange={(e) => setMetaData(metaData => ({ ...metaData, qty: Number(e.target.value) }))}></Input>

                <SheetFooter>
                    <Button onClick={() => onSelect(selectedAction, metaData)} type="submit">Create Action</Button>
                    <SheetClose asChild>
                        <Button variant="outline">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default TriggerSheet