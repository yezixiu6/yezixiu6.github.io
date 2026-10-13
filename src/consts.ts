import type { Site, Page, Links, Socials } from "@types"

// 个人资料由本人提供；集中维护简介、技能与经历。
export const PROFILE = {
  NAME: "何羽翔",
  INTRO: "网络与新媒体专业 · 2027 届本科生",
  BIO: "一名具有短视频内容策划与实际项目经验的网络与新媒体专业学生，熟悉从选题、脚本创作到拍摄执行的内容生产流程，关注互联网产品、内容传播与 AI 技术应用。",
  EDUCATION: "2027 届本科毕业生，网络与新媒体专业",
  JOB_DIRECTIONS: ["新媒体运营", "内容运营", "产品运营", "游戏运营"],
  SKILLS: ["短视频策划", "脚本创作", "内容运营", "拍摄执行", "数据分析", "AI 辅助创作", "抖音与小红书平台内容研究"],
  INTERNSHIP: {
    COMPANY: "医疗健康内容 MCN",
    ROLE: "实习编导",
    PERIOD: "2026 年 7 月起",
    RESPONSIBILITIES: [
      "参与多个医生短视频账号的内容策划与制作。",
      "负责医疗科普短视频的选题调研、脚本创作和拍摄执行。",
      "根据平台热点及用户需求调整视频开头、叙事节奏和内容表达。",
      "与医生沟通脚本及拍摄方案，协助内容生产和发布。",
      "使用 AI 工具辅助创意生成、资料整理与工作流程优化。",
    ],
    OUTCOMES: [
      "参与多个医疗健康类短视频账号的内容制作。",
      "积累了从内容创意到实际拍摄落地的项目经验。",
    ],
  },
  DIRECTIONS: [
    { name: "短视频策划", english: "STORY & VIDEO", text: "从选题、脚本到分镜，用影像讲清一个想法。" },
    { name: "账号运营", english: "CONTENT & STRATEGY", text: "围绕内容定位、栏目规划与复盘，呈现运营思路。" },
    { name: "AI 辅助创作", english: "AI & CREATION", text: "使用 AI 工具辅助创意生成、资料整理与工作流程优化。" },
    { name: "个人创作", english: "PERSONAL EXPLORATIONS", text: "保留观察、实验与灵感，让想法成为具体作品。" },
  ],
}
export const SITE: Site = {
  TITLE: "创作档案",
  DESCRIPTION: "何羽翔的个人作品集。2027 届网络与新媒体专业本科生，关注短视频策划、内容运营与 AI 辅助创作，求职方向为新媒体运营、内容运营、产品运营和游戏运营。",
  AUTHOR: PROFILE.NAME,
}
export const WORK: Page = { TITLE: "关于我", DESCRIPTION: "何羽翔的个人简介、专业背景、核心技能与医疗健康内容 MCN 实习编导经历。" }
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
  { NAME: "邮箱", ICON: "email", TEXT: "3142241554@qq.com", HREF: "mailto:3142241554@qq.com" },
  { NAME: "哔哩哔哩", ICON: "link", TEXT: "待补充主页链接" },
  { NAME: "小红书", ICON: "link", TEXT: "待补充主页链接" },
  { NAME: "其他平台", ICON: "link", TEXT: "待补充主页链接" },
]
