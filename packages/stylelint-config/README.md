<!--
 * @Author: yangqianjuan 1072483500@qq.com
 * @Date: 2023-10-18 18:02:52
 * @LastEditors: yangqianjuan 1072483500@qq.com
 * @LastEditTime: 2023-10-22 17:50:55
 * @FilePath: /前端规范化项目/demo/packages/stylelint-config/README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
# encode-fe-markdownlint-config

支持配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)。

## 安装

需要先行安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)：

```bash
npm install encode-fe-stylelint-config stylelint stylelint-scss --save-dev
```

## 使用

在 `.stylelintrc` 中继承本包:

```json
{
  "extends": "encode-fe-stylelint-config"
}
```

