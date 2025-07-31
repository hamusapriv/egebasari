// scripts/generate-build-info.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateBuildInfo = () => {
  const now = new Date();

  // Format date and time for Turkey timezone
  const turkeyTime = new Intl.DateTimeFormat("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Istanbul",
  }).format(now);

  // ISO format for precise tracking
  const isoTime = now.toISOString();

  const buildInfo = {
    lastPublished: turkeyTime,
    lastPublishedISO: isoTime,
    version: "1.1.0",
    buildTime: Date.now(),
  };

  // Create build-info.json for reference
  const buildInfoPath = path.join(path.dirname(__dirname), "build-info.json");
  fs.writeFileSync(buildInfoPath, JSON.stringify(buildInfo, null, 2));

  // Update environment variables for Vite
  const envContent = `VITE_BUILD_TIME=${turkeyTime}
VITE_BUILD_TIME_ISO=${isoTime}
VITE_VERSION=${buildInfo.version}
VITE_BUILD_TIMESTAMP=${buildInfo.buildTime}
`;

  const envPath = path.join(path.dirname(__dirname), ".env.local");
  fs.writeFileSync(envPath, envContent);

  console.log(`✅ Build info generated: ${turkeyTime}`);
  return buildInfo;
};

// Only run the function when script is executed directly, not when imported
if (import.meta.url === `file://${process.argv[1]}`) {
  generateBuildInfo();
}

export default generateBuildInfo;
