/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  硬件与半导体: [
    'Home',
    {
      type: 'category',
      label: '基础知识',
      link: {
        type: 'generated-index',
        //description: '',
        keywords: ['硬件与半导体', '硬件与半导体基础知识', '电阻', '电容', '电感', '磁珠', '二极管', '三极管', 'MOS', '运算放大器', '数字电路', '设计规范', '推挽开漏', '共模差模', '储存介质', '锂电池', '编码器'],
      },
      items: [
        '基本元器件-电阻',
        '基本元器件-电容',
        '基本元器件-电感与磁珠',
        '基本元器件-二极管',
        '基本元器件-晶体三级管',
        '基本元器件-场效应管',
        '基本元器件-光电耦合器',
        '基本元器件-运算放大器',
        '数字电路基础知识',
        'ADC与DAC基础知识',
        '推挽与开漏输出',
        '共模信号与差模信号',
        '数字电路中的竞争与冒险',
        '存储器的分类',
        '保险丝的选型',
        '锂电池选型指南',
        '编码器的几种输出方式',
        '防反接电路的设计',
        '个人PCB设计规范',
      ],
    },

    {
      type: 'category',
      label: '嵌入式硬件',
      link: {
        type: 'generated-index',
        //description: ' ',
        //keywords: ['硬件与半导体', '协议', '通信协议', '逻辑电平', 'SPI', 'I2C', 'CAN', 'USB', ],
      },
      items: [
        'RobotCtrl-STM32通用开发套件',
        'RobotCtrl_Core-核心板',
        'RobotCtrl_Func-外设拓展板',
        'RobotCtrl_Power-电源供电板',
        'Flip-基于全志F1C200s的Linux开发板',
        'OSD335x最小系统的设计',
        '如何设计一款单片机的最小系统', // CSDN
        'STM32F4硬件开发',
        'SwiftCtrl-蓝牙手柄',
        '自制CMSIS-DAP',
        //'X86平台的硬件测试',
      ],
    },

    {
      type: 'category',
      label: '电机驱动',
      link: {
        type: 'generated-index',
        //description: ' ',
        //keywords: ['硬件与半导体', '协议', '通信协议', '逻辑电平', 'SPI', 'I2C', 'CAN', 'USB', ],
      },
      items: [
        '直流有刷电机驱动的设计',
        'TinyDVR-小巧身材，满载动力',
        'RaptorDVR-集成稳压的30A双电机驱动',
        'AirForce-充满灵性的电机驱动模块',
        'ZenDriver-高性能的电机驱动',
        '电机驱动方案-IR2104S',
      ],
    },

    {
      type: 'category',
      label: '通信协议',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['硬件与半导体', '协议', '通信协议', '逻辑电平', 'SPI', 'I2C', 'CAN', 'USB',],
      },
      items: [
        '通信协议-数字逻辑电平',
        '通信协议-串口通信',
        '通信协议-SPI',
        '通信协议-I2C',
        '通信协议-CAN',
        '通信协议-USB',
        '通信协议-以太网',
      ],
    },

    {
      type: 'category',
      label: '电源设计',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        '电源设计-方案确定',
        '电源拓扑-线性稳压',
        '电源拓扑-开关稳压（非隔离型）',
        '电源拓扑-开关稳压（隔离型）',
        '电源设计-开关稳压IC（非隔离型）',
        '电源设计-自举电路',
        '电源设计-纹波噪声与测量方法',
        '电源设计-LDO电源抑制比（PSRR）与测量方法',
        '电源方案（LDO）-XC6206',
        '电源方案（Buck）-LMR14050',
        '电源方案（Buck）-TPS54531',
        '电源方案（Buck）-XL2009E1',
        '电源方案（Boost）-SX1308',
        '电源方案（PMIC）-EA3036C',
        '电源方案（PMIC）-EA3059',
      ],
    },


    {
      type: 'category',
      label: '射频电路',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        //'射频-基础知识',
        '射频-组件与系统-导线',
        '射频-组件与系统-电阻',
        '射频-组件与系统-电容',
        '射频-谐振电路-基本定义',
        '射频-谐振电路-无损组件的共振',
        '射频-谐振电路-负载Q值',
        //'射频-无线电波与天线',
        '射频-S参数',
        '射频-天线基础知识',
        '射频-天线的分类与选型',
        '史密斯圆图与匹配电路基础',
        '一般天线匹配电路的设计',
      ],
    },


    {
      type: 'category',
      label: '信号与电源完整性',
      link: {
        type: 'generated-index',
        //description: ' ',
        slug: '/硬件与半导体',
        keywords: ['x', 'x'],
      },
      items: [
        '高速电路的设计',
        '信号完整性-基础概念',
        '信号完整性-时域与频域',
        '信号完整性-阻抗与电气模型',
        '信号完整性-电阻的物理基础',
        '信号完整性-传输线',
        '信号完整性-失真',
        '信号完整性-串扰',
        '电源完整性设计',
        'ESD基础知识',
        'EMC设计指南',
        '信号地与机壳地间的EMC设计',
      ],
    },

    {
      type: 'category',
      label: '半导体自动化测试',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        '半导体测试基础-基本概念',
        '半导体测试基础-OS测试',
        '半导体测试基础-DC参数测试',
        '半导体测试基础-功能测试',
        '半导体测试基础-AC参数测试',
      ],
    },

    {
      type: 'category',
      label: '软件与仪器使用',
      link: {
        type: 'generated-index',
        //description: ' ',
        keywords: ['x', 'x'],
      },
      items: [
        'AD常用技巧',
        'AD基本操作-环境搭建',
        'AD基本操作-基础知识',
        'AD基本操作-原理图绘制',
        'AD基本操作-多板系统设计',
        'AD使用Git的注意事项',
        '函数思想在电路设计中的应用',
        'OrCAD配置与技巧',
        '示波器的触发模式',
        '网络分析仪的使用',
        '逻辑分析仪的使用',
        '宽带注入变压器的使用',
        '线性注入器的使用',
      ],
    },


    {
      type: 'category',
      label: 'ATE Test Fundamental',
      link: {
        type: 'generated-index',
        //description: 'describtion to be updated',
        keywords: ['x', 'x'],
      },
      items: [
        'Continuity_Test',
        'DC_Parameters',
        'IDD_Test',
        'Leakage_Test',
        'Level_Threshold_Test',
        'Digital_Functional_Test',
      ],
    },
    {
      type: 'category',
      label: 'ATE Mixed Signal Test',
      link: {
        type: 'generated-index',
        slug: '/ATE',
        //description: 'describtion to be updated',
        keywords: ['x', 'x'],
      },
      items: [
        'Basics_of_Mixed_Signal_Test',
        'Basics_of_Fourier_Transform',
        'ADC-Static_Parameters',
        'ADC-Dynamic_Parameters',
        'DAC-Static_Parameters',
        'DAC-Dynamic_Parameters',
        'Troubleshooting_of_ADC_and_DAC',
      ],
    },
    {
      type: 'category',
      label: 'ATE Coding Syntax',
      link: {
        type: 'generated-index',
        //description: 'describtion to be updated',
        keywords: ['x', 'x'],
      },
      items: [
        'VBT_Syntax-TheHdw',
        'VBT_Syntax-TheHdw-DCVI',
        'VBT_Syntax-TheExec-Flow',
        'Pattern_Syntax_Notes',
        'DCVI_Alarms'
      ],
    },






  ],




  嵌入式与软件: [{
    type: 'category',
    label: '软件开发',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      keywords: ['x', 'x'],
    },
    items: [
      '双系统极简安装指南',
      '网页版串口助手的开发',
      'Ubuntu配置笔记',
      'ROS入门笔记',
      '机器视觉入门',
      '使用R语言进行数据分析',
      'CSS学习笔记',
      'HTML学习笔记',
      'JavaScript学习笔记',
      'Docker简易指南',
      'DockerCompose-更优雅的打开方式',
      '自适应网页设计',
      '前端开发-环境搭建',
      'BookJourney-二手书商城小程序',
      'Git学习笔记',
    ],
  },
  {
    type: 'category',
    label: 'Linux',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      keywords: ['x', 'x'],
    },
    items: [
      'Linux学习笔记-基础知识',
      'Linux学习笔记-用户操作',
      '嵌入式Linux-基础知识',
      '嵌入式Linux-GPIO子系统',
      'BeagleBone系列-基本参数与环境配置',
      'BeagleBone系列-无线连接',
      'BeagleBone系列-使用BBIO库开发',
      'BeagleBone系列-BBAI入坑',
      'JetsonNano系列-入坑',
    ],
  },
  {
    type: 'category',
    label: '单片机',
    link: {
      type: 'generated-index',
      slug: '/嵌入式与软件',
      //description: 'describtion to be updated',
      keywords: ['x', 'x'],
    },
    items: [
      'HAL库开发笔记-环境配置',
      'HAL库开发笔记-GPIO',
      'HAL库开发笔记-外部中断',
      'HAL库开发笔记-串口通信',
      'HAL库开发笔记-DMA',
      'HAL库开发笔记-TIM基本定时器',
      'HAL库开发笔记-TIM通用定时器',
      'HAL库开发笔记-I2C通信（MPU6050）',
      'HAL库开发笔记-CAN通信',
      'HAL库开发笔记-USB通信',
      'HAL库开发笔记-以太网通信（LwIP）',
      'Lora通信-基于正点原子ATK-LORA-01模块',
      'STM32CubeIDE串口重定向（printf）及输出浮点型',
      '如何读写单个bit',
      'PlatformIO—一站式嵌入式开发工具',
      'PlatformIO搭配CubeMX食用',
      'C与STM32常用宏定义',
      'C与STM32代码规范',
      'SWD与JTAG的区别与联系',
      'CubeMX与CubeIDE避坑',
      'STM32的启动模式',
      'KeilMDK配置指南',
      '大疆N3飞控-参考资料',
      'ATTiny85调试记录',
      'T-Clock桌上小钟',
      '麦轮小车',
      '转义字符',
      '一个舵机的自我修养',
      'FreeRTOS开发笔记',
    ],
  },
  ],


  效率指南: [{
    type: 'category',
    label: '机器人队行政',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      keywords: ['x', 'x'],
    },
    items: [
      '四校交流-策划案',
      '四校交流-策划案-正式',
      '团队知识库的搭建-理论',
      '队内影像资源管理方法',
      '大扫除-经验模板',
      '校门口车辆放行-流程',
      '参观实验室-经验模板',
      '动员大会-经验总结',
      '换届大会-经验总结',
      '破冰活动-经验总结',
      '出展活动-经验总结',
    ],
  },
  {
    type: 'category',
    label: '产品相关',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      keywords: ['x', 'x'],
    },
    items: [
      '产品经理的日常',
      '中台的概念',
      '画图基础',
      '智能硬件产品经理的技术要求',
      '如何撰写一份BRD',
      '软件开发中的注意事项',
      '专业与分工',
      '关于复盘',
    ],
  },

  {
    type: 'category',
    label: '小技巧',
    link: {
      type: 'generated-index',
      //description: 'describtion to be updated',
      keywords: ['x', 'x'],
    },
    items: [
      'Windows常用命令',
      'Windows11个人初始化配置',
      'VSCode的便携模式',
      '开启Chrome（Edge）多线程下载',
      '移除Chrome（Edge）由组织管理',
      '用群晖自带反向代理实现HTTPS访问',
      '解决Google相册导出时间信息丢失问题',
      '使用gitignore忽略特殊文件',
      '3D打印：ABS与PLA的区别',
      '如何批量拉取Git仓库更新',
      '如何用Markdown写公众号文章',
      '如何快速删除node_modules',
      '如何为公众号文章增加特效',
      '如何在Linux下使用微信',
      '如何打印出手写效果的文字',
      '如何从乐曲中分离音轨',
      '如何高效制作幻灯片',
      '卡片式写作',
      '用reveal.js制作幻灯片',
      'npm和Yarn换源加速国内访问',
      'Vue.js小技巧',
      '正则表达式实用语句',
      'GitHub改Host',
      'MSI主板开启虚拟化的方法',
      'Git配置代理',
      '删除GitHub仓库中某个文件夹',
      '定制SublimeText3',
      '用Vercel加速Pages服务',
      'Doxygen注释规范',
      'AltiumDesigner安装库文件',
      'CentOS配置OhMyZsh',
      '如何快速制作一个启动盘',
      '使用VSCode进行远程开发',
      'Node.js和npm的安装与卸载（MacOS）',
    ],
  },
  {
    type: 'category',
    label: '生活黑客',
    link: {
      //slug: '/生活',
      type: 'generated-index',
      //description: '一些生活相关的笔记。',
      keywords: ['life', 'lifestyle'],
    },
    items: [
      '如何调制一杯鸡尾酒',
      '太阳高度角计算',
      '如何准备一个逃生背包',
      '谈谈未来的职业选择',
      //'如何合理配置个人资产',
      '读《黑客与画家》',
      //'英语六级-备考',
      //'音乐相关',
      'THEHack2019黑客马拉松',
      'Hack.init()黑客马拉松',
      '焊接大赛培训及总结',
      //'为什么要「站在巨人的肩膀上」',
      '如何不被AI取代',
      //'一些观点',
    ],
  },
  {
    type: 'category',
    label: '高效工作',
    link: {
      slug: '/效率指南',
      type: 'generated-index',
      //description: 'describtion to be updated',
      keywords: ['x', 'x'],
    },
    items: [

      '基于RSSHub搭建RSS生成器（群晖Docker）', // CSDN
      '基于Bitwarden搭建密码管理器（群晖Docker）', // CSDN
      '基于acme.sh自动申请域名证书（群晖Docker）', // CSDN
      '基于Calibre搭建在线书库（群晖Docker）', // CSDN
      '如何实现外网RDP远控（frp）', // CSDN
      '使用rdp访问群晖NAS', // CSDN
      '如何用Markdown写一份简历', // CSDN
      '使用Rclone同步网盘数据',
      '为什么你需要一个知识库', // CSDN
      '个人文案排版规范', // CSDN todo
      '技术文档写作规范', // CSDN todo
      '如何保存易逝的文字',
      '个人知识库的搭建-基于Docusaurus', // CSDN
      'Windows初始化与软件推荐', // CSDN todo
      'Docusaurus极简部署指南', // CSDN todo
      'Hugo极简搭建指南', // CSDN todo
      '如何在iPad上运行VSCode', // CSDN
      '使用Markdown高效写作', // CSDN
      '用树莓派架设云打印服务器', // CSDN todo
      '用Graphviz绘制关系图', // CSDN todo
      'RSS-高效率的阅读方式',
      '如何在Markdown中使用LaTeX',
      '把回忆放心交给GooglePhotos',
      'VSCode生产力指南-环境配置', // CSDN todo
      'VSCode生产力指南-JupyterNotebook', // CSDN todo
      '在浏览器上运行VSCode（旧）',
      '如何配一台电脑',
    ],
  },
  ],

};

module.exports = sidebars;

// archive：
//'archive/Python学习笔记',
//'archive/STM32麦轮小车',
//'archive/RM校内赛-前期策划',
//'archive/报告书都要写些什么？',
//'archive/无人驾驶比赛',
//'archive/硬件模块',
//'archive/命令行基本操作'
//'archive/科技X的访谈',
//'archive/极简面包-烘培',
//'电路设计中常用的接口及关键点',
//'archive/Bash基础',
//'archive/从零搭建视觉开发环境（Docker-Linux）',
//'archive/Excel批量激活链接并转为图片',
//'archive/智能硬件产品开发流程',
//'archive/华广爬楼指北',
//'archive/小车游华广-比赛',
//'archive/麦昆小车-测评',
//'archive/STM32模块设计-LED',
//'archive/团队公开知识库的搭建',

// unlist：
//'unlist/电源设计-LDO跳变抑制能力对比测试记录',
//'unlist/CentOS安装Docker',
//'unlist/乐谱-Imagine',
//'unlist/Docker方式运行code-server',
//'unlist/T-Clock桌上小钟（旧）',
//'unlist/构建知识管理系统',
//'unlist/回归博客',
//'unlist/团队知识库搭建记录-DokuWiki',
//'unlist/个人知识库极简搭建指南-VuePress',
//'unlist/博客转至GitBook',
//'unlist/浅谈Bitcron博客平台',
//'unlist/基于docsify搭建个人Wiki',
//'unlist/PCB名片的设计',
//'unlist/如何用LaTeX写论文',

// preview
//'我是如何做数据容灾的',
//'如何用Markdown写学术论文',
//'AD基本操作-PCB绘制',
//'AD基本操作-库文件绘制',
