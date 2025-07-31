import { useEffect } from "react";

const BuildInfo = () => {
  useEffect(() => {
    // Try to get build time from different sources in order of preference
    let buildTime = "Unknown";
    let version = "1.1.0";

    // First try the define variables
    if (typeof __BUILD_TIME__ !== "undefined" && __BUILD_TIME__ !== "Unknown") {
      buildTime = __BUILD_TIME__;
    }
    // Then try environment variables
    else if (import.meta.env.VITE_BUILD_TIME) {
      buildTime = import.meta.env.VITE_BUILD_TIME;
    }
    // Finally try to fetch from build-info.json as fallback
    else {
      // Try to fetch build info from the build-info.json file
      fetch("/build-info.json")
        .then((response) => response.json())
        .then((data) => {
          updateBuildComment(data.lastPublished, data.version);
        })
        .catch(() => {
          // If all else fails, use current time
          const now = new Date().toLocaleDateString("tr-TR", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            timeZone: "Europe/Istanbul",
          });
          updateBuildComment(now, version);
        });
      return;
    }

    if (typeof __BUILD_VERSION__ !== "undefined") {
      version = __BUILD_VERSION__;
    } else if (import.meta.env.VITE_VERSION) {
      version = import.meta.env.VITE_VERSION;
    }

    updateBuildComment(buildTime, version);
  }, []);

  const updateBuildComment = (buildTime, version) => {
    // Create or update the HTML comment in document head
    const buildComment = `
  Ege Başarı Kurs Merkezi Website
  Last Published: ${buildTime}
  Version: ${version}
  Author: Ege Başarı Kurs Merkezi
  Description: Educational center website for Seferihisar, İzmir
  Build Environment: ${import.meta.env.MODE}
`;

    // Find existing comment or create new one
    let existingComment = null;

    // Remove existing build info comment if exists
    const walker = document.createTreeWalker(
      document,
      NodeFilter.SHOW_COMMENT,
      null,
      false
    );

    let comment;
    while ((comment = walker.nextNode())) {
      if (comment.textContent.includes("Ege Başarı Kurs Merkezi Website")) {
        existingComment = comment;
        break;
      }
    }

    if (existingComment) {
      existingComment.textContent = buildComment;
    } else {
      // Insert new comment before DOCTYPE
      const newComment = document.createComment(buildComment);
      document.insertBefore(newComment, document.documentElement);
    }

    console.log(`🚀 Site built at: ${buildTime}`);
  };

  return null; // This component doesn't render anything
};

export default BuildInfo;
