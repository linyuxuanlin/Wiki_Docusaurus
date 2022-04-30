/**
 * 基地成员信息列表
 * name: 昵称
 * avatar：头像链接，也可通过 "github:用户名" 使用 GitHub 头像
 * description：自我描述
 * githubUrl：GitHub 链接，可选
 * blogUrl：博客链接或其他媒体链接，可选
 */
 const members: Member[] = [
    {
      name: 'yww',
      avatar: 'github:jaslli',
      description: '表面很菜，其实很强',
      githubUrl: 'https://github.com/jaslli',
      blogUrl: 'https://yww52.com/',
    },
    {
      name: 'yeshan333',
      avatar: 'github:yeshan333',
      description: '玄学爱好者&摸🐟大师，资深混子',
      githubUrl: 'https://github.com/yeshan333',
      blogUrl: 'https://shansan.top',
    },
    {
      name: 'Sustart',
      avatar: 'https://cdn.jsdelivr.net/gh/MrGo123/asset@2020-1-2-1.0/headPortrait/mybloghp.jpg',
      description: '赶紧学习',
      githubUrl: 'https://github.com/MrGo123',
      blogUrl: 'https://zy68.top/'
    },
    {
      name: 'redhat',
      avatar: 'github:redhat123456',
      description: '题不可一日不刷',
      githubUrl: 'https://github.com/redhat123456',
      blogUrl: 'https://redhat123456.github.io/router_index/'
    },
    {
      name: 'Higgins',
      avatar: 'https://i.loli.net/2020/07/31/QLmPF47aCS8sYGf.jpg',
      description: '道生一，一生二',
      githubUrl: 'https://github.com/higgins995',
      blogUrl: 'https://higgins995.top/',
    },
    {
      name: 'lemon',
      avatar: 'https://lvshaomei.github.io/images/banner/labia.jpeg',
      description: 'The harder, the more fortunate',
      githubUrl: 'https://github.com/Lvshaomei',
      blogUrl: 'https://lvshaomei.github.io/',
    },
    {
      name: 'suze',
      avatar: 'https://picture.suze666.top/images/2020/02/20/22da933f1a91d0a482256d0a88440337.jpg',
      description: '今天也是努力写代码的一天呢',
      githubUrl: 'https://github.com/suze233',
      blogUrl: 'https://suze666.top'
    },
    {
      name: 'lei',
      avatar: 'github:Leishen-hub',
      description: '鱼',
      githubUrl: 'https://github.com/Leishen-hub',
      blogUrl: 'https://leishen-hub.github.io/',
    },
    {
      name: 'liang',
      avatar: 'github:010505',
      description: '从菜鸟到大神',
      githubUrl: 'https://github.com/010505',
      blogUrl: 'https://github.com/010505/official-website'
    },
      {
      name: 'norno',
      avatar: 'github:nornoya',
      description: '0v0',
      githubUrl: 'https://github.com/nornoya',
      blogUrl: 'https://nornoya.github.io/'
    },
      {
      name: 'ZXY39',
      avatar: 'github:zxy39',
      description: '愿存初心',
      githubUrl: 'https://github.com/ZXY39',
      blogUrl: 'https://zxy39.gitee.io/'
    },
    {
      name: 'WSX',
      avatar: 'github:SS-YSY',
      description: '努力努力再努力',
      githubUrl: 'https://github.com/SS-YSY',
      blogUrl: 'https://ss-ysy.github.io/'
    },
    {
      name: 'Axieyun',
      avatar: 'github:Axieyun',
      description: '生而为人，无惧挑战',
      githubUrl: 'https://github.com/Axieyun',
      blogUrl: 'http://blog.axieyun.top'
    },
    {
      name: 'lucky_dog',
      avatar: 'github:LuckyLXS',
      description: '你我终会在山巅相遇',
      githubUrl: 'https://github.com/LuckyLXS',
      blogUrl: 'https://LuckyLXS.github.io'
    },
    {
      name: 'Jellylorry',
      avatar: 'github:Jellylorry',
      description: '又菜又爱摸',
      githubUrl: 'https://github.com/Jellylorry',
      blogUrl: 'https://gitee.com/jellylorry'
    },
    {
      name: 'KIKO',
      avatar: 'github:KIKO',
      description: '每天多努力一点点',
      githubUrl: 'https://github.com/2484895358',
      blogUrl: ''
    },
    {
      name: 'jj123t',
      avatar: 'github:jj123t',
      description: 'Zzz',
      githubUrl: 'https://github.com/jj123t',
      blogUrl: 'https://jj123t.github.io'
    },
    {
      name: 'dong', 
      avatar: 'github:ZDHdong',
      description: '攀登高峰',
      githubUrl: 'https://github.com/ZDHdong',
      blogUrl: 'https://www.cnblogs.com/Z-dong/',
    },
  
  ]
  .map(it => ({
    ...it,
    avatar: handleAvatar(it.avatar)
  }));
  
  function handleAvatar(avatar: string) {
    var match = /^github\:(.+)$/.exec(avatar);
    if (match) return "https://avatars.githubusercontent.com/" + match[1] + "?s=256";
    return avatar;
  }
  
  export default members;