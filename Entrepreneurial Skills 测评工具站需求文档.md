# Entrepreneurial Skills 测评工具站需求文档

## 1. 项目概述

### 1.1 项目名称

Entrepreneurial Skills Test / Entrepreneurial Skills Assessment

### 1.2 核心定位

做一个面向英文用户的创业技能测评工具站。用户可以免费完成创业技能测评，获得基础分数和简短建议；如果想获得更深入的 AI 个性化分析、创业能力画像、提升计划和 PDF 报告，需要购买或消耗积分。

一句话定位：

`Free Entrepreneurial Skills Test to assess your strengths, weaknesses, and get a personalized improvement plan.`

### 1.3 建站目标

1. 通过 SEO 获取 `entrepreneurial skills` 及其长尾词流量。
2. 用免费测评工具提升停留时间、互动率和转化率。
3. 用积分制销售 AI 深度报告，实现变现。
4. 逐步扩展为创业技能、创业人格、创业准备度、创业想法匹配类工具矩阵。

---

## 2. 依据与机会判断

### 2.1 关键词数据

本地数据目录：

`/Users/ehu096/private/SEO/关键词/entrepreneurial skills/数据`

已有数据：

1. `entrepreneurial skills_ Overview, Keyword Overview.html`
2. `Free Keyword Difficulty Checker - Ahrefs.html`
3. `entrepreneurial skills - Google 搜索.html`

关键指标：

| 指标 | 数据 |
|---|---:|
| US 搜索量 | 450K |
| 全球搜索量 | 655.3K |
| Semrush KD | 25% easy |
| Ahrefs KD | 1 Easy |
| CPC | $3.71 |
| 竞争度 | 0.04 |
| 搜索意图 | 信息型 |

### 2.2 SERP 判断

Google 前排不是首页霸榜，主要是内容内页、PDF、视频和教育/职业站文章页。

代表页面：

1. Goodwin University 内容页
2. Indeed 职业建议内页
3. Cedefop PDF
4. University of Phoenix 文章页
5. UTC 大学博客内页
6. YouTube 视频
7. MindTools 内页
8. Hult 博客内页

结论：

1. 不是大站首页霸占，是好信号。
2. 但前排域名权重较强，普通文章不容易赢。
3. SERP 有 AI Overview 和 People Also Ask，会截流浅层定义类内容。
4. 最合适的打法不是普通博客，而是“测评工具 + SEO 内容 + AI 深度报告”。

### 2.3 Trends 判断

用户提供的 Google Trends 截图显示：

1. 过去 5 年长期有搜索，不是全新词。
2. 2025 年中出现一次异常尖峰。
3. 过去 1 个月热度明显冲高。

结论：

这是“近期升温的老词/增长词”，不是纯新词，但近期热度有机会。

### 2.4 竞品与参考

公开竞品/参考：

1. [EntreMetric](https://entremetric.com/)：创业心智测评，提供量化和文字反馈，偏机构/教育/项目评估。
2. [IdeaMatch](https://ideamatch.co/)：免费 quiz，完整报告 $5，AI 根据用户资料生成创业想法和执行计划。
3. [FIT4VC](https://fit4vc.com/)：VC readiness 免费测评，输出分数、benchmark、建议和 PDF 报告。
4. [EntreComp](https://publications.jrc.ec.europa.eu/repository/handle/JRC101581)：欧盟创业能力框架，15 个能力项，适合做题库框架来源。

差异化方向：

1. 不做普通 entrepreneurship personality quiz。
2. 聚焦 `entrepreneurial skills` 主词。
3. 免费测评 + AI 深度分析 + 积分解锁。
4. 报告更实用：能力画像、短板原因、适合创业方向、30 天提升计划。

---

## 3. 用户画像

### 3.1 核心用户

| 用户类型 | 需求 | 付费动机 |
|---|---|---|
| Student | 想知道自己是否具备创业能力，用于课程/项目/职业规划 | 想要个性化报告和提升建议 |
| Aspiring Founder | 想知道自己适不适合创业 | 想知道风险、短板、下一步行动 |
| Early Founder | 已经有想法，需要理解自身能力缺口 | 想要创业方向和执行计划 |
| Employee / Intrapreneur | 想提升职场创新、领导力和商业能力 | 想要职业发展建议 |
| Educator / Coach | 想给学生或客户提供测评工具 | 后续可做 B2B 或批量报告 |

### 3.2 首版优先用户

首版优先服务：

1. Student
2. Aspiring Founder
3. Early Founder

原因：

1. 搜索意图更偏信息/学习。
2. 对测评接受度高。
3. 更容易被“个性化提升计划”打动。

---

## 4. 产品形态

### 4.1 产品主流程

1. 用户通过 Google 搜索进入首页。
2. 首页第一屏看到免费测评工具。
3. 用户选择身份和目标。
4. 用户完成 30 道测评题。
5. 系统生成免费基础报告。
6. 用户看到深度报告预览。
7. 用户购买积分或消耗积分解锁深度报告。
8. 后端调用 AI API 生成深度分析。
9. 用户查看完整报告。
10. 用户可以导出 PDF 或重新生成建议。

### 4.2 免费内容

免费结果必须足够有价值，但不能把付费价值全部给完。

免费提供：

1. Overall Entrepreneurial Skills Score
2. 6 个维度分数
3. Entrepreneurial Profile 简短类型
4. Top 3 strengths
5. Top 3 improvement areas
6. 3 条基础建议
7. 深度报告预览

### 4.3 付费内容

积分解锁后提供：

1. 深度能力画像
2. 每个维度的详细分析
3. 创业风险画像
4. 适合的创业方向
5. 个人短板背后的原因
6. 30 天提升计划
7. 针对身份和目标的行动建议
8. 推荐学习/实践任务
9. PDF 报告导出
10. 可选：重新生成建议

---

## 5. 测评框架

### 5.1 题库来源原则

题目不能直接复制竞品，也不要无依据瞎编。

题库框架建议基于 EntreComp。

EntreComp 官方定义创业能力为：基于机会和想法行动，并为他人创造金融、文化或社会价值。EntreComp 包含 3 个能力领域和 15 个能力项，可用于评估个人能力、设计教育和训练材料。

本站使用方式：

1. 参考 EntreComp 的能力维度。
2. 改写成用户容易回答的情境题。
3. 不宣称为官方 EntreComp 测试。
4. 页面底部注明：`Inspired by entrepreneurship competence frameworks such as EntreComp. Not an official diagnostic or certification.`

### 5.2 首版测评维度

首版使用 6 个维度，每个维度 5 道题，共 30 道题。

| 维度 | 说明 | 对应 EntreComp 方向 |
|---|---|---|
| Opportunity Recognition | 发现机会和问题的能力 | Ideas and Opportunities |
| Creativity & Problem Solving | 创造性解决问题能力 | Ideas and Opportunities |
| Risk Tolerance & Decision Making | 不确定性下决策能力 | Into Action |
| Leadership & Communication | 说服、协作、调动他人的能力 | Resources |
| Financial Thinking | 成本、收益、现金流、资源意识 | Resources |
| Execution & Resilience | 行动、坚持、复盘和迭代能力 | Into Action |

### 5.3 题目类型

题目采用 1-5 分 Likert 量表：

1. Strongly disagree
2. Disagree
3. Neutral
4. Agree
5. Strongly agree

### 5.4 示例题目

Opportunity Recognition:

1. I can identify business opportunities by observing problems people face in daily life.
2. I often notice unmet needs before others talk about them.
3. I can turn a customer complaint into a possible product or service idea.
4. I actively look for trends that may create new business opportunities.
5. I can explain why a specific problem is worth solving.

Creativity & Problem Solving:

1. I can come up with multiple solutions when facing a difficult problem.
2. I enjoy testing unusual ideas instead of only following standard methods.
3. I can combine ideas from different fields to create something useful.
4. I can simplify a complex problem into smaller solvable parts.
5. I often improve an idea after receiving feedback.

Risk Tolerance & Decision Making:

1. I can make decisions even when some information is missing.
2. I am willing to test an idea before I am completely sure it will work.
3. I can evaluate risks without becoming stuck or avoiding action.
4. I can change direction when evidence shows that my first plan is weak.
5. I stay calm when a project has uncertainty.

Leadership & Communication:

1. I can explain my ideas clearly to different types of people.
2. I can persuade others to support a useful idea.
3. I listen carefully before trying to convince someone.
4. I can organize people around a shared goal.
5. I can handle disagreement without losing focus.

Financial Thinking:

1. I can estimate the basic costs of starting a small project.
2. I understand why cash flow matters in a business.
3. I can compare expected benefits with possible costs.
4. I consider pricing and revenue when thinking about an idea.
5. I can make practical decisions with limited resources.

Execution & Resilience:

1. I take action instead of waiting for perfect conditions.
2. I continue working on a goal even when early results are disappointing.
3. I can break a large goal into weekly tasks.
4. I learn from failed attempts and adjust my plan.
5. I can finish projects without needing constant external pressure.

---

## 6. 评分规则

### 6.1 维度分

每个维度 5 道题，每题 1-5 分。

维度原始分：

`dimensionRawScore = sum(questionScores)`

维度百分制：

`dimensionScore = round((dimensionRawScore - 5) / 20 * 100)`

解释：

1. 5 分为最低，转换为 0。
2. 25 分为最高，转换为 100。

### 6.2 总分

总分为 6 个维度平均分：

`overallScore = round(avg(dimensionScores))`

### 6.3 等级

| 分数 | 等级 | 文案 |
|---:|---|---|
| 0-39 | Emerging | You are at an early stage and need to build core entrepreneurial habits. |
| 40-59 | Developing | You have some useful foundations but need a clearer improvement plan. |
| 60-79 | Strong Potential | You show strong entrepreneurial potential with a few important gaps. |
| 80-100 | Entrepreneurial Ready | You have a strong entrepreneurial skill profile and should focus on execution. |

### 6.4 Profile Type

根据最高维度和最低维度生成基础类型：

1. Opportunity Builder
2. Creative Problem Solver
3. Strategic Risk Taker
4. Persuasive Leader
5. Resource Planner
6. Resilient Executor
7. Balanced Entrepreneur

---

## 7. AI 深度报告

### 7.1 AI 输入

调用 AI API 时传入：

1. 用户身份：student / aspiring founder / early founder / employee / educator
2. 用户目标：start a business / improve career / school project / leadership / validate readiness
3. 总分
4. 6 个维度分数
5. 最高维度
6. 最低维度
7. 等级
8. Profile Type
9. 答题明细
10. 固定报告模板

### 7.2 AI 输出格式

AI 必须返回 JSON，方便前端渲染。

```json
{
  "summary": "Overall assessment summary",
  "entrepreneurType": "Profile type",
  "scoreInterpretation": {
    "overallScore": 72,
    "level": "Strong Potential",
    "analysis": "Detailed interpretation"
  },
  "strengths": [
    {
      "skill": "Opportunity Recognition",
      "score": 86,
      "analysis": "Why this is a strength",
      "howToUse": "How to apply this strength in real situations"
    }
  ],
  "weaknesses": [
    {
      "skill": "Financial Thinking",
      "score": 42,
      "analysis": "Why this may limit the user",
      "improvementAdvice": "How to improve it"
    }
  ],
  "riskProfile": {
    "level": "Low / Medium / High",
    "analysis": "Risk-related interpretation",
    "warning": "Constructive caution"
  },
  "recommendedBusinessAreas": [
    {
      "area": "Business area",
      "reason": "Why it fits the user's profile",
      "firstStep": "Practical first action"
    }
  ],
  "thirtyDayPlan": [
    {
      "dayRange": "Day 1-7",
      "focus": "Main focus",
      "tasks": ["Task 1", "Task 2", "Task 3"]
    }
  ],
  "nextSteps": [
    "Actionable next step 1",
    "Actionable next step 2",
    "Actionable next step 3"
  ],
  "disclaimer": "This report is for educational and self-reflection purposes only."
}
```

### 7.3 AI Prompt 模板

```text
You are an entrepreneurship coach and career development advisor.

Analyze the user's entrepreneurial skills assessment results.

Rules:
- Return valid JSON only.
- Do not include markdown.
- Be specific and practical.
- Do not make medical, legal, investment, or financial guarantees.
- Use encouraging but realistic language.
- Advice should match the user's role and goal.
- If a score is low, explain it constructively.
- Avoid generic advice.
- Do not claim this is an official EntreComp assessment.
- This is educational self-reflection, not a certified diagnostic.

User profile:
Role: {{role}}
Goal: {{goal}}

Assessment scores:
Overall score: {{overallScore}}
Level: {{level}}
Profile type: {{profileType}}
Opportunity Recognition: {{opportunityRecognition}}
Creativity & Problem Solving: {{creativityProblemSolving}}
Risk Tolerance & Decision Making: {{riskToleranceDecisionMaking}}
Leadership & Communication: {{leadershipCommunication}}
Financial Thinking: {{financialThinking}}
Execution & Resilience: {{executionResilience}}

Highest dimension:
{{highestDimension}}

Lowest dimension:
{{lowestDimension}}

Answer details:
{{answers}}

Return JSON using this exact schema:
{{schema}}
```

### 7.4 AI 安全限制

必须避免：

1. 保证用户创业成功。
2. 具体投资建议。
3. 法律/税务/财务承诺。
4. 医疗心理诊断。
5. 夸大测评科学性。
6. 声称官方认证。

报告底部固定声明：

`This assessment is for educational and self-reflection purposes only. It is not a certified psychological, financial, legal, or career diagnostic.`

---

## 8. 积分与付费设计

### 8.1 积分名称

Credits

### 8.2 消耗规则

| 功能 | 消耗 |
|---|---:|
| 免费基础测评 | 0 credits |
| 解锁 AI 深度报告 | 10 credits |
| 重新生成深度报告 | 3 credits |
| 生成 30 天提升计划 | 5 credits |
| PDF 导出 | 3 credits |

首版建议：

1. 深度报告和 30 天计划一起打包，消耗 10 credits。
2. PDF 导出可先免费，提升转化和分享。
3. 后续再单独收费。

### 8.3 套餐

| 套餐 | 价格 | 积分 | 用途 |
|---|---:|---:|---|
| Starter | $4.99 | 30 credits | 约 3 份深度报告 |
| Plus | $9.99 | 80 credits | 约 8 份深度报告 |
| Pro | $19.99 | 200 credits | 教师/教练/团队使用 |

### 8.4 免费策略

建议：

1. 不登录也能完成免费测评。
2. 深度报告需要登录或邮箱。
3. 新用户注册送 10 credits，可免费体验 1 次深度报告。
4. 如果不想送完整报告，可送 5 credits，只能看半价解锁提示。

---

## 9. 页面与 SEO 结构

### 9.1 首页

URL:

`/`

主关键词：

`entrepreneurial skills`

辅助关键词：

1. entrepreneurial skills test
2. entrepreneurial skills assessment
3. entrepreneurial skills quiz
4. entrepreneurship skills test
5. entrepreneurial skills examples

Title:

`Entrepreneurial Skills Test: Assess Your Entrepreneurial Skills`

Description:

`Take a free entrepreneurial skills test to assess your strengths, weaknesses, and get a personalized improvement plan for becoming a better entrepreneur.`

H1:

`Entrepreneurial Skills Test`

首页模块：

1. Hero + 测评入口
2. Role / Goal 选择
3. 30 题测评
4. 免费结果展示
5. 深度报告预览
6. Why entrepreneurial skills matter
7. Entrepreneurial skills examples
8. How to improve entrepreneurial skills
9. FAQ
10. 内链到长尾页面

### 9.2 首批长尾页面

| URL | 目标词 | 页面类型 |
|---|---|---|
| `/entrepreneurial-skills-assessment` | entrepreneurial skills assessment | 工具落地页 |
| `/entrepreneurial-skills-test` | entrepreneurial skills test | 工具落地页 |
| `/entrepreneurial-skills-examples` | entrepreneurial skills examples | 内容页 |
| `/entrepreneurial-skills-for-students` | entrepreneurial skills for students | 内容页 |
| `/how-to-build-entrepreneurial-skills` | how to build entrepreneurial skills | 内容页 |
| `/skills-of-an-entrepreneur` | skills of an entrepreneur | 内容页 |
| `/entrepreneur-characteristics` | entrepreneur characteristics | 内容页 |
| `/entrepreneurial-traits-and-skills` | entrepreneurial traits and skills | 内容页 |

### 9.3 内链策略

首页链接所有长尾页。

长尾页都要链接回首页，锚文本轮换：

1. entrepreneurial skills test
2. entrepreneurial skills assessment
3. assess your entrepreneurial skills
4. free entrepreneurial skills quiz

长尾页之间互链：

1. examples -> how to build
2. for students -> test
3. skills of an entrepreneur -> assessment
4. entrepreneur characteristics -> traits and skills

### 9.4 FAQ 问题

首页 FAQ：

1. What are entrepreneurial skills?
2. Why are entrepreneurial skills important?
3. What are examples of entrepreneurial skills?
4. How can I improve my entrepreneurial skills?
5. Is this entrepreneurial skills test free?
6. How accurate is the assessment?
7. Can students use this entrepreneurial skills test?
8. What happens after I complete the test?

---

## 10. 功能需求

### 10.1 测评功能

必须支持：

1. 用户选择 Role。
2. 用户选择 Goal。
3. 用户回答 30 道题。
4. 支持上一题/下一题。
5. 支持进度条。
6. 提交后生成分数。
7. 基础结果立即展示。
8. 深度报告显示付费预览。

### 10.2 基础报告

基础报告展示：

1. Overall score
2. Level
3. Profile type
4. Radar chart 或 bar chart
5. Strengths
6. Improvement areas
7. Basic tips
8. CTA：Unlock Full AI Report

### 10.3 深度报告

深度报告展示：

1. Overall Summary
2. Entrepreneur Type
3. Score Interpretation
4. Strength Analysis
5. Weakness Analysis
6. Risk Profile
7. Recommended Business Areas
8. 30-Day Plan
9. Next Steps
10. PDF Export

### 10.4 支付与积分

必须支持：

1. 用户账户。
2. 积分余额。
3. 购买积分。
4. 消耗积分。
5. 交易记录。
6. 防止重复扣费。
7. 报告生成失败时退回积分。

### 10.5 报告历史

登录用户可查看：

1. 历史测评记录。
2. 历史深度报告。
3. PDF 下载。
4. 重新生成按钮。

---

## 11. 数据结构建议

### 11.1 users

| 字段 | 类型 | 说明 |
|---|---|---|
| id | string | 用户 ID |
| email | string | 邮箱 |
| name | string | 名称 |
| credits | number | 积分余额 |
| createdAt | datetime | 注册时间 |

### 11.2 assessments

| 字段 | 类型 | 说明 |
|---|---|---|
| id | string | 测评 ID |
| userId | string/null | 未登录可为空 |
| role | string | 用户身份 |
| goal | string | 用户目标 |
| answers | json | 答题明细 |
| scores | json | 维度分 |
| overallScore | number | 总分 |
| level | string | 等级 |
| profileType | string | 类型 |
| createdAt | datetime | 创建时间 |

### 11.3 reports

| 字段 | 类型 | 说明 |
|---|---|---|
| id | string | 报告 ID |
| assessmentId | string | 测评 ID |
| userId | string | 用户 ID |
| status | string | pending / completed / failed |
| aiInput | json | AI 输入 |
| aiOutput | json | AI 输出 |
| creditsUsed | number | 消耗积分 |
| createdAt | datetime | 创建时间 |
| updatedAt | datetime | 更新时间 |

### 11.4 credit_transactions

| 字段 | 类型 | 说明 |
|---|---|---|
| id | string | 交易 ID |
| userId | string | 用户 ID |
| type | string | purchase / spend / refund / bonus |
| amount | number | 积分变动 |
| reason | string | 原因 |
| relatedId | string | 关联订单或报告 |
| createdAt | datetime | 创建时间 |

---

## 12. API 需求

### 12.1 POST `/api/assessments`

用途：

提交测评，生成基础分数。

输入：

```json
{
  "role": "student",
  "goal": "start a business",
  "answers": [
    { "questionId": "opportunity_1", "score": 4 }
  ]
}
```

输出：

```json
{
  "assessmentId": "assess_123",
  "overallScore": 72,
  "level": "Strong Potential",
  "profileType": "Opportunity Builder",
  "scores": {
    "opportunityRecognition": 86,
    "creativityProblemSolving": 78,
    "riskToleranceDecisionMaking": 64,
    "leadershipCommunication": 72,
    "financialThinking": 42,
    "executionResilience": 81
  }
}
```

### 12.2 POST `/api/reports/generate`

用途：

扣积分并生成 AI 深度报告。

输入：

```json
{
  "assessmentId": "assess_123"
}
```

逻辑：

1. 检查登录。
2. 检查积分是否足够。
3. 扣除积分。
4. 调用 AI API。
5. 校验 JSON。
6. 保存报告。
7. 返回报告。
8. 如果失败，退回积分。

### 12.3 GET `/api/reports/:id`

用途：

获取报告详情。

### 12.4 POST `/api/credits/checkout`

用途：

创建积分购买订单。

---

## 13. MVP 范围

### 13.1 必须做

1. 首页测评工具。
2. 30 道题。
3. 基础评分。
4. 基础结果页。
5. AI 深度报告生成。
6. 积分购买和消耗。
7. 报告历史。
8. 至少 4 个 SEO 长尾页。
9. sitemap。
10. GSC 提交。

### 13.2 可以后做

1. PDF 导出。
2. 教师批量测评。
3. 团队报告。
4. 多语言。
5. 分享海报。
6. 邮件自动发送报告。
7. 更复杂的题库自适应。

### 13.3 不做

1. 不做官方认证。
2. 不做心理诊断。
3. 不做投资建议。
4. 不做复杂社区。
5. 不做一开始就海量页面。

---

## 14. UI 页面列表

### 14.1 Public Pages

1. Home / Test page
2. Assessment result page
3. Pricing / Credits page
4. Sample report page
5. SEO article pages
6. Privacy Policy
7. Terms of Service
8. Disclaimer

### 14.2 User Pages

1. Login / Sign up
2. Dashboard
3. My assessments
4. My reports
5. Credit history

---

## 15. 转化设计

### 15.1 免费结果页付费墙

免费显示：

1. 总分
2. 维度分
3. 简短建议

锁住显示：

1. Deep Strength Analysis
2. Hidden Risk Factors
3. Best Business Areas
4. 30-Day Personalized Plan
5. PDF Report

CTA 文案：

`Unlock your full AI-powered entrepreneurial skills report`

辅助文案：

`Get a personalized analysis of your strengths, weaknesses, risk profile, and a 30-day improvement plan.`

### 15.2 Sample Report

必须做一个 sample report，让用户知道付费后能看到什么。

URL:

`/sample-report`

内容：

1. 示例分数
2. 示例优势分析
3. 示例短板分析
4. 示例 30 天计划
5. CTA：Take the free test

---

## 16. SEO 验收标准

上线前必须满足：

1. 首页 title 覆盖 `entrepreneurial skills test` 和 `entrepreneurial skills`。
2. H1 唯一。
3. 首页第一屏有工具。
4. SEO 正文后端渲染。
5. 页面包含 FAQ。
6. 内链结构清晰。
7. sitemap 可访问。
8. robots.txt 正常。
9. canonical 正常。
10. OG 图正常。
11. 移动端可用。
12. Core Web Vitals 不要太差。

上线后验证：

1. 提交 GSC。
2. 24-48 小时观察是否收录。
3. 观察是否出词。
4. 目标出词：`entrepreneurial skills`、`entrepreneurial skills test`、`entrepreneurial skills assessment`。
5. 如果出词偏离，调整 TDH 和正文。
6. 如果排名低，补外链和内链。

---

## 17. 数据分析指标

### 17.1 SEO 指标

1. Impressions
2. Clicks
3. Average position
4. Indexed pages
5. Query list
6. CTR

### 17.2 产品指标

1. 首页访问量
2. Start Test 点击率
3. 测评完成率
4. 免费结果页停留时间
5. Unlock 点击率
6. 注册率
7. 购买率
8. 深度报告生成数
9. 每用户平均积分消耗
10. 退款/失败率

### 17.3 首月目标

| 指标 | 目标 |
|---|---:|
| GSC 出词 | 7 天内 |
| 测评完成率 | 30%+ |
| 免费结果页到付费点击率 | 5%+ |
| 购买转化率 | 1%+ |
| 首批 SEO 页面 | 8 个 |

---

## 18. 首版开发里程碑

### Phase 1：静态 MVP

1. 首页 UI
2. 30 道题
3. 前端评分
4. 基础结果页
5. SEO 内容

### Phase 2：账户与积分

1. 登录
2. 用户表
3. 积分余额
4. 购买积分
5. 消耗记录

### Phase 3：AI 深度报告

1. 报告生成 API
2. Prompt 模板
3. JSON 校验
4. 报告展示页
5. 失败退款

### Phase 4：SEO 扩展

1. 长尾页面
2. sitemap
3. FAQ
4. Sample report
5. GSC 提交

---

## 19. 主要风险

### 19.1 AI 内容太泛

解决：

1. 固定 JSON 模板。
2. 输入完整分数和答题明细。
3. 要求具体、行动化。
4. 前端按模块展示，不直接展示一整段 AI 文。

### 19.2 测评可信度不足

解决：

1. 基于 EntreComp 框架做题库。
2. 明确不是官方诊断。
3. 提供透明评分规则。
4. 题目用情境化表达。

### 19.3 普通内容打不过大站

解决：

1. 首页做工具，不做普通文章。
2. 强化用户互动和停留时间。
3. 做长尾页辅助。
4. 增加外链。

### 19.4 付费转化低

解决：

1. 免费结果要有价值。
2. 深度报告预览要明确。
3. 做 sample report。
4. 首次注册送积分。

---

## 20. 最终建议

这个站可以做，首版不要复杂。

最重要的三个点：

1. 首页必须是测评工具页，不是文章页。
2. 深度报告必须有固定模板，让 AI 做个性化填充。
3. 题库必须基于公开能力框架改写，不能凭空编，也不能抄竞品。

推荐首版口号：

`Discover your entrepreneurial strengths, uncover your blind spots, and get a personalized plan to build the skills every entrepreneur needs.`
