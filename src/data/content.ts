export const content = {
  // 提示：如何添加视频 / Tip: How to add a video
  // 在 gallery 数组中添加一项 / Add an item to the gallery array:
  // { 
  //   src: "/path/to/cover.png",      // 视频封面图 (必须) / Video cover image (Required)
  //   caption: "视频描述",             // 描述文字 / Description
  //   videoSrc: "/path/to/video.mp4"  // 视频文件路径 (放在 public 目录下) / Video file path (in public dir)
  // }
  zh: {
    nav: {
      experience: "项目经历",
      education: "教育背景",
      skills: "技能清单",
      about: "更多经历",
      contact: "联系我",
    },
    hero: {
      location: "浙江大学 | 2028届硕士",
      title: "闻雨涵",
      subtitle: "Yuhan Wen",
      role: "求职意向：AI产品经理",
      tagline: "2028届毕业生 | 电子信息专业 (硕士)",
      tags: "核心标签：热爱AIGC | 求职意向：AI产品经理",
      description: "", // Removed as per request
      resume: "查看完整简历",
      contact: "联系我",
    },
    projects: {
      title: "项目经历",
      subtitle: "", // Removed as per request
      viewDetails: "查看详情",
      smartgrade: {
        title: "SmartGrade",
        subtitle: "AI辅助的智能成绩录入系统",
        prdLink: "https://acnh06nsf8ws.feishu.cn/wiki/ItWCwM7siizqgekYmWEcFheJnhN?from=from_copylink",
        role: "产品负责人",
        date: "2025.11 - 2025.12",
        desc: "面向高校教务的软硬一体化智能成绩录入中枢。",
        tags: ["B端产品", "智能视觉提取", "人机协同审核", "软硬一体"],
        overview: "SmartGrade 是一款面向高校教务场景的软硬一体化智能成绩录入中枢。系统创立“边缘 AI 视觉识别 + 三色分流审核”机制，以极低延迟和极高安全性，彻底解决传统手工登分耗时易错的痛点，实现教务数据的高效流转与持续进化。",
        highlights: [
          "深度调研500+样本，撰写万字PRD，明确用户痛点与需求边界。",
          "设计基于AI置信度的“三色分流”机制，构建“数据飞轮”，持续优化模型准确率。",
          "规划结构化Prompt，预期单批耗时缩短60%，准确率逼近99.9%。"
        ],
        gallery: [
          { 
            src: "/smartgrade/sg1.png", 
            caption: "登录页 (Login Page)",
            desc: "核心功能：系统的安全门户与角色鉴权入口。\n\n产品特点：针对 B 端教务系统的高保密要求，设计严格的基于角色的权限控制体系。区分一线教师、教务主管与系统运维权限，确保敏感成绩数据在登入源头的物理与逻辑隔离。"
          },
          { 
            src: "/smartgrade/sg2.png", 
            caption: "任务配置页 (Task Configuration Page)",
            desc: "核心功能：批次录入任务的初始化与 AI 规则调度中枢。\n\n产品特点：支持快速新建录入批次，并允许用户针对不同科目的规则，自定义约束条件。化繁为简，实现复杂教务场景下的敏捷适配。"
          },
          { 
            src: "/smartgrade/sg3.png", 
            caption: "采集与修改页 (Capture & Edit Page)",
            desc: "核心功能：核心业务工作台，承载实时视频流切片与“人机协同”成绩复核。\n\n产品特点：首创基于 AI 置信度的“红黄绿三色分流”交互机制。底层支持 500ms 内超低延迟的边缘端硬件图像回传，实时修改。自动沉淀人工修改过的“原图切片+真实分数”困难样本，一键压入后台训练队列，构建无需额外标注成本的自动纠错闭环，持续拉升 AI 泛化能力。"
          },
          { 
            src: "/smartgrade/sg4.png", 
            caption: "数据审计看板 (Data Audit Dashboard)",
            desc: "核心功能：全局业务进度洞察与修改记录保留。\n\n产品特点：一方面可视化呈现各批次试卷的登分进度与人员审核效率；另一方面，保留实时修改记录，方便后续教务追查。"
          },
          { 
            src: "/smartgrade/sg5.png", 
            caption: "移动端安全监控界面 (Mobile Security Monitoring)",
            desc: "核心功能：移动态势感知、外设异常预警与远程授权网关。\n\n产品特点：专为脱离工作站场景打造的“安全兜底”方案。深度融合 FaceID 生物特征准入与全局防截屏盲水印技术；当边缘摄像头断线或审核任务严重积压时，通过推送机制实现秒级预警，严防机密成绩泄露与业务停滞。"
          }
        ],
        techStack: ["B端产品", "智能视觉提取", "人机协同", "软硬一体"]
      },
      foodlens: {
        title: "FoodLens 鲜探",
        subtitle: "AI智能食材管理APP",
        role: "产品负责人",
        date: "2026.01",
        desc: "主打零浪费的智能厨房体验。",
        tags: ["C端产品", "多模态AI", "智能视觉感知录入", "Vibe Coding"],
        overview: "主打'无感化视觉录入'与'零浪费'理念的 AI 智能食材管家。帮助用户追踪冰箱食材的保质期、记录每日饮食、智能补货，以及通过 AI 助手获取个性化菜谱推荐。",
        highlights: [
          "规划“视觉录入-鲜度预警-菜谱生成”链路，打造闭环体验。",
          "采用 Vibe Coding 搭建 React 移动端 Demo，快速验证产品概念。",
          "成功接入 AI API 并调优 System Prompt 完成 MVP 交付。",
          "设计包含鲜度仓、厨房记录、补货单、AI助手四大核心模块。"
        ],
        gallery: [
          { 
            src: "/foodlens/1.png", 
            videoSrc: "/foodlens/v1.mp4",
            title: "鲜度雷达，拒绝浪费",
            subtitle: "食材的生命周期，一目了然",
            desc: "核心功能：\n1. 全局统筹冰箱内食材的生命周期与余量状态。\n2. 勾选特定或临期食材，一键生成菜谱与烹饪指导。\n\nAI 亮点：\n1. 引入底层算法驱动的“**多色预警机制**”，系统自动计算食材随时间衰减的鲜度状态，对临期食材进行高亮预警，打破传统静态记账的死板体验。\n2. 深度接入 **Doubao API**，通过预设的系统级 Prompt，根据用户勾选的“边角料”食材组合，动态推演出具备合理步骤、口味偏好并附带热量计算的专属菜谱。",
            caption: "智能鲜度仓页"
          },
          { 
            src: "/foodlens/2.png", 
            videoSrc: "/foodlens/v2.mp4",
            title: "饮食光影，轻量打卡",
            subtitle: "记录每一餐的治愈瞬间",
            desc: "核心功能：\n以时间轴形式呈现用户的每日饮食档案，建立可视化的长期健康追踪链路。\n\nAI 亮点：\n颠覆传统繁琐的手工记账，支持“**拍照即记录**”。依托视觉 AI 与大模型常识库，自动解析用户餐品照片中的食材构成并精准估算卡路里，实现真正“零负担”的智能饮食分析。",
            caption: "打卡与热量记录页"
          },
          { 
            src: "/foodlens/3.png", 
            videoSrc: "/foodlens/v3.mp4",
            title: "智能调度，无脑补货",
            subtitle: "懂你胃口，更懂你冰箱的采购管家",
            desc: "核心功能：\n自动沉淀用户的食材消耗记录，生成采购清单。\n\nAI 亮点：\n基于用户的消耗速率与饮食偏好历史数据，AI 智能预测即将耗尽的关键食材，自动生成极具条理的“**智能补货单**”，形成从买到吃到再买的完整数据闭环。",
            caption: "智能补货与洞察页"
          },
          { 
            src: "/foodlens/4.png", 
            videoSrc: "/foodlens/v4.mp4",
            title: "专属主厨，有问必答",
            subtitle: "你的 24 小时私人烹饪智囊",
            desc: "核心功能：\n随时解答用户的厨房痛点与备餐疑问。\n\nAI 亮点：\n支持语音、文字等**多模态交互**。用户可直接发送文字或语音询问，AI 助手基于上下文语境与图像理解，提供即时、安全的烹饪与处理建议。",
            caption: "多模态 AI 助手交互页"
          },
          { 
            src: "/foodlens/5.png", 
            videoSrc: "/foodlens/v5.mp4",
            title: "一键 “探” 鲜，万物入库",
            subtitle: "告别繁琐打字，手机就是你的食材扫描仪",
            desc: "核心功能：\n告别繁琐的手动记录，通过拍照或扫描小票实现食材无感入库。\n\nAI 亮点：\n调用**视觉大模型接口**，毫秒级精准识别画面中的食材品类、数量，并结合常识库自动推算及填充初始保质期。",
            caption: "视觉扫描录入页"
          }
        ],
        techStack: ["C端产品", "多模态AI", "智能视觉感知录入", "Vibe Coding"]
      },
      agent: {
        title: "智能AI资讯与日程聚合Agent",
        subtitle: "自动化效率工具",
        role: "独立开发者",
        date: "2026.02",
        desc: "无代码自动化效率工具，解决信息“信噪比低”痛点。",
        tags: ["AI Agent", "n8n", "Workflow", "DeepSeek"],
        overview: "无代码自动化效率工具，解决信息“信噪比低”痛点。自动聚合每日重要资讯与个人日程。",
        highlights: [
          "基于 n8n 平台设计串联架构，接入 DeepSeek API，实现低成本高效率开发。",
          "实现“资讯+日程”简报每日定时推送的 Workflow 闭环，提升个人时间管理效率。"
        ],
        gallery: [
          {
            src: "/news/workflow.png",
            secondarySrc: "/news/table.png",
            caption: "新闻搜集工作流设计",
            desc: "通过 n8n 编排的自动化工作流，串联起 RSS 订阅源、AI 总结模型与即时通讯推送渠道，最终将新闻汇总至飞书多维表格。上图展示了完整的工作流节点逻辑，下图展示了结构化的数据处理表。",
            videoSrc: "" // No video for this one, but keeping property structure consistent
          },
          {
            src: "/news/ai.png",
            secondarySrc: "/news/email.png",
            caption: "AI 智能摘要与推送",
            desc: "DeepSeek 模型对海量资讯进行去噪与提炼，生成简明扼要的日报。上图为 AI 处理后的结构化输出，下图为最终发送到用户邮箱的精美排版日报。",
            videoSrc: ""
          }
        ],
        techStack: ["AI Agent", "n8n", "Workflow", "DeepSeek"]
      }
    },
    education: {
      title: "教育背景",
      zju: {
        school: "浙江大学 (985/双一流)",
        degree: "电子信息 (硕士)",
        date: "2025.09 - 至今",
        desc: "主修课程：机器视觉、图像处理、光谱分析"
      },
      nuist: {
        school: "南京信息工程大学 & 国科大联培 (双一流)",
        degree: "电子信息 (本科)",
        date: "2021.09 - 2025.06",
        desc: "主修课程：数据结构、C/Python编程、计算机思维导论、单片机开发"
      }
    },
    skills: {
      title: "技能清单",
      categories: {
        "Product Design": "产品设计",
        "AI Engineering": "AI 工程化",
        "Languages": "语言能力"
      }
    },
    about: {
      title: "更多关于我",
      research: {
        title: "科研经历 (Research)",
        date: "2024 - 2025",
        content: "以第一作者身份发表SCI 论文《Double-RIS Assisted MIMO V2V Channels: Modeling, Simulation, and Correlation Statistics Analysis》。"
      },
      awards: {
        title: "获奖情况 (Awards)",
        date: "2022 - 2024",
        content: [
          "2024年 全国大学生嵌入式芯片与系统设计竞赛 (东部赛区) - 二等奖",
          "2023年 第十四届蓝桥杯全国软件和信息技术专业人才大赛 (单片机设计与开发大学组) - 江苏赛区一等奖",
          "2023年 全国大学生电子设计竞赛 - 江苏省二等奖",
          "2022年 江苏省第十九届高等数学竞赛 (本科一级A组) - 三等奖"
        ]
      },
      campus: {
        title: "校园经历 (Campus Experience)",
        date: "2025 - 至今",
        role: "院职业发展协会 项目运营部部长",
        desc: "主导**校学生节活动**策划与落地运营：全盘统筹活动策划、物资调度与人员分工。制定标准化的执行SOP，协调跨部门资源，最终以量化指标驱动活动落地——活动成功吸引**超 2000+名师生**顺利参与，核心环节**零事故**，极大地提升了活动的覆盖面与满意度。展现了优秀的项目生命周期管理与跨团队协作沟通能力。"
      }
    },
    footer: {
      title: "欢迎联系",
      copyright: "© 2026 Yuhan Wen. Built with AI."
    }
  },
  en: {
    nav: {
      experience: "Experience",
      education: "Education",
      skills: "Skills",
      about: "About",
      contact: "Contact",
    },
    hero: {
      location: "Zhejiang University | Master's Candidate '28",
      title: "Yuhan Wen",
      subtitle: "AI Product Manager",
      role: "AI Product Manager",
      tagline: "Class of 2028 | Master in Electronic Information",
      tags: "Passion for AIGC | Aiming for AI PM",
      description: "", // Removed
      resume: "View Resume",
      contact: "Contact Me",
    },
    projects: {
      title: "Selected Work",
      subtitle: "", // Removed
      viewDetails: "View Details",
      smartgrade: {
        title: "SmartGrade",
        subtitle: "AI-Assisted Intelligent Grade Entry System",
        prdLink: "https://acnh06nsf8ws.feishu.cn/wiki/ItWCwM7siizqgekYmWEcFheJnhN?from=from_copylink",
        role: "Product Lead",
        date: "2025.11 - 2025.12",
        desc: "Integrated software-hardware hub for intelligent grade entry in universities.",
        tags: ["B2B Product", "OCR", "LLM Prompt", "Hardware-Software"],
        overview: "Integrated software-hardware hub for intelligent grade entry in universities. Solves the pain points of tedious and error-prone traditional grade entry.",
        highlights: [
          "Conducted in-depth research with 500+ samples, wrote comprehensive PRD.",
          "Designed 'Three-Color Sorting' mechanism based on AI confidence, building a data flywheel.",
          "Planned structured Prompts, expected to reduce batch time by 60% with 99.9% accuracy."
        ],
        gallery: [
          { 
            src: "/smartgrade/sg1.png", 
            caption: "Enterprise-grade secure login gateway with offline support and error prevention.",
            desc: "Core Function: Secure portal and role-based authentication entry.\n\nKey Feature: Designed strict role-based access control for high confidentiality requirements of B2B educational systems. Distinguishes permissions for frontline teachers, academic supervisors, and system ops, ensuring physical and logical isolation of sensitive grade data at the source."
          },
          { 
            src: "/smartgrade/sg2.png", 
            caption: "Minimalist initial configuration dashboard guiding users to create new or select history tasks.",
            desc: "Core Function: Initialization of batch entry tasks and AI rule scheduling hub.\n\nKey Feature: Supports quick creation of entry batches and allows users to customize constraints for different subjects. Simplifies complexity for agile adaptation in complex educational scenarios."
          },
          { 
            src: "/smartgrade/sg3.png", 
            caption: "Intuitive task configuration form supporting list drag-and-drop and rule settings.",
            desc: "Core Function: Core business workbench hosting real-time video stream slicing and 'human-machine collaboration' grade review.\n\nKey Feature: Pioneered 'Red-Yellow-Green Three-Color Sorting' interaction mechanism based on AI confidence. Supports ultra-low latency (<500ms) edge hardware image transmission and real-time modification. Automatically accumulates difficult samples (original slice + real score) modified by humans, pushing them to the backend training queue to build an automatic correction loop without extra labeling costs, continuously boosting AI generalization."
          },
          { 
            src: "/smartgrade/sg4.png", 
            caption: "Full-link traceable and tamper-proof educational data audit dashboard.",
            desc: "Core Function: Global business progress insight and modification record retention.\n\nKey Feature: Visualizes grade entry progress and personnel review efficiency for each batch; retains real-time modification records for future academic tracking."
          },
          { 
            src: "/smartgrade/sg5.png", 
            caption: "Standardized 390px mobile monitoring gateway supporting environment detection and real-time alerts.",
            desc: "Core Function: Mobile situational awareness, peripheral anomaly warning, and remote authorization gateway.\n\nKey Feature: 'Safety net' solution designed for scenarios away from workstations. Deeply integrates FaceID biometric access and global anti-screenshot blind watermark technology; achieves second-level warning via push mechanism when edge cameras disconnect or review tasks accumulate seriously, strictly preventing confidential grade leakage and business stagnation."
          }
        ],
        techStack: ["B2B Product", "OCR", "LLM Prompt", "Hardware-Software"]
      },
      foodlens: {
        title: "FoodLens",
        subtitle: "AI Intelligent Food Management App",
        role: "Product Lead",
        date: "2026.01",
        desc: "Intelligent kitchen experience focused on zero waste.",
        tags: ["B2C Product", "Multimodal AI", "React", "Vibe Coding"],
        overview: "AI intelligent food manager focusing on 'senseless visual entry' and 'zero waste'. Helps users track food shelf life, record daily diet, restock intelligently, and get personalized recipe recommendations via AI assistant.",
        highlights: [
          "Planned 'Visual Entry - Freshness Alert - Recipe Generation' loop.",
          "Used Vibe Coding to build React mobile Demo for quick concept verification.",
          "Successfully integrated AI API and tuned System Prompt for MVP delivery.",
          "Designed four core modules: Freshness Inventory, Kitchen Log, Restock List, AI Assistant."
        ],
        gallery: [
          { 
            src: "/foodlens/1.png", 
            videoSrc: "/foodlens/v1.mp4",
            title: "Freshness Radar, Reject Waste",
            subtitle: "Lifecycle of ingredients at a glance",
            desc: "Core Function:\n1. Global coordination of ingredient lifecycle and remaining status in the refrigerator.\n2. Select specific or expiring ingredients to generate recipes and cooking guides with one click.\n\nAI Highlight:\n1. Introduced 'Multi-Color Warning Mechanism' driven by underlying algorithms, automatically calculating freshness decay over time and highlighting expiring ingredients, breaking the rigid experience of traditional static bookkeeping.\n2. Deeply integrated Doubao API, dynamically deducing exclusive recipes with reasonable steps, taste preferences, and calorie calculations based on user-selected 'leftover' ingredient combinations via preset system-level Prompts.",
            caption: "Intelligent Freshness Inventory"
          },
          { 
            src: "/foodlens/2.png", 
            videoSrc: "/foodlens/v2.mp4",
            title: "Dietary Light & Shadow, Lightweight Check-in",
            subtitle: "Record the healing moments of every meal",
            desc: "Core Function:\nPresents user's daily diet archive in a timeline format, establishing a visual long-term health tracking link.\n\nAI Highlight:\nSubverts traditional tedious manual bookkeeping, supporting 'Record by Photo'. Relying on visual AI and large model common sense knowledge base, automatically parses ingredient composition in user meal photos and accurately estimates calories, achieving truly 'zero burden' intelligent dietary analysis.",
            caption: "Check-in & Calorie Recording"
          },
          { 
            src: "/foodlens/3.png", 
            videoSrc: "/foodlens/v3.mp4",
            title: "Intelligent Scheduling, Brainless Restocking",
            subtitle: "Purchasing steward who understands your appetite and fridge better",
            desc: "Core Function:\nAutomatically accumulates user ingredient consumption records and generates shopping lists.\n\nAI Highlight:\nBased on user consumption rate and dietary preference history data, AI intelligently predicts key ingredients about to run out, automatically generating a highly organized 'Intelligent Restock List', forming a complete data loop from buying to eating to buying again.",
            caption: "Intelligent Restocking & Insights"
          },
          { 
            src: "/foodlens/4.png", 
            videoSrc: "/foodlens/v4.mp4",
            title: "Exclusive Chef, Answers Every Question",
            subtitle: "Your 24-hour private cooking think tank",
            desc: "Core Function:\nAnswers user's kitchen pain points and meal preparation questions at any time.\n\nAI Highlight:\nSupports multi-modal interaction such as voice and text. Users can directly send text or voice inquiries, and the AI assistant provides immediate, safe cooking and processing suggestions based on context and image understanding.",
            caption: "Multimodal AI Assistant Interaction"
          },
          { 
            src: "/foodlens/5.png", 
            videoSrc: "/foodlens/v5.mp4",
            title: "One-Click 'Explore' Freshness, Everything into Storage",
            subtitle: "Say goodbye to tedious typing, your phone is your ingredient scanner",
            desc: "Core Function:\nSay goodbye to tedious manual recording, realize senseless ingredient entry by taking photos or scanning receipts.\n\nAI Highlight:\nCalls visual large model interface to accurately identify ingredient categories and quantities in the picture in milliseconds, and automatically calculates and fills in the initial shelf life combined with the common sense knowledge base.",
            caption: "Visual Scanning Entry"
          }
        ],
        techStack: ["B2C Product", "Multimodal AI", "React", "Vibe Coding", "Tailwind CSS"]
      },
      agent: {
        title: "AI News & Schedule Agent",
        subtitle: "Automated Efficiency Tool",
        role: "Indie Developer",
        date: "2026.02",
        desc: "No-code automation tool solving low information signal-to-noise ratio.",
        tags: ["AI Agent", "n8n", "Workflow", "DeepSeek"],
        overview: "No-code automation tool solving low information signal-to-noise ratio. Automatically aggregates daily important news and personal schedules.",
        highlights: [
          "Designed architecture on n8n platform, integrated DeepSeek API.",
          "Implemented 'News + Schedule' daily briefing workflow, improving time management efficiency."
        ],
        gallery: [
          {
            src: "/news/workflow.png",
            secondarySrc: "/news/table.png",
            caption: "News Gathering Workflow Design",
            desc: "Automated workflow orchestrated by n8n, connecting RSS feeds, AI summarization models, and instant messaging push channels, finally aggregating news into Lark multidimensional tables. The image above shows the complete workflow node logic, and the image below shows the structured data processing table.",
            videoSrc: ""
          },
          {
            src: "/news/ai.png",
            secondarySrc: "/news/email.png",
            caption: "AI Intelligent Summary & Push",
            desc: "DeepSeek model denoises and refines massive information to generate concise daily reports. The image above shows the structured output processed by AI, and the image below shows the beautifully formatted daily report finally sent to the user's mailbox.",
            videoSrc: ""
          }
        ],
        techStack: ["AI Agent", "n8n", "Workflow", "DeepSeek"]
      }
    },
    education: {
      title: "Education",
      zju: {
        school: "Zhejiang University (985/Double First-Class)",
        degree: "Electronic Information (Master's)",
        date: "2025.09 - Present",
        desc: "Main Courses: Machine Vision, Image Processing, Spectral Analysis"
      },
      nuist: {
        school: "NUIST & UCAS Joint Training (Double First-Class)",
        degree: "Electronic Information (Bachelor's)",
        date: "2021.09 - 2025.06",
        desc: "Main Courses: Data Structures, C/Python Programming, Introduction to Computational Thinking, MCU Development"
      }
    },
    skills: {
      title: "Skills",
      categories: {
        "Product Design": "Product Design",
        "AI Engineering": "AI Engineering",
        "Languages": "Languages"
      }
    },
    about: {
      title: "More About Me",
      research: {
        title: "Research Experience",
        date: "2024 - 2025",
        content: "Published SCI paper as first/main author 'Double-RIS Assisted MIMO V2V Channels: Modeling, Simulation, and Correlation Statistics Analysis'."
      },
      awards: {
        title: "Awards",
        date: "2022 - 2024",
        content: [
          "2024 National Undergraduate Embedded Chip & System Design Competition (East China) - Second Prize",
          "2023 14th Lanqiao Cup (MCU Design & Dev) - Jiangsu First Prize",
          "2023 National Undergraduate Electronics Design Contest - Jiangsu Second Prize",
          "2022 Jiangsu 19th Higher Mathematics Competition - Third Prize"
        ]
      },
      campus: {
        title: "Campus Experience",
        date: "2023 - 2024",
        role: "Head of Project Operations, College Career Development Association",
        desc: "Led the planning and execution of the **School Student Festival**: Managed overall planning, logistics, and personnel. Established standardized SOPs, coordinated cross-functional resources, and drove success with quantitative metrics—attracting **2000+ participants** with **zero incidents**. Demonstrated excellent project lifecycle management and cross-team communication skills."
      }
    },
    footer: {
      title: "Let's Talk.",
      copyright: "© 2026 Yuhan Wen. Built with AI."
    }
  }
};
