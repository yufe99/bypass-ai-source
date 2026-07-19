// Build-time injected config — replaces process.env at build time for static export
// Read from NEXT_PUBLIC_API_URL env or fall back to default
export const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://bypass-ai-api.yufe99.workers.dev";