import { IS_BROWSER } from "$fresh/runtime.ts";

import { signal } from "@preact/signals";

import "https://deno.land/x/indexeddb@v1.1.0/polyfill_memory.ts";
import {
  includeTables,
  loadDefs,
  setApiKey,
  verbose,
} from "npm:@d2api/manifest-web";

const isReady = signal(false);

let loading = false;

export function ready() {
  if (!IS_BROWSER) return false;
  maybeLoad();
  return isReady;
}

async function maybeLoad() {
  if (loading) {
    console.log("Already loading");
    return;
  }
  console.log("Loading defs");
  loading = true;

  verbose();
  setApiKey("4396165cb93449b7879387729f5c7e49");
  includeTables([
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
  await loadDefs();
  isReady.value = true;
}
