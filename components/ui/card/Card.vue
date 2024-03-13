<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { cn } from "@/utils";

const props = defineProps<{
  class?: HTMLAttributes["class"];
}>();
</script>

<template>
  <div
    :class="
      cn(
        'rounded-lg border bg-card text-card-foreground animation border-transparent transition-colors hover:border-[#464827]',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>

<style scoped>
@keyframes show {
  from {
    @apply border-[#464827];
    transform: scale(0.43) translateY(-10px);
  }
  90% {
    @apply border-[#a252c83d];
  }
  to {
    @apply border-transparent;
    transform: scale(1.0) translateY(0);
    opacity: 1;
  }
}

.animation {
  animation: show 0.3s ease-in-out;
}
</style>
