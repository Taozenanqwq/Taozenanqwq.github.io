import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'
const csDocs: SidebarsConfig = {
  designPattern: [
    {
      type: 'category',
      label: '设计模式',
      link: {
        type: 'doc',
        id: '计算机基础/design-pattern/introduce'
      },
      items: [
        {
          type: 'category',
          label: '创建型模式',
          link: {
            type: 'generated-index',
            slug: '/create-pattern'
          },
          items: ['工厂方法', '抽象工厂', '生成器模式'].map(
            (name) => `计算机基础/design-pattern/创建型模式/${name}`
          )
        },
        {
          type: 'category',
          label: '结构型模式',
          link: {
            type: 'generated-index',
            slug: '/structural-pattern'
          },
          items: [].map(
            (name) => `计算机基础/design-pattern/结构型模式/${name}`
          )
        },
        {
          type: 'category',
          label: '行为模式',
          link: {
            type: 'generated-index',
            slug: '/behavioral-pattern'
          },
          items: [].map(
            (name) => `计算机基础/design-pattern/行为模式/${name}`
          )
        }
      ]
    }
  ],
  fp: [
    {
      type: 'category',
      label: '函数式编程',
      link: {
        type: 'doc',
        id: '计算机基础/fp/introduce'
      },
      items: [
        '简介',
        '声明式代码',
        '容器',
        'Monad',
        'Applicative Functor'
      ].map((name) => `计算机基础/fp/${name}`)
    }
  ],
  alg: [
    {
      type: 'category',
      label: '算法',
      link: {
        type: 'doc',
        id: '计算机基础/algorithm/introduce'
      },
      items: ['算法基础', '搜索'].map(
        (name) => `计算机基础/algorithm/${name}`
      )
    }
  ]
}
const feDocs: SidebarsConfig = {
  react: [
    {
      type: 'category',
      label: 'React',
      link: {
        type: 'doc',
        id: '前端/react/introduce'
      },
      items: ['introduce'].map((name) => `前端/react/${name}`)
    }
  ],
  vue: [
    {
      type: 'category',
      label: 'Vue',
      link: {
        type: 'doc',
        id: '前端/vue/introduce'
      },
      items: ['introduce'].map((name) => `前端/vue/${name}`)
    }
  ]
}
const beDocs: SidebarsConfig = {}
const dlDocs: SidebarsConfig = {}

const sidebars: SidebarsConfig = {
  CS: [
    {
      type: 'category',
      label: '计算机基础',
      link: {
        type: 'generated-index',
        slug: '/cs'
      },
      items: Object.values(csDocs).map((v) => {
        return {
          type: 'doc',
          id: v[0].link.id as string,
          label: v[0].label as string
        }
      }) as any
    }
  ],
  FE: [
    {
      type: 'category',
      label: '前端',
      link: {
        type: 'generated-index',
        slug: '/fe'
      },
      items: Object.values(feDocs).map((v) => {
        return {
          type: 'doc',
          id: v[0].link.id as string,
          label: v[0].label as string
        } as any
      })
    }
  ],
  BE: [
    {
      type: 'category',
      label: '后端',
      link: {
        type: 'generated-index',
        slug: '/be'
      },
      items: [
        { type: 'doc', id: 'placeholder', label: 'placeholder' }
      ]
    }
  ],
  DL: [
    {
      type: 'category',
      label: '深度学习',
      link: {
        type: 'generated-index',
        slug: '/dl'
      },
      items: [
        { type: 'doc', id: 'placeholder', label: 'placeholder' }
      ]
    }
  ],
  ...csDocs,
  ...feDocs,
  ...beDocs,
  ...dlDocs
}

export default sidebars
