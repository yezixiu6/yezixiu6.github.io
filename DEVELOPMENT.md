# 个人作品集：本地开发与内容维护

基于 [Astro Sphere](https://github.com/markhorn-dev/astro-sphere)，保留 Astro 4、Tailwind、TypeScript、少量 SolidJS，以及原版字体、背景脚本、星空与流星组件、主题切换和响应式布局。没有部署或推送到远程。

## 本地运行

推荐 Node.js 22 或 24 和 pnpm 11。此次使用 Node.js 24.19.0、pnpm 11.25.0 验证。

在本项目目录打开终端：

```powershell
pnpm install --frozen-lockfile
pnpm dev --host 127.0.0.1
```

打开终端打印的地址，通常为 http://127.0.0.1:4321/。端口被占用时 Astro 会使用下一个端口。保持终端运行，修改内容后页面会自动更新；按 Ctrl+C 停止。

检查及预览生产版本：

```powershell
pnpm build
pnpm preview --host 127.0.0.1
```

也保留了原版 npm 命令及同步后的 package-lock.json：安装可用 `npm ci`，开发可用 `npm run dev`，构建可用 `npm run build`。不要混用包管理器安装到同一个 node_modules 目录。

## 页面与源码

| 页面 | 地址 | 编辑位置 |
| --- | --- | --- |
| 首页 | `/` | `src/pages/index.astro` |
| 关于我 | `/work` | `src/pages/work/index.astro` |
| 作品集 | `/projects` | `src/pages/projects/index.astro` |
| 作品详情 | `/projects/文件夹名` | `src/content/projects/文件夹名/index.md` |
| 联系 | `/contact` | `src/consts.ts`，`src/components/ContactLinks.astro` |

保留 `/work` 路径，改为关于我页面，不引入新路由系统。原版 blog 集合保留，模板教程已标记为草稿，不在搜索、RSS 或生成的详情页面中展示。原示例任职经历已从当前内容移除，原始文件可从 Git 基线获取。

布局仍使用 PageLayout、TopLayout、BottomLayout、ArticleTopLayout 和 ArticleBottomLayout。作品卡片沿用 ArrowCard，搜索与分类沿用原版 SolidJS 组件。

## 替换个人资料

1. 编辑 `src/consts.ts` 中的 PROFILE、SITE 和 SOCIALS。
2. 在关于我页面填写真实的专业背景、经历与技能。
3. 填写真实姓名后，更新首页、关于我和页脚的「姓名占位」提示。
4. 替换占位项目后，更新首页及作品集页面的占位说明。

联系方式未填写时没有可点击链接，不会误指向模板作者。配置示例（请替换为真实地址）：

```ts
{ NAME: "邮箱", ICON: "email", TEXT: "真实邮箱", HREF: "mailto:真实邮箱" }
{ NAME: "哔哩哔哩", ICON: "link", TEXT: "真实主页名称", HREF: "真实的 https 主页地址" }
```

## 新增或更新作品

创建 `src/content/projects/my-project/index.md`，写入 frontmatter 和 Markdown 正文：

```yaml
---
title: "作品名称"
summary: "项目简述"
date: "2026-10-13"
tags: ["短视频策划"]
draft: false
placeholder: false
featured: true
cover: "/covers/my-project.jpg"
coverAlt: "具体描述封面内容"
videoUrl: "/media/my-project.mp4"
videoCaption: "作品视频与必要的制作说明"
---
```

date 填写真实创作日期；当前四个占位示例的日期仅用于排序，不代表项目时间。placeholder 为 true 时卡片和详情会显示占位标签并隐藏项目日期。featured 为 true 的非草稿项目进入首页精选，最多三个。

图片放在 `public/covers/`，视频放在 `public/media/`，配置路径不包含 public。推荐 16:9 封面及浏览器兼容的 MP4（H.264）。竖屏视频在详情播放器内保持自身比例。视频不自动播放，使用原生 controls、playsinline 和 metadata 预加载。封面和视频均可省略；没有视频时显示待补充提示，不生成坏链接。

正文可使用 `![分镜说明](/covers/storyboard.jpg)` 添加制作过程和成果图片；需要更复杂的内容可使用项目已有的 MDX 集成。

`public/media/player-sample.mp4` 是三秒无音频的静态占位片段，仅用于验证播放器，不是真实 AI 动画作品。替换或移除 ai-animation 项目的 videoUrl 即可更换它。

## 原版与回退

完整上游 Git 历史已保留，origin 指向原项目。原版启动成功后创建了本地基线提交 `3183961`，标签为 `original-astro-sphere`；修改在 `portfolio` 分支上。

查看原版（切换前先保存当前改动）：

```powershell
git status
git switch --detach original-astro-sphere
```

返回当前作品集：

```powershell
git switch portfolio
```

切换不同版本后按其锁文件重新安装依赖。原版代码保留其当时的构建问题，基线用于精确比较，不覆盖这些问题。

## 已处理的兼容问题

- 原版首页联系区有未闭合标签及并列 JSX 根节点；替换为 ContactLinks 组件后类型检查通过。
- 原版 sitemap 的宽泛版本范围会解析到不兼容 Astro 4 的新版本，固定为 `@astrojs/sitemap@3.6.0`，未升级或重构 Astro。
- 原版手机作品列表存在单列网格中的三列跨度，已做局部调整。
- 原版手机菜单会禁用详情页所属栏目的链接，已允许返回列表。
- 原版 RSS 用 slug 判断集合会将笔记链接指向项目，已使用 collection 判断，并一致过滤草稿。
- preview:network 原来调用 dev，改为实际 preview。
- pnpm 锁文件更新为当前包管理器格式；只允许原有 esbuild、sharp 构建脚本。

## 上线前配置

当前只本地开发。astro.config.mjs 使用 `SITE_URL`，默认 `http://localhost:4321`；以后准备部署时再设置真实域名并重新构建，避免 canonical、RSS 和 sitemap 指向模板演示站。

LICENSE 保留原项目 MIT 声明。当前没有新增访问统计、表单、账户或后台系统。
