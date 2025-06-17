<script lang="ts" setup>
import { animateCharsDown, animateCharsUp } from '../../animations/text';

onMounted(() => {
  const navElements = document.getElementsByClassName('gsap-split-text');
  const arr = Array.from(navElements);
  arr.forEach((element, i) => {
    element.addEventListener('mouseenter', () => {
      animateCharsUp(`.navbar-element-${i}`);
    });
    element.addEventListener('mouseleave', () => {
      animateCharsDown(`.navbar-element-${i}`);
    });
    animateCharsDown(`.navbar-element-${i}`);
    animateCharsUp(`.navbar-element-${i}`);
  });
});
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm font-orbitron">
    <div class="navbar-start">
      <NuxtLink
        to="/"
        class="btn btn-ghost text-xl gsap-split-text navbar-element-0"
      >MFVDEV</NuxtLink>
    </div>
    <div class="navbar-end hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li>
          <NuxtLink
            to="/projects"
            class="btn btn-ghost text-xl gsap-split-text navbar-element-1"
          >Projects <Icon
            name="mynaui:book-open"
            size="32"
          /></NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/resume"
            class="btn btn-ghost text-xl gsap-split-text navbar-element-2"
          >Resume <Icon
            name="mynaui:academic-hat"
            size="32"
          /></NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="btn btn-ghost text-xl gsap-split-text navbar-element-3"
          >Contact <Icon
            name="mynaui:message-minus"
            size="32"
          /></NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
