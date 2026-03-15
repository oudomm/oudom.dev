"use client";

import { useSyncExternalStore } from "react";

export default function CurrentYear() {
  const year = useSyncExternalStore(
    () => () => {},
    () => new Date().getFullYear(),
    () => null,
  );

  return <>{year}</>;
}
