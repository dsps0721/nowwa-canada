# 挪瓦咖啡加拿大官网 (Nowwa Coffee Canada) 上线与配置指南

本指南将协助您完成从代码导出、表单配置、Vercel 部署到域名绑定的全流程操作。请按照步骤逐一执行。

## 第一步：导出代码并上传至 GitHub

1.  **下载代码**：
    *   在 Manus 界面右侧的“Code”面板中，点击右上角的下载图标，将整个项目代码下载到您的本地电脑。
    *   解压下载的压缩包。

2.  **创建 GitHub 仓库**：
    *   登录您的 [GitHub](https://github.com/) 账号。
    *   点击右上角的 `+` 号，选择 `New repository`。
    *   Repository name 填写 `nowwa-canada`（或您喜欢的名字）。
    *   选择 `Public` 或 `Private`（建议 Private）。
    *   点击 `Create repository`。

3.  **上传代码**：
    *   在您的 GitHub 仓库页面，点击 `uploading an existing file` 链接。
    *   将解压后的所有文件拖入上传区域。
    *   等待上传完成后，在页面底部点击 `Commit changes` 按钮。

---

## 第二步：配置 Formspree 表单服务

为了让您能收到加盟申请邮件，我们需要配置 Formspree 服务。

1.  **注册/登录 Formspree**：
    *   访问 [Formspree](https://formspree.io/) 并注册账号。

2.  **创建新表单**：
    *   点击 `+ New Form`。
    *   Form Name 填写 `Nowwa Franchise Application`。
    *   Send emails to 填写您希望接收申请通知的邮箱地址。
    *   点击 `Create Form`。

3.  **获取 Form ID**：
    *   创建成功后，您会看到一个 `Endpoint`，格式如 `https://formspree.io/f/xkqnwqkz`。
    *   **关键步骤**：复制最后那串字符（例如 `xkqnwqkz`），这就是您的 **Form ID**。请记下它，第四步会用到。

---

## 第三步：部署到 Vercel

1.  **注册/登录 Vercel**：
    *   访问 [Vercel](https://vercel.com/)，建议直接使用 GitHub 账号登录。

2.  **导入项目**：
    *   在 Dashboard 点击 `Add New...` -> `Project`。
    *   在 Import Git Repository 列表中找到刚才创建的 `nowwa-canada` 仓库，点击 `Import`。

3.  **配置项目**：
    *   Framework Preset 选择 `Vite`。
    *   Root Directory 保持默认（如果代码在根目录）。

4.  **设置环境变量（关键）**：
    *   展开 `Environment Variables` 选项卡。
    *   Key 填写：`VITE_FORMSPREE_ID`
    *   Value 填写：**第二步中获取的 Form ID**（例如 `xkqnwqkz`）。
    *   点击 `Add`。

5.  **开始部署**：
    *   点击 `Deploy` 按钮。
    *   等待约 1-2 分钟，看到满屏烟花即表示部署成功！

---

## 第四步：绑定 GoDaddy 域名 (nowwa.ca)

1.  **在 Vercel 添加域名**：
    *   在 Vercel 项目页面，点击 `Settings` -> `Domains`。
    *   输入 `nowwa.ca`，点击 `Add`。
    *   Vercel 会提示您选择重定向方式，建议选择 `Recommended`（通常是将 www 重定向到根域名，或反之）。
    *   Vercel 会显示需要配置的 DNS 记录（通常是一个 A 记录和一个 CNAME 记录）。

2.  **在 GoDaddy 配置 DNS**：
    *   登录 [GoDaddy](https://www.godaddy.com/)，进入 `My Products`。
    *   找到 `nowwa.ca`，点击 `DNS`。
    *   **添加 A 记录**：
        *   Type: `A`
        *   Name: `@`
        *   Value: `76.76.21.21` (这是 Vercel 的固定 IP，请以 Vercel 界面显示的为准)
        *   TTL: `600` (或默认值)
    *   **添加 CNAME 记录**：
        *   Type: `CNAME`
        *   Name: `www`
        *   Value: `cname.vercel-dns.com`
        *   TTL: `600` (或默认值)
    *   *注意：如果已存在同名的 A 记录或 CNAME 记录，请修改它们而不是新增。*

3.  **等待生效**：
    *   回到 Vercel 的 Domains 页面，它会自动检测 DNS 配置。
    *   通常几分钟内就会变绿（Valid），最长可能需要 24 小时全球生效。

---

## 第五步：最终测试

1.  访问 `https://nowwa.ca`（生效后）。
2.  进入“加盟合作”页面。
3.  填写测试信息并提交。
4.  检查您的邮箱（包括垃圾邮件箱），确认是否收到了来自 Formspree 的通知邮件。

祝贺您！您的挪瓦咖啡加拿大官网已正式上线！
