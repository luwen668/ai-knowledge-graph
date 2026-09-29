# 🧠 AI 基础知识图谱

一个交互式的 AI 知识图谱网站：用一张力导向图谱串联起人工智能领域的核心知识，点击节点即可查看详细解读。

**在线访问：https://ai-knowledge-graph-892.pages.dev**

## 内容覆盖（36 个知识点）

| 分类 | 知识点 |
|---|---|
| 📐 数学基础 | 线性代数、概率与统计、微积分与优化 |
| 🤖 机器学习 | 监督/无监督/强化学习、损失函数、梯度下降、过拟合、评估指标 |
| 🧠 深度学习 | 神经网络、激活函数、反向传播、CNN、RNN、注意力机制、Transformer、Embedding |
| 💬 大语言模型 | LLM、预训练、Token、微调、LoRA、RLHF、提示词工程、Scaling Law |
| 🎨 生成式 AI | 扩散模型、GAN、多模态 |
| ⚙️ AI 工程 | RAG、向量数据库、Agent、推理部署 |

## 技术实现

- 纯静态网站（HTML + CSS + 原生 JS），无构建步骤
- [ECharts](https://echarts.apache.org/) 力导向图实现知识图谱可视化
- 部署在 [Cloudflare Pages](https://pages.cloudflare.com/)，推送 main 分支自动重新部署

## 本地运行

```bash
python3 -m http.server 8000
# 打开 http://localhost:8000
```

## 如何添加/修改知识点

所有内容都在 `data.js` 中，每个知识点是一个对象：

```js
{
  id: "my-topic",           // 唯一标识，用于页面跳转
  name: "知识点名称",
  category: 2,              // 0-6 分类索引，见文件顶部 CATEGORIES
  tagline: "一句话简介",
  summary: "图谱悬停提示",
  content: `<h2>标题</h2><p>详细内容（支持 HTML）</p>`,
  links: ["other-topic"],   // 相关知识点 id 列表
}
```

添加后图谱和详情页会自动更新，无需修改其他文件。
