# Entrepreneurial Skills 测评工具站 MVP 版本需求任务文档

整理时间：2026-06-06

## 1. MVP 目标

本 MVP 的目标不是一次性做完整商业系统，而是尽快上线一个 SEO 友好的英文测评工具站，用来验证 `entrepreneurial skills` 及相关长尾词是否能出词、收录、带来用户互动和初步转化意向。

MVP 一句话：

`A free entrepreneurial skills test that gives users an instant score, skill profile, improvement areas, and a preview of a future AI-powered report.`

首版必须验证三件事：

1. Google 是否能抓取并理解页面。
2. 用户是否愿意开始并完成测评。
3. 用户是否会点击深度报告解锁 CTA。

## 2. MVP 范围原则

### 2.0 哥飞方法论约束

本 MVP 必须符合哥飞工具站/SEO 站方法论，不能只做一个“看起来像产品”的页面。

核心原则：

1. 一个关键词一个页面：每个重要搜索意图必须有独立 URL 承接。
2. 首页不是博客页，而是精品工具页：工具页 + 落地页 + 结果展示页合一。
3. 首屏直接可交互：用户打开首页就能开始测评。
4. SEO 内容必须后端可抓取：不能只依赖前端渲染。
5. 首页和内页互相传权：首页链接长尾页，长尾页用关键词锚文本链回首页。
6. 先小规模上优质页面：MVP 先做 4 个高相关长尾页，不做海量低质页面。
7. 上站后用 GSC 验证：看收录、出词、曝光、点击，再决定下一轮改动。
8. 结果页和工具行为服务排名：用测评完成率、停留时间、结果页浏览提升用户行为数据。

对应本项目的执行判断：

1. `/` 承接 `entrepreneurial skills`、`entrepreneurial skills test`、`entrepreneurial skills assessment`。
2. `/entrepreneurial-skills-test` 和 `/entrepreneurial-skills-assessment` 是工具意图页，不是普通文章。
3. `/entrepreneurial-skills-examples` 和 `/how-to-build-entrepreneurial-skills` 是内容意图页，但必须嵌入测评 CTA。
4. 每个页面都要有独立 TDH、H1、正文、FAQ 或相关问答、内链。
5. 若 24-48 小时不出词，先改 TDH、正文关键词覆盖、SSR、内链和 sitemap，再考虑扩页面。

### 2.1 必须做

1. 首页即测评工具页。
2. 30 道创业技能测评题。
3. 前端即时评分。
4. 基础结果页。
5. 深度 AI 报告预览和 CTA。
6. SEO 正文内容。
7. FAQ。
8. 至少 4 个长尾 SEO 页面。
9. sitemap、robots、canonical、OG 图。
10. 事件埋点。

### 2.2 暂不做

1. 暂不做真实支付。
2. 暂不做积分余额系统。
3. 暂不做用户 dashboard。
4. 暂不做历史报告列表。
5. 暂不做 PDF 导出。
6. 暂不做教师批量测评。
7. 暂不做多语言。
8. 暂不做复杂后台管理。

### 2.3 可用占位实现

1. 深度报告按钮先做成 email waitlist 或 mock checkout CTA。
2. AI 深度报告先展示 sample preview，不必首版真实调用 AI。
3. 结果数据先保存在浏览器 localStorage，不依赖数据库。
4. Sample report 用静态示例页面承接转化。

## 3. MVP 用户路径

1. 用户从 Google 搜索进入首页。
2. 首屏看到 `Entrepreneurial Skills Test` 和测评入口。
3. 用户选择 Role。
4. 用户选择 Goal。
5. 用户完成 30 道题。
6. 页面生成免费基础报告。
7. 用户看到 6 个维度分、总体分、Profile Type、优势和改进项。
8. 用户看到深度报告预览。
9. 用户点击 `Unlock Full AI Report`。
10. MVP 中进入 waitlist、sample report 或 pricing placeholder。

## 4. 页面任务

### 4.1 首页 / 测评页

URL:

`/`

目标关键词：

1. entrepreneurial skills
2. entrepreneurial skills test
3. entrepreneurial skills assessment
4. entrepreneurship skills test
5. entrepreneurial skills quiz

Title:

`Entrepreneurial Skills Test: Assess Your Entrepreneurial Skills`

Description:

`Take a free entrepreneurial skills test to assess your strengths, weaknesses, and get a personalized improvement plan for becoming a better entrepreneur.`

H1:

`Entrepreneurial Skills Test`

页面模块：

1. Hero + 测评入口。
2. Role 选择。
3. Goal 选择。
4. 30 题测评。
5. 免费结果展示。
6. 深度报告预览。
7. Why entrepreneurial skills matter。
8. Entrepreneurial skills examples。
9. How to improve entrepreneurial skills。
10. FAQ。
11. 长尾页内链区。

哥飞方法论要求：

1. 首页必须按 V2.0 精品工具页做：测评工具、落地页说明、结果预览在同一个 URL。
2. 首页正文要围绕主词解释，但不能变成纯文章。
3. 测评完成后的基础结果也要强化这个页面的用户行为数据。
4. 首页至少给每个 P0 长尾页 2 个入口：一个关键词锚文本，一个动作型锚文本。

验收标准：

1. 首页第一屏必须能开始测评。
2. H1 唯一。
3. 未执行 JS 时，SEO 正文和 FAQ 仍能出现在 HTML 中。
4. CTA 文案清晰，不把用户导向空页面。

### 4.2 结果页模块

MVP 可不做独立 URL，也可以使用 `/results`。

免费展示：

1. Overall score。
2. Level。
3. Profile Type。
4. 6 个维度分数。
5. Top strengths。
6. Improvement areas。
7. 3 条基础建议。

付费预览展示：

1. Deep Strength Analysis。
2. Hidden Risk Factors。
3. Best Business Areas。
4. 30-Day Personalized Plan。
5. PDF Report。

CTA:

`Unlock your full AI-powered entrepreneurial skills report`

MVP 点击后行为：

1. 优先跳转 `/sample-report`。
2. 或弹出 email 收集表单。

### 4.3 Sample Report 页面

URL:

`/sample-report`

目标：

让用户知道完整 AI 报告会长什么样，提高 CTA 点击和后续付费意愿。

页面内容：

1. 示例用户身份和目标。
2. 示例 Overall Score。
3. 示例 6 维度分数。
4. 示例优势分析。
5. 示例短板分析。
6. 示例 Risk Profile。
7. 示例 Recommended Business Areas。
8. 示例 30-Day Plan。
9. CTA：`Take the free test`。

### 4.4 首批长尾 SEO 页面

MVP 先做 4 个，后续再扩到 8 个。

| URL | 目标词 | 页面类型 | 优先级 |
|---|---|---|---|
| `/entrepreneurial-skills-test` | entrepreneurial skills test | 工具落地页 | P0 |
| `/entrepreneurial-skills-assessment` | entrepreneurial skills assessment | 工具落地页 | P0 |
| `/entrepreneurial-skills-examples` | entrepreneurial skills examples | 内容页 | P1 |
| `/how-to-build-entrepreneurial-skills` | how to build entrepreneurial skills | 内容页 | P1 |

长尾页要求：

1. 每页一个明确搜索意图。
2. 每页有独立 title、description、H1。
3. 每页链接回首页测评工具。
4. 页面之间做相关互链。
5. 内容不要只是定义，要加入示例、步骤、测评入口和行动建议。
6. 不做多个页面抢同一个词，避免关键词互相打架。
7. 不做低质量 AI 批量页，首版宁可少而精。

页面定位：

1. `/entrepreneurial-skills-test`：强调用户要马上开始 test，首屏应有测评入口。
2. `/entrepreneurial-skills-assessment`：强调更正式的 assessment，文案偏评估、能力画像和报告。
3. `/entrepreneurial-skills-examples`：承接 examples 信息意图，用例子解释 6 个维度，并引导用户测自己的水平。
4. `/how-to-build-entrepreneurial-skills`：承接 how-to 意图，提供提升步骤，并引导用户先测评找到短板。

## 5. 测评功能任务

### 5.1 Role 选择

选项：

1. Student
2. Aspiring Founder
3. Early Founder
4. Employee / Intrapreneur
5. Educator / Coach

MVP 默认优先文案适配前三类：

1. Student
2. Aspiring Founder
3. Early Founder

### 5.2 Goal 选择

选项：

1. Start a business
2. Validate my readiness
3. Improve my career
4. Complete a school project
5. Build leadership skills

### 5.3 题库

共 30 道题，6 个维度，每个维度 5 道。

维度：

1. Opportunity Recognition
2. Creativity & Problem Solving
3. Risk Tolerance & Decision Making
4. Leadership & Communication
5. Financial Thinking
6. Execution & Resilience

题目形式：

1-5 分 Likert 量表：

1. Strongly disagree
2. Disagree
3. Neutral
4. Agree
5. Strongly agree

任务要求：

1. 题目文本使用原 PRD 中首版题库。
2. 每题必须绑定 dimension。
3. 支持上一题、下一题。
4. 支持进度条。
5. 提交前校验全部答完。

### 5.4 评分规则

维度原始分：

`dimensionRawScore = sum(questionScores)`

维度百分制：

`dimensionScore = round((dimensionRawScore - 5) / 20 * 100)`

总分：

`overallScore = round(avg(dimensionScores))`

等级：

| 分数 | 等级 |
|---:|---|
| 0-39 | Emerging |
| 40-59 | Developing |
| 60-79 | Strong Potential |
| 80-100 | Entrepreneurial Ready |

Profile Type:

1. Opportunity Builder
2. Creative Problem Solver
3. Strategic Risk Taker
4. Persuasive Leader
5. Resource Planner
6. Resilient Executor
7. Balanced Entrepreneur

## 6. SEO 技术任务

### 6.1 基础 SEO

必须完成：

1. 每个页面有唯一 title。
2. 每个页面有 meta description。
3. 每个页面有唯一 H1。
4. canonical 正确。
5. OG title、description、image 正确。
6. robots.txt 可访问。
7. sitemap.xml 可访问。
8. 首页和长尾页进入 sitemap。
9. 404 页面存在。

### 6.2 结构化数据

首页建议添加：

1. `WebApplication`
2. `FAQPage`
3. `BreadcrumbList`

注意：

FAQ 内容必须真实出现在页面正文中。

### 6.3 内链

首页链接到 4 个长尾页。

长尾页链接回首页，锚文本轮换：

1. entrepreneurial skills test
2. entrepreneurial skills assessment
3. assess your entrepreneurial skills
4. free entrepreneurial skills quiz

长尾页互链：

1. `/entrepreneurial-skills-examples` 链接 `/how-to-build-entrepreneurial-skills`
2. `/how-to-build-entrepreneurial-skills` 链接 `/entrepreneurial-skills-test`
3. `/entrepreneurial-skills-assessment` 链接 `/entrepreneurial-skills-test`

内链验收：

1. 所有重要内链必须是真实 `<a href>`，不要只用按钮点击事件。
2. 首页到 P0 长尾页必须在 HTML 中可见。
3. 长尾页回首页的锚文本必须包含目标关键词或动作词。
4. Footer 或页面底部必须有可抓取的核心页面链接区。
5. 不使用 nofollow 阻断站内核心页面传权。

## 7. UI 视觉与交互要求

### 7.1 视觉定位

MVP 的 UI 必须有专业、可信、现代的测评工具气质，不能像普通 AI 生成模板页，也不能像纯博客文章页。

推荐方向：

1. 视觉关键词：clear、confident、modern、coach-like、data-informed。
2. 适合用户：学生、准创业者、早期创业者。
3. 页面观感：像一个认真做职业/创业能力评估的产品，而不是随手拼出来的 SEO 页面。
4. 工具优先：第一屏必须突出测评入口，视觉上让用户自然开始答题。

### 7.2 首屏要求

首页首屏必须美观且高转化。

必须包含：

1. 清晰 H1：`Entrepreneurial Skills Test`。
2. 一句可信的 value proposition。
3. 明确 Start Test 按钮。
4. 简短说明：免费、约 5 分钟、即时结果。
5. 视觉上展示 6 个能力维度，增强“这是个真实测评”的感觉。

设计要求：

1. 首屏不能只有大段文字。
2. 不使用廉价的紫蓝渐变模板感。
3. 不使用夸张 stock photo。
4. 不把核心测评入口藏在页面下方。
5. 移动端首屏也必须能看到开始测评按钮。

### 7.3 测评流程 UI

答题体验要像正式产品，而不是表单堆叠。

必须支持：

1. 单题聚焦展示，降低认知负担。
2. 顶部或侧边显示进度。
3. 选项点击区域足够大。
4. 当前选中状态明显。
5. 上一题、下一题按钮状态清楚。
6. 移动端可单手完成。

交互要求：

1. 答题切换要轻量顺滑。
2. 不要因为动画影响速度。
3. 未答题时点击下一题，需要给出温和提示。
4. 完成后生成结果要有明确反馈，不能像页面突然跳走。

### 7.4 结果页 UI

结果页是 MVP 的转化核心，必须做得有“报告感”和“价值感”。

必须展示：

1. Overall score 用醒目的分数视觉。
2. Level 用清晰标签。
3. Profile Type 用一句解释。
4. 6 个维度用 bar chart 或 radar chart。
5. Strengths 和 Improvement Areas 做成易读模块。
6. 深度报告预览要看起来确实值得解锁。

设计要求：

1. 不要把所有结果堆成长文本。
2. 分数、维度、建议之间要有层级。
3. CTA 必须在结果区自然出现，不要像硬广告。
4. Locked preview 可以用轻微遮罩或锁定模块，但不能影响基础报告阅读。

### 7.5 长尾内容页 UI

长尾页不能做成普通博客模板。

每个长尾页应包含：

1. 页面顶部的主题说明。
2. 中间穿插可点击的测评入口。
3. 清晰的 H2 内容结构。
4. 关键概念、示例、步骤用视觉模块承接。
5. 底部有回到测评工具的 CTA。

要求：

1. 内容阅读舒适。
2. 内链不突兀。
3. 页面看起来属于同一个产品系统。

### 7.6 响应式与可访问性

必须满足：

1. 移动端 375px 宽度下无横向滚动。
2. 所有按钮文字不溢出。
3. 所有交互控件有清晰 hover、focus、active 状态。
4. 颜色对比度合格。
5. 字号不能过小，正文移动端建议不低于 16px。
6. 结果图表不能只依赖颜色表达含义。

### 7.7 UI 验收标准

上线前必须检查：

1. 首页第一屏截图看起来像一个可信产品。
2. 测评流程在桌面端和移动端都顺畅。
3. 结果页有明确报告感。
4. 长尾页不是纯文本博客感。
5. CTA 清晰但不过度打扰。
6. 页面没有明显错位、遮挡、文本溢出。
7. Lighthouse mobile 无严重可访问性问题。

## 8. 转化任务

### 8.1 结果页 CTA

免费报告下方必须出现付费预览区。

CTA 主文案：

`Unlock your full AI-powered entrepreneurial skills report`

辅助文案：

`Get a personalized analysis of your strengths, weaknesses, risk profile, recommended business areas, and a 30-day improvement plan.`

### 8.2 MVP 转化承接

二选一：

方案 A：跳转 sample report。

1. 点击 CTA 到 `/sample-report`。
2. Sample report 页面再引导用户重新测评。

方案 B：收集邮箱。

1. 点击 CTA 弹出 email 表单。
2. 文案：`Get notified when the full AI report is available.`
3. 邮箱可先存在 localStorage 或简单后端接口。

建议 MVP 先做方案 A，工程最轻；若已有后端，补方案 B。

## 9. 埋点任务

MVP 至少记录这些事件：

1. `start_test_clicked`
2. `role_selected`
3. `goal_selected`
4. `question_answered`
5. `assessment_completed`
6. `result_viewed`
7. `unlock_report_clicked`
8. `sample_report_viewed`
9. `longtail_page_viewed`

核心指标：

1. Start Test 点击率。
2. 测评完成率。
3. 免费结果页停留时间。
4. Unlock CTA 点击率。
5. 长尾页到首页点击率。

## 10. MVP 验收标准

### 10.1 功能验收

1. 用户能从首页开始测评。
2. 用户能完成 30 道题。
3. 用户能看到正确分数。
4. 用户能看到基础报告。
5. 用户能看到深度报告预览。
6. CTA 可以跳转到 sample report 或打开 email 表单。
7. 刷新页面不出现崩溃。
8. 移动端可完整完成测评。

### 10.2 SEO 验收

1. 首页 title 覆盖 `entrepreneurial skills test` 和 `entrepreneurial skills`。
2. 首页第一屏有测评工具。
3. 首页正文包含 `entrepreneurial skills` 相关解释、示例、提升方法。
4. FAQ 出现在 HTML 中。
5. 4 个长尾页可访问。
6. sitemap 包含首页和长尾页。
7. robots.txt 正常。
8. canonical 正常。
9. OG 图正常。
10. 移动端 Lighthouse 无严重问题。

### 10.3 上线后验证

1. 提交 Google Search Console。
2. 24-48 小时观察是否收录。
3. 观察是否出词。
4. 首批目标出词：
   - entrepreneurial skills
   - entrepreneurial skills test
   - entrepreneurial skills assessment
   - entrepreneurial skills examples
   - how to build entrepreneurial skills
5. 如果 48 小时无出词，优先检查 TDK、正文 SSR、关键词覆盖、内链和 sitemap。

哥飞 GSC 四级信号排查：

1. 已收录但没曝光：优先检查 TDH、正文关键词覆盖、页面主题是否明确、内链是否足够。
2. 已抓取但未收录：暂停扩新页，先提高已有页面质量，必要时删掉弱页面。
3. 已发现但未抓取：检查 sitemap、内链、页面质量和整站信号，不继续堆页面。
4. 已有排名后下跌：检查是否页面体验差、用户行为弱、内容被稀释或站内页面互抢。

首轮迭代顺序：

1. 先改首页 TDH 和首屏工具表达。
2. 再补首页正文和 FAQ 的关键词覆盖。
3. 再加强首页到长尾页、长尾页到首页的内链。
4. 再补外链和可发布的产品目录/社区曝光。
5. 最后才扩更多长尾页面。

## 11. 开发任务拆分

### Phase 1：页面骨架与 SEO

1. 创建首页。
2. 创建 4 个长尾页。
3. 创建 sample report 页面。
4. 配置 metadata。
5. 配置 sitemap 和 robots。
6. 创建 404 页面。

### Phase 2：测评交互

1. 定义题库数据。
2. 实现 Role / Goal 选择。
3. 实现答题流程。
4. 实现进度条。
5. 实现评分函数。
6. 实现基础结果展示。

### Phase 3：转化与埋点

1. 实现深度报告预览模块。
2. 实现 unlock CTA。
3. 接入 sample report 跳转或 email waitlist。
4. 添加事件埋点。
5. 添加本地结果保存。

### Phase 4：QA 与上线

1. 桌面端测试。
2. 移动端测试。
3. SEO HTML 检查。
4. sitemap 检查。
5. robots 检查。
6. Lighthouse 检查。
7. 部署上线。
8. 提交 GSC。

## 12. 首版完成定义

满足以下条件即可认为 MVP 完成：

1. 用户可以完整完成一次测评。
2. 基础报告有明确价值。
3. 页面结构满足 SEO 抓取要求。
4. 至少 4 个长尾页上线。
5. sitemap、robots、canonical 可验证。
6. CTA 能承接深度报告兴趣。
7. 有基础事件数据可看。

完成后再根据 GSC 和用户行为决定是否进入完整商业版：

1. 接入登录。
2. 接入积分。
3. 接入支付。
4. 接入 AI JSON 报告生成。
5. 接入历史报告和 PDF。
