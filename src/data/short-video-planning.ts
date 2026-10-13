// 作品数据与策划背景来自本人提供的资料；抽帧时间与成片说明来自本地视频核对。
// 文件名中的日期不作为发布日期。原始统计表与统计截止时间未提供。
export interface PlanningFrame {
  second: number
  title: string
  description: string
  image: string
  scriptName?: string
}

export interface PlanningCase {
  id: string
  slug: string
  title: string
  english: string
  positioning: string
  sourceFile: string
  duration: number
  video: string
  poster: string
  metrics: { label: string; value: number; suffix?: string }[]
  paragraphs: string[]
  highlights: { title: string; text: string }[]
  frames: PlanningFrame[]
}

const frame = (slug: string, second: number, title: string, description: string, scriptName?: string): PlanningFrame => ({
  second, title, description, scriptName,
  image: `/covers/short-video/${slug}-${String(second).padStart(2, "0")}.jpg`,
})

export const planning = {
  english: "SHORT-FORM VIDEO PLANNING",
  title: "从选题到成片：短视频内容策划实践",
  subtitle: "通过真实的医疗健康短视频案例，呈现内容策划、脚本结构设计、拍摄形式创新与项目落地过程。",
  role: "实习编导 / 内容策划",
  background: [
    "在医疗健康内容MCN实习期间，参与医生个人IP短视频内容制作，围绕抖音平台的内容特点及目标受众需求，开展参考视频分析、选题策划、脚本撰写、拍摄设计和现场沟通等工作。",
    "项目主要面向女性健康科普领域，需要在专业信息表达、受众理解成本与平台传播形式之间取得平衡。",
  ],
  responsibilities: ["短视频选题分析", "同类热门内容与参考视频拆解", "口播脚本撰写及优化", "视频结构与镜头设计", "拍摄沟通与现场执行", "成片效果复盘"],
  workflow: [
    { title: "选题洞察", text: "从目标受众的生活问题出发，结合平台内容特点明确表达目标。" },
    { title: "参考拆解", text: "分析同类内容的开头、信息结构、画面形式与观看节奏。" },
    { title: "脚本结构", text: "将专业信息整理为短句、判断内容或独立动作模块。" },
    { title: "分镜规划", text: "把文字内容转化为机位、景别、动作、道具与字幕安排。" },
    { title: "沟通与执行", text: "与医生沟通拍摄要求，参与现场执行与内容落地。" },
    { title: "成片复盘", text: "核对内容表达和观看节奏，结合提供的作品数据观察表现。" },
  ],
  conclusion: "通过参与医生IP短视频内容制作，我逐步建立了从选题分析、脚本结构设计到分镜规划与现场执行的工作流程，并在不同内容形式中探索信息表达、观看节奏与用户需求之间的平衡。",
}

export const planningCases: PlanningCase[] = [
  {
    id: "01", slug: "myths", title: "生活中的10个误区", english: "MYTH-BUSTING CONTENT",
    positioning: "反常识知识科普 / 高频信息输出",
    sourceFile: "9.23王丽惠十大误区(1).mp4", duration: 67.383991,
    video: "/media/short-video/myths.mp4", poster: "/covers/short-video/myths-00.jpg",
    metrics: [{ label: "播放量", value: 16437 }, { label: "完播率", value: 21.2, suffix: "%" }],
    paragraphs: [
      "利用受众日常生活中经常遇到但容易产生误解的健康问题，采用反常识表达方式制造认知反差。成片可见隔夜茶、味精、鸡蛋、手机辐射、流鼻血和睡眠习惯等生活健康话题。",
      "通过连续呈现不同知识点，降低单一专业话题的理解门槛，使内容具备较强的信息密度与话题覆盖度。",
    ],
    highlights: [
      { title: "反常识选题", text: "围绕大众熟悉的生活场景，利用已有认知与新信息之间的差异建立观看兴趣。" },
      { title: "高密度信息结构", text: "使用多个简短知识点构成连续的信息输出，不依赖复杂故事铺垫。" },
      { title: "内容节奏设计", text: "通过短句表达、快速切换知识点及重点字幕，形成相对紧凑的观看节奏。" },
    ],
    frames: [
      frame("myths", 0, "选题切入", "开场出现“生活十大误区”主题字幕，直接交代内容承诺。"),
      frame("myths", 3, "认知反差", "进入隔夜茶相关话题；主题、口播字幕与配图形成信息层级。"),
      frame("myths", 8, "连续知识输出", "切换至味精相关话题，延续简短字幕与配图的表达结构。"),
      frame("myths", 66, "内容收束", "结尾以“您记住了吗”提问收束，提醒观众回顾知识点。"),
    ],
  },
  {
    id: "02", slug: "judgment", title: "进入更年期，这8件事你做对没？", english: "STORYBOARD & PRODUCTION",
    positioning: "视觉化科普 / 分镜设计 / 拍摄执行",
    sourceFile: "7月31日王丽慧举牌.mp4", duration: 23.289002,
    video: "/media/short-video/judgment.mp4", poster: "/covers/short-video/judgment-05.jpg",
    metrics: [{ label: "播放量", value: 6907 }, { label: "点赞量", value: 49 }],
    paragraphs: [
      "针对更年期女性常见的健康认知问题，将专业科普信息整理成简洁、直接、易于理解的判断式内容。",
      "传统医生口播容易出现信息密集、视觉变化不足等问题，因此该策划尝试通过医生动作、判断符号与画面节奏增强内容可看性。",
      "实际成片约23.3秒，可见医院候诊/走廊环境、医生入画与举牌、红色叉号和绿色对号，以及逐项字幕和配图；原方案中的逐项镜头时长、离画和空镜安排不能直接等同于实际剪辑。",
    ],
    highlights: [],
    frames: [
      frame("judgment", 0, "主题与空场", "医院座椅与主题字幕先出现，医生尚未进入画面。"),
      frame("judgment", 1, "判断01 / 举牌反馈", "首项问题出现，医生举起红色叉号牌，搭配内容配图。"),
      frame("judgment", 5, "判断02 / 强化结果", "红色叉号与判断文字同框，补充字幕位于下方。"),
      frame("judgment", 7, "判断03 / 颜色变化", "绿色对号牌承接第三项内容，延续相近景别。"),
      frame("judgment", 9, "判断04 / 配图辅助", "第四项内容采用绿色举牌、标题和配图的组合。"),
      frame("judgment", 13, "判断05 / 重复结构", "第五项字幕与配图出现，举牌结构保持一致。"),
      frame("judgment", 17, "判断06 / 对比反馈", "第六项以红色叉号给出判断，形成视觉对比。"),
      frame("judgment", 19, "判断07 / 字幕分层", "绿色对号与补充字幕配合，分层呈现第七项信息。"),
      frame("judgment", 23, "判断08 / 成片结尾", "第八项及补充字幕仍在画面中，成片接近结束。"),
    ],
  },
  {
    id: "03", slug: "movement", title: "中年女性4个健身动作", english: "ACTION-BASED CONTENT",
    positioning: "动作演示 / 实用型内容 / 收藏导向",
    sourceFile: "9.22王丽惠最好的运动方式改开头.mp4", duration: 55.053991,
    video: "/media/short-video/movement.mp4", poster: "/covers/short-video/movement-00.jpg",
    metrics: [{ label: "播放量", value: 12242 }, { label: "收藏量", value: 273 }, { label: "转发量", value: 52 }],
    paragraphs: [
      "与常规医生坐姿口播不同，本案例使用动作演示作为主要内容形式。围绕中年女性日常活动、身体锻炼等受众需求，将科普信息转化为用户可以跟随观看的具体动作。",
      "实际成片先以问题引入和口播说明建立语境，再呈现四组动作演示，并以互动表达收尾。展示分析聚焦内容形式，不延伸动作的医学功效结论。",
    ],
    highlights: [
      { title: "从知识讲解到动作演示", text: "减少抽象说明，以真实动作呈现具体内容。" },
      { title: "模块化结构", text: "将内容拆分为4个独立动作，便于用户理解和回看。" },
      { title: "收藏导向", text: "通过可重复观看的动作内容增强视频的实用价值；提供的作品统计包含273次收藏和52次转发。" },
    ],
    frames: [
      frame("movement", 26, "古法回春术", "成片动作一：医生举起双臂，动作名称显示在画面顶部。", "古法回春术"),
      frame("movement", 34, "击掌画圆", "成片动作二：双臂举起，保持完整身体动作的可见性。", "穿掌画圆"),
      frame("movement", 38, "举手后撤", "成片动作三：侧身展示举手及后撤姿态。", "举手后撤步"),
      frame("movement", 42, "踮脚扩胸", "成片动作四：正面展示双臂展开的姿态。", "扩胸颠脚"),
    ],
  },
]

export const originalStoryboard = {
  shots: 9, duration: "约25秒", shotDuration: "约2—4秒 / 内容镜头",
  sequence: ["主题引入", "提出常见问题", "医生入画、站定与举牌", "颜色、字幕及配图强化", "医生离画 / 空镜转场"],
  execution: "原始方案以医院走廊为环境，采用固定机位、统一景别，规划医生走入与站定、举牌动作、空镜转场、后期配图及转场节奏。",
  versions: [
    { title: "定稿版", text: "完整内容结构" },
    { title: "医生版", text: "现场动作与台词提示" },
    { title: "拍摄版", text: "机位、景别、动作及道具" },
    { title: "剪辑版", text: "字幕、转场、音效及节奏要求" },
  ],
}

export const timestamp = (seconds: number) => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`
export const formatMetric = (value: number) => value.toLocaleString("zh-CN", { maximumFractionDigits: 1 })
