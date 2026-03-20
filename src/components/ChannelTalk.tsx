"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    ChannelIO?: (...args: unknown[]) => void;
    ChannelIOInitialized?: boolean;
  }
}

export default function ChannelTalk() {
  useEffect(() => {
    (function () {
      const w = window;
      if (w.ChannelIO) return;

      const ch = function (...args: unknown[]) {
        ch.c(args);
      } as unknown as {
        (...args: unknown[]): void;
        q: unknown[][];
        c: (args: unknown[]) => void;
      };

      ch.q = [];
      ch.c = function (args: unknown[]) {
        ch.q.push(args);
      };
      w.ChannelIO = ch;

      function loadScript() {
        if (w.ChannelIOInitialized) return;
        w.ChannelIOInitialized = true;
        const s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
        const x = document.getElementsByTagName("script")[0];
        if (x && x.parentNode) {
          x.parentNode.insertBefore(s, x);
        }
      }

      if (document.readyState === "complete") {
        loadScript();
      } else {
        window.addEventListener("DOMContentLoaded", loadScript);
        window.addEventListener("load", loadScript);
      }
    })();

    window.ChannelIO?.("boot", {
      pluginKey: "a62db4eb-d889-4e35-9c74-aa1e7fb59aee",
    });
  }, []);

  return null;
}
