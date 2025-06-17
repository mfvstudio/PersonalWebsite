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
  </div>
</template>
