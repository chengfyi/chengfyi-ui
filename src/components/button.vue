<template>
    <button class="cfy-button" :class="[`cfy-button--${type}`, {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
    }]" :disabled="disabled" @click="handleClick">
        <i :class="icon"></i>
        <!-- 没有传入内容span不显示 -->
        <span v-if="slot.default">
            <slot></slot>
        </span>
    </button>
</template>

<script setup name="cfy-button">
import { useSlots } from 'vue'

const slot = useSlots()
const emit = defineEmits()

// 对props做校验
defineProps({
    type: {
        type: String,
        default: 'default'
    },
    plain: {
        type: Boolean,
        default: false
    },
    round: {
        type: Boolean,
        default: false
    },
    circle: {
        type: Boolean,
        default: false
    },
    icon: {
        type: String
    },
    disabled: {
        type: Boolean,
        default: false
    }
})

const handleClick = (e) => {
    emit('click', e)
    // console.log('cfy-button')
}
</script>

<style lang="scss" scoped>
.cfy-button {
    -webkit-appearance: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px soild #dcdfe6;
    color: #606266;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    font-weight: 500;
    transition: 0.1s;
    // 禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;

    &:hover,
    &:focus {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
    }
}

.cfy-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;

    &:hover,
    &:focus {
        color: #fff;
        border-color: #66b1ff;
        background-color: #66b1ff;
    }
}

.cfy-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;

    &:hover,
    &:focus {
        color: #fff;
        border-color: #85ce61;
        background-color: #85ce61;
    }
}

.cfy-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;

    &:hover,
    &:focus {
        color: #fff;
        border-color: #a6a9ad;
        background-color: #a6a9ad;
    }
}

.cfy-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;

    &:hover,
    &:focus {
        color: #fff;
        border-color: #ebb563;
        background-color: #ebb563;
    }
}

.cfy-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;

    &:hover,
    &:focus {
        color: #fff;
        border-color: #f78989;
        background-color: #f78989;
    }
}

// plain
.cfy-button.is-plain {

    &:hover,
    &:focus {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }
}

.cfy-button--primary.is-plain {
    color: #409eff;
    background-color: #ecf5ff;
    border-color: #b3d8ff;

    &:hover,
    &:focus {
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
    }
}

.cfy-button--success.is-plain {
    color: #67c23a;
    background-color: #f0f9eb;
    border-color: #c2e7b0;

    &:hover,
    &:focus {
        color: #fff;
        border-color: #67c23a;
        background-color: #67c23a;
    }
}

.cfy-button--info.is-plain {
    color: #909399;
    background-color: #f4f4f5;
    border-color: #d3d4d6;

    &:hover,
    &:focus {
        color: #fff;
        border-color: #909399;
        background-color: #909399;
    }
}

.cfy-button--warning.is-plain {
    color: #e6a23c;
    background-color: #fdf6ec;
    border-color: #f5dab1;

    &:hover,
    &:focus {
        color: #fff;
        border-color: #e6a23c;
        background-color: #e6a23c;
    }
}

.cfy-button--danger.is-plain {
    color: #f56c6c;
    background-color: #fef0f0;
    border-color: #fbc4c4;

    &:hover,
    &:focus {
        color: #fff;
        border-color: #f56c6c;
        background-color: #f56c6c;
    }
}

.cfy-button.is-round {
    border-radius: 20px;
    padding: 12px 23px;
}

.cfy-button.is-circle {
    border-radius: 50%;
    padding: 12px;
}

.cfy-button [class*='cfy-icon-']+span {
    margin-left: 5px;
}

.cfy-button.is-disabled {

    &:hover,
    &:focus {
        cursor: not-allowed;
    }
}
</style>