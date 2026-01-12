import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  if (command === "serve") {
    return {
      root: "docs",
      publicDir: "..",
      server: {
        open: true,
        fs: {
          allow: [".."],
        },
      },
    };
  }

  if (mode === "docs") {
    return {
      root: "docs",
      publicDir: false,
      build: {
        outDir: "../dist-docs",
        emptyOutDir: true,
      },
    };
  }

  return {
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
  };
});
