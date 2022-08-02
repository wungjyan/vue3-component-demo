<template>
    <i :class="bem.b()" :style="style">
        <slot></slot>
    </i>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { createNamespace } from '@wj/utils/bem'
import { iconProps } from './icon';

defineOptions({ name: 'w-icon' })

const props = defineProps(iconProps)

const bem = createNamespace('icon')

const style = computed(() => {
    if (!props.size && !props.color) return {}

    return {
        ...(props.size ? { 'font-size': props.size + 'px' } : {}),
        ...(props.color ? { 'color': props.color } : {})
    }
})
</script>