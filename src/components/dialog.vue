<template>
    <!-- dialog遮罩 -->
    <transition name="dialog-fade">
        <div class="cfy-dialog__wrapper" v-show="visible">
            <div class="cfy-dialog" :style="{ width, marginTop: top }">
                <div class="cfy-dialog__header">
                    <div class="cfy-dialog__title">
                        <!-- 没有slot默认span -->
                        <slot name="title">
                            <span>{{ title }}</span>
                        </slot>
                    </div>
                    <!-- 关闭icon -->
                    <button class="cfy-dialog__headerbtn">
                        <i class="cfy-icon-close" @click="handleCloseDialog"></i>
                    </button>
                </div>

                <div class="cfy-dialog__body">
                    <slot></slot>
                </div>
                <!-- 底部按钮 -->
                <div class="cfy-dialog__footer" v-if="!NoneButton">
                    <slot name="footer">
                        <cfy-button @click="handleCloseDialog">取消</cfy-button>
                        <cfy-button type="primary" @click="handleCloseDialog">确定</cfy-button>
                    </slot>

                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>

const emit = defineEmits(['close'])

const props = defineProps({
    title: {
        type: String,
        default: '提示'
    },
    width: {
        type: String,
        default: '50%'
    },
    top: {
        type: String,
        default: '15vh'
    },
    NoneButton: {
        type: Boolean,
        default: false
    },
    visible: {
        type: Boolean,
        default: false
    }
})
console.log(props.visible)
const handleCloseDialog = () => {
    // props只读,用emit触发父组件自定义事件
    emit('update:visible', false)
}
</script>

<style lang="scss" scoped>
.cfy-dialog__wrapper {
    position: fixed;
    height: calc(100vh + 20px);
    top: 0;
    // bottom: -20px;
    left: 0;
    right: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);

    .cfy-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 30%;

        .cfy-dialog__header {
            padding: 20px 20px 10px;

            .cfy-dialog__title {
                line-height: 24px;
                font-size: 18px;
                color: #303133
            }

            .cfy-dialog__headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;

                .cfy-icon-close {
                    color: #909399
                }
            }
        }

        .cfy-dialog__body {
            padding: 20px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }

        .cfy-dialog__footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;

            .cfy-button:first-child {
                margin-right: 10px;
            }
        }
    }
}

.dialog-fade-enter-active {
    animation: fade .3s;
}

.dialog-fade-leave-active {
    animation: fade .3s reverse;
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}
</style>