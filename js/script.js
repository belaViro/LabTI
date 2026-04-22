/* ===== 科研TI —— 题库与数据 ===== */

const questions = [
  {
    q: "你发现同门的数据明显造假，但导师暗示'不要声张'，你会？",
    opts: [
      { text: "坚持举报，学术诚信是底线", scores: { T:2, R:1 } },
      { text: "暗示审稿人，借刀杀人", scores: { P:1, S:1 } },
      { text: "假装不知道，反正不关我事", scores: { P:2, F:1 } },
      { text: "以此为把柄，换取共一位置", scores: { P:2, S:2, L:1 } }
    ]
  },
  {
    q: "你选择研究方向的第一性原理是？",
    opts: [
      { text: "我真的好奇这个问题，睡不着的那种", scores: { T:3 } },
      { text: "这个方向好发文章，容易毕业", scores: { P:3 } },
      { text: "导师说有经费，让我做", scores: { L:2, P:1 } },
      { text: "容易申请到基金，导师能买新设备", scores: { P:2, S:1 } }
    ]
  },
  {
    q: "如果注定这辈子发不出CNS，你还会做科研吗？",
    opts: [
      { text: "会，因为问题本身值得回答", scores: { T:3 } },
      { text: "不会，没有正反馈谁干啊", scores: { P:2, F:1 } },
      { text: "CNS发不了，还可以发子刊嘛", scores: { P:2, C:1 } },
      { text: "我已经在准备考公/转行了", scores: { F:2, R:1 } }
    ]
  },
  {
    q: "导师让你做一个你认为是💩的课题，你会？",
    opts: [
      { text: "委婉表达异议，用文献论证这是坨屎", scores: { R:2, T:1 } },
      { text: "先做着，老师站得高看得远", scores: { L:3 } },
      { text: "偷偷换方向，被发现就说在预实验", scores: { R:2, S:1 } },
      { text: "直接摆烂，做不出来是因为课题不行", scores: { F:2, R:1 } }
    ]
  },
  {
    q: "学术会议上，某大佬公然吹嘘自己学生的垃圾成果，全场鼓掌，你会？",
    opts: [
      { text: "在社交媒体上阴阳怪气", scores: { R:2, T:1 } },
      { text: "会后跟朋友吐槽", scores: { R:1, F:1 } },
      { text: "鼓掌，然后想办法让大佬记住你", scores: { L:2, S:1 } },
      { text: "认真记笔记，学习怎么吹", scores: { P:1, L:1, S:1 } }
    ]
  },
  {
    q: "毕业那年导师让你延毕再干一年，你的反应是？",
    opts: [
      { text: "谈判，谈不拢就搜集证据准备举报", scores: { R:3 } },
      { text: "好的老师，我再加一组对照", scores: { L:3, C:1 } },
      { text: "表面答应，实际偷偷找工作", scores: { S:2, F:1 } },
      { text: "当场崩溃，去知乎写小作文", scores: { R:1, F:2 } }
    ]
  },
  {
    q: "你的结果图不够显著（p=0.08），你会？",
    opts: [
      { text: "加样本量/换模型，直到做出来为止", scores: { H:3, C:2 } },
      { text: "调调坐标轴，去去异常值", scores: { S:3 } },
      { text: "直接换课题，这方向不行", scores: { F:2, R:1 } },
      { text: "诚实报告，捍卫科学尊严", scores: { T:2, H:1 } }
    ]
  },
  {
    q: "你更擅长以下哪项生存技能？",
    opts: [
      { text: "写代码/做实验/推公式", scores: { H:3 } },
      { text: "做PPT/写故事/画好看的图", scores: { S:3 } },
      { text: "陪导师喝酒/打球/聊毕业出路", scores: { S:2, L:1 } },
      { text: "在社交媒体上批判学术界", scores: { R:2, S:1 } }
    ]
  },
  {
    q: "审稿人说你novelty不够，你的真实想法是？",
    opts: [
      { text: "补实验，增加数据量硬刚", scores: { H:2, C:1 } },
      { text: "重新包装，换个说法吹", scores: { S:3 } },
      { text: "审稿人根本不懂这个领域", scores: { R:2 } },
      { text: "转投低一点的分期刊", scores: { F:2, P:1 } }
    ]
  },
  {
    q: "暑假第一天，导师在群里@所有人：'实验室不放假，谁走谁延毕'，你的反应是？",
    opts: [
      { text: "默默退掉机票，开始订外卖", scores: { C:2, L:1 } },
      { text: "私聊导师谈判，争取一周假期", scores: { R:1, S:1 } },
      { text: "直接消失，假装没看到消息", scores: { F:2, R:1 } },
      { text: "在群里回复：'收到老师，我已就位'", scores: { L:3, S:1 } }
    ]
  },
  {
    q: "看到同门发了顶刊一作，你的第一反应是？",
    opts: [
      { text: "焦虑，马上加班追赶", scores: { C:3, P:1 } },
      { text: "恭喜，然后继续摸鱼", scores: { F:3 } },
      { text: "打听一下有没有大佬提携", scores: { S:2 } },
      { text: "酸：\"肯定是运气好/关系硬\"", scores: { R:2, F:1 } }
    ]
  },
  {
    q: "如果知道再努力也拿不到国自然，你还会拼命吗？",
    opts: [
      { text: "还是会拼一把，不留遗憾", scores: { C:2, H:1 } },
      { text: "算了，身体健康最重要", scores: { F:3 } },
      { text: "换个赛道，做横向赚钱", scores: { S:2, F:1 } },
      { text: "润，出国做博后", scores: { R:2, T:1 } }
    ]
  },
  {
    q: "你的投稿连续被拒3次，reviewers 意见都很刻薄，当晚你会？",
    opts: [
      { text: "连夜改完再投，不信邪", scores: { C:2, H:1 } },
      { text: "写长文骂评审制度，发在社交媒体上", scores: { R:2, F:1 } },
      { text: "找导师帮忙打招呼，走关系", scores: { S:2, L:1 } },
      { text: "关掉电脑，去喝酒，明天再说", scores: { F:3 } }
    ]
  },
  {
    q: "导师把你的文章一作给了行政关系户，你会？",
    opts: [
      { text: "搜集证据，准备举报或闹大", scores: { R:3 } },
      { text: "忍气吞声，争取下次当一作", scores: { L:2, F:1 } },
      { text: "找导师哭，打感情牌", scores: { S:2, L:1 } },
      { text: "把数据拆分，多发几篇小的", scores: { P:2, H:1 } }
    ]
  },
  {
    q: "距离组会还有2小时，你PPT还没做，你会？",
    opts: [
      { text: "疯狂补实验，没数据就不讲", scores: { H:2, C:1 } },
      { text: "用AI生成几张好看的图先混过去", scores: { S:3 } },
      { text: "请假说仪器坏了，改期汇报", scores: { S:2, F:1 } },
      { text: "直接讲别人的论文，假装自己在跟进", scores: { S:2, R:1 } }
    ]
  },
  {
    q: "你的重复实验连续3次做不出导师要的结果，你会？",
    opts: [
      { text: "再试20次，直到做出来为止", scores: { H:2, C:2 } },
      { text: "微调参数，'优化'一下数据", scores: { S:3 } },
      { text: "告诉导师这个方向可能有问题", scores: { T:1, R:1 } },
      { text: "假装做出来了，先交差再说", scores: { S:2, F:1 } }
    ]
  }
];

/* ===== 结果库（16型 + 彩蛋） ===== */
const results = {
  PLHC: {
    animal: "🫏", title: "核动力驴",
    curse: "你的善良永远不会被看见，直到你累倒在超净台前。",
    crime: "核心罪名：过劳剥削罪",
    crimeDesc: "你是实验室的真正主人。你熟悉每台仪器的脾气，你记得每个试剂的过期日，你能在凌晨3点准确判断PCR跑没跑歪。你相信努力就有回报，相信科学是崇高的，相信导师会看到你的付出。你太相信这些了。",
    danger: "你的身心健康正在以肉眼可见的速度崩坏。更可怕的是，当你终于耗尽青春榨出几篇文章，你会发现一作被抢了，通讯被导师占了，而你面临延毕或毕业即失业。你的汗水浇灌出了别人的学术帝国。",
    guide: "学会在组会上说'这是我独立完成的'；学会在投稿前确认作者顺序；最重要的是——学会按时吃饭。实验室没有你照样转，但你没了就是没了。记住：驴再能干，也变不成骑马的人。",
    boss: "你需要一个有基本良知的导师。虽然这在学术界属于濒危物种，但万一碰上了，请死死抱住。"
  },
  PLHF: {
    animal: "🧪", title: "实验室耗材",
    curse: "你修好了所有仪器，但修不好自己的人生。",
    crime: "核心罪名：自我PUA罪",
    crimeDesc: "你是学术圈最宝贵的可再生资源。你做了海量的预实验，验证了无数个失败的假设，最后看着别人用你的想法发了文章。你不争不抢，觉得'只要毕业就行'。你的导师也是这样觉得的。你甚至觉得被需要是一种幸福。",
    danger: "你越老实，越容易被'再用一下'。等你发现同期入学的都毕业了，你还在'补充一组对照'。你的善良在这个系统里不是美德，是弱点。你最终会变成一台被丢弃的旧仪器——有用过，但没人记得。",
    guide: "从今天开始，所有实验记录写自己名字；每次导师让你加活，学会反问'这能加几作？'；设定硬截止日期，到点就申毕业。你的温顺不会换来感激，只会换来更多的取用。",
    boss: "你需要一个不太管事的导师。放养对你是最好的慈悲，至少你不会被24小时压榨。"
  },
  PLSC: {
    animal: "🦀", title: "学阀预备役",
    curse: "你终将变成自己年轻时最讨厌的专家。",
    crime: "核心罪名：精致的利己主义",
    crimeDesc: "你是学术体系的天选之子。你未必是最聪明的，但你一定是最懂规则的。你知道什么时候该出现，什么时候该沉默，知道怎么让导师觉得你'特别懂事'。你的文章不一定最硬，但你的位置一定最高。你已经学会了把'资源'说成'平台'，把'关系'说成'合作'。",
    danger: "当你爬到高位时，年轻人会在知乎匿名骂你。但你不在乎，因为你已经掌握了分配资源的权力。真正的危险是——如果你不够聪明，你的后代可能不够格继承你的位置，而你没有真本事兜底。",
    guide: "继续保持。这个世界属于会玩规则的人。只是偶尔也做一点真正有意义的研究，免得晚年被翻旧账。记得培养几个死心塌地的学生—— they'll be your future soldiers.",
    boss: "你不需要导师，你需要的是一个平台。导师只是你上升路上的跳板，记得在跳的时候优雅地说声谢谢。"
  },
  PLFC: {
    animal: "🦊", title: "学术妲己",
    curse: "当美貌/关系过期，你的论文数据也会不可复现。",
    crime: "核心罪名：学术捷径罪",
    crimeDesc: "你是学术圈的社交货币。你出现在各种合影里，出现在致谢名单里，出现在共同一作里。你的PPT永远比别人好看，你的朋友圈永远在参加学术会议。你可能不太会做实验，但你很会'整合资源'。你的微信号里躺着三百个大佬，你的电脑里躺着零个原始数据。",
    danger: "风口上的猪摔下来的时候，会特别疼。当你的'关系网'更新换代，当你失去了保护伞，人们会发现你的文章是空心的。更致命的是，你可能已经被贴上了标签——而这个标签永远不会洗掉。",
    guide: "在享受红利的同时，至少学一门硬技能。哪怕只是统计学，也能让你在翻车的时候说'我负责数据分析'。记住：靠脸吃饭是青春饭，靠本事吃饭才是铁饭碗。",
    boss: "你需要一个愿意捧你的大佬。记住，受宠的时候多攒证据，失宠的时候好转型。别把鸡蛋放一个篮子里。"
  },
  PRHC: {
    animal: "🎯", title: "孤勇者",
    curse: "你的拒绝下跪，在毕业证面前一文不值。",
    crime: "核心罪名：不识时务罪",
    crimeDesc: "你是实验室里的堂吉诃德。你有真本事，你拒绝舔导师，你坚持做你认为对的方向。你鄙视学阀，嘲笑水论文，你以为靠实力就能毕业。然后你发现自己的文章发不出、导师不签字、毕业遥遥无期。你的风车在转动，只是没人告诉你那不是巨人，那是毕业论文的deadline。",
    danger: "你的才华在导师的评价体系里可能一文不值。不蹭热点，你的文章就是发不出；不听话，你的签字就是拿不到。你会在答辩前三个月突然意识到：骨气不能当毕业证用。",
    guide: "要么学会低头（哪怕只是暂时的），把毕业论文凑出来；要么准备好看世界的机票。你的尊严很贵，但延毕更贵。理想主义的保质期，通常不超过六年——正好是一个博士的最长年限。",
    boss: "你需要一个已经退休但仍有影响力的导师——有资源，但懒得管你，给你自由。这种导师是学术界的独角兽。"
  },
  PRHF: {
    animal: "🐢", title: "摸鱼大师",
    curse: "你的Steam游戏时长比你的实验记录还长。",
    crime: "核心罪名：消极抵抗罪",
    crimeDesc: "你是课题组里的摸鱼艺术家。你掌握了所有逃避劳动的技巧：服务器挂机假装在跑数据、PPT反复修改假装在忙、每次去实验室只待30分钟但发朋友圈定位。你的工位永远堆着没洗的玻璃器皿，但你的游戏段位高得吓人。",
    danger: "导师迟早会发现你。更可怕的是，当你想认真做点事时，你已经丧失了科研能力。你会在答辩前三个月突然发现自己连Western Blot都不会做了。",
    guide: "继续摸，但至少要保证毕业。建议每周去实验室露脸三次，每次不少于1小时，并且学会在导师出现时假装专注。",
    boss: "你需要一个放养型导师——TA自己也很忙，没空管你，只要你不炸实验室就行。"
  },
  PRSC: {
    animal: "🎭", title: "知识付费讲师",
    curse: "你编造的\"基金秘籍\"害了更多人，粉丝会变成你的债主。",
    crime: "核心罪名：学术传销罪",
    crimeDesc: "你敏锐地发现了学术圈的流量密码。你的B站/小红书/知乎粉丝是实验室人数的1000倍。你卖'科研写作课''国自然基金秘籍''SCI万能模板'，你不知道这些东西有没有用，但你知道有人需要。你的直播间里充满了焦虑的博士生，你的购物车链接是你真正的'代表作'。",
    danger: "同行会在背后议论你'不务正业'。更严重的是，如果你的某个'秘籍'被证明是错的，你可能会被网暴。你收割的焦虑，终有一天会反噬你——因为你也曾是那个焦虑的人。",
    guide: "赚钱不丢人，但别割太狠。至少你自己要真的中过基金、发过顶刊，否则就是诈骗。建议每年做一点真研究，保持'内容创作者'的底线，别沦为纯商人。",
    boss: "你需要一个不支持但也不反对你搞副业的导师。最好是TA自己也想卖课，你们可以联手割韭菜——不，联手做知识普惠。"
  },
  PRSF: {
    animal: "🦎", title: "学术该溜子",
    curse: "代表作制度出台那天，就是你的末日。",
    crime: "核心罪名：学术游牧罪",
    crimeDesc: "你是学术界的游牧民族。你在A组做过一点，在B课题挂过名，在C会议上吹过牛。你的简历很长，但没有主线。你参加所有的聚餐，认识所有的人，但没人知道你到底在研究什么。你的代表作页面是一张Excel表格，里面全是二作三作四作。",
    danger: "当评价体系改革（比如代表作制度），你会发现自己没有'代表作'。你像学术版的柯基——腿短，但以为自己跑得快。更可怕的是，当你想停下来深耕时，你已经丧失了专注的能力。",
    guide: "选一个方向，哪怕很小，深耕5年。你现在的问题不是人脉不够，是你没有值得让人记住的东西。人脉是乘法，能力是基数——基数为零，乘多少都是零。",
    boss: "你需要一个方向感极强但懒得管人的PI。TA会把你栓在一个课题上，这是你的救赎。"
  },
  TLHC: {
    animal: "🦚", title: "实验室清流",
    curse: "你的才华会在体制外发光，但你可能等不到毕业那天。",
    crime: "核心罪名：生不逢时罪",
    crimeDesc: "你是实验室的濒危物种。你真的热爱科学，你真的有好奇心，你真的能做出好东西。但你不擅社交，不擅包装，不擅在酒桌上讲段子。你的开题报告被'创新性不足'打回，你的文章因为'不够热点'被拒。你的实验笔记比你的毕业论文厚十倍，但没有人翻开过。",
    danger: "你会慢慢变成愤青，然后变成隐士，最后可能去开出租车。中国学术界最痛的损失，就是你们这样的人被迫离开。而当你离开后，这个系统会自我安慰：'他不适合这里'。",
    guide: "考虑去工业界或出国。真正的科学在工业实验室（比如DeepMind、OpenAI）里反而更能做。不要让一个烂系统定义你的价值。世界很大，不止有CNS。",
    boss: "你需要一个已经功成名就、不在乎KPI的元老级导师。TA不需要你发文章来涨面子，才会允许你做真正有趣的东西。"
  },
  TLHF: {
    animal: "🐌", title: "实验室隐士",
    curse: "你在实验室有一个角落，那里堆满了过期的培养基和你的青春。",
    crime: "核心罪名：社会性死亡罪",
    crimeDesc: "你在实验室有一个固定角落，那里堆满了你的私人物品、过期试剂和没拆的快递。你不参加组会，不抢一作，但你知道实验室所有八卦——谁和谁分手了、谁的数据是P的、导师昨晚又骂了谁。你的研究进度为零，但你的存在感莫名很强。",
    danger: "你会因为'没有产出'而延毕。导师对你又爱又恨——爱的是你不惹事，恨的是你不做事。当你终于想毕业时，你会发现自己连开题报告都没写。",
    guide: "至少把毕业论文凑出来。其他的，开心就好。建议你定期清理一下你的角落，免得导师以为那里闹老鼠。",
    boss: "你需要一个已经放弃治疗的老导师——TA只要你不炸实验室、不惹麻烦，就当你不存在。"
  },
  TLSC: {
    animal: "🎤", title: "科研界岳云鹏",
    curse: "你让大众爱上科学，但科学界永远不会爱你。",
    crime: "核心罪名：不务正业罪",
    crimeDesc: "你爱科学，但你的天赋不在做研究，而在传播研究。你能把复杂的理论讲成段子，能把枯燥的论文变成漫画。你的同行看不起你，觉得你'做科普是因为做不动科研'。你的公众号比你的Google Scholar主页流量高一百倍。你的成就感来自评论区的一句'原来是这样！'，而不是审稿人的'Accept'。",
    danger: "科普在中国学术评价体系中几乎不值钱。你做越大，评价体系的耳光越响。而且，一旦你说错了一个细节，全网都会来教你做人。更惨的是，当你需要申请奖学金或毕业时，你的'科普成果'不被承认。",",
    guide: "别理他们。这个社会需要你做的工作，远比需要另一篇水论文更多。建议挂靠一个科普机构，别在纯科研单位混。用你的影响力去倒逼评价体系改变，而不是等待被评价体系认可。",
    boss: "你需要一个开明且有一定社会地位的大佬罩着。否则你每次评奖或答辩都会被同行打压——他们会说你不务正业，尽管你的'正业'可能比他们更有社会价值。"
  },
  TLSF: {
    animal: "🧸", title: "学术吉祥物",
    curse: "你会被所有人记住笑容，但被系统彻底遗忘。",
    crime: "核心罪名：无害化罪",
    crimeDesc: "你是课题组里的情绪稳定剂。你帮导师管报销，帮同门修电脑，帮实验室订外卖。你脾气好，从不吵架，组会永远到得最早。但你的文章不够，你的创新性不足，你的毕业遥遥无期。你是实验室的'妈'，但没有人记得给妈妈过母亲节。",
    danger: "你的善良让你成了所有人的工具人。考核的时候，没人记得你修过多少电脑，他们只数你的SCI。你会因为'人缘好'而被延长使用时间，就像一张永远撕不烂的便利贴。",
    guide: "学会拒绝。从明天开始，所有非学术事务收费：修电脑100/次，代取快递50/次。攒够钱请个论文辅导。你的善良必须带点锋芒，否则就是对自己的残忍。",
    boss: "你需要一个心软且有一定资源的老导师。TA会被你的勤恳感动，在关键时刻拉你一把。但别指望太多——心软的人通常也做不了主。"
  },
  TRHC: {
    animal: "🦔", title: "学术刺头",
    curse: "你会在黑名单上度过余生，而黑名单会越来越长。",
    crime: "核心罪名：说真话罪",
    crimeDesc: "你是学术界的良心（或者说，痛感）。你公开批评学阀，你拒绝审关系稿，你在社交媒体上揭露学术不端。你是那个在群里说'emperor has no clothes'的小孩。你的存在让所有人不舒服，包括那些同意你的人——因为他们不敢和你站在一起。",
    danger: "你会被所有期刊拉黑，你的毕业签字永远拿不到，你的同门都躲着你。在一个腐烂的系统里，太干净是一种罪。你会慢慢发现：不是大家不知道真相，是大家选择了不知道。而你的'知道'，成了你的原罪。",",
    guide: "要么学会'体制内斗争'的智慧（比如匿名），要么彻底转行去媒体/NGO/工业界。面对面的硬刚，成本太高。记住：活着的见证者比死去的烈士更有用。保护好自己，才能继续发声。",
    boss: "你需要一个已经退休且不怕事的导师作为精神教父。或者根本不需要导师，你需要的是律师。"
  },
  TRHF: {
    animal: "🛸", title: "实验室民科",
    curse: "你的实验记录本里写满了推翻相对论的公式，但你的导师从不翻开。",
    crime: "核心罪名：离经叛道罪",
    crimeDesc: "你在实验室有一个'秘密项目'：推翻热力学第二定律、证明哥德巴赫猜想、或者统一相对论和量子力学。你的实验记录本写满了公式和草图，但你的导师从不看——因为TA看不懂，也因为TA知道你在浪费时间。你沉迷在自己的理论世界里，而你的正事（毕业）已经逾期三个月。",
    danger: "你可能会在组会上不小心暴露你的'理论'，然后被全组嘲笑。更惨的是，你因为沉迷民科而耽误了正事，最后既没推翻相对论，也没拿到毕业证。",
    guide: "把你的'民科时间'限制在每天1小时以内。剩下的时间，做点能毕业的事。如果你真的相信你的理论，等毕业后再去验证——至少先保住学位。",
    boss: "你需要一个包容怪咖的导师——或者根本没有导师，你自己就是自己的导师。但后者通常意味着你会延期。"
  },
  TRSC: {
    animal: "📢", title: "学术意见KOL",
    curse: "当你终于想认真做点事，没人相信你不是在喷。",
    crime: "核心罪名：嘴炮罪",
    crimeDesc: "你是学术圈的批评家。你知道所有的问题：评价体系、学阀、造假、延毕。你的每篇檄文都能引发共鸣，你的评论区全是'说得太对了'。但你自己的实验一团糟，你的文章发不出去。你的愤怒是真实的，但你的无力也是真实的。你越来越像那个只会骂球队但踢不了球的球迷。",
    danger: "你会变成'只说不做'的典型。当有一天你真的需要资源去做改变时，你会发现没人相信你——因为你从未证明过你能做成任何事。你的批判从武器变成了茧房，你被困在了自己的愤怒里。",
    guide: "批评是廉价的，建设是昂贵的。试着用你批判的智慧去解决一个小问题，哪怕只是帮一个学生改简历。行动比嘴炮有力量。如果你真的那么懂这个系统，那就进去改变它——而不是站在外面扔石头。",
    boss: "你需要一个实干派导师把你从云端拽下来。你需要看到：改变是Dirty Work，不是Twitter Thread。"
  },
  TRSF: {
    animal: "👻", title: "组会幽灵",
    curse: "你在实验室的花名册上，但在所有人的记忆里已经注销了。",
    crime: "核心罪名：存在感缺失罪",
    crimeDesc: "你在实验室的花名册上，在导师的微信列表里，但没人记得你长什么样。你从不参加组会，从不回复群消息，你的工位积了一层灰。当你偶尔出现在实验室时，新同学会客气地问：'师兄/师姐，你是新来的吗？'",
    danger: "导师可能已经忘了你的名字。当你突然出现在答辩现场时，导师会愣一下：'这人是谁？我们组的吗？'更可怕的是，你的毕业签字可能需要导师翻半天名单才想起有你这个人。",
    guide: "至少每月去一次实验室拍张照发朋友圈，证明你还活着。毕业前记得提前一个月联系导师，给TA足够的时间回忆你是谁。",
    boss: "你需要一个完全不在乎你去向的导师——幸运的是，这种导师在学术界非常多，他们甚至不记得自己今年招了几个学生。"
  }
};

/* ===== 恶趣味补丁（寿命/评审/导师/转行） ===== */
const resultPatches = {
  PLHC: {
    lifespan: '预计再撑2.3个项目周期。主要死因：导师又接了一个新项目，你被抽去"帮忙"。',
    lifespanPct: 15,
    review: '<span class="reviewer">Reviewer #2:</span> "The subject demonstrates excessive dedication and an alarming inability to say no. Reproducibility of work-life balance: FAILED. <span class="verdict">Recommend: REJECT</span> (exploitation unsustainable)."',
    advisorComment: '这孩子不错，就是还需要再磨练磨练。<span class="translation">翻译：还能再榨三年。</span>',
    career: '送外卖。至少按单结算，不会被抢一作。'
  },
  PLHF: {
    lifespan: '预计寿命等于你的最长学习年限倒计时。好消息：导师可能比你还急。',
    lifespanPct: 10,
    review: '<span class="reviewer">Editor:</span> "Novelty insufficient. The author has been saying \'yes\' for too long. Major revision required: learn to say \'no\'. <span class="verdict">Recommend: REJECT</span>."',
    advisorComment: '踏实，可靠，就是不太主动。<span class="translation">翻译：不会来事，不懂得争取利益。</span>',
    career: '公务员。你的温顺终于成了优点。'
  },
  PLSC: {
    lifespan: '永续经营。除非你的靠山倒了，或者你靠山的孩子也需要这个位置。',
    lifespanPct: 95,
    review: '<span class="reviewer">Editor:</span> "Accept with minor revisions. The subject demonstrates excellent networking skills. <span class="verdict">Conflict of interest: subject IS the conflict.</span>"',
    advisorComment: '这是我带过最优秀的学生。<span class="translation">翻译：最像我的学生，未来接班人。</span>',
    career: 'politician。你已经具备了所有必要技能。'
  },
  PLFC: {
    lifespan: '美貌保质期约3年，关系网半衰期约5年。建议尽早转型为"学术名媛"。',
    lifespanPct: 40,
    review: '<span class="reviewer">Reviewer #1:</span> "The data appears beautiful but lacks raw files. The statistical analysis was performed by someone else. <span class="verdict">Recommend: REJECT</span> due to reproducibility concerns."',
    advisorComment: '很有灵气，社交能力很强。<span class="translation">翻译：实验是谁做的来着？算了不重要。</span>',
    career: '网红经纪。你深谙包装人设之道。'
  },
  PRHC: {
    lifespan: '毕业倒计时已启动。目前剩余：取决于你最后一次投稿能否被接收，以及导师是否愿意签字。',
    lifespanPct: 20,
    review: '<span class="reviewer">Editor:</span> "<span class="verdict">REJECT.</span> The subject\'s attitude problem exceeds journal standards. Suggest submission to Journal of Unemployment."',
    advisorComment: '想法很多，但不太听话。<span class="translation">翻译：不好控制，无法成为我的工具人。</span>',
    career: '独立咨询师。至少不用再跪了，虽然可能没客户。'
  },
  PRHF: {
    lifespan: '预计寿命：直到导师忍无可忍把你踢出群聊。但你可能会因为"存在感太低"而被遗忘在群里，继续摸鱼。',
    lifespanPct: 70,
    review: '<span class="reviewer">Reviewer #3:</span> "<span class="verdict">ACCEPT.</span> The subject demonstrates exceptional work-life balance. Productivity: zero, but stress level: also zero. We should all learn from this master."',
    advisorComment: '这孩子有自己的节奏。<span class="translation">翻译：我已经放弃他了，只要别给我惹事。</span>',
    career: '游戏主播。你已经在训练了，而且段位比科研水平高得多。'
  },
  PRSC: {
    lifespan: '直到下一个AI工具取代你。或者直到你的粉丝发现你的"秘籍"是从知乎抄的。',
    lifespanPct: 60,
    review: '<span class="reviewer">Editor:</span> "<span class="verdict">ACCEPT</span> for publication in \'Predatory Journals Quarterly\'. Impact factor: your bank account balance."',
    advisorComment: '不务正业。<span class="translation">翻译：赚得比我还多，眼红。</span>',
    career: '你已经在做了，而且做得很好。'
  },
  PRSF: {
    lifespan: '直到导师要求你提交独立代表作。预计还有1-3年，珍惜你最后的蹭名时光。',
    lifespanPct: 25,
    review: '<span class="reviewer">Reviewer #2:</span> "<span class="verdict">REJECT.</span> The subject claims expertise in 12 fields. Citation analysis reveals h-index = 0 in all of them."',
    advisorComment: '涉猎广泛。<span class="translation">翻译：没有一篇是他独立完成的。</span>',
    career: '人力资源。擅长蹭项目和混圈子，这确实是HR的核心技能。'
  },
  TLHC: {
    lifespan: '在国内的毕业概率≈0。在国外的毕业概率≈∞。几何平均：你算算。',
    lifespanPct: 50,
    review: '<span class="reviewer">Editor:</span> "<span class="verdict">REJECT.</span> This work is too original for our readership. We recommend the subject leave the country immediately."',
    advisorComment: '太理想化了。<span class="translation">翻译：不懂人情世故，帮不上我的忙。</span>',
    career: '工业界研发。那里尊重你的想法，而且收入是助学金的10倍。'
  },
  TLHF: {
    lifespan: '预计寿命：无限。因为你从不参与竞争，所以也永远不会被淘汰——只会被遗忘在实验室的角落里发霉。',
    lifespanPct: 40,
    review: '<span class="reviewer">Reviewer #1:</span> "<span class="verdict">REJECT.</span> The subject claims to be \'working on a long-term project\' but has produced no data in 5 years. Recommend: check if subject is still alive."',
    advisorComment: '很有个性，不太合群。<span class="translation">翻译：不知道他在干什么，但也没给我添麻烦，就先养着吧。</span>',
    career: '实验室设备管理员。反正你比任何人都熟悉器材位置和过期试剂的库存。'
  },
  TLSC: {
    lifespan: '直到科普被纳入学术评价体系。也就是：永远不会。',
    lifespanPct: 45,
    review: '<span class="reviewer">Editor:</span> "<span class="verdict">REJECT.</span> This is \'science communication\', not \'science\'. Suggest resubmission to TikTok."',
    advisorComment: '科普做得不错。<span class="translation">翻译：不是正经科研，毕业答辩不算数。</span>',
    career: '脱口秀演员。你已经具备了核心技能：把痛苦变成笑声。'
  },
  TLSF: {
    lifespan: '直到你学会说"不"。根据当前趋势，预计寿命：无限趋近于你的最长学习年限。',
    lifespanPct: 20,
    review: '<span class="reviewer">Reviewer #3:</span> "<span class="verdict">REJECT.</span> The acknowledgments section is longer than the results. Over-credited and under-contributed."',
    advisorComment: '组里不能没有他。<span class="translation">翻译：没人修电脑、订外卖、管报销了。</span>',
    career: '行政助理。你的终极归宿。'
  },
  TRHC: {
    lifespan: '直到你被所有期刊联合封杀。以你目前的拉黑速度，预计还有1-2年。',
    lifespanPct: 10,
    review: '<span class="reviewer">Editor:</span> "<span class="verdict">REJECT.</span> The subject has insulted every member of the editorial board. Blacklist recommended. Also reported to ethics committee."',
    advisorComment: '很有个性。<span class="translation">翻译：想把他逐出师门，但又怕他在网上曝光我。</span>',
    career: '调查记者。说真话的勇气还在，而且不需要影响因子。'
  },
  TRHF: {
    lifespan: '预计寿命：直到你的"理论"在组会上被公开处刑。或者直到你发现毕业比推翻相对论更难——以先到者为准。',
    lifespanPct: 20,
    review: '<span class="reviewer">Reviewer #2:</span> "<span class="verdict">REJECT.</span> Claims to have unified general relativity and quantum mechanics using \'intuition\'. Evidence: a notebook full of doodles. Recommend: psychiatric evaluation."',
    advisorComment: '想法很大胆。<span class="translation">翻译：完全不懂他在干什么，但看起来挺忙的，就先不管了。</span>',
    career: 'B站科普UP主。反正你的理论也发不了论文，不如做成视频骗点击。'
  },
  TRSC: {
    lifespan: '直到你的粉丝发现你其实啥也没做。h-index暴露一切。',
    lifespanPct: 35,
    review: '<span class="reviewer">Editor:</span> "<span class="verdict">REJECT.</span> 10,000 words of critique, 0 words of original research. Signal-to-noise ratio: unacceptable."',
    advisorComment: '整天在网上胡说八道。<span class="translation">翻译：他说的是真的，但我不能承认。</span>',
    career: '体育评论员。反正都是嘴炮，评价C罗比评价Nature容易多了。'
  },
  TRSF: {
    lifespan: '预计寿命：直到毕业资格审查时发现你缺学分。或者直到导师在群里@你，你从不回复——以先到者为准。',
    lifespanPct: 25,
    review: '<span class="reviewer">Reviewer #1:</span> "<span class="verdict">REJECT.</span> The subject has not attended a single group meeting in 2 years. Presumed dropped out. Recommend: confirm enrollment status."',
    advisorComment: '...<span class="translation">翻译：我甚至想不起他的名字，查了一下名单，确实有这个人——但我不确定他研几了。</span>',
    career: '自由职业者。反正你也不需要工位，有WiFi就能活。'
  }
};

/* ===== 网站配置（部署后修改） ===== */
const SITE_URL = ''; // 例如: 'https://sciti.io' 或 'https://yourname.github.io/sciti'

/* ===== 彩蛋人格 ===== */
const easterEgg = {
  type: "REJECT", animal: "🤖", title: "审稿人2号",
  curse: "\"Novelty is not enough. Reject.\"",
  crime: "核心罪名：冷漠罪",
  crimeDesc: "你根本不在乎这个测试，就像审稿人根本不在乎你的论文。你机械地选完了所有选项，内心毫无波澜。你的冷漠是系统训练出来的——你已经看过太多烂论文，以至于对一切失去了期待。",
  danger: "你的冷漠伤害了无数投稿人的心灵。但你不在乎，因为你知道：下一份稿件更烂。你会在深夜的审稿系统前独自老去，而你的拒稿率将成为传说。",
  guide: "建议转行去当编辑，那里有权力，而且没有实验失败的烦恼。或者——试着重新相信一次，哪怕只是假装相信。",
  boss: "你不需要导师，你需要一个永远不退稿的期刊。但那种期刊不存在，所以你永远孤独。"
};

/* ===== 状态 ===== */
let current = 0;
let scores = { T:0, P:0, R:0, L:0, H:0, S:0, C:0, F:0 };

/* ===== DOM 缓存 ===== */
const $ = function(id) { return document.getElementById(id); };

/* ===== 核心逻辑 ===== */

function startQuiz() {
  $('welcome').classList.add('hidden');
  $('quiz').classList.remove('hidden');
  renderQuestion();
}

function renderQuestion() {
  const q = questions[current];
  $('question-count').textContent =
    '问题 ' + (current + 1) + ' / ' + questions.length;
  $('progress-fill').style.width =
    (current / questions.length * 100) + '%';
  $('question-number').textContent =
    'QUESTION ' + String(current + 1).padStart(2, '0');
  $('question-text').textContent = q.q;

  const optsDiv = $('options');
  optsDiv.innerHTML = '';
  q.opts.forEach(function(opt, idx) {
    const div = document.createElement('div');
    div.className = 'option';
    div.innerHTML = '<span class="option-label">' +
      String.fromCharCode(65 + idx) + '</span>' +
      '<div class="option-text">' + opt.text + '</div>';
    div.onclick = function() { choose(idx); };
    optsDiv.appendChild(div);
  });
}

function choose(idx) {
  const opt = questions[current].opts[idx];
  for (let k in opt.scores) {
    scores[k] += opt.scores[k];
  }
  current++;
  if (current < questions.length) {
    renderQuestion();
  } else {
    showLoader();
  }
}

function showLoader() {
  $('quiz').classList.add('hidden');
  $('loader').classList.remove('hidden');

  const lines = [
    '> 正在提取脑脊液样本... [PH值：咖啡]',
    '> 正在分析你的p值操纵技巧... [等级：宗师]',
    '> 正在查询你的延毕记录... [数据库超时，记录过多]',
    '> 正在评估导师对你的失望指数... [MAX] [已爆表]',
    '> 正在检索你的共同一作黑名单... [命中3条]',
    '> 正在分析你的组会发呆时长... [占总时长87%]',
    '> 正在比对你的致谢名单与实际情况... [不匹配率：94%]',
    '> 正在生成你的学术尸检报告...',
    '> 警告：检测到活体样本，尸检结果可能不准',
    '> 正在调取同门的心理创伤记录... [作为参考]',
    '> 分析完成。准备宣读判决书...'
  ];

  const term = $('terminal');
  term.innerHTML = '';
  let i = 0;

  function nextLine() {
    if (i < lines.length) {
      const d = document.createElement('div');
      d.className = 'line';
      d.textContent = lines[i];
      d.style.animationDelay = '0s';
      term.appendChild(d);
      i++;
      setTimeout(nextLine, 400 + Math.random() * 300);
    } else {
      setTimeout(showResult, 800);
    }
  }
  nextLine();
}

/* ===== 倾向度与隐藏人格计算 ===== */
function getSecondaryType(type, scores) {
  var dims = [
    { idx: 0, left: 'T', right: 'P', nameL: '真理导向', nameR: '论文导向' },
    { idx: 1, left: 'R', right: 'L', nameL: '叛逆', nameR: '忠犬' },
    { idx: 2, left: 'H', right: 'S', nameL: '硬核', nameR: '软核' },
    { idx: 3, left: 'C', right: 'F', nameL: '内卷', nameR: '躺平' }
  ];
  
  var neighbors = [];
  for (var i = 0; i < 4; i++) {
    var d = dims[i];
    var cur = type[i];
    var opp = cur === d.left ? d.right : d.left;
    var neighborType = type.substring(0, i) + opp + type.substring(i + 1);
    
    var oppScore = scores[opp];
    var curScore = scores[cur];
    var total = oppScore + curScore;
    var closeness = total > 0 ? oppScore / total : 0;
    
    neighbors.push({
      type: neighborType,
      dimName: cur === d.left ? d.nameR : d.nameL,
      closeness: closeness,
      pct: Math.round(closeness * 100)
    });
  }
  
  neighbors.sort(function(a, b) { return b.closeness - a.closeness; });
  return neighbors[0];
}

function getTendencyText(type, secondary) {
  var pct = secondary.pct;
  var secData = results[secondary.type] || easterEgg;
  var curData = results[type] || easterEgg;
  
  if (pct >= 40) {
    return '你的<strong>' + secondary.dimName + '</strong>指数高达 ' + pct + '%——你距离「' + secData.title + '」只差一个冲动的决定。';
  } else if (pct >= 25) {
    return '你的<strong>' + secondary.dimName + '</strong>倾向正在觉醒（' + pct + '%）。在特定压力下，你可能滑向「' + secData.title + '」。';
  } else {
    return '你的<strong>' + secondary.dimName + '</strong>指数仅为 ' + pct + '%——你的「' + curData.title + '」人格相当纯粹。';
  }
}

function showResult() {
  $('loader').classList.add('hidden');
  $('result').classList.remove('hidden');

  const total = Object.values(scores).reduce(function(a, b) { return a + b; }, 0);
  let type, data;

  if (total < 8) {
    type = easterEgg.type;
    data = easterEgg;
  } else {
    const d1 = scores.T >= scores.P ? 'T' : 'P';
    const d2 = scores.R >= scores.L ? 'R' : 'L';
    const d3 = scores.H >= scores.S ? 'H' : 'S';
    const d4 = scores.C >= scores.F ? 'C' : 'F';
    type = d1 + d2 + d3 + d4;
    data = results[type] || easterEgg;
  }

  $('res-animal').textContent = data.animal;
  $('res-type').textContent = type;
  $('res-title').textContent = data.title;
  $('res-curse').textContent = data.curse;
  $('res-crime').textContent = data.crime;

  // 倾向度诊断
  var secondary = getSecondaryType(type, scores);
  var tendencyText = getTendencyText(type, secondary);
  $('tendency-text').innerHTML = tendencyText;
  $('tendency-fill').style.width = secondary.pct + '%';

  const descHtml = data.crimeDesc.replace(/\n/g, '<br>');
  $('res-desc').innerHTML = descHtml;
  $('res-crime-desc').innerHTML = descHtml;
  $('res-danger').textContent = data.danger;
  $('res-guide').textContent = data.guide;
  $('res-boss').innerHTML = data.boss;

  // 隐藏人格渲染
  var secData = results[secondary.type] || easterEgg;
  $('sec-animal').textContent = secData.animal;
  $('sec-type').textContent = secondary.type;
  $('sec-title').textContent = secData.title;
  $('sec-desc').textContent = '你的隐藏人格是「' + secData.title + '」，倾向度 ' + secondary.pct + '%。这意味着在特定情境下，你可能会表现出 ' + secData.title + ' 的特征：' + secData.curse;
  $('sec-fill').style.width = secondary.pct + '%';

  // 恶趣味补丁渲染
  const patch = resultPatches[type];
  if (patch) {
    $('res-lifespan').textContent = patch.lifespan;
    $('lifespan-fill').style.width = patch.lifespanPct + '%';
    $('lifespan-label').textContent = '学术寿命指数：' + patch.lifespanPct + '%（基于历史尸检数据）';
    $('res-review').innerHTML = patch.review;
    $('res-advisor').innerHTML = patch.advisorComment;
    $('res-career').textContent = patch.career;
  } else {
    $('res-lifespan').textContent = '无法预测。你的存在本身就违背了统计学假设。';
    $('lifespan-fill').style.width = '0%';
    $('lifespan-label').textContent = '学术寿命指数：NULL';
    $('res-review').innerHTML = '<span class="reviewer">System:</span> "No data available. The subject is not even a researcher."';
    $('res-advisor').innerHTML = '无评语。<span class="translation">翻译：系统拒绝评价。</span>';
    $('res-career').textContent = '建议删除此账号。';
  }

  renderSpectrum();
  drawRadar();
}

/* ===== 光谱条 ===== */
function renderSpectrum() {
  const dims = [
    { left: '真理(T)', right: '论文(P)', l: scores.T, r: scores.P, color: '#1a1a1a' },
    { left: '叛逆(R)', right: '忠犬(L)', l: scores.R, r: scores.L, color: '#8b1a1a' },
    { left: '硬核(H)', right: '软核(S)', l: scores.H, r: scores.S, color: '#1e3a5f' },
    { left: '内卷(C)', right: '躺平(F)', l: scores.C, r: scores.F, color: '#b45309' }
  ];

  const wrap = $('spectrum-wrap');
  wrap.innerHTML = '';

  dims.forEach(function(d) {
    const total = d.l + d.r || 1;
    const lp = Math.round(d.l / total * 100);
    const rp = 100 - lp;
    const lean = lp >= 50 ? d.left : d.right;
    const leanVal = Math.abs(lp - 50) * 2;

    const row = document.createElement('div');
    row.className = 'spectrum-row';
    row.innerHTML =
      '<div class="spectrum-label"><span>' + d.left + '</span><span>' + d.right + '</span></div>' +
      '<div class="spectrum-track">' +
        '<div class="spectrum-bar spectrum-left-bar" style="width:' + lp + '%; background:' + d.color + ';"></div>' +
        '<div class="spectrum-bar spectrum-right-bar" style="width:' + rp + '%; background:#d4d4d4;"></div>' +
        '<div class="spectrum-center"></div>' +
      '</div>' +
      '<div class="spectrum-value">偏向 ' + lean + ' ' + leanVal + '%</div>';
    wrap.appendChild(row);
  });
}

/* ===== 雷达图 ===== */
function drawRadar() {
  const cvs = $('radar');
  const ctx = cvs.getContext('2d');

  // 高清屏适配
  const dpr = window.devicePixelRatio || 1;
  const displaySize = 280;
  cvs.width = displaySize * dpr;
  cvs.height = displaySize * dpr;
  ctx.scale(dpr, dpr);

  const cx = displaySize / 2;
  const cy = displaySize / 2;
  const r = 90;

  const vals = [
    Math.min(scores.T / (scores.T + scores.P || 1), 1),
    Math.min(scores.R / (scores.R + scores.L || 1), 1),
    Math.min(scores.H / (scores.H + scores.S || 1), 1),
    Math.min(scores.C / (scores.C + scores.F || 1), 1)
  ];

  const labels = ['真理T', '叛逆R', '硬核H', '内卷C'];
  const colors = ['#1a1a1a', '#8b1a1a', '#1e3a5f', '#b45309'];

  ctx.clearRect(0, 0, displaySize, displaySize);

  // 网格
  for (let i = 1; i <= 4; i++) {
    ctx.beginPath();
    for (let j = 0; j < 4; j++) {
      const ang = Math.PI / 2 * j - Math.PI / 2;
      const x = cx + Math.cos(ang) * (r * i / 4);
      const y = cy + Math.sin(ang) * (r * i / 4);
      if (j === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(0,0,0,0.06)';
    ctx.stroke();
  }

  // 轴线
  for (let j = 0; j < 4; j++) {
    const ang = Math.PI / 2 * j - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(ang) * r, cy + Math.sin(ang) * r);
    ctx.strokeStyle = 'rgba(0,0,0,0.1)';
    ctx.stroke();

    const lx = cx + Math.cos(ang) * (r + 18);
    const ly = cy + Math.sin(ang) * (r + 18);
    ctx.fillStyle = colors[j];
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(labels[j], lx, ly);
  }

  // 数据面
  ctx.beginPath();
  for (let j = 0; j < 4; j++) {
    const ang = Math.PI / 2 * j - Math.PI / 2;
    const x = cx + Math.cos(ang) * (r * vals[j]);
    const y = cy + Math.sin(ang) * (r * vals[j]);
    if (j === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(139,26,26,0.12)';
  ctx.fill();
  ctx.strokeStyle = '#8b1a1a';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // 顶点
  for (let j = 0; j < 4; j++) {
    const ang = Math.PI / 2 * j - Math.PI / 2;
    const x = cx + Math.cos(ang) * (r * vals[j]);
    const y = cy + Math.sin(ang) * (r * vals[j]);
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = colors[j];
    ctx.fill();
  }
}

/* ===== 分享海报 ===== */

function openShareModal() {
  const imgUrl = generateShareImage();
  $('share-img').src = imgUrl;
  $('download-link').href = imgUrl;
  $('share-modal').classList.remove('hidden');
}

function closeShareModal() {
  $('share-modal').classList.add('hidden');
}

/* ===== 每型专属配色（MBTI卡片风） ===== */
const typeColors = {
  PLHC: { bg: '#5D4037', accent: '#FFCC80', tags: ['过劳','工具人','被剥削'] },
  PLHF: { bg: '#455A64', accent: '#B0BEC5', tags: ['老实人','耗材','毕业困难'] },
  PLSC: { bg: '#3E2723', accent: '#FFD54F', tags: ['酒桌文化','资源垄断','继承人'] },
  PLFC: { bg: '#880E4F', accent: '#F48FB1', tags: ['社交货币','资源整合','捷径'] },
  PRHC: { bg: '#263238', accent: '#90A4AE', tags: ['孤勇','不听话','延毕高危'] },
  PRHF: { bg: '#1B5E20', accent: '#A5D6A7', tags: ['摸鱼','游戏','挂机'] },
  PRSC: { bg: '#BF360C', accent: '#FFAB91', tags: ['流量','卖课','割韭菜'] },
  PRSF: { bg: '#827717', accent: '#E6EE9C', tags: ['挂名','游牧','没代表作'] },
  TLHC: { bg: '#0D47A1', accent: '#90CAF9', tags: ['理想主义','人才流失','遗珠'] },
  TLHF: { bg: '#33691E', accent: '#C5E1A5', tags: ['隐士','角落','过期试剂'] },
  TLSC: { bg: '#E65100', accent: '#FFCC80', tags: ['科普','不务正业','传播'] },
  TLSF: { bg: '#C2185B', accent: '#F8BBD9', tags: ['吉祥物','工具人','老好人'] },
  TRHC: { bg: '#B71C1C', accent: '#EF9A9A', tags: ['说真话','黑名单','孤勇者'] },
  TRHF: { bg: '#311B92', accent: '#B39DDB', tags: ['民科','推翻','doodles'] },
  TRSC: { bg: '#C62828', accent: '#FFCDD2', tags: ['嘴炮','KOL','只说不做'] },
  TRSF: { bg: '#37474F', accent: '#B0BEC5', tags: ['幽灵','透明','被遗忘'] }
};

async function generateShareImage() {
  const type = $('res-type').textContent;
  const style = typeColors[type] || { bg: '#1a1a1a', accent: '#fff', tags: ['未知'] };

  const canvas = document.createElement('canvas');
  canvas.width = 600;
  canvas.height = 900;
  const ctx = canvas.getContext('2d');

  // ===== 背景 =====
  ctx.fillStyle = style.bg;
  ctx.fillRect(0, 0, 600, 900);

  // 顶部装饰细线
  ctx.fillStyle = style.accent;
  ctx.fillRect(60, 60, 480, 2);

  // ===== 品牌标（小） =====
  ctx.fillStyle = 'rgba(255,255,255,0.5)';
  ctx.font = '12px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('科研TI  ·  RESEARCHER TYPE INDICATOR', 300, 95);

  // ===== 获取数据 =====
  const animal = $('res-animal').textContent;
  const title = $('res-title').textContent;
  const curse = $('res-curse').textContent;
  const crime = $('res-crime').textContent;

  // ===== 大 Emoji =====
  ctx.textAlign = 'center';
  ctx.fillStyle = '#ffffff';
  ctx.font = '160px serif';
  ctx.fillText(animal, 300, 300);

  // ===== 4 字母代码（超大） =====
  ctx.font = 'bold 80px monospace';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(type, 300, 420);

  // ===== 称号 =====
  ctx.font = 'bold 36px "Noto Serif SC", serif';
  ctx.fillStyle = style.accent;
  ctx.fillText(title, 300, 475);

  // ===== 分隔装饰 =====
  ctx.fillStyle = 'rgba(255,255,255,0.25)';
  ctx.fillRect(200, 505, 200, 1);

  // ===== 诅咒金句 =====
  ctx.font = 'italic 22px "Noto Serif SC", serif';
  ctx.fillStyle = 'rgba(255,255,255,0.9)';
  const curseClean = curse.replace(/^["']|["']$/g, '');
  wrapText(ctx, '「' + curseClean + '」', 300, 545, 460, 36);

  // ===== 罪名标签（主 Pill） =====
  const crimeText = crime.replace('核心罪名：', '');
  ctx.font = 'bold 18px monospace';
  ctx.fillStyle = '#fff';
  ctx.textAlign = 'center';
  const cw = ctx.measureText(crimeText).width;
  const cBoxW = cw + 44;
  const cBoxX = 300 - cBoxW / 2;
  const cBoxY = 680;
  ctx.strokeStyle = style.accent;
  ctx.lineWidth = 2;
  ctx.strokeRect(cBoxX, cBoxY, cBoxW, 40);
  ctx.fillText(crimeText, 300, cBoxY + 27);

  // ===== 关键词小 Tags =====
  const tags = style.tags;
  ctx.font = '13px sans-serif';
  let tagX = 300 - (tags.length * 70) / 2;
  const tagY = 760;
  tags.forEach(function(tag) {
    const tw = ctx.measureText(tag).width;
    const tBoxW = tw + 20;
    ctx.fillStyle = 'rgba(255,255,255,0.12)';
    ctx.fillRect(tagX, tagY, tBoxW, 30);
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.fillText(tag, tagX + tBoxW / 2, tagY + 20);
    tagX += tBoxW + 10;
  });

  // ===== 底部品牌 =====
  ctx.fillStyle = 'rgba(255,255,255,0.35)';
  ctx.font = '13px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('测测你的同门是什么罪名  ·  科研TI', 300, 850);

  // 底部装饰线
  ctx.fillStyle = style.accent;
  ctx.fillRect(60, 870, 480, 2);

  // 右下角二维码
  await drawQRCode(ctx, SITE_URL, 460, 760, 100);

  return canvas.toDataURL('image/png');
}

/* ===== 二维码绘制（零依赖，调用免费API） ===== */
function drawQRCode(ctx, url, x, y, size) {
  return new Promise(function(resolve) {
    if (!url) {
      // 未配置域名：画占位框+提示
      ctx.strokeStyle = 'rgba(255,255,255,0.35)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 3]);
      ctx.strokeRect(x, y, size, size);
      ctx.setLineDash([]);
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.font = '11px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('扫码测试', x + size / 2, y + size / 2 + 4);
      ctx.font = '9px sans-serif';
      ctx.fillText('（部署后配置域名）', x + size / 2, y + size / 2 + 20);
      resolve();
      return;
    }

    var img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = function() {
      ctx.drawImage(img, x, y, size, size);
      // 二维码下方小字
      ctx.fillStyle = 'rgba(255,255,255,0.7)';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('扫码测测你的罪名', x + size / 2, y + size + 16);
      resolve();
    };
    img.onerror = function() {
      // 加载失败 fallback
      ctx.strokeStyle = 'rgba(255,255,255,0.3)';
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, size, size);
      ctx.fillStyle = 'rgba(255,255,255,0.5)';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('二维码加载失败', x + size / 2, y + size / 2 + 4);
      resolve();
    };
    img.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + encodeURIComponent(url);
  });
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const chars = text.split('');
  let line = '';
  const lines = [];

  for (let i = 0; i < chars.length; i++) {
    const testLine = line + chars[i];
    const metrics = ctx.measureText(testLine);
    if (metrics.width > maxWidth && i > 0) {
      lines.push(line);
      line = chars[i];
    } else {
      line = testLine;
    }
  }
  lines.push(line);

  for (let j = 0; j < lines.length; j++) {
    ctx.fillText(lines[j], x, y + j * lineHeight);
  }
}

/* ===== 假人数动画 ===== */
let count = 87326;
setInterval(function() {
  count += Math.floor(Math.random() * 3);
  const el = $('fake-count');
  if (el) el.textContent = count.toLocaleString();
}, 3000);
