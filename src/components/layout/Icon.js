import { createVNode } from 'vue';
import * as $Icon from '@ant-design/icons-vue';

export default (props) => {
    const { icon = '' } = props;
    return createVNode($Icon[icon]);
};