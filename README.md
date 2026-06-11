# 銀河将棋X

Codexで作ってもらいました。下の文字も全部！すごくないですか！？
Three.js + TypeScript + Vite で動く、3Dローグライク将棋ゲームです。通常の将棋をベースに、能力カード、特殊コマ、ハイパーメカ、サーティビルディング、いやなやつ、乗っ取られ魔王城などの拡張要素を載せています。

## 必要なもの

- Node.js 20 以上推奨
- npm
- GitHub に公開する場合は Git for Windows などの Git クライアント

## 起動方法

```powershell
npm install
npm run dev
```

表示された URL をブラウザで開きます。通常は `http://localhost:5173/` です。

## ビルド

```powershell
npm run check
npm run build
```

成果物は `dist/` に出力されます。

## GitHub に置く手順

GitHub で空のリポジトリを作ってから、このフォルダで実行します。

```powershell
git init
git branch -M main
git add .
git commit -m "Initial release"
git remote add origin https://github.com/<USER>/<REPO>.git
git push -u origin main
```

GitHub Pages で公開する場合は、GitHub のリポジトリ画面で `Settings` -> `Pages` を開き、`Source` を `GitHub Actions` にしてください。`.github/workflows/deploy.yml` が `main` への push ごとに type check と build を実行し、`dist/` を Pages にデプロイします。

Vite の `base` は `./` にしてあるため、`https://<USER>.github.io/<REPO>/` のようなサブパス公開でも画像や JS が読み込めます。

## 操作方法

- タイトル画面でモードとメインキャラクターを選択
- 3D盤面上のコマをクリックして選択
- ハイライトされたマスをクリックして移動
- ターン開始時に能力カードを選択
- サーティビルディング制覇後、魔王ボランティアと乗っ取られ魔王城が解放
- タイトル画面のセーブ/ロードで解放状況を `localStorage` に保存

## デバッグモード

URL に `?debug=1` を付けると、コマンドコンソール風のデバッグUIが起動します。

例:

```text
http://localhost:5173/?debug=1
```

主なコマンド:

- `spawn player ninja`
- `spawn ai god`
- `card player`
- `mecha player usbProMax`
- `enemyhp1`
- `tower next`
- `tower +5`
- `castle start`
- `castle floor 40`
- `save`
- `load`

## ファイル構成

```text
src/
  main.ts
  styles.css
  game/
    content/
      abilityDefinitions.ts
      heroDefinitions.ts
      pieceDefinitions.ts
      towerDefinitions.ts
    simulation/
      Ability.ts
      AIController.ts
      Board.ts
      GameManager.ts
      Piece.ts
      SpecialEffectManager.ts
    types.ts
  render/
    app/GameApp.ts
    objects/BoardRenderer.ts
  ui/UIManager.ts
public/
  assets/
.github/
  workflows/deploy.yml
```

## 拡張の目安

- コマ追加: `src/game/content/pieceDefinitions.ts`
- 能力カード追加: `src/game/content/abilityDefinitions.ts`
- キャラクター追加: `src/game/content/heroDefinitions.ts`
- 塔や魔王城の階層/ボス追加: `src/game/content/towerDefinitions.ts`
- ルール処理: `src/game/simulation/GameManager.ts`
- 3D表示: `src/render/objects/BoardRenderer.ts`
- HUD/タイトル/ADV/デバッグUI: `src/ui/UIManager.ts`

ルール処理と描画は分けてあるので、新しいコマやカードはまず content 側の定義に足し、必要な固有処理だけ `GameManager` や `SpecialEffectManager` に寄せる形が扱いやすいです。
