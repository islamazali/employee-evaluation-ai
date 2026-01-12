# Employee Evaluation AI Dashboard

🎯 نظام تقييم موظفين ذكي مدعوم بـ AI باستخدام Next.js و LlamaCloud

## المميزات

✅ **تقييم ذكي للموظفين**: استخراج تلقائي للبيانات من نماذج التقييم باستخدام LlamaCloud
✅ **تحليل جودة الإدارة**: تقييم شامل لفعالية الإدارة والقيادة
✅ **Dashboard تفاعلي**: عرض النتائج والإحصائيات بشكل مرئي
✅ **AI-Powered Insights**: توصيات ذكية للتطوير
✅ **RESTful API**: تكامل سهل مع أنظمة أخرى

## التكنولوجيا

- **Frontend**: Next.js 15 + React + Tailwind CSS
- **Backend**: Node.js + Next.js API Routes
- **AI**: LlamaCloud Extract Agent + GPT-4
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel

## البنية

```
src/
├── app/
│   ├── api/
│   │   ├── evaluations/route.ts      # API لـ CRUD التقييمات
│   │   ├── llamacloud/route.ts       # Integration مع LlamaCloud
│   │   └── analysis/route.ts         # تحليل وتصنيف
│   ├── evaluations/
│   │   ├── page.tsx                  # قائمة التقييمات
│   │   └── [id]/page.tsx             # تفاصيل التقييم
│   ├── employees/
│   │   ├── page.tsx                  # قائمة الموظفين
│   │   └── [id]/performance.tsx      # الأداء والرسوم البيانية
│   ├── dashboard/
│   │   └── page.tsx                  # الداش بورد الرئيسي
│   └── layout.tsx
├── components/
│   ├── EvaluationForm.tsx            # نموذج التقييم
│   ├── ScoreCard.tsx                 # عرض النقاط
│   ├── Charts.tsx                    # الرسوم البيانية
│   ├── AIInsights.tsx                # التوصيات الذكية
│   └── UploadArea.tsx                # رفع الملفات
├── lib/
│   ├── llamacloud.ts                 # LlamaCloud Client
│   ├── supabase.ts                   # Supabase Client
│   └── constants.ts                  # الثوابت والمتغيرات
└── types/
    └── index.ts                      # TypeScript Types
```

## البدء السريع

### المتطلبات
- Node.js 18+
- npm أو yarn

### التثبيت

```bash
git clone https://github.com/islamazali/employee-evaluation-ai.git
cd employee-evaluation-ai

npm install
# أو
yarn install
```

### متغيرات البيئة

أنشئ ملف `.env.local`:

```env
# LlamaCloud
NEXT_PUBLIC_LLAMACLOUD_API_URL=https://api.cloud.llamaindex.ai
LLAMAC CLOUD_API_KEY=your_api_key
LLAMAC LOUD_AGENT_ID=45d68edc-d5f5-45bf-8ee4-47ab81891d7e

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# OpenAI (للـ AI Analysis)
OPENAI_API_KEY=your_openai_key
```

### التشغيل

```bash
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000)

## نموذج الأسئلة

### تقييم الموظف

#### 1. جودة العمل
- كيف تقيّم جودة عمل الموظف؟
- هل هناك أخطاء متكررة؟
- هل يلتزم بالمعايير المطلوبة؟

#### 2. الإنتاجية
- هل يوفي بالمهام المطلوبة في الوقت المحدد؟
- نسبة إنجاز الأهداف الشهرية؟
- هل يحتاج إلى متابعة مستمرة؟

#### 3. العمل الجماعي
- كيف يتعاون مع الفريق؟
- هل يقبل النقد البناء؟
- مستوى تواصله مع الزملاء؟

#### 4. الالتزام والانضباط
- مستوى حضوره وانتظامه؟
- هل يلتزم بالسياسات والإجراءات؟

#### 5. المبادرة والتطور
- هل يقترح أفكار جديدة؟
- هل يسعى للتطور الذاتي؟

### تقييم جودة الإدارة

#### 1. فعالية القيادة
- هل المدير يوجه الفريق بوضوح؟
- هل يمتلك رؤية استراتيجية؟
- هل يحفز الفريق على الإنجاز؟

#### 2. تطوير الموظفين
- هل يوفر تدريبًا كافيًا؟
- هل يستثمر في تطوير المهارات؟
- عدد الموظفين المطورين/المرقيين؟

#### 3. جودة التغذية الراجعة
- هل يقدم تغذية راجعة بناءة؟
- هل يركز على التطوير أم المعاقبة؟
- معدل اجتماعات One-on-One؟

#### 4. اتخاذ القرارات
- هل القرارات مدروسة أم متسرعة؟
- هل يستشير الفريق؟
- هل يتحمل المسؤولية؟

#### 5. روح الفريق والرضا
- معدل رضا الموظفين؟
- هل الموظفون متحمسون؟
- هل تحدث نزاعات متكررة؟

## API Endpoints

### Evaluations

```
GET    /api/evaluations              # الحصول على جميع التقييمات
GET    /api/evaluations/:id          # الحصول على تقييم محدد
POST   /api/evaluations              # إنشاء تقييم جديد
PUT    /api/evaluations/:id          # تحديث التقييم
DELETE /api/evaluations/:id          # حذف التقييم
```

### LlamaCloud Extract

```
POST   /api/llamacloud/extract       # استخراج بيانات من الملف
POST   /api/llamacloud/analyze       # تحليل النتائج بـ AI
```

## Schema الاستخراج

```typescript
interface Evaluation {
  employeeData: {
    name: string;
    department: string;
    position: string;
    evaluationPeriod: string;
    evaluatorName: string;
  };
  performanceMetrics: {
    quality_of_work: { score: number; comments: string };
    productivity: { score: number; comments: string };
    teamwork: { score: number; comments: string };
    communication: { score: number; comments: string };
    initiative: { score: number; comments: string };
    time_management: { score: number; comments: string };
  };
  managementQuality: {
    leadership_effectiveness: { score: number; comments: string };
    employee_development: { score: number; comments: string };
    decision_making: { score: number; comments: string };
    feedback_quality: { score: number; comments: string };
    team_morale: { score: number; comments: string };
  };
  aiAnalysis: {
    strengths: string[];
    weaknesses: string[];
    developmentAreas: string[];
    recommendations: string[];
    sentiment: 'positive' | 'neutral' | 'negative';
    overallScore: number;
  };
}
```

## المساهمة

نرحب بالمساهمات! يرجى:

1. Fork المشروع
2. أنشئ فرع للميزة (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push للفرع (`git push origin feature/AmazingFeature`)
5. افتح Pull Request

## الترخيص

هذا المشروع مرخص تحت MIT License - انظر ملف [LICENSE](LICENSE) للتفاصيل.

## التواصل

- GitHub: [@islamazali](https://github.com/islamazali)
- Email: contact@icode.dev

---

**Built with ❤️ using Next.js, LlamaCloud & AI**
