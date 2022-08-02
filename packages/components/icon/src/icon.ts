// 组件属性 和 ts类型

import { ExtractPropTypes, PropType } from "vue";

export const iconProps = {
  color: String,
  size: [String, Number] as PropType<number | string>,
} as const;

// 转成类型定义
export type IconProps = ExtractPropTypes<typeof iconProps>;
