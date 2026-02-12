import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // Relative base works across any GitHub Pages repo path
    base: "./",
    plugins: [react()],
    define: {
      "process.env.REACT_APP_N8N_CHATBOT_URL": JSON.stringify(
        env.REACT_APP_N8N_CHATBOT_URL,
      ),
      "process.env.REACT_APP_N8N_REVUE_URL": JSON.stringify(
        env.REACT_APP_N8N_REVUE_URL,
      ),
      "process.env.REACT_APP_N8N_NEWSLETTER_URL": JSON.stringify(
        env.REACT_APP_N8N_NEWSLETTER_URL,
      ),
    },
    server: {
      proxy: {
        "/api/revue": {
          target: env.REACT_APP_N8N_REVUE_URL
            ? new URL(env.REACT_APP_N8N_REVUE_URL).origin
            : "http://localhost:5678",
          changeOrigin: true,
          secure: true,
          rewrite: (path: string) =>
            path.replace(/^\/api\/revue/, "/webhook/revue"), // Adjust as necessary or remove if using full URL in frontend
        },
      },
    },
  };
});
