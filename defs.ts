import { IS_BROWSER } from "$fresh/runtime.ts";

import { signal } from "@preact/signals";

const isReady = signal(false);
import { getActivityTypeDef, getActivityModeDef, getPlaceDef, getSandboxPerkDef, getActivityDef, getActivityModifierDef, getInventoryItemLiteDef, getPresentationNodeDef, getRecordDef, includeTables } from "npm:@d2api/manifest";


let loading = false;

export function ready() {
  if (!IS_BROWSER) return false;
  maybeLoad();
  return isReady;
}

let m = signal({ getActivityTypeDef, getActivityModeDef, getPlaceDef, getSandboxPerkDef, getInventoryItemLiteDef, getActivityDef, getActivityModifierDef, getPresentationNodeDef, getRecordDef })
export function defs() {
  return m.value;
}

async function maybeLoad() {
  if (loading) {
    console.log("Already loading");
    return;
  }
  console.log("Loading defs");
  loading = true;

  const webPackage = await import("npm:@d2api/manifest-web")
  webPackage.verbose();
  webPackage.setApiKey("4396165cb93449b7879387729f5c7e49");
  webPackage.includeTables([
    "SandboxPerk",
    "InventoryItemLite",
    "Activity",
    "ActivityModifier",
    "PresentationNode",
    "Record",
    "Place",
    "ActivityMode",
    "ActivityType",
  ]);
  await webPackage.loadDefs();
  m.value = webPackage;
  isReady.value = true;
}
