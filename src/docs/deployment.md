---
title: 部署说明
---

## 介绍

`Corgi`在服务器部署以及`jenkins`自动化调用方式

## 服务器部署

### `nodejs` 安装及配置

```bash
# 通过wget安装node 16.9.1版本
cd /data/TRS/soft/
wget https://nodejs.org/dist/v16.19.1/node-v16.19.1-linux-x64.tar.xz
```

```bash
# 解压tar包，并移动到相应目录下
xz -d node-v16.19.1-linux-x64.tar.xz
tar -xf node-v16.19.1-linux-x64.tar
mv node-v16.19.1-linux-x64 /data/TRS/
```

```bash
# 配置软链接
ln -s /data/TRS/node-v16.19.1-linux-x64/bin/node /usr/bin/node
ln -s /data/TRS/node-v16.19.1-linux-x64/bin/npm /usr/bin/npm
```

```bash
# 结果验证
node -v
npm -v
```

```bash
# 配置国内镜像源
npm config set registry https://registry.npmmirror.com
```

### `pnpm` 依赖包管理工具

```bash
# 安装命令
npm install -g pnpm
```

```bash
# 配置软链接
ln -s /data/TRS/node-v16.19.1-linux-x64/bin/pnpm /usr/bin/pnpm
```

```bash
# 结果验证
pnpm -v
```

### `corgi` 集中管理工具

```bash
# 安装命令
npm install -g corgi-biu
```

```bash
# 配置软链接
ln -s /data/TRS/node-v16.19.1-linux-x64/bin/corgi /usr/bin/corgi
```

```bash
# 结果验证
corgi -V
```

## `jenkins` 配置

在各前端项目的`jenkins`配置下 `shell` 处加入

```bash
# 进入项目目录
cd $WORKSPACE

# 依赖安装
pnpm install --no-frozen-lockfile

# 编译部署命令，根据环境取舍
# 测试环境
corgi push <jenkins工作空间projects下的目录名> --env test
# 生产环境
corgi push <jenkins工作空间projects下的目录名> --env prod
# 例子
corgi push cn_site --env prod

# 静态页面生成
corgi preview example

# 静态页发送脚本
-

```
