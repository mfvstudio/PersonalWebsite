<script lang="ts" setup>
import { animateScrambleText } from '~/animations/text';

onMounted(() => {
  console.log('scrambling');
  animateScrambleText('.gsap-split-text-scramble');
});
</script>

<template>
  <div>
    <div class="text-center mt-40 font-orbitron text-9xl font-bold gsap-split-text-scramble">
      MFVDEV
    </div>
    <div class="flex w-full ml-12 mr-12 mt-64">
      <div class="card bg-base-300grid place-items-center">
        <img
          src="./../assets/images/unnamed.jpg"
          class="h-62 w-64 object-center"
        >
      </div>
      <div class="divider divider-horizontal" />
      <div class="card bg-base-300 grid place-items-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis consectetur cumque explicabo iste fugiat rerum
        laboriosam obcaecati dolores totam adipisci, sunt autem voluptatum nam facere incidunt quaerat harum dolorum accusamus.
      </div>
    </div>
  </div>
</template>
