export default defineI18nLocale(((local) => {
  return {
    head: {
      description: `IDGTN Toolset`,
    },
    pages: {
      index: {
        welcome: 'welcome',
        title: `home page`,
      },
      about: {
        title: `about us`,
        desc: 'IDGTN Multilingual Tools Site',
      },
    },
    config: {
      category: {
        text: 'Text Tools',
        image: 'Image Tools',
        color: 'Color Tools',
        code: 'Code Tools',
        other: 'Other Tools',
      },
      tools: {
        textDiff: {
          name: 'Text Difference Comparison Tool',
          desc: 'Compare the differences between two pieces of text',
        },
        imageCompress: {
          name: 'Image Compression Tool',
          desc: 'Description for image compression tool',
        },
      },
    },
  }
}))
