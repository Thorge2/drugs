<script lang="ts" context="module">
  export async function load({ page }) {
    const id: number = +page.params.id;

    return {
      props: {
        id,
      },
    };
  }
</script>

<script lang="ts">
  import { drugs } from "$lib/drugs";

  export let id: number;

  const drug = $drugs[id];
</script>

<div class="flex justify-center pt-24 min-h-screen">
  <div class="w-full px-4 md:w-3/4 lg:w-1/2">
    <a href="/list" class="mb-2 block"
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
          clip-rule="evenodd"
        />
      </svg></a
    >
    <div class="flex justify-between mb-4">
      <h2 class="font-bold text-5xl">{drug.name}</h2>
      <div class="hidden md:block">
        <button
          on:click={() => alert("This is illegal, stop it!")}
          class="bg-purple-800 text-white dark:bg-yellow-400 dark:text-black py-3 px-5 rounded-xl shadow font-semibold text-xl"
          >Buy</button
        >
      </div>
    </div>
    <div class="bg-yellow-400 dark:bg-purple-800 rounded-xl py-1 px-4">
      price: <strong>${drug.price / 100}</strong>
    </div>
    <p class="p-4">
      {drug.description}
    </p>
  </div>
</div>

<div class="md:hidden fixed bottom-0 right-0 p-10">
  <button
    on:click={() => alert("This is illegal, stop it!")}
    class="bg-purple-800 text-white dark:bg-yellow-400 dark:text-black py-3 px-5 rounded-xl shadow font-semibold text-xl"
    >Buy</button
  >
</div>
