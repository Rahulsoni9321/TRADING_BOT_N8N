import type { NodeKind, NodeMetaData } from '@/types/NodeandEdge';
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from 'react';

interface triggerType {
    id: NodeKind,
    title: string,
    description: string
}

const SUPPORTED_TRIGGER: triggerType[] = [
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

const TriggerSheet = ({ onSelect }: { onSelect: (kind: NodeKind, metaData: NodeMetaData) => void }) => {

    const [selectedTrigger, setSelectedTrigger] = useState(SUPPORTED_TRIGGER[0].id);
    const [metaData, setMetaData] = useState({})

    return (
        <Sheet defaultOpen={true}>
            <SheetContent className='p-4'>
                <SheetHeader>
                    <SheetTitle>Trigger</SheetTitle>
                    <SheetDescription>
                        Select the type of trigger that you want.
                    </SheetDescription>
                </SheetHeader>
                <Select onValueChange={(value: NodeKind) => {
                    setSelectedTrigger(value)
                }}>
                    <SelectTrigger className="w-full p-4">
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
                <SheetFooter>
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