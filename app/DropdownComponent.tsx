import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

type Props = {
  options: Array<{id:number,name:string}>;
  currentSelection: string;
  currentId: number;
  href: (id: number) => string;
  dropDownHref: (id: number) => string;
}
export default function DropdownMenu({options, currentSelection, currentId, href,dropDownHref}:Props):React.JSX.Element {
  return  <Menu as="div" className="relative inline-block text-left max-w-64">
  <div className="text-md inline-flex w-full justify-center items-baseline px-3 gap-x-1.5">
    <Link
      href={href(currentId)}
      className="mono truncate"
      title={currentSelection}
    >
      {currentSelection}
    </Link>
    <MenuButton className="self-center flex justify-center rounded-md bg-white text-xs  font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
    </MenuButton>
  </div>
  <MenuItems className="absolute w-full right-0 z-10 mt-2  origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
    <div className="py-1">
      {options.map((option) => (
        <MenuItem key={option.id}>
          <Link
            href={dropDownHref(option.id)}
            className="flex text-sm  px-4 py-2 text-left hover:bg-gray-100 w-full"
          >
            <>
              <div className="font-mono">
                {option.name}
              </div>
            </>
          </Link>
        </MenuItem>
      ))}
    </div>
  </MenuItems>
</Menu>
}
