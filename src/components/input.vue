<template>
    <div class="cfy-input">
        <input :value="modelValue" @input="emit('update:modelValue', $event.target.value)"
            :type="showPassWord ? (passwordVisible ? 'text' : 'password') : type" class="cfy-input__inner"
            :placeholder="placeholder" :disabled="disabled" :name="name" :class="[{
                'is-disabled': disabled
            }]">
        <span :class="{ 'cfy-input__suffix': clearable || showPassWord }" v-if="clearable || showPassWord">
            <i class="cfy-input__icon cfy-icon-cancel" v-if="clearable && modelValue" @click="handleClear"></i>
            <i class="cfy-input__icon cfy-icon-visible" :class="{ 'active': passwordVisible }"
                v-if="showPassWord && modelValue" @mousedown="handleDown" @mouseup="handleLeave"></i>
        </span>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['input'])
const props = defineProps({
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    },
    disabled: {
        type: Boolean,
        default: false
    },
    name: {
        type: String,
        default: ''
    },
    modelValue: {
        type: String,
        default: ''
    },
    clearable: {
        type: Boolean,
        default: false
    },
    showPassWord: {
        type: Boolean,
        default: false
    }
})
const passwordVisible = ref(false)

const handleClear = () => {
    emit('update:modelValue', '')
}

const handleDown = () => {
    passwordVisible.value = true
}

const handleLeave = () => {
    passwordVisible.value = false
}
</script>

<style lang="scss" scoped>
.cfy-input {
    width: 100%;
    font-size: 14px;
    display: inline-block;
    position: relative;

    .cfy-input__inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645, .055, .355, 1);
        width: 100%;

        &:focus {
            outline: none;
            border-color: #409eff;
        }
    }

    .is-disabled {
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
    }

    .cfy-input__suffix {
        position: absolute;
        height: 100%;
        right: 10px;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;

        i {
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color .2s cubic-bezier(.645, .045, .355, 1)
        }

        .active {
            color: #409eff
        }
    }


}
</style>