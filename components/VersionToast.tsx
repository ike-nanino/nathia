"use client";

import { useVersionCheck } from "@/hooks/useVersionCheck";

export const VersionToast = () => {
  useVersionCheck();
  return null;
};
