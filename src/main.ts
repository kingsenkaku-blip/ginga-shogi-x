import "./styles.css";
import { GameManager } from "./game/simulation/GameManager";
import { GameApp } from "./render/app/GameApp";
import { UIManager } from "./ui/UIManager";

const appRoot = document.querySelector<HTMLDivElement>("#app");
const uiRoot = document.querySelector<HTMLDivElement>("#ui");

if (!appRoot || !uiRoot) {
  throw new Error("Application roots were not found.");
}

const game = new GameManager();
const renderer = new GameApp(appRoot, game);
const params = new URLSearchParams(window.location.search);
const debugEnabled = params.has("debug") && params.get("debug") !== "0";
const ui = new UIManager(uiRoot, game, { debugEnabled });

if (import.meta.env.DEV || debugEnabled) {
  (window as unknown as { rogueShogi: { game: GameManager; debug: (command: string) => string } }).rogueShogi = {
    game,
    debug: (command: string) => game.debugExecuteCommand(command),
  };
}

game.onChange(() => {
  renderer.sync();
  ui.render();
});

game.start();
renderer.start();
