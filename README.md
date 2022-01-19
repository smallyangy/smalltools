# 业务用各种小工具
> 为了解决运营的问题

## 工程化

已集成下列工程化

1. eslint 校验代码规范
2. stylelint 校验样式规范
3. husky 提交钩子
4. commitizen 提交规范
5. commitlint 校验提交规范

- 提交规范

安装
```bash
git config commit.template ./git-commit-template
```

```
feat: 新功能（feature）
fix: 修补bug
docs: 文档（documentation）
style: 格式（不影响代码运行的变动）
refactor: 重构（即不是新增功能，也不是修改bug的代码变动）
test: 增加测试
revert: 回滚
config: 构建过程或辅助工具的变动
chore: 其他改动
```

## 使用antv

安装

```
yarn add ant-design-vue@next
```

使用

main.js

```js
import 'ant-design-vue/dist/antd.css';
// 全局引入
import Antd from 'ant-design-vue';

.use(Antd)
```
