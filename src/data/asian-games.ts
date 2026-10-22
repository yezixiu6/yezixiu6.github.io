export const asianGames = {
  title: "亮哥的亚运之旅",
  published: "2026 年 9 月 30 日 18:09",
  summary: "围绕医务康复保障人员的亚运经历，将开幕式、赛场与交流合影组织为一篇人物故事图文，连接职业责任与个人感受。",
  introduction: "本项目以“亮哥”的亚运经历为素材，围绕他作为中国体育代表团女子板球项目医务康复保障人员的身份，整理现场照片与经历，完成图文内容策划。",
  context: "内容从开幕式的现场感切入，逐步介绍随队保障的工作身份，再通过与不同代表团人员的合影，呈现赛场之外的交流与温度，让读者在浏览照片的过程中了解人物与故事。",
  roles: [
    { title: "素材筛选与首图选择", text: "从现场照片中挑选人物突出、赛事氛围鲜明的画面作为视觉入口，让读者快速理解主题。" },
    { title: "图片编排与节奏组织", text: "结合开幕式、交流合影和身份资料安排图序，通过场景变化推进阅读，兼顾人物展示与背景说明。" },
    { title: "人物口吻与文案撰写", text: "采用主人公第一人称，将现场感受、保障职责与交流经历串联起来，保持自然、具体的表达。" },
    { title: "图文配合", text: "图片呈现现场与人物关系，文案补充照片之外的工作身份和情绪，形成完整的人物叙事。" },
  ],
  metrics: [
    { label: "播放", value: "30.7", unit: "万" },
    { label: "吸粉量", value: "+107", unit: "" },
    { label: "点赞", value: "1,041", unit: "" },
    { label: "收藏", value: "152", unit: "" },
  ],
  secondaryMetrics: [
    { label: "评论", value: "66" },
    { label: "分享", value: "33" },
    { label: "平均浏览图片数", value: "1.8 张" },
    { label: "文案展开率", value: "0.32%" },
    { label: "划走率", value: "57.83%" },
  ],
  steps: [
    { title: "用现场吸引关注", text: "以开幕式与五星红旗建立现场感，让赛事氛围成为故事的入口。", caption: "开幕式 / 现场感" },
    { title: "让经历连接人物", text: "交代随队医务康复保障的职责，通过交流合影丰富人物形象。", caption: "工作身份 / 人物温度" },
    { title: "以情绪完成收束", text: "回到经历的珍贵与对中国健儿的祝福，让图文形成完整的情绪表达。", caption: "珍藏回忆 / 送上祝福" },
  ],
  copy: [
    "从开幕式现场挥起五星红旗，到真正走进赛场，这趟亚运之旅有热闹，也有属于自己的责任。",
    "这次作为中国体育代表团女子板球项目的医务康复保障人员来到亚运会，陪伴队伍训练、比赛，做好运动员的医疗与康复保障，也是我第一次以这样的身份近距离感受亚运赛场。",
    "工作之余，也遇见了许多来自不同国家和地区的运动员，留下了一张张珍贵的合影。不同的语言、不同的队服，因为体育相聚在同一个赛场，这大概也是亚运最特别的地方。",
    "从开幕式到赛场，从一面五星红旗到一次次并肩同行，这段经历值得好好珍藏。",
    "祝中国健儿再创佳绩，也祝愿祖国繁荣昌盛。",
  ],
  reflection: "这次实践让我进一步理解，人物图文需要通过选图、排序和文字补充，让读者逐步认识主人公。后台显示平均浏览图片数为 1.8 张，后续可以优先测试前两张图片的信息安排，让职业身份和故事看点更早出现，并继续观察浏览深度与文案展开表现。",
}

// Preserve the user's reverse-upload order, including the supporting roster last.
// Analytics are presented as numbers only; no dashboard screenshot is published.
export const asianGamesPhotos = [
  { src: "/covers/asian-games/01.jpg", title: "走进开幕式", caption: "开幕式现场，留下这趟旅程的第一组记忆。", width: 3000, height: 4000 },
  { src: "/covers/asian-games/02.jpg", title: "赛场相遇", caption: "赛场之外，记录交流与相聚的时刻。", width: 3264, height: 2448 },
  { src: "/covers/asian-games/03.jpg", title: "与五星红旗同框", caption: "在开幕式现场，定格手持五星红旗的一刻。", width: 1440, height: 1920 },
  { src: "/covers/asian-games/04.jpg", title: "因为体育相聚", caption: "不同的语言与队服，共同构成这段珍贵的经历。", width: 3264, height: 2448 },
  { src: "/covers/asian-games/05.jpg", title: "留住现场的热闹", caption: "灯光与人群之间，感受赛事现场的氛围。", width: 3264, height: 2448 },
  { src: "/covers/asian-games/06.jpg", title: "交换一份纪念", caption: "一张合影，留住一次友好的交流。", width: 1920, height: 1440 },
  { src: "/covers/asian-games/07.jpg", title: "旅途中的片刻", caption: "与赛事吉祥物合影，收录工作之外的旅途记忆。", width: 1920, height: 1440 },
  { src: "/covers/asian-games/08.jpg", title: "赛场背后的职责", caption: "女子板球项目人员名单截图，补充主人公的医务康复保障身份。", width: 1080, height: 2400 },
]
