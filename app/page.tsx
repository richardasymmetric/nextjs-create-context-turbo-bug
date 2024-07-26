import DropdownMenu from "./DropdownComponent";

const data = [
  { id: 1, name: "Name1" },
  { id: 2, name: "Name2" },
  { id: 3, name: "Name3" },
  { id: 4, name: "Name4" },
  { id: 5, name: "Name5" },
];

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  return (
    <DropdownMenu
      options={data}
      currentSelection="Name1"
      currentId={1}
      href={(id) => `/page/${id}`}
      dropDownHref={(id) => `/page/${id}`}
    />
  );
}
