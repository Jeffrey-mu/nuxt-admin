export default defineI18nLocale(((local) => {
  return {
    head: {
      description: 'IDGTN工具集合',
    },
    pages: {
      index: {
        title: `首页`,
        welcome: '欢迎',
      },
      about: {
        title: `关于我们`,
        desc: 'IDGTN多语言工具站',
      },
    },
    config: {
      category: {
        text: '文本工具',
        image: '图像工具',
        color: '色彩工具',
        code: '编码工具',
        other: '其他工具',
      },
      tools: {
        textDiff: {
          name: '文本差异对比工具',
          desc: '比较两段文字之间的差异',
        },
        imageCompress: {
          name: '图片压缩',
          desc: '图片压缩描述图片压缩描述',
        },
      },
    },
  }
}))
