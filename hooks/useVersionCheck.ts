// hooks/useVersionCheck.ts
"use client";

import { useEffect } from "react";
import { toast } from "sonner";
import { APP_VERSION } from "@/lib/version";

const LOCAL_KEY = "last_seen_version";

export const useVersionCheck = () => {
  useEffect(() => {
    const lastSeen = localStorage.getItem(LOCAL_KEY);

    if (lastSeen !== APP_VERSION) {
      toast("✨ We've added new loving words just for you!", {
        description: "Check out the fresh updates 💕",
        duration: 6000,
      }); 
      localStorage.setItem(LOCAL_KEY, APP_VERSION);
    }
  }, []);
};
