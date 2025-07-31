import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import generateBuildInfo from "./scripts/generate-build-info.js";
import { copyFileSync } from "fs";

// Generate build info before build
const buildInfoPlugin = () => {
  return {
    name: "build-info",
    buildStart() {
      // Only generate build info during production build, not in dev mode
      if (process.env.NODE_ENV === "production") {
        const info = generateBuildInfo();
        process.env.VITE_BUILD_TIME = info.lastPublished;
        process.env.VITE_VERSION = info.version;
        process.env.VITE_BUILD_TIME_ISO = info.lastPublishedISO;
      } else {
        // For development, use static values to avoid file changes
        const now = new Date();
        const turkeyTime = new Intl.DateTimeFormat("tr-TR", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Europe/Istanbul",
        }).format(now);

        process.env.VITE_BUILD_TIME = turkeyTime;
        process.env.VITE_VERSION = "1.1.0-dev";
        process.env.VITE_BUILD_TIME_ISO = now.toISOString();
      }
    },
    writeBundle() {
      // Copy build-info.json to dist folder
      try {
        copyFileSync("build-info.json", "dist/build-info.json");
        console.log("✅ Copied build-info.json to dist folder");
      } catch (error) {
        console.warn("⚠️ Could not copy build-info.json:", error.message);
      }
    },
  };
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), buildInfoPlugin()],
  define: {
    __BUILD_TIME__: JSON.stringify(process.env.VITE_BUILD_TIME || "Unknown"),
    __BUILD_VERSION__: JSON.stringify(process.env.VITE_VERSION || "1.0.0"),
    __BUILD_TIME_ISO__: JSON.stringify(
      process.env.VITE_BUILD_TIME_ISO || new Date().toISOString()
    ),
  },
});
