import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "http://localhost:4321", // 本地预览；部署前填写真实域名。
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
})