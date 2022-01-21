import { createVNode } from 'vue';
import * as $Icon from '@ant-design/icons-vue';

export default (props: { icon: string }) => {
    const { icon = '' } = props;
    const iconName: string = icon || '';
    if (typeof icon === 'string') {
        return createVNode($Icon[iconName]);
    }
};