import { browser } from "$app/env";
import persistStore from "./persistStore";

const darkMode = persistStore("darkmode", true);

browser &&
  darkMode.subscribe((v) => {
    if (v) {
      browser && document.body.classList.add("dark");
    } else {
      browser && document.body.classList.remove("dark");
    }
  });

export default darkMode;
