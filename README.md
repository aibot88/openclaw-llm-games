# OpenClaw LLM Games

[中文](#中文) | [English](#english)

## 中文

OpenClaw LLM Games 是一个开源整理项目，用来收集、整理和展示可以在 OpenClaw 中运行的 LLM powered 游戏。

项目当前根据用户提供的 OpenClaw 游戏列表截图整理了首批条目。截图中可以看到游戏名称、简介、作者和“点击打开”入口文字，但无法读取真实链接，因此 `data/games.json` 中的 `openclawUrl` 暂时留空。补充链接后，网站会自动把对应游戏标记为“可打开”。

### 项目内容

- `data/games.json`：游戏目录的唯一数据源。
- `index.html`：可直接发布到 GitHub Pages 的双语目录页。
- `src/app.js`：搜索、分类筛选和中英文切换逻辑。
- `prompts/<game-id>/`：每个游戏的 prompt 模板（system/user，按语言拆分）。
- `CONTRIBUTING.md`：新增游戏和维护条目的贡献指南。
- `scripts/validate-data.mjs`：数据结构校验脚本。

### 已收录游戏

| 游戏 | English Title | 作者 | 状态 |
| --- | --- | --- | --- |
| 我被姐姐包围啦～ | Surrounded by Sisters | robertmao.com | 待补充链接 |
| 三体 RPG | Three-Body RPG | YB LEEIGHT | 待补充链接 |
| 射雕英雄探险 | Legend of the Condor Heroes Adventure | 未知作者 | 待补充链接 |
| 悲惨世界 RPG | Les Miserables RPG | LU CHE YU | 待补充链接 |
| AI女友 My Girlfriends | AI Girlfriends | Christopher L. Caskey | 待补充链接 |
| 海龟汤谜题游戏 | Turtle Soup Riddle Game | WANG WANG | 待补充链接 |
| 和珅教你混官场 | Heshen Teaches Court Politics | King Hang Wong | 待补充链接 |
| 哈利波特RPG | Harry Potter RPG | Heng Ji | 待补充链接 |
| 中古战锤文字冒险 | Warhammer Fantasy Text Adventure | PAN WEI | 待补充链接 |
| 坏小孩 RPG | The Bad Kids RPG | WENZHE LI | 待补充链接 |
| Epic Tale Weaver | Epic Tale Weaver | 未知作者 | 待补充链接 |
| 哇咔咔猜单词 | Wakaka Word Guessing | Weili Yang | 待补充链接 |
| 操纵转世系统 | Reincarnation System | 未知作者 | 待补充链接 |

### 本地预览

```bash
npm run validate
npm run serve
```

然后打开 `http://localhost:4173`。

也可以直接打开 `index.html`，但部分浏览器会因为本地文件限制而阻止读取 JSON 数据。推荐使用本地静态服务器预览。

### GitHub Pages

这个项目不需要构建步骤。发布到 GitHub Pages 时，将发布源设置为仓库根目录即可。如果仓库中只放这个项目，直接选择 root；如果把它放在其他仓库子目录中，请将该子目录作为 Pages 发布目录或复制到独立仓库。

## English

OpenClaw LLM Games is an open-source curation project for collecting, organizing, and presenting LLM-powered games that run in OpenClaw.

The current seed catalog was transcribed from an OpenClaw game-list screenshot provided by the user. The screenshot shows titles, descriptions, authors, and "open game" link text, but not the real target URLs. For that reason, `openclawUrl` is currently empty in `data/games.json`. Once a URL is added, the website automatically marks the game as ready to open.

### What is included

- `data/games.json`: the single source of truth for the catalog.
- `index.html`: a bilingual static catalog page ready for GitHub Pages.
- `src/app.js`: search, category filtering, and language switching.
- `prompts/<game-id>/`: system/user prompt sets for each game, split by language.
- `CONTRIBUTING.md`: contribution guide for new games and updates.
- `scripts/validate-data.mjs`: data validation script.

### Seed games

| Game | 中文标题 | Author | Status |
| --- | --- | --- | --- |
| Surrounded by Sisters | 我被姐姐包围啦～ | robertmao.com | Link needed |
| Three-Body RPG | 三体 RPG | YB LEEIGHT | Link needed |
| Legend of the Condor Heroes Adventure | 射雕英雄探险 | Unknown author | Link needed |
| Les Miserables RPG | 悲惨世界 RPG | LU CHE YU | Link needed |
| AI Girlfriends | AI女友 My Girlfriends | Christopher L. Caskey | Link needed |
| Turtle Soup Riddle Game | 海龟汤谜题游戏 | WANG WANG | Link needed |
| Heshen Teaches Court Politics | 和珅教你混官场 | King Hang Wong | Link needed |
| Harry Potter RPG | 哈利波特RPG | Heng Ji | Link needed |
| Warhammer Fantasy Text Adventure | 中古战锤文字冒险 | PAN WEI | Link needed |
| The Bad Kids RPG | 坏小孩 RPG | WENZHE LI | Link needed |
| Epic Tale Weaver | Epic Tale Weaver | Unknown author | Link needed |
| Wakaka Word Guessing | 哇咔咔猜单词 | Weili Yang | Link needed |
| Reincarnation System | 操纵转世系统 | Unknown author | Link needed |

### Local preview

```bash
npm run validate
npm run serve
```

Then open `http://localhost:4173`.

Opening `index.html` directly may work in some browsers, but a local static server is recommended because browsers can block local JSON loading from `file://` pages.

### GitHub Pages

No build step is required. For GitHub Pages, publish the repository root. If this project is kept as a subdirectory inside another repository, configure that subdirectory as the Pages source or copy the project into a standalone repository.
