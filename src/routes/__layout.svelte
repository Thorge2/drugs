<script lang="ts">
  import "tailwindcss/tailwind.css";
  import darkMode from "$lib/darkMode";
</script>

<div class="dark:bg-gray-800 dark:text-white">
  <div
    class="fixed flex items-center justify-between w-full bg-white dark:bg-gray-800"
  >
    <div class="mx-4">
      <h1 class="text-3xl font-bold">
        <a href="/">Drugs</a>
      </h1>
    </div>
    <div
      class="p-4 bg-yellow-400 dark:bg-purple-800 rounded-bl-xl flex items-center"
    >
      <label for="darkmode" class="font-semibold text-lg mr-2">DarkMode</label>
      <input
        type="checkbox"
        id="darkmode"
        class="h-6 w-6"
        bind:checked={$darkMode}
      />
    </div>
  </div>

  <slot />

  <footer class="fixed bottom-0 left-0 flex md:justify-end w-full">
    <div class="bg-gray-300/50 dark:bg-gray-900/75 rounded-full px-2 py-1 m-4">
      <p>&copy; Thorge Hemken</p>
    </div>
  </footer>
</div>
