import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  studyNote: [
    {
      type: 'category',
      label: '学习笔记',
      link: {
        type: 'generated-index',
        slug: '/intro'
      },
      items: [
        {
          type: 'doc',
          id: '设计模式/introduce',
          label: '设计模式'
        },
        { type: 'doc', id: 'react/introduce', label: 'React' },
        { type: 'doc', id: 'fp/introduce', label: '函数式编程' }
      ]
    }
  ],
  designPattern: [
    {
      type: 'category',
      label: '设计模式',
      link: {
        type: 'doc',
        id: '设计模式/introduce'
      },
      items: [
        {
          type: 'category',
          label: '创建型模式',
          link: {
            type: 'generated-index',
            slug: '/create-pattern'
          },
          items: ['设计模式/创建型模式/工厂方法']
        },
        {
          type: 'category',
          label: '结构型模式',
          link: {
            type: 'generated-index',
            slug: '/structural-pattern'
          },
          items: []
        },
        {
          type: 'category',
          label: '行为模式',
          link: {
            type: 'generated-index',
            slug: '/behavioral-pattern'
          },
          items: []
        }
      ]
    }
  ],
  react: [
    {
      type: 'category',
      label: 'React',
      link: {
        type: 'doc',
        id: 'react/introduce'
      },
      items: ['react/test']
    }
  ],
  fp: [
    {
      type: 'category',
      label: '函数式编程',
      link: {
        type: 'doc',
        id: 'fp/introduce'
      },
      items: ['fp/test']
    }
  ],
  DL: [
    {
      type: 'category',
      label: '深度学习',
      link: {
        type: 'doc',
        id: 'dl/introduce'
      },
      items: ['dl/test']
    }
  ]
}

export default sidebars
