import { ready, defs } from "../defs.ts";

interface InventoryItemProps {
  hash: number | string;
}

export default function InventoryItem(props: InventoryItemProps) {
  return (
    <>
      Ready: [ {JSON.stringify(ready())} ][ {JSON.stringify(defs())} ]
      {props.hash}
    </>
  );
}
