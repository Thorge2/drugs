<script lang="ts">
  import { drugs } from "$lib/drugs";

  $: drugs_expand = $drugs.map((drug) => {
    return {
      expand: false,
      ...drug,
    };
  });

  function expand(id: number) {
    drugs_expand = drugs_expand.map((drug, index) => {
      if (index !== id) {
        drug.expand = false;
        return drug;
      }

      drug.expand = true;

      return drug;
    });
  }

  function collapse() {
    drugs_expand = drugs_expand.map((drug) => {
      drug.expand = false;
      return drug;
    });
  }
</script>

<svelte:head>
  <title>Drugs</title>
</svelte:head>

<div class="flex justify-center py-24 min-h-screen">
  <ul class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mx-4">
    {#each drugs_expand as drug, id}
      <li class={drug.expand ? "col-span-2 row-span-2 h-full self-start" : ""}>
        <div
          class="bg-gray-300/50 dark:bg-gray-900/75 p-4 rounded-xl shadow flex flex-col justify-between h-full"
        >
          <div class="flex justify-between items-start">
            <a href={`/drug/${id}`} class="mr-8 mb-4 block">
              <h3 class="font-semibold text-3xl inline">
                {drug.name}
              </h3>
              <p class="text-xl">${drug.price / 100}</p>
            </a>

            {#if drug.expand}
              <button
                on:click={collapse}
                class="bg-red-500 p-1 rounded-full shadow hover:ring-4 focus:ring-2 ring-red-500/50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            {/if}
          </div>

          {#if drug.expand}
            <p class="h-full mb-4">{drug.description}</p>

            <a
              href={`/drug/${id}`}
              class="bg-yellow-400 dark:bg-purple-800 px-8 py-2 rounded-xl shadow text-center ring-yellow-400/50 hover:ring-4 focus:ring-2 dark:ring-purple-800/50"
              >Buy</a
            >
          {:else}
            <button
              on:click={() => expand(id)}
              class="bg-yellow-400 dark:bg-purple-800 px-8 py-2 rounded-xl shadow ring-yellow-400/50 hover:ring-4 focus:ring-2 dark:ring-purple-800/50"
              >More</button
            >
          {/if}
        </div>
      </li>
    {/each}
  </ul>
</div>
