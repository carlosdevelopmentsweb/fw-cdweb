import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "CDWFW",
      formats: ["es", "umd"],
      fileName: (format) =>
        format === "es" ? "cdw-fw.esm.js" : "cdw-fw.js",
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) =>
          assetInfo.name?.endsWith(".css")
            ? "cdw-fw.css"
            : assetInfo.name || "asset",
      },
    },
  },
});
