export const site = {
  title: "花開未央",
  description: "个人记录、最新动态与文章归档。",
  logo: "/assets/logo.png",
  favicon: "/favicon.ico",
  owner: "Ficor",
  copyrightYears: "2008-2026",
  program: "Astro",
  language: "中文",
  theme: "霞鹜飞楷",
  socialLinks: [
    { name: "GitHub", href: "https://github.com/", icon: "github" },
    { name: "Mastodon", href: "https://mastodon.social/", icon: "mastodon" },
    { name: "邮箱", href: "mailto:hello@example.com", icon: "mail" },
    { name: "QQ", href: "https://im.qq.com/", icon: "qq" },
    { name: "微信", href: "https://weixin.qq.com/", icon: "wechat" },
    { name: "RSS 订阅", href: "/rss.xml", icon: "rss" },
  ],
};

export const navItems = [
  { label: "首页", href: "/", icon: "home" },
  { label: "关于", href: "/about/", icon: "user" },
  { label: "动态", href: "/moments/", icon: "moment" },
  { label: "友链", href: "/friends/", icon: "link" },
  { label: "归档", href: "/archive/", icon: "archive" },
];

export const profile = {
  subtitle: "个人写作与动态",
  intro: "个人记录、最新动态与文章归档。",
  stats: [
    { label: "文章", value: "12" },
    { label: "动态", value: "28" },
    { label: "主题", value: "Astro" },
  ],
};

export const moments = [
  {
    date: "2026-08-10",
    title: "新主题首页搭好第一版",
    text: "顶部导航、个人介绍、最新动态、最新文章和页脚信息已经串成完整首页。",
  },
  {
    date: "2026-08-08",
    title: "整理主题结构",
    text: "把页面入口、数据配置和全局样式拆开，后续换文案和增删栏目会更轻松。",
  },
  {
    date: "2026-08-03",
    title: "继续保留简洁写作流",
    text: "主题重点放在阅读节奏和归档效率上，减少不必要的视觉负担。",
  },
];

export const posts = [
  {
    title: "把首页当成一张个人名片",
    date: "2026-08-10",
    excerpt: "一个好的博客首页，应该先告诉访客你是谁，再把最新发生的事情顺手交给他。",
    href: "/posts/home-as-card/",
    category: "设计",
    tags: ["首页", "个人站"],
  },
  {
    title: "Astro 主题的轻量骨架",
    date: "2026-08-09",
    excerpt: "用数据文件管理站点信息，用 Layout 统一页面边界，让主题改起来不拧巴。",
    href: "/posts/astro-theme-shell/",
    category: "Astro",
    tags: ["主题", "结构"],
  },
  {
    title: "动态和文章为什么要分开",
    date: "2026-08-07",
    excerpt: "动态承接短句和现场感，文章承接结构化表达，它们应该并排存在而不是互相替代。",
    href: "/posts/moments-and-posts/",
    category: "写作",
    tags: ["动态", "文章"],
  },
];

export const latestComments = [
  {
    date: "2026-08-10",
    articleTitle: "把首页当成一张个人名片",
    commenter: "Ficor",
  },
  {
    date: "2026-08-10",
    articleTitle: "Astro 主题的轻量骨架",
    commenter: "未央",
  },
  {
    date: "2026-08-09",
    articleTitle: "动态和文章为什么要分开",
    commenter: "青山",
  },
];

export const projects = [
  {
    title: "个人 Astro 主题",
    text: "围绕写作、动态和归档设计的轻量主题。",
  },
  {
    title: "内容整理工具",
    text: "把零散素材整理成更容易发布的文章结构。",
  },
];
