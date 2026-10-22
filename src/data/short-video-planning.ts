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
  secondaryMetrics?: { label: string; value: string }[]
  published?: string
  metricNote?: string
  reflection?: string
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
    "项目涵盖就医沟通与女性健康科普，需要在专业信息表达、受众理解成本与平台传播形式之间取得平衡。",
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
    id: "01", slug: "doctor-subtext", title: "医生的黑话暗示，大家一定要记住", english: "SCENARIO & CONTRAST",
    positioning: "沈炜亮医生 / 就医沟通选题 / 对照式脚本 / 举牌表达",
    sourceFile: "video_医生的黑话暗示，大家一定要记住 ..._top_0_2.mp4", duration: 54.310998,
    video: "/media/short-video/doctor-subtext.mp4", poster: "/covers/short-video/doctor-subtext-00.jpg",
    published: "2026 年 10 月 20 日 18:00",
    metrics: [{ label: "播放量", value: 3.6, suffix: "万" }, { label: "点赞量", value: 1214 }, { label: "分享量", value: 222 }],
    secondaryMetrics: [
      { label: "评论", value: "73" }, { label: "收藏", value: "181" },
      { label: "完播率", value: "13.19%" }, { label: "2秒跳出率", value: "41.02%" }, { label: "吸粉量", value: "8" },
    ],
    metricNote: "播放量保留后台显示的“3.6万”精度；统计截止时间未提供。",
    paragraphs: [
      "从受众对就医沟通的疑问切入，以“医生说话的言外之意，你听懂了吗？”作为开场提问，将抽象的沟通话题转化为四组“医生原话—情景化解读”的对照内容，建立清晰的观看预期。",
      "成片约54.3秒，采用医生正面坐姿、固定景别与举牌动作承载内容。脚本预留开场文字与声音的后期配合，画面中的原话和解读依次切换，以重复结构降低理解成本，结尾通过留言邀请完成收束。",
    ],
    highlights: [
      { title: "以沟通疑问建立选题", text: "抓住“医生这句话到底是什么意思”的好奇心，用直接提问交代视频主题，把日常就医场景转化为内容切入点。" },
      { title: "用四组对照组织脚本", text: "按“原话—解读”逐项推进，让每个信息单元具有相同的阅读顺序，体现脚本拆分、重点提炼与节奏组织能力。" },
      { title: "让脚本对应画面与后期", text: "将内容安排落实到举牌、换页、重点字幕及声音配合，保持人物主体与信息区域稳定，便于拍摄沟通和后期执行。" },
    ],
    reflection: "这条作品在当前三个案例中播放量最高，获得1,214次点赞与222次分享；同时，13.19%的完播率和41.02%的2秒跳出率提示后续可测试更短的开场与更紧凑的对照节奏。脚本中的“言外之意”属于情景化表达，后续应结合具体语境复核，避免将其写成适用于所有诊疗场景的确定结论。",
    frames: [
      frame("doctor-subtext", 0, "提问式开场", "蓝黄主题字幕突出“言外之意”与“你听懂了吗”，医生正面出镜，直接建立观看预期。"),
      frame("doctor-subtext", 4, "先呈现医生原话", "第一组“暗语”以醒目字幕呈现，举牌画面为文字保留稳定的信息区域。"),
      frame("doctor-subtext", 12, "再给出情景化解读", "同一景别切换到“意思是”，使原话与解读形成连续的对照阅读。"),
      frame("doctor-subtext", 53, "留言邀请收束", "结尾展示“留下一句谢谢”的互动文案，将内容结束与评论邀请连接。"),
    ],
  },
  {
    id: "02", slug: "myths", title: "生活中的10个误区", english: "MYTH-BUSTING CONTENT",
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

export const timestamp = (seconds: number) => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`
export const formatMetric = (value: number) => value.toLocaleString("zh-CN", { maximumFractionDigits: 1 })
