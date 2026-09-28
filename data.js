/* =====================================================
 * AI 基础知识图谱数据
 * 每个节点: id / name / category / tagline / summary / content(HTML) / links
 * ===================================================== */

const CATEGORIES = [
  "总览",
  "数学基础",
  "机器学习",
  "深度学习",
  "大语言模型",
  "生成式 AI",
  "AI 工程",
];

const NODES = [
  /* ==================== 总览 ==================== */
  {
    id: "ai-overview",
    name: "人工智能总览",
    category: 0,
    tagline: "AI 的完整版图：从符号主义到大模型时代",
    summary: "人工智能的发展脉络、主要流派与领域划分。",
    content: `
      <h2>什么是人工智能</h2>
      <p><strong>人工智能（Artificial Intelligence, AI）</strong>是研究如何让机器完成原本需要人类智能才能完成的任务的学科。它的核心目标是让计算机具备<strong>感知、推理、学习和决策</strong>的能力。</p>
      <p>1956 年达特茅斯会议上，“人工智能”一词被正式提出。近 70 年的发展可以大致分为三个阶段：</p>
      <table>
        <tr><th>阶段</th><th>时间</th><th>代表技术</th></tr>
        <tr><td>符号主义</td><td>1956–1980s</td><td>专家系统、逻辑推理、搜索算法</td></tr>
        <tr><td>统计学习</td><td>1980s–2010</td><td>SVM、决策树、概率图模型</td></tr>
        <tr><td>深度学习</td><td>2010 至今</td><td>CNN、Transformer、大语言模型</td></tr>
      </table>

      <h2>AI 的主要子领域</h2>
      <ul>
        <li><strong>机器学习（ML）</strong>：让机器从数据中学习规律，而非人工编写规则</li>
        <li><strong>深度学习（DL）</strong>：基于多层神经网络的机器学习方法</li>
        <li><strong>自然语言处理（NLP）</strong>：理解、生成人类语言</li>
        <li><strong>计算机视觉（CV）</strong>：图像与视频的理解与生成</li>
        <li><strong>强化学习（RL）</strong>：通过与环境交互、获得奖励来学习策略</li>
        <li><strong>机器人学</strong>：感知与控制的实体结合</li>
      </ul>

      <h2>三个易混淆的概念</h2>
      <blockquote>人工智能 ⊃ 机器学习 ⊃ 深度学习。深度学习是机器学习的一个分支，而机器学习是实现人工智能的主要路径之一。</blockquote>
      <ul>
        <li><strong>AI</strong>：最大的概念，指一切“让机器表现出智能”的技术</li>
        <li><strong>机器学习</strong>：AI 的子集，核心思想是“用数据训练模型”</li>
        <li><strong>深度学习</strong>：机器学习的子集，使用深层的神经网络结构</li>
      </ul>

      <h2>当前时代：大模型与生成式 AI</h2>
      <p>2020 年 GPT-3 发布后，以 Transformer 为基础、通过海量数据预训练的<strong>大语言模型（LLM）</strong>成为 AI 的主流范式。2022 年 ChatGPT 引爆了生成式 AI 浪潮，AI 从“识别与分类”进化到“生成与创作”，并催生出 RAG、AI Agent 等新一代工程范式。</p>
    `,
    links: ["machine-learning", "deep-learning", "llm", "math-linear-algebra"],
  },

  /* ==================== 数学基础 ==================== */
  {
    id: "math-linear-algebra",
    name: "线性代数",
    category: 1,
    tagline: "AI 世界的语言：向量、矩阵与张量",
    summary: "标量、向量、矩阵、张量的含义，以及它们在神经网络中的作用。",
    content: `
      <h2>为什么 AI 离不开线性代数</h2>
      <p>在计算机眼中，一切数据都是数字：<strong>一张图片是一个矩阵，一句话是一组向量，一个模型是万亿个数字（参数）的集合</strong>。线性代数就是描述和操作这些数字结构的数学工具。</p>

      <h2>四个核心概念</h2>
      <table>
        <tr><th>概念</th><th>含义</th><th>AI 中的例子</th></tr>
        <tr><td>标量（Scalar）</td><td>单个数字</td><td>学习率、损失值、温度参数</td></tr>
        <tr><td>向量（Vector）</td><td>一列数字</td><td>词向量、特征向量、Embedding</td></tr>
        <tr><td>矩阵（Matrix）</td><td>二维数字表格</td><td>神经网络的权重、灰度图片</td></tr>
        <tr><td>张量（Tensor）</td><td>任意维度的数组</td><td>一批彩色图片（4 维张量）</td></tr>

      </table>

      <h2>关键运算：矩阵乘法</h2>
      <p>神经网络前向传播的本质就是一连串矩阵乘法：</p>
      <pre><code>y = W·x + b

x   —— 输入向量（如 784 维的图片像素）
W   —— 权重矩阵（模型的“知识”都存这里）
b   —— 偏置向量
y   —— 输出向量（如 10 个类别的得分）</code></pre>
      <p>一个隐藏层有 1000 个神经元、输入是 784 维，那么仅这一层的权重就有 <code>1000 × 784 = 784,000</code> 个参数。现代大模型有数百亿到万亿参数，因此训练需要巨大的算力。</p>

      <h2>其他重要概念</h2>
      <ul>
        <li><strong>点积（Dot Product）</strong>：衡量两个向量的相似度，是注意力机制的核心运算</li>
        <li><strong>特征向量 / 特征值</strong>：描述矩阵变换的本质方向，PCA 降维的理论基础</li>
        <li><strong>向量空间</strong>：词向量之所以神奇，是因为相似的词在向量空间中距离相近（“国王 − 男人 + 女人 ≈ 女王”）</li>
      </ul>

      <blockquote>一句话总结：神经网络 = 大规模矩阵运算 + 非线性激活，线性代数就是让这一切高效跑起来的基石。</blockquote>
    `,
    links: ["ai-overview", "neural-network", "embedding", "math-probability"],
  },
  {
    id: "math-probability",
    name: "概率与统计",
    category: 1,
    tagline: "在不确定的世界中做决策",
    summary: "概率分布、条件概率、贝叶斯定理，以及它们在机器学习中的角色。",
    content: `
      <h2>为什么 AI 需要概率</h2>
      <p>现实世界的数据充满噪声和不确定性。模型看到的永远是不完整的样本，因此 AI 的预测本质上都是<strong>概率性的</strong>——“这张图片 92% 是猫”，而不是“这张图片是猫”。</p>

      <h2>核心概念</h2>
      <h3>1. 概率分布</h3>
      <p>描述随机变量取各种值的可能性。AI 模型输出层（Softmax）产生的正是概率分布：所有类别的概率之和为 1。</p>
      <h3>2. 条件概率 P(A|B)</h3>
      <p>“在 B 发生的条件下 A 发生的概率”。机器学习的本质可以表述为：给定输入 x，估计输出 y 的条件概率分布 <code>P(y|x)</code>。</p>
      <h3>3. 贝叶斯定理</h3>
      <pre><code>P(A|B) = P(B|A) · P(A) / P(B)

后验概率 = 似然 × 先验 / 证据</code></pre>
      <p>它告诉我们如何根据新证据更新对世界的信念。垃圾邮件过滤、朴素贝叶斯分类器都是直接应用。</p>

      <h2>机器学习中的关键角色</h2>
      <table>
        <tr><th>概念</th><th>作用</th></tr>
        <tr><td>最大似然估计（MLE）</td><td>训练模型的基本思想：选择让观测数据出现概率最大的参数</td></tr>
        <tr><td>交叉熵损失</td><td>衡量“模型预测的分布”与“真实分布”的差距</td></tr>
        <tr><td>KL 散度</td><td>比较两个概率分布的差异，扩散模型和 RLHF 中大量使用</td></tr>
        <tr><td>最大熵原理</td><td>“不知道就别瞎猜”，Softmax 的理论来源</td></tr>
      </table>

      <h2>统计 vs 概率</h2>
      <blockquote>概率：已知模型，预测数据（正向）。统计：已知数据，推断模型（逆向）。机器学习做的是后者——从数据反推规律。</blockquote>
    `,
    links: ["math-linear-algebra", "loss-function", "supervised-learning", "diffusion"],
  },
  {
    id: "math-calculus",
    name: "微积分与优化",
    category: 1,
    tagline: "梯度：指引模型学习的指南针",
    summary: "导数、梯度、链式法则，以及它们如何驱动神经网络的训练。",
    content: `
      <h2>一句话理解微积分在 AI 中的作用</h2>
      <p>训练神经网络 = 不断调整参数让损失变小。而<strong>梯度告诉你：往哪个方向调、调多少，损失下降最快</strong>。这就是微积分的核心作用。</p>

      <h2>必备概念</h2>
      <h3>1. 导数与偏导数</h3>
      <p>导数描述函数在某点的变化率。多元函数对某一个变量的导数叫偏导数——模型的损失函数有亿万个变量（参数），每个参数的偏导数都要算。</p>
      <h3>2. 梯度（Gradient）</h3>
      <p>所有偏导数组成的向量，指向函数<strong>增长最快</strong>的方向。因此训练时沿梯度的反方向走（梯度下降），就能让损失减小。</p>
      <h3>3. 链式法则</h3>
      <p>复合函数求导的方法：<code>(f∘g)' = f'(g)·g'</code>。它是<strong>反向传播算法</strong>的数学基础——多层神经网络就是多层复合函数，误差从输出层一层层传回输入层，靠的就是链式法则连乘。</p>

      <h2>梯度下降直观理解</h2>
      <pre><code>参数更新规则：
θ_new = θ_old − 学习率 × 梯度

学习率（learning rate）太小 → 学得太慢
学习率太大     → 步子太大跨过最低点，甚至发散</code></pre>
      <p>把损失函数想象成一个山谷，训练过程就是蒙着眼睛下山：每一步摸一下脚底的坡度（梯度），朝最陡的下坡方向走一步，重复千万次直到谷底。</p>

      <h2>常见优化器</h2>
      <table>
        <tr><th>优化器</th><th>特点</th></tr>
        <tr><td>SGD</td><td>最基础的随机梯度下降，简单但震荡大</td></tr>
        <tr><td>Momentum</td><td>引入“惯性”，积累历史梯度方向，加速收敛</td></tr>
        <tr><td>Adam</td><td>自适应调整每个参数的学习率，深度学习默认首选</td></tr>
      </table>
    `,
    links: ["gradient-descent", "backpropagation", "neural-network", "math-linear-algebra"],
  },

  /* ==================== 机器学习 ==================== */
  {
    id: "machine-learning",
    name: "机器学习",
    category: 2,
    tagline: "让数据说话：从规则驱动到数据驱动",
    summary: "机器学习的三大范式：监督、无监督、强化学习，以及完整训练流程。",
    content: `
      <h2>什么是机器学习</h2>
      <p>传统编程是“<strong>人写规则，机器执行</strong>”：程序员告诉计算机“如果邮件里有'中奖'二字就是垃圾邮件”。机器学习反过来了——“<strong>人给数据，机器自己总结规则</strong>”：给机器 10 万封已标注的垃圾邮件，它自己发现规律。</p>
      <blockquote>机器学习三要素：数据 + 模型 + 算法。数据提供经验，模型是假设空间，算法是搜索最优模型的方法。</blockquote>

      <h2>三大学习范式</h2>
      <table>
        <tr><th>范式</th><th>数据形式</th><th>目标</th><th>例子</th></tr>
        <tr><td>监督学习</td><td>输入 + 正确答案</td><td>学习输入→输出的映射</td><td>垃圾邮件分类、房价预测</td></tr>
        <tr><td>无监督学习</td><td>只有输入</td><td>发现数据内在结构</td><td>用户分群、异常检测</td></tr>
        <tr><td>强化学习</td><td>状态 + 奖励</td><td>学一个最大化长期奖励的策略</td><td>AlphaGo、游戏 AI</td></tr>
      </table>

      <h2>监督学习的两类任务</h2>
      <ul>
        <li><strong>分类（Classification）</strong>：预测离散类别，如“猫/狗”。输出是概率分布</li>
        <li><strong>回归（Regression）</strong>：预测连续数值，如“房价”。输出是实数</li>
      </ul>

      <h2>一个完整的机器学习流程</h2>
      <ol>
        <li><strong>问题定义</strong>：明确要预测什么</li>
        <li><strong>数据收集与清洗</strong>：数据质量决定模型上限（“Garbage in, garbage out”）</li>
        <li><strong>特征工程</strong>：把原始数据变成模型能消化的数值特征</li>
        <li><strong>划分数据集</strong>：训练集 / 验证集 / 测试集</li>
        <li><strong>训练模型</strong>：用训练集拟合参数，用验证集调超参</li>
        <li><strong>评估与迭代</strong>：测试集上看最终效果，不理想就回头改进</li>
        <li><strong>部署上线</strong>：模型进入真实环境，持续监控性能漂移</li>
      </ol>

      <h2>经典算法一览</h2>
      <p>线性回归、逻辑回归、决策树、随机森林、支持向量机（SVM）、K-Means、朴素贝叶斯……这些“传统”算法在数据量小、需要可解释性的场景（金融风控、医疗）依然是首选。</p>
    `,
    links: ["ai-overview", "supervised-learning", "unsupervised-learning", "reinforcement-learning", "deep-learning", "overfitting"],
  },
  {
    id: "supervised-learning",
    name: "监督学习",
    category: 2,
    tagline: "有标准答案的学习：分类与回归",
    summary: "监督学习的原理、训练目标，以及与人类刷题备考的类比。",
    content: `
      <h2>核心思想</h2>
      <p>监督学习使用<strong>带标签（label）的数据</strong>：每条数据都有输入 x 和正确答案 y。模型通过不断比对“自己的答案”和“标准答案”之间的差距（损失），调整内部参数，直到差距足够小。</p>
      <blockquote>类比学生刷题：习题（训练数据）配答案（标签）→ 做题（预测）→ 对答案算分差（损失函数）→ 总结经验（参数更新）→ 再做。考试（测试集）的题是从来没见过的。</blockquote>

      <h2>两大任务类型</h2>
      <h3>分类（Classification）</h3>
      <p>预测样本属于哪个类别。二分类（垃圾/非垃圾邮件）与多分类（识别 10 种动物）。模型输出层使用 Softmax，把任意分数变成概率分布。</p>
      <h3>回归（Regression）</h3>
      <p>预测连续数值。如线性回归：<code>y = w·x + b</code>，训练就是找到最合适的 w 和 b，让预测值尽量贴近真实值。</p>

      <h2>训练到底在做什么（数学视角）</h2>
      <pre><code>1. 初始化模型参数 θ（随机）
2. 前向传播：用当前参数预测 ŷ = f(x; θ)
3. 计算损失：L = 损失函数(y, ŷ)
4. 反向传播：计算梯度 ∂L/∂θ
5. 更新参数：θ ← θ − 学习率 × 梯度
6. 重复 2–5 步，直到损失收敛</code></pre>

      <h2>经典算法</h2>
      <table>
        <tr><th>算法</th><th>原理一句话</th></tr>
        <tr><td>线性回归</td><td>拟合一条直线/超平面，最小化预测误差平方和</td></tr>
        <tr><td>逻辑回归</td><td>线性回归 + Sigmoid，输出概率用于分类</td></tr>
        <tr><td>决策树</td><td>通过一系列 if-else 问题把数据分到叶子节点</td></tr>
        <tr><td>随机森林</td><td>多棵决策树投票，降低单棵树的不稳定性</td></tr>
        <tr><td>SVM</td><td>寻找一个“最大间隔”的分界线，泛化能力强</td></tr>
      </table>

      <p>当数据规模变大、特征高度非线性（如图像、语音）时，传统方法力不从心，这正是深度学习登场的原因。</p>
    `,
    links: ["machine-learning", "loss-function", "gradient-descent", "evaluation-metrics", "deep-learning"],
  },
  {
    id: "unsupervised-learning",
    name: "无监督学习",
    category: 2,
    tagline: "没有答案的自学：发现数据的隐藏结构",
    summary: "聚类、降维、异常检测等无监督任务的原理与应用。",
    content: `
      <h2>核心思想</h2>
      <p>现实中绝大多数数据<strong>没有标签</strong>——给图片标注“这是猫”要花钱请人做。无监督学习只给模型输入 x，让它自己发现数据中的<strong>结构、模式和规律</strong>。</p>

      <h2>主要任务类型</h2>
      <h3>1. 聚类（Clustering）</h3>
      <p>把相似的样本自动分到一组，不需要预先告诉机器有几组。</p>
      <ul>
        <li><strong>K-Means</strong>：指定 K 个中心点，反复“分配样本 → 更新中心”，直到稳定。简单高效，应用最广</li>
        <li><strong>层次聚类</strong>：自底向上合并，输出树状结构，适合发现多尺度分组</li>
        <li><strong>DBSCAN</strong>：基于密度聚类，能发现任意形状的簇，自动识别异常点</li>
      </ul>
      <p>应用：电商用户分群、新闻自动归类、图像分割。</p>

      <h3>2. 降维（Dimensionality Reduction）</h3>
      <p>把高维数据压缩到低维，同时保留主要信息。</p>
      <ul>
        <li><strong>PCA（主成分分析）</strong>：找到数据方差最大的方向投影，数学严谨</li>
        <li><strong>t-SNE / UMAP</strong>：专门用于可视化高维数据（如词向量空间）</li>
      </ul>
      <p>作用：压缩存储、去噪、可视化、加速后续训练。</p>

      <h3>3. 异常检测（Anomaly Detection）</h3>
      <p>找出“与众不同”的样本。应用：信用卡盗刷检测、工业设备故障预警、网络入侵检测。</p>

      <h3>4. 自监督学习（Self-supervised Learning）★重要</h3>
      <p>这是无监督学习的现代化身，也是<strong>大语言模型的训练基础</strong>。思路：从数据本身构造“伪标签”，例如遮住一句话中的某个词让模型猜（BERT 的 MLM 任务）、给定前文预测下一个词（GPT 的自回归任务）。</p>
      <blockquote>自监督学习巧妙地把“无标注的海量文本”变成了“天然的监督学习题库”——这就是 GPT 能用整个互联网训练的原因。</blockquote>
    `,
    links: ["machine-learning", "pretraining", "llm", "embedding"],
  },
  {
    id: "reinforcement-learning",
    name: "强化学习",
    category: 2,
    tagline: "在试错中成长：奖励塑造智能",
    summary: "智能体、环境、奖励的核心框架，Q-learning、策略梯度和 RLHF。",
    content: `
      <h2>核心框架</h2>
      <p>强化学习（RL）中有一个<strong>智能体（Agent）</strong>在与<strong>环境（Environment）</strong>的交互中学习：</p>
      <pre><code>智能体观察状态 s → 采取动作 a → 环境反馈奖励 r 和新状态 s'

目标：学会一个策略 π，最大化长期累积奖励</code></pre>
      <blockquote>类比训练小狗：做对了给零食（正奖励），做错了不给（零奖励），慢慢它就学会讨人喜欢的行为。强化学习就是把这个过程数学化。</blockquote>

      <h2>核心概念</h2>
      <ul>
        <li><strong>奖励（Reward）</strong>：环境的打分信号，是学习的唯一指引</li>
        <li><strong>回报（Return）</strong>：未来所有奖励的折扣总和，RL 优化的是它而不是眼前奖励</li>
        <li><strong>探索 vs 利用（Exploration vs Exploitation）</strong>：试新动作还是沿用已知好动作？这是 RL 的经典两难</li>
        <li><strong>价值函数 V(s) / Q(s,a)</strong>：估计“某个状态/动作有多好”</li>
      </ul>

      <h2>两大方法流派</h2>
      <table>
        <tr><th>流派</th><th>思想</th><th>代表算法</th></tr>
        <tr><td>基于价值</td><td>学“每个动作值多少分”，选分最高的动作</td><td>Q-Learning、DQN</td></tr>
        <tr><td>基于策略</td><td>直接学“动作的概率分布”，用梯度优化</td><td>REINFORCE、PPO</td></tr>
      </table>
      <p><strong>AlphaGo</strong> = 深度学习（感知棋盘）+ 强化学习（学习胜率）+ 蒙特卡洛树搜索（规划）。2016 年战胜李世石是 AI 史上的里程碑。</p>

      <h2>RLHF：强化学习的当代高光</h2>
      <p>ChatGPT 之所以好用，关键是用了 <strong>RLHF（基于人类反馈的强化学习）</strong>：让人类对模型的多个回答打分，训练一个“奖励模型”来模仿人类偏好，再用 PPO 让语言模型朝着高奖励方向优化。这使得模型从“像人一样说话”进化到“说对人有用的话”。</p>
    `,
    links: ["machine-learning", "rlhf", "llm", "gradient-descent"],
  },
  {
    id: "loss-function",
    name: "损失函数",
    category: 2,
    tagline: "给模型的错误打分",
    summary: "损失函数的定义、常见类型（MSE、交叉熵）及其选择逻辑。",
    content: `
      <h2>什么是损失函数</h2>
      <p><strong>损失函数（Loss Function）</strong>用来量化“模型预测得有多差”。它是一个关于模型参数的函数，训练的全部目的就是<strong>找到让损失最小的参数</strong>。</p>
      <blockquote>没有损失函数，就不知道往哪里优化；损失函数选错了，优化的方向就错了。</blockquote>

      <h2>常见损失函数</h2>
      <h3>1. 均方误差 MSE（回归任务）</h3>
      <pre><code>L = (1/n) Σ (y_pred − y_true)²

预测房价 100 万，实际 90 万 → 误差 10 万 → 损失 100（万²）</code></pre>
      <p>平方会<strong>放大</span>大误差</strong>，所以 MSE 对离群点敏感。</p>

      <h3>2. 交叉熵 Cross-Entropy（分类任务）</h3>
      <pre><code>L = −Σ y_true · log(y_pred)

真实是“猫”，模型预测猫的概率 0.9 → 损失 −log(0.9) ≈ 0.105
真实是“猫”，模型预测猫的概率 0.1 → 损失 −log(0.1) ≈ 2.303（大惩罚！）</code></pre>
      <p>交叉熵惩罚“对正确答案信心不足”的预测特别狠，因此是分类任务的默认选择。它和 Softmax 是黄金搭档。</p>

      <h3>3. 对比损失 / 三元组损失</h3>
      <p>用于 Embedding 学习：让相似的样本在向量空间中靠近，不相似的远离。人脸识别、语义检索的核心。</p>

      <h2>损失函数 vs 评价指标</h2>
      <ul>
        <li><strong>损失函数</strong>：训练时优化用，需要可微分（能求梯度）</li>
        <li><strong>评价指标</strong>（准确率、F1 等）：给人看的效果衡量，不一定可微</li>
      </ul>
    `,
    links: ["math-probability", "supervised-learning", "gradient-descent", "evaluation-metrics", "backpropagation"],
  },
  {
    id: "gradient-descent",
    name: "梯度下降",
    category: 2,
    tagline: "训练模型的通用引擎",
    summary: "批量/随机/小批量梯度下降，学习率调参，以及局部最优问题。",
    content: `
      <h2>算法本质</h2>
      <p>梯度下降（Gradient Descent）是几乎所有模型训练的通用引擎。参数更新规则：</p>
      <pre><code>θ ← θ − η · ∇L(θ)

θ：模型参数
η（eta）：学习率，控制每步走多远
∇L(θ)：损失函数对参数的梯度（最陡上升方向，所以取负号往反走）</code></pre>

      <h2>三种变体</h2>
      <table>
        <tr><th>变体</th><th>每步用多少数据</th><th>特点</th></tr>
        <tr><td>批量梯度下降 BGD</td><td>全部训练集</td><td>方向准但每步极慢，几乎不用</td></tr>
        <tr><td>随机梯度下降 SGD</td><td>1 个样本</td><td>快但噪声大、震荡剧烈</td></tr>
        <tr><td>小批量 Mini-Batch</td><td>几十~几百个（如 32/64/128）</td><td><strong>实际标准做法</strong>，平衡速度与稳定</td></tr>
      </table>

      <h2>学习率：最重要的超参数</h2>
      <ul>
        <li><strong>太小</strong>：收敛极慢，还可能卡在浅坑里出不来</li>
        <li><strong>太大</strong>：在最优点附近震荡，甚至越更新损失越大直至发散</li>
        <li><strong>学习率衰减</strong>：训练前期大步走、后期小步微调，是常用技巧</li>
      </ul>

      <h2>更好的优化器</h2>
      <p>朴素 SGD 对所有参数用同一个学习率，不合理。现代优化器做到了<strong>自适应</strong>：</p>
      <ul>
        <li><strong>AdaGrad</strong>：稀疏的特征大步学，频繁的特征小步走</li>
        <li><strong>Adam</strong>：结合 Momentum 惯性 + 自适应学习率，深度学习的事实标准</li>
      </ul>

      <h2>局部最优 vs 鞍点</h2>
      <p>理论上梯度下降可能卡在“局部最优”（附近的谷底但不是全局最低）。不过在<strong>高维空间</strong>（亿级参数）中，鞍点（某些方向上坡、某些方向下坡的点）比局部最优更常见。实践中配合随机初始化、动量、足够大的 batch，大模型训练很少真正困死在坏点。</p>
    `,
    links: ["math-calculus", "loss-function", "backpropagation", "neural-network"],
  },
  {
    id: "overfitting",
    name: "过拟合与正则化",
    category: 2,
    tagline: "记住答案 ≠ 学会知识",
    summary: "偏差方差权衡、过拟合/欠拟合的诊断与七大应对手段。",
    content: `
      <h2>过拟合：机器学习的头号敌人</h2>
      <p><strong>过拟合（Overfitting）</strong>指模型把训练数据（包括噪声）死记硬背下来，在没见过的数据上表现很差。</p>
      <blockquote>类比学生：把练习题和答案全背下来了，题目稍微变一下就完蛋——他记住的是“答案”，没学会“解题方法”。</blockquote>

      <h2>过拟合 vs 欠拟合</h2>
      <table>
        <tr><th></th><th>训练集表现</th><th>测试集表现</th><th>原因</th><th>药方</th></tr>
        <tr><td>欠拟合</td><td>差</td><td>差</td><td>模型太简单</td><td>换更强模型、增加特征、训练更久</td></tr>
        <tr><td>过拟合</td><td>极好</td><td>差</td><td>模型太复杂 / 数据太少</td><td>见下方七大手段</td></tr>
      </table>
      <p><strong>偏差-方差权衡</strong>：简单模型偏差大（系统性错），复杂模型方差大（对数据敏感）。好的模型在两者之间找到平衡。</p>

      <h2>七大应对手段</h2>
      <ol>
        <li><strong>更多数据</strong>：最有效的手段，深度学习尤其吃数据</li>
        <li><strong>正则化 L1/L2</strong>：给损失函数加惩罚项，限制权重过大。L2（权重平方和）最常用</li>
        <li><strong>Dropout</strong>：训练时随机“关掉”一部分神经元，强迫网络不依赖单一路径（深度学习的标志性技巧）</li>
        <li><strong>早停（Early Stopping）</strong>：验证集损失开始上升时就停止训练</li>
        <li><strong>数据增强</strong>：对图片做旋转/裁剪/变色，一份数据变多份</li>
        <li><strong>交叉验证</strong>：多份数据轮换验证，更可靠地评估</li>
        <li><strong>简化模型</strong>：减少参数、降低模型复杂度</li>
      </ol>

      <h2>泛化：终极目标</h2>
      <p>机器学习的一切努力都指向一个词——<strong>泛化（Generalization）</strong>：在从未见过的数据上表现好。训练集分数再高只是过程，泛化能力才是目的。</p>
    `,
    links: ["machine-learning", "evaluation-metrics", "neural-network", "supervised-learning"],
  },
  {
    id: "evaluation-metrics",
    name: "模型评估指标",
    category: 2,
    tagline: "分数怎么算才靠谱",
    summary: "混淆矩阵、准确率陷阱、精确率/召回率、F1、AUC 与回归指标。",
    content: `
      <h2>为什么不能只看准确率</h2>
      <p>假设 1000 个病人里只有 5 个患癌。一个“永远预测健康”的模型准确率 99.5%，却毫无用处。<strong>类别不平衡时，准确率会骗人</strong>。</p>

      <h2>混淆矩阵：一切的基础</h2>
      <table>
        <tr><th></th><th>预测：正</th><th>预测：负</th></tr>
        <tr><td>实际：正</td><td>TP（真正例）</td><td>FN（假负例 = 漏报）</td></tr>
        <tr><td>实际：负</td><td>FP（假正例 = 误报）</td><td>TN（真负例）</td></tr>
      </table>
      <pre><code>准确率  Accuracy = (TP+TN) / 总数
精确率  Precision  = TP / (TP+FP)   —— 预测为正的里面有多少是真的
召回率  Recall     = TP / (TP+FN)   —— 真正的正例里抓到了多少
F1      = 2 × P × R / (P + R)        —— 精确率与召回率的调和平均</code></pre>

      <h2>精确率 vs 召回率的取舍</h2>
      <ul>
        <li><strong>癌症筛查</strong>：宁可误报也不能漏报 → 优先<strong>召回率</strong></li>
        <li><strong>垃圾邮件过滤</strong>：宁可漏放也不能误杀重要邮件 → 优先<strong>精确率</strong></li>
      </ul>

      <h2>其他重要指标</h2>
      <table>
        <tr><th>指标</th><th>用途</th></tr>
        <tr><td>ROC / AUC</td><td>衡量模型区分正负类的整体能力，对阈值不敏感，0.5 = 瞎猜，1.0 = 完美</td></tr>
        <tr><td>PR 曲线</td><td>类别极度不平衡时比 ROC 更可靠</td></tr>
        <tr><td>MAE / RMSE</td><td>回归任务：平均绝对误差 / 均方根误差</td></tr>
        <tr><td>Perplexity 困惑度</td><td>语言模型的专属指标，越低越好</td></tr>
        <tr><td>BLEU / ROUGE</td><td>评估机器翻译、摘要生成质量</td></tr>
      </table>

      <h2>黄金法则</h2>
      <blockquote>评估指标必须与业务代价对齐：错误预测的代价是什么？漏报的代价又是什么？想清楚这个，才知道该优化哪个指标。</blockquote>
    `,
    links: ["supervised-learning", "overfitting", "loss-function", "llm"],
  },

  /* ==================== 深度学习 ==================== */
  {
    id: "deep-learning",
    name: "深度学习",
    category: 3,
    tagline: "用多层网络自动学习特征",
    summary: "深度学习为何强大：特征自动学习、端到端训练，以及适用场景。",
    content: `
      <h2>什么是深度学习</h2>
      <p>深度学习（Deep Learning）是使用<strong>多层神经网络</strong>的机器学习方法。“深度”指的是网络的层数——从输入到输出要经过多层非线性变换。</p>

      <h2>为什么深度学习能成功</h2>
      <p>传统机器学习的瓶颈在<strong>特征工程</strong>：识别猫，人要手动设计“有没有尖耳朵”“有没有胡须”等特征。这些人工特征既费力又有上限。</p>
      <p>深度学习的革命性在于<strong>特征自动学习</strong>：</p>
      <ul>
        <li>浅层：学习边缘、颜色、纹理等低层特征</li>
        <li>中层：学习眼睛、耳朵、爪子等部件</li>
        <li>深层：学习完整的“猫”这一概念</li>
      </ul>
      <blockquote>层次化的世界结构（像素→边缘→部件→物体）正好对应深度网络的层次结构，这是深度学习在感知任务上碾压传统方法的根本原因。</blockquote>

      <h2>深度学习的三驾马车</h2>
      <table>
        <tr><th>条件</th><th>说明</th></tr>
        <tr><td>数据</td><td>ImageNet 百万级标注图片、整个互联网的文本</td></tr>
        <tr><td>算力</td><td>GPU 的并行计算能力恰好匹配矩阵运算，训练提速上百倍</td></tr>
        <tr><td>算法</td><td>反向传播（1986）、ReLU（2011）、Dropout、BatchNorm、ResNet 残差连接</td></tr>
      </table>

      <h2>主流架构家族</h2>
      <ul>
        <li><strong>CNN</strong>（卷积神经网络）：处理图像</li>
        <li><strong>RNN / LSTM</strong>（循环神经网络）：处理序列，已被逐步替代</li>
        <li><strong>Transformer</strong>（注意力架构）：当前绝对主流，文本、图像、语音通吃</li>
      </ul>

      <h2>适用边界</h2>
      <p>深度学习并非万能：小数据、强可解释性要求的场景（信贷审批、医疗诊断辅助），传统方法（逻辑回归、决策树）往往更实用。<strong>没有银弹，只有合适的工具</strong>。</p>
    `,
    links: ["ai-overview", "neural-network", "cnn", "transformer", "machine-learning"],
  },
  {
    id: "neural-network",
    name: "神经网络基础",
    category: 3,
    tagline: "模仿大脑的通用函数逼近器",
    summary: "神经元结构、层、权重与偏置、前向传播，以及万能逼近定理。",
    content: `
      <h2>从一个神经元说起</h2>
      <p>神经网络的基本单元<strong>模拟生物神经元</strong>：接收多个输入，加权求和，超过阈值就“激活”（放电）。</p>
      <pre><code>z = w₁x₁ + w₂x₂ + … + wₙxₙ + b
output = 激活函数(z)

w —— 权重（每个输入的重要性）
b —— 偏置（激活的难易程度）
激活函数 —— 引入非线性（见“激活函数”节点）</code></pre>

      <h2>全连接网络：把神经元堆成层</h2>
      <ul>
        <li><strong>输入层</strong>：接收原始数据（如 784 个像素）</li>
        <li><strong>隐藏层</strong>：中间的特征变换，可以有很多层，每层可以有很多神经元</li>
        <li><strong>输出层</strong>：最终结果（如 10 个类别的概率）</li>
      </ul>
      <p>相邻两层之间<strong>全部互相连接</strong>，因此叫全连接网络（Fully Connected / Dense）。</p>

      <h2>知识存在哪里</h2>
      <blockquote>神经网络的“知识”全部存储在权重和偏置中。训练 = 用数据不断调整这些数字。推理 = 固定这些数字，只做前向计算。所谓“模型文件”，就是把这些参数存成二进制。</blockquote>

      <h2>万能逼近定理（Universal Approximation Theorem）</h2>
      <p>数学证明：只要神经元足够多，一个隐藏层的神经网络可以逼近<strong>任意连续函数</strong>。这解释了为什么神经网络是“通用函数逼近器”——理论上它能表示任何输入到输出的映射。</p>
      <p>但注意：能表示 ≠ 能学到。浅层网络可能需要天文数字的神经元，深层结构能用指数级更少的参数表达同样的函数——这就是“深度”的价值。</p>

      <h2>参数量速算</h2>
      <pre><code>全连接层参数量 = 输入维度 × 输出维度 + 输出维度(偏置)

例：输入 784 → 隐藏层 128 → 输出 10
第一层参数 = 784×128 + 128 = 100,480
第二层参数 = 128×10 + 10 = 1,290
合计约 10 万个参数 —— 对比 GPT 级别的千亿参数，这只是零头</code></pre>
    `,
    links: ["deep-learning", "activation", "backpropagation", "math-linear-algebra", "gradient-descent"],
  },
  {
    id: "activation",
    name: "激活函数",
    category: 3,
    tagline: "没有它，再深的网络也只是线性变换",
    summary: "Sigmoid、Tanh、ReLU 及其变体的原理、优缺点和选择建议。",
    content: `
      <h2>为什么必须非线性</h2>
      <p>如果不用激活函数，无论堆多少层，整体仍然只是一个线性变换 <code>W₃·W₂·W₁·x</code>——和单层没有区别。<strong>激活函数给网络注入非线性能力</strong>，让它能拟合曲线、表达复杂的决策边界。</p>

      <h2>四种经典激活函数</h2>
      <h3>1. Sigmoid（S 型曲线）</h3>
      <pre><code>σ(x) = 1 / (1 + e^(−x))    输出范围 (0, 1)</code></pre>
      <p>优点：输出可解释为概率。缺点：输入很大/很小时梯度趋近 0（<strong>梯度消失</strong>）；输出不是零中心。现在基本只用于输出层做二分类。</p>

      <h3>2. Tanh（双曲正切）</h3>
      <p>输出范围 (−1, 1)，零中心，优于 Sigmoid，但同样有梯度消失问题。</p>

      <h3>3. ReLU（整流线性单元）★现代默认</h3>
      <pre><code>ReLU(x) = max(0, x)    负数全为 0，正数原样通过</code></pre>
      <p>优点：计算极简、正区间梯度恒为 1（缓解梯度消失）、收敛快。缺点：神经元输入为负时梯度为 0，可能“死亡”（Dead ReLU）——再也不激活。</p>

      <h3>4. ReLU 变体与 GELU</h3>
      <ul>
        <li><strong>Leaky ReLU</strong>：负区间给一个很小的斜率（0.01），防止神经元死亡</li>
        <li><strong>GELU</strong>：平滑版的 ReLU，Transformer（BERT/GPT）的标准选择</li>
        <li><strong>Swish / SiLU</strong>：谷歌提出的自门控激活，效果与 GELU 相近</li>
      </ul>

      <h2>输出层的特殊激活</h2>
      <table>
        <tr><th>任务</th><th>输出层激活</th><th>原因</th></tr>
        <tr><td>二分类</td><td>Sigmoid</td><td>输出 (0,1) 可解释为概率</td></tr>
        <tr><td>多分类</td><td>Softmax</td><td>所有类别概率之和 = 1</td></tr>
        <tr><td>回归</td><td>无（线性输出）</td><td>预测值可以是任意实数</td></tr>
      </table>

      <blockquote>实用建议：隐藏层默认 ReLU/GELU，别用 Sigmoid；输出层根据任务选。激活函数的选择对训练稳定性影响很大，但很少是决定成败的唯一因素。</blockquote>
    `,
    links: ["neural-network", "backpropagation", "transformer"],
  },
  {
    id: "backpropagation",
    name: "反向传播",
    category: 3,
    tagline: "误差如何逆流而上",
    summary: "链式法则的工程实现：前向传播、计算梯度、逐层回溯更新。",
    content: `
      <h2>一句话定义</h2>
      <p><strong>反向传播（Backpropagation）</strong>是高效计算“损失函数对每个参数的梯度”的算法。它是训练一切神经网络的核心引擎。</p>

      <h2>完整训练循环</h2>
      <pre><code>① 前向传播（Forward）
   数据从输入层流向输出层，逐层计算，得到预测值 ŷ

② 计算损失
   L = 损失函数(ŷ, y_true)

③ 反向传播（Backward）
   从输出层开始，用链式法则把梯度一层层传回输入层
   求出每个参数的梯度 ∂L/∂w

④ 参数更新
   w ← w − 学习率 × ∂L/∂w

⑤ 回到 ①，重复数万~数百万次</code></pre>

      <h2>为什么从后往前算？</h2>
      <p>链式法则告诉我们：前一层的梯度 = 后一层梯度 × 两层之间的局部导数。<strong>后面的梯度算出来了，前面的就能复用</strong>——从输出往回算，每个中间结果只用算一次，复杂度 O(层数)。如果从前往后算，会有大量重复计算。</p>
      <blockquote>反向传播本质上只是链式法则 + 动态规划（缓存中间结果），没有更神秘的数学。</blockquote>

      <h2>举个具体例子</h2>
      <p>假设网络是 <code>x → h₁ → h₂ → ŷ</code>，损失 L 对第一层权重 w₁ 的梯度：</p>
      <pre><code>∂L/∂w₁ = ∂L/∂ŷ · ∂ŷ/∂h₂ · ∂h₂/∂h₁ · ∂h₁/∂w₁

—— 一条从输出一路连乘回 w₁ 的“导数链”</code></pre>

      <h2>梯度消失与爆炸</h2>
      <p>链式法则是连乘。网络很深时：</p>
      <ul>
        <li>每个因子都小于 1 → 连乘趋近 0 → <strong>梯度消失</strong>：前面几层学不到东西</li>
        <li>每个因子都大于 1 → 连乘指数增长 → <strong>梯度爆炸</strong>：参数剧烈震荡</li>
      </ul>
      <p><strong>应对方案</strong>：ReLU 激活、残差连接（ResNet）、梯度裁剪、批归一化 BatchNorm、合理的初始化策略（Xavier/He 初始化）。</p>
    `,
    links: ["neural-network", "math-calculus", "gradient-descent", "loss-function", "transformer"],
  },
  {
    id: "cnn",
    name: "CNN 卷积神经网络",
    category: 3,
    tagline: "为图像而生的架构",
    summary: "卷积、池化、感受野的原理，经典网络演化史，以及 CNN 的广泛应用。",
    content: `
      <h2>为什么普通网络处理不了图像</h2>
      <p>一张 1000×1000 的彩色图片有 300 万个像素。如果全连接，第一层参数就是天文数字，而且<strong>全连接忽略了图像的空间结构</strong>——相邻像素的相关性、平移不变性全被浪费了。</p>

      <h2>核心操作一：卷积（Convolution）</h2>
      <p>卷积就是用一个<strong>小滤镜（卷积核，如 3×3）</strong>在图片上滑动，逐块计算加权和。</p>
      <pre><code>输入图片        卷积核（学习“边缘检测”）      输出特征图
┌─────────┐      ┌─────┐                 ┌─────┐
│ 1 2 3   │      │ 1 0 │   滑动相乘求和    │ …   │
│ 4 5 6   │  *   │ 0 1 │   ────────────▶   │     │
│ 7 8 9   │      └─────┘                   └─────┘
└─────────┘</code></pre>
      <ul>
        <li>卷积核的权重是<strong>学出来的</strong>：有的学成边缘检测器，有的学成纹理检测器，有的学成眼睛探测器</li>
        <li><strong>权值共享</strong>：同一个卷积核扫遍全图，参数极少（一个 3×3 核只有 9 个参数），且具备<strong>平移不变性</strong>——猫出现在图片任何位置都能识别</li>
      </ul>

      <h2>核心操作二：池化（Pooling）</h2>
      <p>对特征图做下采样（如 2×2 区域取最大值），<strong>缩小尺寸、保留主要特征、增强平移鲁棒性</strong>，同时减少计算量。</p>

      <h2>典型 CNN 结构</h2>
      <pre><code>输入图片 → [卷积 → 激活 → 池化] × N → 展平 → 全连接 → 输出类别

浅层卷积核：边缘、颜色
中层卷积核：纹理、部件
深层卷积核：完整物体（猫、车、人脸）</code></pre>

      <h2>经典网络演化史</h2>
      <table>
        <tr><th>网络</th><th>年份</th><th>贡献</th></tr>
        <tr><td>LeNet</td><td>1998</td><td>第一个成功应用的 CNN（手写数字识别）</td></tr>
        <tr><td>AlexNet</td><td>2012</td><td>深度学习爆发起点，ImageNet 错误率骤降</td></tr>
        <tr><td>VGG</td><td>2014</td><td>证明“小卷积核堆叠”既深又有效</td></tr>
        <tr><td>ResNet</td><td>2015</td><td><strong>残差连接</strong>解决深层网络训练难题，152 层仍好训</td></tr>
      </table>

      <h2>CNN 不止于图像</h2>
      <p>CNN 也用于语音处理（一维卷积）、文本分类（TextCNN）、甚至 AlphaGo 的棋盘理解。其思想——<strong>局部连接 + 权值共享</strong>——是一切现代架构的灵感来源之一。</p>
    `,
    links: ["deep-learning", "neural-network", "backpropagation", "transformer"],
  },
  {
    id: "rnn",
    name: "RNN 循环神经网络",
    category: 3,
    tagline: "有记忆的序列处理者（已被 Transformer 取代）",
    summary: "循环结构、隐藏状态、LSTM/GRU 的门机制，以及长序列瓶颈。",
    content: `
      <h2>为什么需要 RNN</h2>
      <p>文本、语音、股价都是<strong>序列数据</strong>——元素之间有顺序依赖。“我 不 喜欢 你”和“我 喜欢 不 你”词相同但意思完全不同。普通网络把输入当作无序的袋子，RNN 则引入了<strong>记忆</strong>。</p>

      <h2>核心机制：循环</h2>
      <p>RNN 处理序列时，每一步都把<strong>上一步的隐藏状态 h 作为输入的一部分</strong>，实现信息在时间上的传递：</p>
      <pre><code>h_t = tanh(W·x_t + U·h_(t−1) + b)
y_t = 输出层(h_t)

h_t：t 时刻的隐藏状态（“对过去所有输入的记忆”）
也就是说：网络在每个时间步都“读入新词 + 回忆上文”</code></pre>

      <h2>长期依赖问题</h2>
      <p>句子开头提到“小明”，结尾代词“他”指谁？这需要记住几十步之前的信息。但普通 RNN 的记忆像传话游戏——信息每传一步就衰减一点，传到几十步后几乎消失（本质是反向传播中梯度消失/爆炸在时间维度上的体现）。</p>

      <h2>LSTM：长短期记忆网络</h2>
      <p><strong>LSTM</strong>（1997）通过精巧的“门控”结构解决了长期依赖：</p>
      <ul>
        <li><strong>遗忘门</strong>：决定丢弃记忆中的哪些部分</li>
        <li><strong>输入门</strong>：决定把新信息写入多少</li>
        <li><strong>输出门</strong>：决定当前输出多少记忆内容</li>
      </ul>
      <p>类比：普通 RNN 的工作记忆只有几秒；LSTM 像配了一个可擦写的笔记本，自己决定记什么、忘什么。<strong>GRU</strong> 是 LSTM 的简化版（两个门），参数更少，效果相当。</p>

      <h2>局限与落幕</h2>
      <p>RNN 家族的根本缺陷：</p>
      <ol>
        <li><strong>无法并行</strong>：必须按顺序一个词一个词处理，长文本训练极慢</li>
        <li><strong>记忆长度仍有限</strong>：实际很难记住几百步之前的内容</li>
      </ol>
      <p>2017 年 Transformer 问世后，凭<strong>完全并行 + 全局注意力</strong>迅速取代 RNN，成为 NLP 乃至所有模态的主流架构。学习时理解 RNN 的思想（状态传递、门控）仍有价值，但新项目基本不再使用。</p>
    `,
    links: ["deep-learning", "attention", "transformer", "neural-network"],
  },
  {
    id: "attention",
    name: "注意力机制",
    category: 3,
    tagline: "Transformer 的灵魂，让模型学会该看哪里",
    summary: "Query-Key-Value 结构、自注意力的计算过程与复杂度分析。",
    content: `
      <h2>直觉：人如何阅读</h2>
      <p>读到“苹果发布了新手机”时，你的注意力会自动聚焦在“苹果”和“手机”的关系上，而忽略“了”这种虚词。<strong>注意力机制就是让模型学会这种“按相关性分配关注度”的能力</strong>。</p>

      <h2>核心结构：Q、K、V</h2>
      <p>每个词向量会被投影成三个角色：</p>
      <table>
        <tr><th>角色</th><th>全称</th><th>类比</th></tr>
        <tr><td>Q（Query）</td><td>查询</td><td>我在找什么？</td></tr>
        <tr><td>K（Key）</td><td>键</td><td>我身上有什么标签？</td></tr>
        <tr><td>V（Value）</td><td>值</td><td>我实际携带的信息</td></tr>
      </table>
      <p>注意力分数 = Query 与 Key 的<strong>点积相似度</strong>，再对 Value 做加权求和：</p>
      <pre><code>Attention(Q, K, V) = softmax(Q·Kᵀ / √d) · V

Q·Kᵀ：每个词和每个词的匹配分数
√d：缩放因子，防止点积过大导致 softmax 饱和
softmax：分数归一化为“注意力权重”（和为 1）
· V：按权重混合所有词的信息</code></pre>

      <h2>自注意力计算示例</h2>
      <p>句子“小猫追蝴蝶，它很开心”：处理“它”这个词时，自注意力会给“小猫”很高的权重（而不是“蝴蝶”）——模型<strong>自动学会了代词指代</strong>。这种能力完全是从数据中训练出来的，没有任何人工语法规则。</p>

      <h2>相比 RNN 的革命性优势</h2>
      <table>
        <tr><th></th><th>RNN</th><th>自注意力</th></tr>
        <tr><td>序列长度记忆</td><td>只有几十步</td><td><strong>任意两词直接交互</strong>，距离无衰减</td></tr>
        <tr><td>并行计算</td><td>必须逐步算，无法并行</td><td>所有位置同时算，GPU 效率极高</td></tr>
      </table>
      <p>代价是计算量：注意力矩阵大小为 <code>序列长度²</code>，处理超长文本时成为瓶颈（这也是长上下文大模型昂贵的原因之一）。</p>

      <h2>多头注意力（Multi-Head Attention）</h2>
      <p>一个注意力头学一种关系（语法依赖），另一个头学另一种关系（指代、语义关联）。<strong>多头 = 多组并行的 Q/K/V，各自学习不同类型的关联模式</strong>，最后再拼接融合。Transformer 默认 8~96 个头。</p>
    `,
    links: ["rnn", "transformer", "math-linear-algebra", "embedding"],
  },
  {
    id: "transformer",
    name: "Transformer 架构",
    category: 3,
    tagline: "当今 AI 的基石：Attention Is All You Need",
    summary: "编码器-解码器结构、位置编码、残差与层归一化，以及为何统治了 AI。",
    content: `
      <h2>历史地位</h2>
      <p>2017 年谷歌论文《Attention Is All You Need》提出 Transformer。它<strong>彻底抛弃了循环（RNN）和卷积（CNN）</strong>，仅靠注意力机制就达到当时最好的翻译效果。此后 GPT、BERT、Llama、Claude 等几乎所有现代大模型都建立在这个架构上。</p>

      <h2>整体结构</h2>
      <pre><code>┌───────────── 编码器 Encoder（理解输入）─────────────┐
 输入 → 词嵌入+位置编码 → [多头注意力 → 前馈网络] × N 层
└──────────────────────────────────────────────────┘
                        ↓
┌───────────── 解码器 Decoder（生成输出）─────────────┐
 输出 → 词嵌入+位置编码 → [掩码注意力 → 交叉注意力 → 前馈] × N 层 → 输出概率
└──────────────────────────────────────────────────┘</code></pre>

      <h2>四大核心组件</h2>
      <h3>1. 多头自注意力（Multi-Head Self-Attention）</h3>
      <p>让每个词与句中所有词直接交互，捕捉任意距离的依赖。详见“注意力机制”节点。</p>

      <h3>2. 位置编码（Positional Encoding）★精妙之处</h3>
      <p>注意力本身不知道词的顺序——“我爱你”和“你爱我”对它是一样的！解决方案：给每个位置加上一个<strong>独特的编码向量</strong>（用不同频率的正弦/余弦函数生成），让模型能区分顺序。</p>

      <h3>3. 前馈网络（Feed-Forward Network）</h3>
      <p>每个位置独立经过同一个两层全连接网络（通常放大 4 倍再缩回），负责“非线性变换与知识存储”，参数量占模型的大头。</p>

      <h3>4. 残差连接 + 层归一化</h3>
      <p><code>输出 = LayerNorm(x + Sublayer(x))</code>。残差让梯度能顺畅流过几十上百层，层归一化稳定训练。这是能训练超深网络的关键工程技巧。</p>

      <h2>两大流派</h2>
      <table>
        <tr><th></th><th>编码器系（BERT 式）</th><th>解码器系（GPT 式）</th></tr>
        <tr><td>训练任务</td><td>双向理解（遮词填空）</td><td>单向生成（预测下一个词）</td></tr>
        <tr><td>擅长</td><td>理解、分类、抽取</td><td><strong>生成、对话、推理</strong></td></tr>
        <tr><td>代表</td><td>BERT、RoBERTa</td><td>GPT 系列、Llama、Claude</td></tr>
      </table>
      <blockquote>大语言模型 = 超大规模的（仅解码器）Transformer + 超大规模文本 + 下一个词预测。架构本身不复杂，规模才是魔法。</blockquote>
    `,
    links: ["attention", "llm", "pretraining", "cnn", "rnn"],
  },
  {
    id: "embedding",
    name: "Embedding 嵌入",
    category: 3,
    tagline: "把万物变成向量",
    summary: "词向量的原理、训练方法（Word2Vec）、语义空间特性与应用。",
    content: `
      <h2>核心思想</h2>
      <p>计算机只能处理数字，不能处理“猫”这个字。Embedding 就是把<strong>离散的符号（词、图片、用户、商品）映射成连续的向量</strong>，并且让语义信息编码在向量中。</p>
      <pre><code>“猫”    → [0.21, −0.45, 0.88, …, 0.13]   一个 768 维向量
“狗”    → [0.19, −0.41, 0.83, …, 0.11]   和“猫”的向量很接近
“汽车”  → [−0.67, 0.32, 0.05, …, 0.74]   和“猫”距离很远</code></pre>

      <h2>语义空间的奇妙性质</h2>
      <p>训练好的词向量空间呈现出惊人的规律性，即著名的<strong>向量算术</strong>：</p>
      <pre><code>国王(King) − 男人(Man) + 女人(Woman) ≈ 女王(Queen)
巴黎(Paris) − 法国(France) + 日本(Japan) ≈ 东京(Tokyo)</code></pre>
      <p>“性别”和“首都关系”这些抽象概念，变成了向量空间中<strong>可计算的方向</strong>。这说明模型确实从纯文本中无监督地学到了语义结构。</p>

      <h2>Word2Vec：经典的训练方法</h2>
      <ul>
        <li><strong>CBOW</strong>：用上下文预测中间的词</li>
        <li><strong>Skip-gram</strong>：用中间的词预测上下文（更常用）</li>
      </ul>
      <p>思路：把“词义”问题转化为“<strong>预测任务</strong>”——经常出现在相似上下文中的词（如“猫”和“狗”常搭配“喂食”“可爱”），向量就会趋近。预测只是手段，学到向量才是目的。</p>

      <h2>从静态词向量到上下文向量</h2>
      <table>
        <tr><th>技术</th><th>特点</th><th>局限</th></tr>
        <tr><td>Word2Vec / GloVe</td><td>每个词一个固定向量，简单高效</td><td>一词多义无法区分（“苹果”水果 vs 公司）</td></tr>
        <tr><td>BERT/GPT 的 Embedding</td><td><strong>上下文相关</strong>：同一个词在不同句子里向量不同</td><td>需要跑大模型，成本高</td></tr>
      </table>

      <h2>现代应用：Embedding 无处不在</h2>
      <ul>
        <li><strong>语义搜索</strong>：把文档和查询都变成向量，按向量相似度检索（RAG 的基础）</li>
        <li><strong>推荐系统</strong>：用户向量 × 物品向量算匹配度</li>
        <li><strong>图像/多模态</strong>：CLIP 把图片和文字放进同一个向量空间，实现“以文搜图”</li>
        <li><strong>向量数据库</strong>：专门存储和检索海量 Embedding</li>
      </ul>
      <blockquote>Embedding 是连接符号世界（文字）与数值世界（计算）的桥梁，也是现代 AI 应用层的基础设施。</blockquote>
    `,
    links: ["attention", "transformer", "unsupervised-learning", "vector-db", "rag"],
  },

  /* ==================== 大语言模型 ==================== */
  {
    id: "llm",
    name: "大语言模型（LLM）",
    category: 4,
    tagline: "用整个互联网训练出来的通用智能",
    summary: "LLM 的定义、能力边界、幻觉问题，以及 GPT 系列发展简史。",
    content: `
      <h2>什么是大语言模型</h2>
      <p><strong>大语言模型（Large Language Model, LLM）</strong>是在海量文本上预训练的、参数量巨大（十亿~万亿级）的语言模型。基于 Transformer 架构，用“预测下一个词”这样简单的目标，训练出惊人的通用能力。</p>
      <blockquote>令人意外的事实：没有人为“聊天”“翻译”“写代码”“推理”写任何专门代码。这些能力都是在“猜下一个词”的训练中自然涌现的。</blockquote>

      <h2>GPT 系列发展简史</h2>
      <table>
        <tr><th>模型</th><th>年份</th><th>里程碑</th></tr>
        <tr><td>GPT-1</td><td>2018</td><td>1.17 亿参数，证明预训练+微调的路线可行</td></tr>
        <tr><td>GPT-2</td><td>2019</td><td>15 亿参数，生成文本过于逼真一度“不敢完整发布”</td></tr>
        <tr><td>GPT-3</td><td>2020</td><td>1750 亿参数，展现出少样本学习能力，引爆行业</td></tr>
        <tr><td>ChatGPT</td><td>2022</td><td>GPT-3.5 + RLHF，对话体验质变，两个月用户破亿</td></tr>
        <tr><td>GPT-4 及之后</td><td>2023+</td><td>多模态、更长上下文、更强推理，模型进入“系统”时代</td></tr>
      </table>
      <p>同期开源阵营：Meta 的 <strong>LLaMA</strong> 系列、Mistral、DeepSeek 等，极大降低了使用门槛。</p>

      <h2>能力边界：会什么，不会什么</h2>
      <p><strong>擅长</strong>：语言理解与生成、知识问答、翻译、摘要、代码编写、格式转换、头脑风暴。</p>
      <p><strong>短板</strong>：</p>
      <ul>
        <li><strong>幻觉（Hallucination）</strong>：会一本正经地编造事实和引用——它是“生成听起来合理的文本”，不保证为真</li>
        <li><strong>知识有截止日期</strong>：不知道训练之后发生的事</li>
        <li><strong>不擅长精确计算</strong>：三位数乘法都可能出错</li>
        <li><strong>上下文长度有限</strong>：超出窗口的早期对话会“忘记”</li>
        <li><strong>无法主动行动</strong>：本身只是文本进文本出，需要外部工具</li>
      </ul>

      <h2>关键技术拼图</h2>
      <p>一个完整好用的 LLM 系统 = <strong>预训练</strong>（学知识）+ <strong>微调/对齐</strong>（学配合）+ <strong>提示词工程</strong>（会沟通）+ <strong>RAG / 工具</strong>（能查资料、能办事）。后面几个节点会逐一展开。</p>
    `,
    links: ["transformer", "pretraining", "fine-tuning", "rlhf", "prompt", "rag", "agent"],
  },
  {
    id: "pretraining",
    name: "预训练",
    category: 4,
    tagline: "一次学习，处处可用",
    summary: "预训练-微调范式、自监督训练、语料处理流程与训练成本。",
    content: `
      <h2>什么是预训练</h2>
      <p><strong>预训练（Pretraining）</strong>指在大规模通用数据上先训练一个“底子很好”的模型，再针对具体任务做少量调整（微调）。这改变了 NLP 的工作模式：</p>
      <table>
        <tr><th>时代</th><th>做法</th><th>问题</th></tr>
        <tr><td>2018 之前</td><td>每个任务从头训练一个小模型</td><td>每个任务都要标注数据，能力无法迁移</td></tr>
        <tr><td>2018 之后</td><td><strong>预训练大模型 + 微调</strong></td><td>一次预训练投入，下游任务只需少量数据</td></tr>
      </table>
      <blockquote>“预训练是读完了整个图书馆，微调是上岗培训。”——前者的成本极高（数百万美元级），但产出的模型是通用的。</blockquote>

      <h2>训练任务：自监督学习</h2>
      <p>互联网文本天然没有“标准答案”，LLM 用<strong>自监督</strong>的方式自建训练信号：</p>
      <pre><code>输入文本：「人工智能正在 改变 世界」
训练样本：[人工智能, 正在] → 预测 改变
          [人工智能, 正在, 改变] → 预测 世界</code></pre>
      <p>模型为了猜准下一个词，被迫学会：语法规则、事实知识、因果逻辑、推理模式。<strong>任务越简单，要胜任它需要的内部理解就越深</strong>——这就是“预测下一个词”催生智能的原因。</p>

      <h2>语料从哪来、怎么处理</h2>
      <ol>
        <li><strong>收集</strong>：网页（Common Crawl）、书籍、代码、论文、维基百科，数万亿词</li>
        <li><strong>清洗</strong>：去重、去广告、过滤低质与有害内容、隐私脱敏——清洗质量极大影响模型质量</li>
        <li><strong>分词（Tokenize）</strong>：文本切成 Token 序列（详见“Token”节点）</li>
        <li><strong>训练</strong>：数千张 GPU 并行训练数周~数月</li>
      </ol>

      <h2>训练成本</h2>
      <p>大模型预训练动辄消耗<strong>数万张 GPU 数月时间、数千万至上亿美元</strong>。这解释了为什么 LLM 集中在少数大公司手中，也催生了“开源模型”运动。</p>

      <h2>两个阶段，两种模型</h2>
      <ul>
        <li><strong>Base 模型</strong>：预训练完成，能力像“超级自动补全”，不会聊天，可能续写出不想要的内容</li>
        <li><strong>Chat/Instruct 模型</strong>：经过微调与对齐后，会按指令、以助手身份回答——我们平时用的都是这种</li>
      </ul>
    `,
    links: ["llm", "unsupervised-learning", "fine-tuning", "token", "scaling-law"],
  },
  {
    id: "token",
    name: "Token 与分词",
    category: 4,
    tagline: "LLM 眼中的语言单位",
    summary: "BPE 分词算法、Token 与计费/上下文的关系、中文分词特点。",
    content: `
      <h2>什么是 Token</h2>
      <p>LLM 不直接处理文字，而是处理 <strong>Token</strong>——文本被切分后的基本单位。它可以是：</p>
      <ul>
        <li>一个完整单词：<code>hello</code> → 1 个 token</li>
        <li>单词的一部分：<code>unbelievable</code> → <code>un</code> + <code>believ</code> + <code>able</code></li>
        <li>一个标点或空格：都是独立的 token</li>
        <li>一个汉字或偏旁：中文通常 1~2 字 = 1 个 token</li>
      </ul>

      <h2>为什么不用“词”作为单位</h2>
      <p>英文约 100 万词、中文汉字数万，词表太大会导致模型参数膨胀；而且遇到新词（如 “ChatGPT”）就没法处理。<strong>折中方案：子词（Subword）分词</strong>——常见词不拆，罕见词拆成片段，任何文本都能表示。</p>

      <h2>BPE：主流分词算法</h2>
      <p><strong>BPE（Byte Pair Encoding，字节对编码）</strong>的合并式思路：</p>
      <ol>
        <li>从字符/字节开始，语料中所有相邻对都算一遍频率</li>
        <li>把<strong>最高频的一对</strong>合并成一个新 token</li>
        <li>重复上万次，直到词表达到目标大小（如 5 万）</li>
      </ol>
      <pre><code>语料统计：
lo 出现 10 万次，l 和 o 各出现 9 万次
→ 合并 “lo” 成一个新 token
之后 “l” + “o” 两个 token 变成一个 “lo”，序列变短</code></pre>
      <p>GPT 用 BPE，BERT 用 WordPiece（思路几乎相同），Google 的 SentencePiece 是常用实现。</p>

      <h2>Token 的四个实际影响</h2>
      <table>
        <tr><th>影响</th><th>说明</th></tr>
        <tr><td><strong>计费</strong></td><td>API 按 Token 数量收费：输入 + 输出都算钱</td></tr>
        <tr><td><strong>上下文长度</strong></td><td>“128K 上下文” = 最多处理 128K 个 token</td></tr>
        <tr><td><strong>中文略吃亏</strong></td><td>中文信息密度高但 1 字 ≈ 1 token，同内容中文 token 数常多于英文</td></tr>
        <tr><td><strong>安全漏洞</strong></td><td>“提示注入”可利用分词边界构造攻击（如使用异常 Unicode）</td></tr>
      </table>

      <blockquote>记忆点：大模型输出是“逐个 token 生成概率 → 采样 → 拼成文本”。你看到的流畅文字，其实是几千次“下一个 token 预测”的接力。</blockquote>
    `,
    links: ["pretraining", "llm", "inference", "prompt"],
  },
  {
    id: "fine-tuning",
    name: "微调（Fine-tuning）",
    category: 4,
    tagline: "让通用模型变成你的专家",
    summary: "全参数微调 vs 参数高效微调（LoRA/QLoRA），SFT 流程与数据质量。",
    content: `
      <h2>什么是微调</h2>
      <p>预训练模型是“通才”，微调（Fine-tuning）就是用<strong>领域数据或任务数据继续训练</strong>，让它变成“专才”：医疗问答模型、法律文书助手、你的专属客服。</p>

      <h2>全参数微调（Full Fine-tuning）</h2>
      <p>更新模型的所有参数。效果最好，但代价巨大：</p>
      <ul>
        <li>70 亿参数模型的全量微调，单卡放不下，需要多卡并行</li>
        <li>每做一个任务/客户都要保存一份完整模型副本，存储成本高</li>
      </ul>

      <h2>参数高效微调（PEFT）★当前主流</h2>
      <p>核心洞察：预训练模型已经很有能力，调整它<strong>不需要动所有参数</strong>。只训练少量新增参数即可达到接近全量微调的效果：</p>
      <table>
        <tr><th>方法</th><th>原理</th><th>训练参数量</th></tr>
        <tr><td><strong>LoRA</strong></td><td>冻结原权重 W，只学一个低秩分解 ΔW = A×B（秩通常 8~64）</td><td><strong>0.1% ~ 1%</strong></td></tr>
        <tr><td>QLoRA</td><td>LoRA + 原模型量化到 4bit，单张消费级显卡可微调 70B 模型</td><td>0.1% ~ 1%</td></tr>
        <tr><td>Prompt Tuning</td><td>只训练输入前拼接的少量“软提示”向量</td><td>&lt;0.01%</td></tr>
      </table>
      <p><strong>LoRA 的意义</strong>：微调 70B 模型从“需要 8 张 A100”变成“一张 4090 就能跑”；不同任务存不同的小适配器文件（几十 MB），灵活切换。</p>

      <h2>SFT：监督微调流程</h2>
      <pre><code>1. 准备数据：数千~数十万条「指令 → 理想回答」对
2. 构造训练样本：把问答对拼成对话格式
3. 只在“回答部分”计算损失（让模型学怎么答，而非重复问题）
4. 低学习率训练 1~3 个 epoch
5. 评估、迭代数据质量</code></pre>

      <h2>数据质量 > 数据数量</h2>
      <blockquote>微调界的名言：“It's all about the data.” 几百条高质量、精心编写的样本，效果常胜过几万条机器生成的平庸数据。微调失败的案例中 90% 是数据问题：格式混乱、答案质量差、分布有偏。</blockquote>

      <h2>微调 vs RAG 怎么选</h2>
      <ul>
        <li>要让模型掌握<strong>新知识</strong>（如内部文档）→ 用 RAG，不要微调</li>
        <li>要让模型改变<strong>行为风格/输出格式/专业能力</strong> → 用微调</li>
        <li>实践中两者经常组合使用</li>
      </ul>
    `,
    links: ["llm", "pretraining", "rlhf", "rag", "lora-note"],
  },
  {
    id: "rlhf",
    name: "RLHF 人类反馈对齐",
    category: 4,
    tagline: "从像人说话到说对人有用的话",
    summary: "对齐的三步流程、奖励模型、PPO 及其替代方案（DPO）。",
    content: `
      <h2>为什么需要 RLHF</h2>
      <p>预训练只教模型“预测下一个词”，结果是模型学会了互联网上人类语言的统计规律——包括抬杠、跑题、编造和有害内容。<strong>RLHF（Reinforcement Learning from Human Feedback）用人类偏好做奖励信号，把模型对齐到“有用、诚实、无害”的方向</strong>。</p>

      <h2>三步流程</h2>
      <h3>第一步：监督微调（SFT）</h3>
      <p>人工编写高质量的“指令 → 回答”示范数据，教模型基本的助手行为（如何回答问题、拒绝不当请求、承认不知道）。</p>

      <h3>第二步：训练奖励模型（Reward Model）</h3>
      <p>让模型对同一个问题生成多个回答，<strong>人类标注员进行排序</strong>（A 比 B 好）。用这些排序数据训练一个“裁判”模型——奖励模型，它能自动给任何回答打分。</p>

      <h3>第三步：强化学习优化（PPO）</h3>
      <p>用 PPO 算法调整语言模型，让它生成的回答在奖励模型那里得高分，同时加上<strong>KL 散度约束</strong>防止模型为了讨好“裁判”而走得太偏（ reward hacking 奖励作弊）。</p>
      <pre><code>目标 = 奖励模型的分数 − KL惩罚 × (新模型 vs 参考模型的偏差)

第一项：回答要让“裁判”喜欢
第二项：不能偏离原始模型太远，防止钻空子</code></pre>

      <h2>一个经典问题：奖励作弊（Reward Hacking）</h2>
      <p>模型可能学会“奖励模型喜欢听什么”而不是“真正好的回答”——比如裁判偏好长回答，模型就变得啰嗦。这是所有强化学习系统的通病：你优化什么指标，模型就会在什么指标上投机取巧。</p>

      <h2>DPO：更简单的新范式</h2>
      <p><strong>DPO（直接偏好优化）</strong>跳过了单独的奖励模型和 PPO，直接用“好回答 vs 差回答”的对比数据做监督学习。效果接近 RLHF 但实现简单得多、训练稳定得多，目前开源社区广泛采用。</p>

      <h2>对齐的意义与局限</h2>
      <p>RLHF 让 ChatGPT 从“高级自动补全”变成真正可用的产品。但对齐是<strong>减少有害输出，不是根绝</strong>——越狱攻击依然存在。这是当前 AI 安全研究的核心战场之一。</p>
    `,
    links: ["reinforcement-learning", "llm", "fine-tuning", "diffusion"],
  },
  {
    id: "prompt",
    name: "提示词工程",
    category: 4,
    tagline: "与 AI 高效沟通的艺术",
    summary: "Zero-shot / Few-shot、思维链 CoT、结构化提示与常见技巧。",
    content: `
      <h2>什么是提示词工程</h2>
      <p><strong>提示词（Prompt）</strong>是发给模型的指令文本。提示词工程（Prompt Engineering）是研究如何组织这段文字，让模型输出更准、更稳、更符合需求的实践技能。</p>

      <h2>基础概念</h2>
      <ul>
        <li><strong>System Prompt（系统提示）</strong>：定义模型的角色和全局规则，优先级最高（如“你是一个严谨的翻译”）</li>
        <li><strong>User Prompt（用户提示）</strong>：用户当次的具体请求</li>
        <li><strong>Zero-shot</strong>：直接提问，不给例子</li>
        <li><strong>Few-shot</strong>：提问前给几个输入输出的示例，模型照猫画虎，效果显著提升</li>
      </ul>
      <pre><code>Few-shot 示例：
Q: 这饭真香 → 正面
Q: 太难吃了，再也不来了 → 负面
Q: 味道还行，就是上菜慢 → 中性
Q: 这个商场很好逛，我逛了一下午 →（模型回答：正面）</code></pre>

      <h2>核心技巧一：思维链（Chain-of-Thought, CoT）</h2>
      <p>对推理类任务，加一句 <strong>“请一步一步思考”</strong>（Let's think step by step），让模型把推理过程显式写出来再作答，算术、逻辑题准确率大幅提升。原理：给模型更多 token“打草稿”，分步计算比一步到位错误率低。</p>
      <pre><code>❌ “这道题答案是？”        —— 模型直接猜，易错
✅ “请一步步推理，最后给出答案” —— 先推理后结论，更准</code></pre>

      <h2>核心技巧二：结构化提示</h2>
      <ul>
        <li><strong>角色设定</strong>：“你是一位有 10 年经验的儿科医生”</li>
        <li><strong>任务拆解</strong>：复杂任务拆成多步，分轮对话推进</li>
        <li><strong>格式约束</strong>：“只输出 JSON，字段为…”</li>
        <li><strong>提供上下文</strong>：把相关文档贴进提示词（就是手工版 RAG）</li>
        <li><strong>让模型自检</strong>：“检查你的回答是否有事实错误”</li>
      </ul>

      <h2>局限与演进</h2>
      <p>提示词工程门槛低、迭代快，但<strong>脆弱</strong>：换个模型、换个措辞效果可能完全不同。随着模型能力变强，简单直接的清晰指令往往胜过花里胡哨的“咒语”。同时，AI 编程正在把很多提示词技巧固化成系统提示，使用者无感。</p>
      <blockquote>黄金法则：准确 > 聪明。把任务说清楚（背景、要求、格式、例子），胜过任何玄学技巧。</blockquote>
    `,
    links: ["llm", "token", "rag", "agent"],
  },
  {
    id: "scaling-law",
    name: "规模定律 Scaling Law",
    category: 4,
    tagline: "越大越聪明？可预测的 AI 增长曲线",
    summary: "Scaling Law 公式与结论、涌现能力、算力-数据-参数的最优配比。",
    content: `
      <h2>什么是规模定律</h2>
      <p>2020 年 OpenAI 论文发现：模型性能（测试损失）与<strong>参数量、训练数据量、算力</strong>之间存在平滑、可预测的幂律关系——log(损失) 与 log(规模) 近似线性。这意味着：</p>
      <blockquote>只要加大规模，性能就能稳定提升，而且提升幅度可以提前预测。这就是大模型时代“暴力美学”的理论基础。</blockquote>

      <h2>幂律关系</h2>
      <pre><code>Loss ∝ N^(−α)    N = 参数量
Loss ∝ D^(−β)    D = 训练数据量（token 数）
Loss ∝ C^(−γ)    C = 算力（FLOPs）

α、β、γ 是拟合出来的正常数</code></pre>
      <p>重要推论：<strong>参数、数据、算力要同步扩大</strong>。只堆参数不增数据（早期 Chinchilla 之前的做法）是浪费——70B 模型配 1.4T token 才是高效配比（“Chinchilla 定律”）。</p>

      <h2>涌现能力（Emergent Abilities）</h2>
      <p>某些能力在模型规模突破某个阈值后<strong>突然出现</strong>，此前几乎没有。比如：</p>
      <ul>
        <li>小规模模型：加减法都不会</li>
        <li>突然某一刻：会多位数加减、会做逻辑推理、会遵循复杂指令</li>
      </ul>
      <p>涌现现象有争议（有人认为只是评测指标的突变），但它很好地解释了为什么 GPT-3 比 GPT-2 “突然”有了质变。</p>

      <h2>边界与反思</h2>
      <p>Scaling Law 并非万能：</p>
      <ul>
        <li>数据总量有上限——高质量人类文本快被“用完”了</li>
        <li>推理成本随规模线性甚至更快增长，越大越贵</li>
        <li>Scaling 提升的是“预测能力”，不等于推理、规划等高层智能</li>
      </ul>
      <p>因此行业正在探索后 Scaling 时代的方向： test-time compute（推理时多算，如 o1/R1 的慢思考）、合成数据、架构创新等。</p>
    `,
    links: ["llm", "pretraining", "transformer", "inference"],
  },

  /* ==================== 生成式 AI ==================== */
  {
    id: "diffusion",
    name: "扩散模型 Diffusion",
    category: 5,
    tagline: "Stable Diffusion、Midjourney 背后的原理",
    summary: "前向加噪与反向去噪过程、与自回归生成的对比。",
    content: `
      <h2>生成方式的两大流派</h2>
      <table>
        <tr><th>流派</th><th>代表</th><th>生成方式</th></tr>
        <tr><td>自回归</td><td>GPT、早期图像生成</td><td>从左到右逐个生成 token/像素</td></tr>
        <tr><td>扩散</td><td>Stable Diffusion、Midjourney、DALL-E 3</td><td><strong>从纯噪声逐步去噪</strong>，整体打磨</td></tr>
      </table>

      <h2>扩散模型的直觉</h2>
      <p>想象你有一张清晰的照片，不断往上面撒噪声：</p>
      <pre><code>清晰照片 → 加一点噪 → 再加噪 → … → 完全的高斯噪声（纯雪花点）

前向过程（训练用）：逐步加噪，直到图像消失
反向过程（生成用）：学会每一步“去掉一点噪”，从纯噪声还原出图像</code></pre>
      <p>训练任务极其简单：<strong>给定一张被加了噪声的图，预测加进去的噪声是什么</strong>。模型学会“认噪”之后，就能反过来一步步降噪，从随机噪声中“雕刻”出图像。</p>

      <h2>为什么效果好</h2>
      <ul>
        <li>训练目标稳定，不像 GAN 那样容易训练崩溃</li>
        <li>每一步去噪只需小修正，相当于把“一口气画完”分解成几千步小任务</li>
        <li>天然支持引导（Classifier-Free Guidance）：用文本提示控制每步去噪方向，实现“文生图”</li>
      </ul>

      <h2>关键加速：Latent Diffusion</h2>
      <p>Stable Diffusion 的革命性改进：<strong>不在像素空间而在潜空间（Latent Space）去噪</strong>。先用一个 VAE 把图片压缩 8 倍（图像 → 更小的潜向量），扩散过程在这个压缩空间里进行，生成完再解码回像素。这使得消费级显卡也能跑文生图。</p>

      <h2>统一视角：都是“预测”的变体</h2>
      <blockquote>LLM 预测下一个词，扩散模型预测下一步的噪声——生成式 AI 的两大巨头本质都是“预测任务”，只是预测的对象不同。理解了这一点，就抓住了生成式 AI 的底层统一性。</blockquote>
    `,
    links: ["llm", "gan", "multimodal", "math-probability"],
  },
  {
    id: "gan",
    name: "GAN 生成对抗网络",
    category: 5,
    tagline: "伪造者与鉴定师的博弈",
    summary: "生成器-判别器对抗训练，GAN 的应用与为何被扩散模型取代。",
    content: `
      <h2>核心思想：一场博弈</h2>
      <p><strong>GAN（Generative Adversarial Network，2014）</strong>由两个网络互相对抗组成：</p>
      <ul>
        <li><strong>生成器（Generator）</strong>：负责造假——把随机噪声变成伪造样本（假图片）</li>
        <li><strong>判别器（Discriminator）</strong>：负责鉴定——判断输入是真实数据还是生成器造的假</li>
      </ul>
      <pre><code>训练循环：
生成器造一批假图 → 判别器学习分辨真假 →
生成器学习“骗过判别器” → 判别器升级鉴别手段 →
循环往复……直到判别器再也分不出真假</code></pre>
      <blockquote>类比造假币者与警察的军备竞赛：假币越做越真，鉴定技术越来越高，最终假币逼真到以假乱真。此时生成器就学会了“真实数据长什么样”。</blockquote>

      <h2>技术亮点</h2>
      <ul>
        <li>这是<strong>对抗训练</strong>思想的先驱——用一个模型的梯度作为另一个模型的训练信号</li>
        <li>StyleGAN 生成的高清人脸曾轰动一时，“此人不存在”网站就是 GAN 的杰作</li>
        <li>在<strong>数据增强、超分辨率、风格迁移</strong>上表现出色</li>
      </ul>

      <h2>致命缺陷</h2>
      <table>
        <tr><th>问题</th><th>表现</th></tr>
        <tr><td>训练不稳定</td><td>两个网络要精心平衡，稍微失衡就崩溃（模式坍塌：生成器只输出几种相似样本）</td></tr>
        <tr><td>难以收敛</td><td>没有明确收敛指标，loss 曲线几乎无法判断训练好坏</td></tr>
        <tr><td>条件控制弱</td><td>想让 GAN 按文本生成指定内容，很难控制</td></tr>
      </table>

      <h2>为何被扩散模型取代</h2>
      <p>2022 年后扩散模型以<strong>训练稳定、文本控制精准、生成质量更高</strong>的优势全面胜出，文生图领域几乎不再有 GAN 的位置。但 GAN 奠定的“对抗训练”思想依然影响深远（如 AI 安全中的红队对抗、GAN 式数据增强）。</p>
    `,
    links: ["diffusion", "deep-learning", "rlhf"],
  },
  {
    id: "multimodal",
    name: "多模态 AI",
    category: 5,
    tagline: "能看、能听、会说的通用智能",
    summary: "模态对齐、视觉编码器+LLM 架构、CLIP/GPT-4V 与统一模型趋势。",
    content: `
      <h2>什么是多模态</h2>
      <p><strong>模态（Modality）</strong>是信息的存在形式：文字、图片、音频、视频、传感器数据。人类天然是多模态的——眼睛看、耳朵听、大脑统一理解。多模态 AI 就是让模型具备这种能力。</p>

      <h2>核心挑战：对齐不同模态</h2>
      <p>文字在“词向量空间”，图片在“像素/CNN 特征空间”，它们维度不同、结构不同。多模态的关键就是<strong>把不同模态映射到同一个语义空间</strong>，让“猫的图片”和“猫这个字”距离很近。</p>
      <pre><code>                  ┌─ 文本编码器 → “一只猫在睡觉” 的向量 ─┐
对比学习（CLIP）→  ↓                                  × 对齐
                  └─ 图像编码器 → 猫的照片的向量      ─┘
训练目标：匹配的图文对向量相近，不匹配的距离拉远</code></pre>
      <p><strong>CLIP</strong>（OpenAI, 2021）用 4 亿图文对训练出这个对齐空间，效果惊人：不仅能以文搜图，还成为 Stable Diffusion 理解提示词的基础。</p>

      <h2>主流架构：视觉编码器 + LLM</h2>
      <p>当前多模态大模型（GPT-4V、Claude、Gemini、Qwen-VL）的通用配方：</p>
      <ol>
        <li>视觉编码器（类 ViT）把图片切成 patch，编码成一串“视觉 token”</li>
        <li>通过投影层把视觉 token 映射到 LLM 的词向量空间</li>
        <li>LLM 把视觉 token 和文字 token 混合在一起统一处理</li>
      </ol>
      <p>妙处：<strong>LLM 不需要改架构</strong>，图片只是另一种“外语”。训练时先冻结视觉编码器和 LLM，只训练中间的“翻译层”（alignment），成本可控。</p>

      <h2>能力全景</h2>
      <ul>
        <li><strong>图像理解</strong>：看图问答、文档理解、图表分析、代码截图转代码</li>
        <li><strong>图像生成</strong>：文生图、图像编辑（扩图、换风格）</li>
        <li><strong>语音</strong>：语音识别（ASR）、语音合成（TTS）、端到端语音对话</li>
        <li><strong>视频</strong>：视频理解、文生视频（Sora、可灵、Veo）</li>
      </ul>

      <h2>趋势：走向统一模型</h2>
      <blockquote>方向很明确：一个模型同时理解和生成所有模态，信息在统一的 token 空间流动。当模型“看过”视频、“听过”声音，它对世界的理解会超过只读过文本的模型——这可能是通往更强智能的关键路径。</blockquote>
    `,
    links: ["diffusion", "transformer", "embedding", "llm"],
  },

  /* ==================== AI 工程 ==================== */
  {
    id: "rag",
    name: "RAG 检索增强生成",
    category: 6,
    tagline: "让大模型开卷考试",
    summary: "RAG 完整流水线、为何优于微调、向量检索与常见失败模式。",
    content: `
      <h2>解决什么问题</h2>
      <p>LLM 的三大痛点：<strong>知识过时、容易幻觉、不知道你的私有数据</strong>。RAG（Retrieval-Augmented Generation，检索增强生成）的思路是：回答前先查资料，把查到的事实塞进提示词，让模型<strong>基于证据作答（开卷考试）</strong>，而不是凭记忆硬编（闭卷考试）。</p>

      <h2>完整流水线</h2>
      <pre><code>【离线：知识入库】
文档 → 切块(Chunking) → Embedding 向量化 → 存入向量数据库

【在线：问答】
用户提问 → Embedding → 向量检索(Top-K) →
把「检索结果 + 用户问题」组装进提示词 → LLM 生成 → 返回答案</code></pre>

      <h2>各步骤关键细节</h2>
      <h3>1. 文档切分（Chunking）</h3>
      <p>太长浪费上下文且检索不精确，太短缺少语义。通常 300~800 token 一块，按段落/标题边界切，块之间保留少量重叠（overlap）防止语义断裂。</p>
      <h3>2. 向量检索</h3>
      <p>余弦相似度找最相关的 K 个块。增强手段：混合检索（向量 + 关键词 BM25）、重排序（Rerank 模型二次精排）、元数据过滤。</p>
      <h3>3. 生成约束</h3>
      <p>提示词中明确：“仅根据以下资料回答，资料没说的就回答不知道”——降低幻觉的最后一道闸。</p>

      <h2>RAG vs 微调：知识更新该选谁</h2>
      <table>
        <tr><th></th><th>RAG</th><th>微调</th></tr>
        <tr><td>知识更新</td><td>换文档即可，实时</td><td>要重新训练，滞后</td></tr>
        <tr><td>可溯源</td><td>✅ 能给出处</td><td>❌ 说不清依据</td></tr>
        <tr><td>成本</td><td>低</td><td>高</td></tr>
        <tr><td>改变行为风格</td><td>❌</td><td>✅</td></tr>
      </table>

      <h2>常见失败模式</h2>
      <ul>
        <li><strong>检索不到</strong>：文档切块不合理 / Embedding 模型不给力</li>
        <li><strong>检索到但没用</strong>：K 太小、噪声太多淹没关键信息</li>
        <li><strong>组装失败</strong>：塞进提示词的资料格式混乱，模型没读懂</li>
        <li><strong>多跳问题</strong>：问题需要串联多个文档才能回答，单次检索搞不定（需要 Agentic RAG / 图检索）</li>
      </ul>
      <blockquote>工程经验：RAG 效果不好的排查顺序永远是——先看检索准不准，再看提示词写得对不对，最后才怀疑模型能力。绝大多数问题出在检索环节。</blockquote>
    `,
    links: ["llm", "vector-db", "embedding", "fine-tuning", "agent"],
  },
  {
    id: "vector-db",
    name: "向量数据库",
    category: 6,
    tagline: "为语义搜索而生的数据库",
    summary: "向量索引原理（HNSW）、主流产品对比，以及与传统数据库的关系。",
    content: `
      <h2>解决什么问题</h2>
      <p>传统数据库查的是<strong>精确匹配</strong>（“id = 123”）。而 AI 场景要查的是<strong>语义相似</strong>（“和这段话意思相近的文档”）。百万级向量两两算相似度太慢，向量数据库就是为了<strong>高效近似搜索</strong>而生。</p>

      <h2>核心能力：ANN 近似最近邻搜索</h2>
      <p>精确最近邻（精确算所有距离）复杂度太高，工程上用<strong>近似算法</strong>换 100~1000 倍速度，牺牲 1% 以内的准确率：</p>
      <ul>
        <li><strong>HNSW（分层导航小世界图）</strong>★当前主流：把向量连成一张多层图，查询时从顶层稀疏图 coarse 定位，逐层细化到底层精查。像“从高速路逐级下到小巷”</li>
        <li><strong>IVF（倒排索引）</strong>：先把向量聚类成桶，查询只扫最相关的几个桶，快但可能漏</li>
        <li><strong>PQ（乘积量化）</strong>：压缩向量降低内存，适合亿级规模</li>
      </ul>

      <h2>主流产品一览</h2>
      <table>
        <tr><th>产品</th><th>类型</th><th>特点</th></tr>
        <tr><td>Pinecone</td><td>云服务</td><td>全托管免运维，上手最快，贵</td></tr>
        <tr><td>Milvus / Zilliz</td><td>开源+云</td><td>专为向量而生，亿级规模，功能最全</td></tr>
        <tr><td>Qdrant / Weaviate</td><td>开源</td><td>轻量好用，Rust 实现性能好，社区活跃</td></tr>
        <tr><td>pgvector</td><td>PostgreSQL 插件</td><td>已有 PG 直接加向量能力，中小规模首选</td></tr>
        <tr><td>Chroma / FAISS</td><td>嵌入式/库</td><td>本地开发、原型验证神器</td></tr>
        <tr><td>Elasticsearch / Redis</td><td>传统库扩展</td><td>老系统加向量检索的平滑路径</td></tr>
      </table>

      <h2>选型建议</h2>
      <ul>
        <li>个人项目 / Demo：<strong>Chroma、FAISS、SQLite-VSS</strong>，零部署</li>
        <li>已有 PostgreSQL：<strong>pgvector</strong>，别引入新组件</li>
        <li>生产环境十万~百万级：<strong>Qdrant / Milvus</strong></li>
        <li>同时要关键词搜索：<strong>ES 或混合方案（向量+BM25）</strong></li>
      </ul>

      <blockquote>注意：向量数据库不是大模型——它只负责“找到相似的”，不理解语义（理解语义的是生成 Embedding 的模型）。把两者混为一谈是初学者最常见的误解。</blockquote>
    `,
    links: ["embedding", "rag", "inference"],
  },
  {
    id: "agent",
    name: "AI Agent 智能体",
    category: 6,
    tagline: "从会说到会做的进化",
    summary: "Agent 的核心循环（ReAct）、工具调用、多智能体协作与工程挑战。",
    content: `
      <h2>什么是 AI Agent</h2>
      <p>普通 LLM 是“你问一句、它答一句”的静态对话。<strong>Agent（智能体）</strong>让模型进入一个循环：<strong>观察 → 思考 → 行动 → 观察结果 → 再思考</strong>，自主完成多步骤的复杂任务。</p>
      <blockquote>类比：普通 LLM 像一位电话咨询师——只能给建议；Agent 像一位派出去的助理——能自己查资料、用软件、跑流程，最后交付结果。</blockquote>

      <h2>核心循环：ReAct</h2>
      <pre><code>Thought（思考）：我需要先查一下用户的订单状态
Action（行动）：调用工具 get_order(user_id=123)
Observation（观察）：工具返回“订单已发货，单号 SF789”
Thought：根据单号生成物流查询链接……
Action：调用工具 generate_link(SF789)
……直到得出最终答案</code></pre>
      <p><strong>ReAct = Reasoning（推理）+ Acting（行动）交替进行</strong>。模型把中间的思考过程显式写出来（这也让它比“一口气直接答”更可靠），并根据工具返回动态调整下一步。</p>

      <h2>三大核心组件</h2>
      <table>
        <tr><th>组件</th><th>作用</th><th>例子</th></tr>
        <tr><td><strong>规划 Planning</strong></td><td>把大任务拆解成小步骤</td><td>“写市场报告”→ 查数据 → 分析 → 写稿 → 校对</td></tr>
        <tr><td><strong>工具 Tools</strong></td><td>让模型能操作外部世界</td><td>搜索、代码执行、数据库查询、发邮件、调 API</td></tr>
        <tr><td><strong>记忆 Memory</strong></td><td>跨步骤保存上下文</td><td>短期：对话历史；长期：用户偏好、任务笔记</td></tr>
      </table>

      <h2>工具调用：Function Calling</h2>
      <p>现代 LLM 原生支持：你向模型声明可用工具的 JSON Schema，模型在需要时输出结构化的调用请求（函数名 + 参数），你的代码执行后把结果回传。<strong>Function Calling 是连接“语言智能”与“软件系统”的桥梁</strong>，也是 Agent 的工程基础。</p>

      <h2>单 Agent vs 多 Agent</h2>
      <ul>
        <li><strong>单 Agent + 多工具</strong>：大多数场景够用，简单可控（LangChain、各家 SDK）</li>
        <li><strong>多 Agent 协作</strong>：不同角色的 Agent 分工（研究员/写手/审稿人），模拟团队工作。代表框架：AutoGen、CrewAI、MetaGPT。效果好但成本高、调试难</li>
      </ul>

      <h2>现实挑战</h2>
      <ul>
        <li><strong>可靠性</strong>：多步骤串联，每步 95% 准确，30 步后只剩 21%——错误会累积</li>
        <li><strong>成本与延迟</strong>：每步都调大模型，又慢又贵</li>
        <li><strong>失控风险</strong>：Agent 循环没有天然的终止保证，需要步数限制、人工确认等护栏</li>
      </ul>
      <blockquote>工程实践：把 Agent 当“需要被监督的初级员工”——给清晰的任务边界、必要的审批节点、完善的日志，而不是给它完全的自由。</blockquote>
    `,
    links: ["llm", "prompt", "rag", "inference"],
  },
  {
    id: "inference",
    name: "推理与部署",
    category: 6,
    tagline: "让模型跑起来：从实验室到生产线",
    summary: "训练 vs 推理、量化、KV Cache、主流推理框架与 API vs 自部署。",
    content: `
      <h2>训练 vs 推理</h2>
      <table>
        <tr><th></th><th>训练（Training）</th><th>推理（Inference）</th></tr>
        <tr><td>干什么</td><td>调整参数学知识</td><td>用固定参数生成回答</td></tr>
        <tr><td>计算特点</td><td>前向 + 反向传播，算力需求是推理的 3~4 倍</td><td>只有前向传播</td></tr>
        <tr><td>频率</td><td>一次（数月）</td><td>每天亿次级</td></tr>
        <tr><td>用户感知</td><td>无</td><td><strong>速度、成本、体验全在这里</strong></td></tr>
      </table>

      <h2>核心优化技术</h2>
      <h3>1. 量化（Quantization）</h3>
      <p>模型参数默认 FP16/BF16（2 字节）。量化用更低精度表示：</p>
      <ul>
        <li><strong>INT8</strong>：体积减半，精度损失很小</li>
        <li><strong>INT4（GPTQ / AWQ）</strong>：体积缩到 1/4，如 70B 模型从 140GB 压到 35GB，单卡可跑，精度损失约 1~2%</li>
      </ul>
      <h3>2. KV Cache</h3>
      <p>生成是自回归的：每生成一个新 token，都要重新计算全部注意力——但之前的 K、V 矩阵其实没变。<strong>把它们缓存起来</strong>，每步只需算新 token，速度提升数倍。代价是显存占用随上下文线性增长。</p>
      <h3>3. 连续批处理（Continuous Batching）</h3>
      <p>不同请求生成长度不同，传统静态批处理要“齐步走”等最慢的。vLLM 的 PagedAttention 允许请求动态进出批处理，GPU 利用率大幅提升。</p>

      <h2>主流推理框架</h2>
      <table>
        <tr><th>框架</th><th>特点</th></tr>
        <tr><td><strong>vLLM</strong></td><td>高吞吐服务首选，PagedAttention 核心</td></tr>
        <tr><td>Ollama / llama.cpp</td><td>本地跑模型的最简方案，Mac 友好，“一行命令跑 Llama”</td></tr>
        <tr><td>TensorRT-LLM</td><td>英伟达官方，极致 GPU 性能</td></tr>
        <tr><td>SGLang</td><td>结构化输出、多模态场景表现好</td></tr>
      </table>

      <h2>API 调用 vs 自己部署</h2>
      <table>
        <tr><th></th><th>API（Claude/OpenAI/DeepSeek）</th><th>自部署开源模型</th></tr>
        <tr><td>上手</td><td>✅ 注册即用</td><td>需要 GPU 和运维</td></tr>
        <tr><td>成本</td><td>按量付费，量小划算</td><td>前期投入大，量大划算</td></tr>
        <tr><td>数据隐私</td><td>数据出域</td><td>✅ 完全本地</td></tr>
        <tr><td>可控性</td><td>受服务商限制</td><td>✅ 完全可控</td></tr>
      </table>
      <blockquote>个人开发者建议：先用 API 验证想法，有稳定需求和隐私顾虑后再考虑自部署。Ollama + 开源模型是当前体验本地 LLM 的最佳入口。</blockquote>
    `,
    links: ["llm", "scaling-law", "vector-db", "agent"],
  },

  /* ==================== 补充节点 ==================== */
  {
    id: "lora-note",
    name: "LoRA 低秩适配",
    category: 6,
    tagline: "四两拨千斤的参数高效微调",
    summary: "低秩分解的数学直觉、为什么它有效、QLoRA 与 Adapter 生态。",
    content: `
      <h2>核心思想</h2>
      <p>预训练模型的权重矩阵 W 已经很好，微调要做的调整 ΔW 可能<strong>内在维度很低</strong>——不需要改所有元素，只用两个小矩阵就能表达：</p>
      <pre><code>W' = W + ΔW = W + A × B

W：预训练的 d×d 大矩阵（冻结不动）
A：d×r 矩阵  ┐ r 是秩，通常 8~64，远小于 d
B：r×d 矩阵  ┘ 只需训练 A 和 B，参数量降到原来的 ~0.1%

例：d = 4096，r = 16 → 原矩阵 1677 万参数，LoRA 只需 13 万</code></pre>
      <blockquote>类比：一部高清电影不需要重拍，只加一个“滤镜层”就能调成不同风格。W 是电影，A×B 就是滤镜。</blockquote>

      <h2>为什么低秩就够</h2>
      <p>研究发现：预训练模型在下游任务上的参数调整，能量集中在少数几个“方向”上（类似矩阵的主要特征值）。用低秩矩阵捕捉这些主方向，就能覆盖绝大部分微调收益。这也呼应了深度学习的一个普遍现象——<strong>有效维度远低于名义维度</strong>。</p>

      <h2>工程优势</h2>
      <ul>
        <li><strong>显存</strong>：不存优化器状态（只给 A、B 建），70B 模型微调显存需求降低 90%+</li>
        <li><strong>存储</strong>：每个任务只存 A、B（几十 MB），不用存完整模型副本（140GB）</li>
        <li><strong>灵活</strong>：不同任务的 LoRA 权重像插件一样即插即用，可以动态加载/卸载，甚至加权混合多个 LoRA</li>
      </ul>

      <h2>QLoRA：再进一步</h2>
      <p><strong>QLoRA</strong>（2023）把底座模型量化到 4bit 存储，LoRA 参数仍以高精度训练。结果是：<strong>一张 24GB 显存的消费级显卡（如 RTX 4090）就能微调 70B 级模型</strong>。这是开源微调爆发的关键推手之一。</p>

      <h2>生态应用</h2>
      <p>LoRA 思想已扩展到图像领域：Stable Diffusion 的<strong>风格 LoRA</strong>（几十 MB 就能让模型学会一种画风）、<strong>人物/产品 LoRA</strong>，让个人训练专属生成模型成为可能。</p>
    `,
    links: ["fine-tuning", "math-linear-algebra", "math-calculus", "diffusion"],
  },
];

/* 建立 id → 节点 索引，供页面脚本使用 */
const NODE_MAP = Object.fromEntries(NODES.map((n) => [n.id, n]));
