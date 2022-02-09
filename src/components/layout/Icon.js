import { createVNode } from 'vue';
import * as $Icon from '@ant-design/icons-vue';

/**
 * 使用
 * import Icon from '@/components/layout/Icon.js';
 * <Icon icon="SearchOutlined"></Icon>
 */

export default (props) => {
    const { icon = '' } = props;
    return createVNode($Icon[icon]);
};