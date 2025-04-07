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
      toast("✨ I've added new loving words just for you baby 💕", {
        description: "✨ I've added new loving words just for you baby 💕",
        duration: 4000,
      }); 
      localStorage.setItem(LOCAL_KEY, APP_VERSION);
    }
  }, []);
};
