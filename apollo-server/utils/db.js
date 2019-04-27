import Lowdb from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import mkdirp from 'mkdirp'
import { resolve } from 'path'

mkdirp(resolve(__dirname, '../../live'))

export const db = new Lowdb(
  new FileSync(resolve(__dirname, '../../live/db.json'))
)

// Seed an empty DB
db.defaults({
  messages: [],
  uploads: [],
  moduleIndex: [
    {
      id: 1,
      type: 'base',
      title: 'Within Day'
    },
    {
      id: 2,
      type: 'common',
      title: ''
    },
    {
      id: 3,
      type: 'worse',
      title: '事情延误状态',
      selfQuestion: '此刻我有什么事情没做好吗?'
    },
    {
      id: 4,
      type: 'normal',
      title: 'Projects Creating'
    },
    {
      id: 5,
      type: 'normal',
      title: '练级之路'
    },
    {
      id: 6,
      type: 'normal',
      title: 'Skill Dots'
    },
    {
      id: 7,
      type: 'normal',
      title: 'PURSING'
    }
  ],
  moduleItems: [
    {
      name: '吃饭',
      valType: 'due', //逾期时长, 默认值
      belong: 1
    },
    {
      name: '穿衣服',
      belong: 1
    },
    {
      name: '刷牙',
      belong: 1
    },
    {
      name: '洗头',
      belong: 1
    },
    {
      name: '洗脸',
      belong: 1
    },
    {
      name: '洗衣服',
      belong: 1
    },
    {
      name: '洗毛巾',
      belong: 1
    },
    {
      name: '洗内衣',
      belong: 1
    },
    {
      name: '洗袜子',
      belong: 1
    },
    {
      name: '洗床单',
      belong: 1
    },
    {
      name: '洗被罩',
      belong: 1
    },
    {
      name: '视力',
      belong: 1
    },
    {
      name: '饮水',
      belong: 1
    },
    {
      name: '颈椎',
      belong: 1
    },
    {
      name: '内分泌',
      belong: 1
    },
    {
      name: '话痨',
      belong: 1
    },
    {
      name: '气功',
      belong: 1
    },
    {
      name: '拍照',
      belong: 1
    },
    {
      name: '爬山',
      belong: 1
    },
    {
      name: '散步',
      belong: 1
    },
    {
      name: '街拍',
      belong: 1
    },
    {
      name: '看风见景',
      belong: 1
    },
    {
      name: '写作',
      belong: 1
    },
    {
      name: '书法',
      belong: 1
    },
    {
      name: '收纳',
      belong: 1
    },
    {
      name: '唇齿',
      belong: 1
    },
    {
      name: '小说',
      belong: 1
    },
    {
      name: '充电',
      belong: 1
    },
    {
      name: '电话',
      belong: 1
    },
    {
      name: '表达吃力?',
      belong: 1
    },
    {
      name: '幸福感',
      belong: 1
    },
    {
      name: '生自己气',
      belong: 1
    },
    {
      name: '诗词',
      belong: 1
    },
    {
      name: '人文',
      belong: 1
    },
    {
      name: '阅读',
      belong: 1
    },
    {
      belong: 4,
      redirect: 'moduleCreating'
    },
    {
      belong: 7,
      name: '买电脑'
    },
    {
      belong: 7,
      name: '买房子'
    },
    {
      belong: 7,
      name: '买汽车'
    },
    {
      belong: 7,
      name: '买路由'
    },
    {
      belong: 7,
      name: '买网络'
    },
    {
      belong: 7,
      name: '买家具'
    },
    {
      belong: 7,
      name: '买电器'
    },
    {
      belong: 7,
      name: '买洗衣机'
    },
    {
      belong: 7,
      name: '买SSD'
    }
  ],
  moduleCreating: [
    {
      folder: 'workspace-ui',
      repo: '',
      desc: 'workspace 工作目录参数',
      skills: ['yarn', 'workspace', 'lerna', 'git subtree', 'node', 'graphql']
    }
  ],
  moduleProgressMe: [
    {
      type: 'easy',
      name: 'TODO LIST',
      keys: ['relation', 'REST to GRAPHQL']
    },
    {
      type: 'easy',
      name: 'NOTEBOOK',
      keys: ['RichText']
    },
    {
      type: 'medium',
      name: 'BLOG',
      keys: ['role', 'auth']
    },
    {
      type: 'hard',
      name: 'INFO DISTRIBUTION'
    },
    {
      type: 'easy',
      name: 'HomeLauncher API'
    },
    {
      type: 'medium',
      name: 'HomeLauncher API Counts',
      keys: ['redis']
    },
    {
      type: 'hard',
      name: 'HomeLauncher API 决策',
      keys: ['决策']
    },
    {
      type: 'hard',
      name: 'RENTAL'
    }
  ],
  moduleGroup: []
}).write()
