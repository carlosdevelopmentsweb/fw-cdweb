import { defineConfig } from "vite";

export default defineConfig(({ command, mode }) => {
  if (command === "serve") {
    return {
      root: "docs",
      publicDir: "..",
      server: {
        host: '0.0.0.0', // Permite acesso de qualquer IP da rede
        port: 5173, // Porta fixa
        strictPort: true, // Não tenta outras portas se 5173 estiver ocupada
        open: false, // Desative o open automático ou mude para o IP
        fs: {
          allow: [".."],
        },
        // Opcional: cors para evitar problemas
        cors: true,
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
          assetFileNames: (assetMeta) =>
            assetMeta.name?.endsWith(".css")
              ? "cdw-fw.css"
              : assetMeta.name || "asset",
        },
      },
    },
  };
});
