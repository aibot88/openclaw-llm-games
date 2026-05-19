const state = {
  language: "zh",
  category: "all",
  query: ""
};

const categoryLabels = {
  all: "All / 全部",
  adventure: "Adventure / 冒险",
  "character-chat": "Character Chat / 角色聊天",
  "choice-driven": "Choice Driven / 选择驱动",
  conversation: "Conversation / 对话",
  deduction: "Deduction / 推理",
  fantasy: "Fantasy / 奇幻",
  guessing: "Guessing / 猜谜",
  historical: "Historical / 历史",
  "literary-adaptation": "Literary / 文学改编",
  mystery: "Mystery / 悬疑",
  politics: "Politics / 权谋",
  riddle: "Riddle / 谜题",
  roleplay: "Roleplay / 角色扮演",
  romance: "Romance / 恋爱",
  rpg: "RPG / 角色扮演",
  "sci-fi": "Sci-Fi / 科幻",
  simulation: "Simulation / 模拟",
  "social-simulation": "Social Sim / 社交模拟",
  storytelling: "Storytelling / 叙事",
  "text-adventure": "Text Adventure / 文字冒险",
  "text-game": "Text Game / 文字游戏",
  "visual-story": "Visual Story / 视觉故事",
  warhammer: "Warhammer / 战锤",
  "word-game": "Word Game / 单词游戏",
  wuxia: "Wuxia / 武侠"
};

const copy = {
  zh: {
    heroTitle: "收集 OpenClaw 中可运行的 LLM powered 游戏",
    heroLead:
      "用双语数据、目录页和贡献流程，把社区里有趣的 OpenClaw 游戏整理成可以持续维护的 GitHub 仓库。",
    pending: "待补充链接",
    ready: "可打开",
    unknownAuthor: "未知作者",
    openGame: "打开游戏",
    missingLink: "等待 OpenClaw 链接"
  },
  en: {
    heroTitle: "A catalog of LLM-powered games that run in OpenClaw",
    heroLead:
      "A bilingual, maintainable GitHub-ready catalog for discovering OpenClaw games from the community.",
    pending: "Link needed",
    ready: "Ready",
    unknownAuthor: "Unknown author",
    openGame: "Open Game",
    missingLink: "Waiting for OpenClaw link"
  }
};

const games = await fetch("./data/games.json").then((response) => response.json());

const grid = document.querySelector("#gameGrid");
const template = document.querySelector("#gameCardTemplate");
const searchInput = document.querySelector("#searchInput");
const languageToggle = document.querySelector("#languageToggle");
const filters = document.querySelector(".filters");

document.querySelector("#gameCount").textContent = games.length;

renderFilters();
renderCopy();
renderGames();

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  renderGames();
});

languageToggle.addEventListener("click", () => {
  state.language = state.language === "zh" ? "en" : "zh";
  document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
  renderCopy();
  renderGames();
});

filters.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) {
    return;
  }

  state.category = button.dataset.category;
  filters.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip === button);
  });
  renderGames();
});

function renderFilters() {
  const categories = [...new Set(games.flatMap((game) => game.categories))].sort();

  for (const category of categories) {
    const button = document.createElement("button");
    button.className = "filter-chip";
    button.type = "button";
    button.dataset.category = category;
    button.textContent = categoryLabels[category] ?? category;
    filters.append(button);
  }
}

function renderCopy() {
  const languageCopy = copy[state.language];
  document.querySelector("#heroTitle").textContent = languageCopy.heroTitle;
  document.querySelector("#heroLead").textContent = languageCopy.heroLead;
  languageToggle.textContent = state.language === "zh" ? "EN" : "中";
  searchInput.placeholder = state.language === "zh" ? "搜索游戏、作者、分类" : "Search games, authors, tags";
}

function renderGames() {
  const languageCopy = copy[state.language];
  const filteredGames = games.filter((game) => {
    const matchesCategory = state.category === "all" || game.categories.includes(state.category);
    const haystack = [
      game.title.zh,
      game.title.en,
      game.description.zh,
      game.description.en,
      game.author,
      ...game.categories
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && haystack.includes(state.query);
  });

  grid.replaceChildren();

  for (const game of filteredGames) {
    const card = template.content.firstElementChild.cloneNode(true);
    const primaryTitle = game.title[state.language];
    const secondaryTitle = state.language === "zh" ? game.title.en : game.title.zh;
    const hasUrl = game.openclawUrl.length > 0;

    card.querySelector("h3").textContent = primaryTitle;
    card.querySelector(".english-title").textContent = secondaryTitle;
    card.querySelector(".description").textContent = game.description[state.language];
    card.querySelector(".author").textContent = game.author || languageCopy.unknownAuthor;
    card.querySelector(".language-badge").textContent = game.languages.join(" / ").toUpperCase();

    const statusBadge = card.querySelector(".status-badge");
    statusBadge.textContent = hasUrl ? languageCopy.ready : languageCopy.pending;
    statusBadge.classList.toggle("ready", hasUrl);

    const tags = card.querySelector(".tags");
    tags.replaceChildren(
      ...game.categories.map((category) => {
        const tag = document.createElement("span");
        tag.className = "tag";
        tag.textContent = categoryLabels[category] ?? category;
        return tag;
      })
    );

    const playLink = card.querySelector(".play-link");
    playLink.textContent = hasUrl ? languageCopy.openGame : languageCopy.missingLink;
    if (hasUrl) {
      playLink.href = game.openclawUrl;
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("aria-hidden", "true");
      icon.setAttribute("viewBox", "0 0 24 24");
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M7 17 17 7m0 0H9m8 0v8");
      icon.append(path);
      playLink.append(icon);
    } else {
      playLink.classList.add("disabled");
      playLink.removeAttribute("href");
    }

    grid.append(card);
  }
}
