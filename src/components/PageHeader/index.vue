<script setup name="PageHeader">
defineProps({
    title: {
        type: String,
        required: true
    },
    title2: {
        type: String,
        default: ''
    },
    content: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <div class="header">
        <div class="main">
            <div class="title">{{ title }}</div>
            <div class="title2"><slot name="title2">{{ title2 }}</slot></div>
            <div class="content">
                <slot name="content">{{ content }}</slot>
            </div>
        </div>
        <div class="sub">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 16px 20px;
    background-color: var(--g-app-bg);
    transition: background-color 0.3s;
    .main {
        flex: 1;
        margin-right: 20px;
        .title {
            font-size: 22px;
            color: var(--el-text-color-primary);
            transition: var(--el-transition-color);
        }
        .title2 {
            font-size: 22px;
            color: var(--el-text-color-primary);
            transition: var(--el-transition-color);
        }
        .content {
            margin-top: 10px;
            font-size: 14px;
            color: var(--el-text-color-secondary);
            transition: var(--el-transition-color);
            &:empty {
                display: none;
            }
        }
    }
    .sub {
        flex: none;
    }
}
</style>
