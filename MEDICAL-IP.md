# 医疗 IP 案例维护

页面：`http://127.0.0.1:4321/projects/medical-ip`。首页精选作品、作品集列表和搜索均使用同一内容条目。

## 修改数据与媒体

- `src/data/medical-ip.ts`：项目说明、总计、8/9 月分组数据、四条代表作品及分析文案。
- `src/content/projects/medical-ip/index.md`：首页卡片标题、简介、标签、周期、封面及专用详情组件标识。
- `src/components/MedicalIPCase.astro`：七个板块的排版；`MedicalComparison.astro`：复用的对比图。
- `src/styles/medical-ip.css`：案例专用样式，含深浅主题、手机断点、减少动态效果。
- `public/covers/medical-ip.svg`：首页卡片的设计封面，不是原视频截图。

真实视频封面建议放在 `public/covers/medical-ip/01.jpg` 等路径，然后在 `medicalVideos` 对应条目填写：

```ts
cover: "/covers/medical-ip/01.jpg",
videoUrl: "https://你的真实作品链接",
```

`cover` 和 `videoUrl` 可以分别填写；`null` 显示明确的封面或链接待补充状态。真实封面按 9:16 展示。链接提供后出现「查看原视频」，在新标签页打开。未提供的单条指标省略，不填 0；单条 8.60% 按所提供数据展示，不从缺少评论数的数据重算。

## 本地开发

在此项目目录运行 `pnpm dev --host 127.0.0.1`，默认端口 4321。开发模式保存即可刷新。运行 `pnpm run build` 完成 Astro 检查及静态构建。生产预览使用 `pnpm preview --host 127.0.0.1 --port 4321`，修改源码后需重新构建并刷新。

## 数据边界

只包含 2026-08-01 至 2026-09-30 发布作品在导出时的累计数据；不是自然月新增流量。归因涨粉不是账号净增或总粉丝数。定位、内容矩阵为补充分析，优化建议尚未实施验证。没有每日走势、曝光、完播率、点击率等未提供指标。

数据校验脚本在工作区 `work/verify-medical.mjs`，使用支持原生 TypeScript 的 Node 24 运行。原有结构和其他项目保持不变，没有新增依赖、部署或远程提交。
