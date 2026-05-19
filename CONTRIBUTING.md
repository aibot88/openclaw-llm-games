# Contributing / 贡献指南

[中文](#中文) | [English](#english)

## 中文

欢迎为 OpenClaw LLM Games 补充新游戏、修正简介、添加真实 OpenClaw 链接或改进双语翻译。

### 收录标准

一个游戏适合被收录时，通常应该满足：

- 可以在 OpenClaw 中运行，或提供了清晰的 OpenClaw 运行方式。
- 主要交互由 LLM 驱动，例如角色扮演、文字冒险、推理、对话模拟、剧情选择等。
- 提供基本信息：游戏名称、简介、作者、语言、分类和入口链接。
- 不包含明显恶意、侵权或无法公开分享的内容。

### 添加游戏

请编辑 `data/games.json`，新增一个对象：

```json
{
  "id": "example-game",
  "title": {
    "zh": "示例游戏",
    "en": "Example Game"
  },
  "description": {
    "zh": "一句话说明游戏玩法和亮点。",
    "en": "A one-sentence description of the gameplay and appeal."
  },
  "author": "Author Name",
  "categories": ["rpg", "text-adventure"],
  "languages": ["zh", "en"],
  "openclawUrl": "https://example.com/openclaw-game",
  "source": {
    "zh": "信息来源说明。",
    "en": "Source note."
  }
}
```

### 字段约定

- `id` 使用小写短横线格式，例如 `turtle-soup-riddle-game`。
- `title.zh` 和 `title.en` 都需要填写。没有正式英文名时，可以给出直译或清晰意译。
- `description.zh` 和 `description.en` 都需要填写，保持简洁。
- `author` 未知时填写空字符串。
- `categories` 使用短横线英文标签。
- `languages` 使用 `zh`、`en` 等语言代码。
- `openclawUrl` 暂无链接时填写空字符串。
- `source` 说明信息来自哪里，例如截图、作者 README、OpenClaw 页面等。

### 提交前检查

```bash
npm run validate
```

如果你改动了页面样式或交互，建议再运行：

```bash
npm run serve
```

然后打开 `http://localhost:4173` 进行预览。

## English

Contributions are welcome. You can add games, fix descriptions, provide real OpenClaw links, or improve bilingual translations.

### Inclusion criteria

A game is usually a good fit when it:

- Runs in OpenClaw, or provides clear instructions for running in OpenClaw.
- Uses an LLM as a core part of the interaction, such as roleplay, text adventure, deduction, conversation simulation, or choice-based storytelling.
- Provides basic metadata: title, description, author, language, categories, and launch link.
- Does not include obviously malicious, infringing, or non-public content.

### Add a game

Edit `data/games.json` and add one object:

```json
{
  "id": "example-game",
  "title": {
    "zh": "示例游戏",
    "en": "Example Game"
  },
  "description": {
    "zh": "一句话说明游戏玩法和亮点。",
    "en": "A one-sentence description of the gameplay and appeal."
  },
  "author": "Author Name",
  "categories": ["rpg", "text-adventure"],
  "languages": ["zh", "en"],
  "openclawUrl": "https://example.com/openclaw-game",
  "source": {
    "zh": "信息来源说明。",
    "en": "Source note."
  }
}
```

### Field conventions

- `id` should be lowercase kebab-case, such as `turtle-soup-riddle-game`.
- Both `title.zh` and `title.en` are required. If no official English title exists, use a clear translation.
- Both `description.zh` and `description.en` are required and should stay concise.
- Use an empty string for `author` when unknown.
- Use English kebab-case labels in `categories`.
- Use language codes such as `zh` and `en` in `languages`.
- Use an empty string for `openclawUrl` when the link is not known yet.
- Use `source` to describe where the metadata came from, such as a screenshot, author README, or OpenClaw page.

### Check before submitting

```bash
npm run validate
```

If you changed page styling or interactions, also run:

```bash
npm run serve
```

Then open `http://localhost:4173` for preview.
