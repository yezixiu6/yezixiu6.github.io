import type { Site, Page, Links, Socials } from "@types"

// 真实资料待补充。集中修改姓名、介绍与联系方式。
export const PROFILE = {
  NAME: "你的名字",
  INTRO: "在内容、影像与 AI 之间，探索创作的更多可能。",
  BIO: "这里将记录我的内容创作、数字媒体与 AI 创作实践。个人简介、专业背景与具体经历待补充。",
  DIRECTIONS: [
    { name: "短视频策划", english: "STORY & VIDEO", text: "从选题、脚本到分镜，用影像讲清一个想法。" },
    { name: "账号运营", english: "CONTENT & STRATEGY", text: "围绕内容定位、栏目规划与复盘，呈现运营思路。" },
    { name: "AI 动画", english: "AI & MOTION", text: "探索图像、声音与动态叙事之间的创作流程。" },
    { name: "个人创作", english: "PERSONAL EXPLORATIONS", text: "保留观察、实验与灵感，让想法成为具体作品。" },
  ],
}
export const SITE: Site = {
  TITLE: "创作档案",
  DESCRIPTION: "内容创作、数字媒体与 AI 创作个人作品集。当前为占位版本，个人资料与真实作品待补充。",
  AUTHOR: PROFILE.NAME,
}
export const WORK: Page = { TITLE: "关于我", DESCRIPTION: "个人简介、专业背景与技能。资料待补充。" }
export const BLOG: Page = { TITLE: "创作笔记", DESCRIPTION: "创作过程与思考，内容待补充。" }
export const PROJECTS: Page = { TITLE: "作品集", DESCRIPTION: "从内容策划到 AI 影像，记录想法成为作品的过程。" }
export const SEARCH: Page = { TITLE: "搜索", DESCRIPTION: "按关键词查找作品与创作笔记。" }
export const LINKS: Links = [
  { TEXT: "首页", HREF: "/" },
  { TEXT: "关于我", HREF: "/work" },
  { TEXT: "作品集", HREF: "/projects" },
  { TEXT: "联系", HREF: "/contact" },
]
// 未配置 HREF 时只展示文字，避免链接到虚假的邮箱或个人主页。
export const SOCIALS: Socials = [
  { NAME: "邮箱", ICON: "email", TEXT: "待补充邮箱" },
  { NAME: "哔哩哔哩", ICON: "link", TEXT: "待补充主页链接" },
  { NAME: "小红书", ICON: "link", TEXT: "待补充主页链接" },
  { NAME: "其他平台", ICON: "link", TEXT: "待补充主页链接" },
]
