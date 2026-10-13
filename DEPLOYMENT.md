# GitHub Pages 与日常更新

目标仓库：`yezixiu6/yezixiu6.github.io`，线上地址：`https://yezixiu6.github.io/`。

本文件说明已准备的配置；首次上传及部署状态请以 GitHub 仓库和 Actions 的结果为准。

## 首次设置

1. 在 GitHub 创建公开的 `yezixiu6.github.io` 仓库，不添加 README、许可证或 gitignore（本地已经包含这些文件）。
2. 在项目目录将原作者仓库保留为 upstream，添加自己的 origin，然后推送当前分支和原版标签：

```powershell
git remote rename origin upstream
git remote add origin https://github.com/yezixiu6/yezixiu6.github.io.git
git push -u origin portfolio
git push origin original-astro-sphere
```

以上仅在 origin 仍指向原作者时执行一次；之后用 `git remote -v` 确认自己的 origin。

3. 在仓库 Settings → Pages 中选择 GitHub Actions 作为 Source。
4. 如果首次推送早于启用 Pages，进入 Actions → Deploy portfolio to GitHub Pages → Run workflow，选择 portfolio 分支执行。

工作流基于 Astro 官方说明：https://docs.astro.build/en/guides/deploy/github/ 。使用 Node 24 和项目指定的 pnpm 11.25.0；构建包含 `astro check`。本地 Astro 版本和组件架构保持不变。

## 修改与更新

在当前项目目录编辑页面、Markdown、数据文件或 public 中的媒体，执行：

```powershell
pnpm run dev
```

用终端显示的 localhost 地址预览。确认后停止该开发服务器（Ctrl+C），运行：

```powershell
pnpm run build
git diff --stat
git add .
git commit -m "更新作品集内容"
git push
```

推送到 portfolio 分支后自动构建并部署；构建失败时不会替换已发布的网站。通过 Actions 查看执行结果。只修改本地文件不会更新线上网站。

## 回退

通过 `git log --oneline` 找到需要撤销的提交，用 `git revert 提交号` 创建撤销提交，再构建和推送。该方法保留历史，不需要强制推送。

原模板保存在 `original-astro-sphere` 标签。网站代码、封面和视频均纳入 Git；node_modules、dist、本地环境文件不会上传。
