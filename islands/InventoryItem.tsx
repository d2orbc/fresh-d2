import { ready } from "../defs.ts";

interface InventoryItemProps {
  hash: number | string;
}

export default function InventoryItem(props: InventoryItemProps) {
  return (
    <>
      Ready: {ready}
      {props.hash}
    </>
  );
}
