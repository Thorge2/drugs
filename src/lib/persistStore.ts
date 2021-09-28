import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { browser } from "$app/env";

export default function <T>(key: string, initial: T): Writable<T> {
  if (!browser) return;

  const storage = localStorage.getItem(key);
  const data = storage ? JSON.parse(storage) : initial;

  const store = writable(data, () => {
    const unsubscribe = store.subscribe((value) => {
      localStorage.setItem(key, JSON.stringify(value));
    });
    return unsubscribe;
  });

  return store;
}
