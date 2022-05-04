import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

export function CloseButton() {
    return (
        <Popover.Button className="top-4 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Formulário de feedback">
            <X weight="bold" className="w-4 h-3" />
        </Popover.Button>
    )
}