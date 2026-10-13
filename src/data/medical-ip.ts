// 来源：本人提供的作品统计。仅包含 2026-08-01 至 2026-09-30 发布的作品。
// 数值为导出时的累计表现；不代表两个自然月分别新增的流量。
export const medicalIP = {
  title: "妇科医生IP｜短视频内容运营与增长分析",
  english: "MEDICAL IP / CONTENT STRATEGY",
  period: "2026.08—2026.09",
  platform: "抖音",
  account: "王丽惠医生",
  field: "女性健康、妇科科普、更年期健康、生活健康知识",
  scope: "2026.08.01—2026.09.30 发布的作品",
  headline: "让专业医学知识，被更多人看见。",
  subtitle: "妇科医生IP的短视频内容实践与数据复盘。",
  description: "以真实医疗科普账号为实践对象，通过用户需求分析、短视频选题策划、专业内容通俗化表达及传播表现复盘，探索垂直医疗内容的有效传播方式。",
  roles: ["短视频选题策划", "热门内容及竞品拆解", "视频脚本撰写与结构优化", "医生现场拍摄与编导执行", "视频表现观察及内容复盘"],
  total: { videos: 31, views: 250438, likes: 2865, saves: 1540, shares: 687, comments: 179, interactions: 5271, attributedFollowers: 206, engagementRate: 2.10 },
  months: [
    { label: "8月", period: "2026.08", videos: 16, views: 112933, likes: 920, saves: 319, shares: 338, comments: 59, interactions: 1636, attributedFollowers: 52, engagementRate: 1.45, medianViews: 2933.5, above10k: 2 },
    { label: "9月", period: "2026.09", videos: 15, views: 137505, likes: 1945, saves: 1221, shares: 349, comments: 120, interactions: 3635, attributedFollowers: 154, engagementRate: 2.64, medianViews: 9067, above10k: 7 },
  ],
  augustTopVideoViews: 59839,
  positioning: "面向关注女性健康的用户，以妇科医生专业知识为核心，通过生活化、场景化的内容表达，降低专业医学知识的理解门槛。",
  audienceNeeds: ["女性健康知识获取", "常见妇科症状的初步认知", "更年期与中年女性健康管理", "常见健康误区辨析", "实用健康生活建议"],
  matrix: [
    { number: "01", symbol: "+", title: "专业科普", english: "EXPLAIN", description: "围绕妇科疾病、更年期、女性健康展开，强化账号的专业可信度。" },
    { number: "02", symbol: "?", title: "高频痛点", english: "CONNECT", description: "围绕身体不适、常见症状与用户日常困扰，设计更容易引起关注的选题。" },
    { number: "03", symbol: "≡", title: "实用方法", english: "KEEP", description: "动作示范、健康知识清单、生活方式建议，提高内容的实用性与收藏价值。" },
    { number: "04", symbol: "↗", title: "生活化话题", english: "RELATE", description: "通过门诊故事、生活场景和平台热门话题，提高内容的可理解性和传播潜力。" },
  ],
  workflow: ["用户需求 / 热点洞察", "选题策划", "脚本创作", "拍摄执行", "发布表现观察", "数据复盘"],
  findings: [
    { title: "用户的问题，比专业术语更容易成为传播切口", text: "从观众关心的具体身体症状和生活问题出发，更容易使专业医学知识进入日常语境。这是结合代表作品的内容观察，仍需在后续选题中持续验证。" },
    { title: "高播放与高价值内容，需要不同的衡量方式", text: "播放表现反映内容传播规模；收藏、分享、评论及视频归因涨粉帮助观察不同类型内容的用户反馈。单一播放指标不足以解释全部内容价值。" },
    { title: "高表现内容，需要可复用的创作方法", text: "拆解内容主题、开头结构、呈现方式和互动表现，为后续选题策划提供参考。可复用的是分析与创作方法，不是对高播放结果的保证。" },
  ],
  recommendations: [
    { id: "A", title: "让开头更快传递价值", text: "优化短视频前 3—5 秒的开头设计，让用户更快理解内容价值。" },
    { id: "B", title: "按内容目标分别观察指标", text: "根据选题类型分别观察播放、收藏、分享和视频归因涨粉，避免仅通过播放量判断内容价值。" },
    { id: "C", title: "连接专业知识与生活场景", text: "将专业科普与生活场景结合，提高内容可理解性，同时保持医疗表达准确。" },
    { id: "D", title: "建立持续复盘机制", text: "记录高表现选题的主题、开头与结构特点，用于后续选题迭代。" },
  ],
  conclusion: [
    "一次完整的内容实践，不只是追求单条视频的播放量，更需要理解用户需求、内容价值与传播表现之间的关系。",
    "通过真实医疗科普短视频项目，我积累了选题策划、脚本创作与拍摄执行经验，并通过对内容数据的整理与复盘，进一步形成对内容策略和传播效果的认识。",
  ],
}

export interface MedicalVideo {
  id: string
  category: string
  title: string
  published: string
  views: number
  likes: number
  saves?: number
  shares?: number
  attributedFollowers?: number
  engagementRate?: number
  analysis: string
  cover: string | null
  videoUrl: string | null
}

// 添加自己的真实封面和作品链接即可；null 时展示明确的排版封面预留区。
export const medicalVideos: MedicalVideo[] = [
  {
    id: "01", category: "高播放内容", title: "女生小腹疼别硬扛！6种痛感对应不同问题", published: "2026-08-21",
    views: 59839, likes: 286, shares: 285, saves: 132,
    analysis: "从女性日常身体症状切入，通过具体的疼痛场景和分类信息吸引关注，体现高频健康需求选题的传播潜力。",
    cover: null, videoUrl: null,
  },
  {
    id: "02", category: "高互动内容", title: "一个吹风机，胜过十个老中医", published: "2026-09-18",
    views: 8841, likes: 328, saves: 293, shares: 120, engagementRate: 8.60,
    analysis: "生活化话题获得较高互动和收藏，但标题存在夸张表达，需要进一步平衡传播吸引力与医疗内容科学性。",
    cover: null, videoUrl: null,
  },
  {
    id: "03", category: "实用科普内容", title: "女人过了中年，别急着跑步！4个动作练出紧致好气色", published: "2026-09-24",
    views: 12242, likes: 206, saves: 273,
    analysis: "通过动作演示降低理解门槛，将健康建议转化为易于理解和保存的内容，体现实用型科普的价值。",
    cover: null, videoUrl: null,
  },
  {
    id: "04", category: "专业垂直内容", title: "小阴唇手术到底要不要做？", published: "2026-09-30",
    views: 18001, likes: 161, attributedFollowers: 35,
    analysis: "围绕具体妇科问题进行专业知识解释，通过明确的健康话题承接垂直受众需求，体现专业内容的关注转化潜力。",
    cover: null, videoUrl: null,
  },
]

export const formatNumber = (value: number) => value.toLocaleString("zh-CN", { maximumFractionDigits: 1 })
export const growthPercent = (before: number, after: number) => ((after / before - 1) * 100).toFixed(1)
