module.exports = {
  // ↓忽略包含init的提交消息
  ignores: [(commit) => commit.includes('init')],
  // ↓按照传统消息格式来验证
  extends: ['@commitlint/config-conventional'],
  // ↓这里是自定义解析器，看不太懂，直接搬代码吧
  // ↓https://commitlint.js.org#/reference-configuration?id=parser-presets
  parserPreset: {
    parserOpts: {
      headerPattern: /^(\w*|[\u4e00-\u9fa5]*)(?:[\(\（](.*)[\)\）])?[\:\：] (.*)/,
      headerCorrespondence: ['type', 'scope', 'subject'],
      referenceActions: [
        'close',
        'closes',
        'closed',
        'fix',
        'fixes',
        'fixed',
        'resolve',
        'resolves',
        'resolved',
      ],
      issuePrefixes: ['#'],
      noteKeywords: ['BREAKING CHANGE', '不兼容变更'],
      fieldPattern: /^-(.*?)-$/,
      revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
      revertCorrespondence: ['header', 'hash'],
      warn() {},
      mergePattern: null,
      mergeCorrespondence: null,
    },
  },
  // ↓自定义提交消息规则
  rules: {
    // ↓body以空白行开头
    'body-leading-blank': [2, 'always'],
    // ↓footer以空白行开头
    'footer-leading-blank': [1, 'always'],
    // ↓header的最大长度
    'header-max-length': [2, 'always', 108],
    // ↓subject为空
    'subject-empty': [2, 'never'],
    // ↓type为空
    'type-empty': [2, 'never'],
    // ↓type的类型
    'type-enum': [
      2,
      'always',
      [
        // 新功能(feature)
        'feat',
        // 修复bug
        'fix',
        // 优化相关, 比如提升性能, 体验
        'perf',
        // 格式(不影响代码运行的变动)
        'style',
        // 文档(documentation)
        'docs',
        // 增加测试
        'test',
        // 重构(既不是新增, 也不是修改bug的代码变动)
        'refactor',
        // 构建过程或辅助工具的变动
        'chore',
        // 回滚到上一个版本
        'revert',
        // 打包
        'build',
        'wip',
        'workflow',
        'types',
      ],
    ],
  },
};
