# hexo-hatena-link-card

> Hexoブログではてなリンクカードを表示するためのタグプラグイン

## 概要

[Hexo](https://hexo.io/) の静的サイトジェネレーターで、はてなブログと同様のリンクカード（埋め込みリンクプレビュー）を使用できるようにするカスタムタグプラグインです。URLを指定するだけで、サイトのタイトル・サムネイル・説明を含むリッチなリンクカードを記事に挿入できます。

## 技術スタック

- JavaScript (Node.js)
- Hexo プラグイン API
- はてなブログパーツ埋め込みAPI (`hatenablog-parts.com`)

## 機能

- Hexo記事内で `{% linkcard URL %}` タグを使ってリンクカードを挿入
- はてなブログパーツの iframe を自動生成
- レスポンシブ対応（最大幅 680px）

## 使い方 / 動かし方

### インストール

```bash
# Hexoプロジェクトのルートで実行
npm install hexo-hatena-link-card --save
```

### 記事内での使い方

```markdown
{% linkcard https://example.com %}
```

上記タグを記事に記述すると、以下のような iframe が挿入されます。

```html
<iframe class="linkcard" style="width: 100%; height: 140px; max-width: 680px;"
  src="https://hatenablog-parts.com/embed?url=https://example.com"
  width="300" height="135" frameborder="0" scrolling="no"></iframe>
```

## 状態

公開済み・安定版。機能はシンプルで完結しており、追加開発の予定はありません。
