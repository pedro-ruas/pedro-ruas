import { pageBlocks } from "../data/page-blocks.data";

export function getCurrentPageBlock(currentScroll: number) {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  return Math.ceil(currentScroll) >= documentHeight - windowHeight
    ? pageBlocks[2]
    : currentScroll >= 2 * windowHeight
    ? pageBlocks[1]
    : currentScroll >= windowHeight
    ? pageBlocks[0]
    : null;
}
