import "@consuo/web-component-up-next";
import "@consuo/web-component-epg";
import { setupEyevinnPlayer } from "@eyevinn/html-player";
import "@eyevinn/html-player/pkg/style.css";

document.addEventListener("DOMContentLoaded", () => {
  setupEyevinnPlayer(
    "video-wrapper",
    "https://engine.cdn.consuo.tv/live/master.m3u8?channel=eyevinn"
  ).then((player) => {
    player.play(false);
  });
});
