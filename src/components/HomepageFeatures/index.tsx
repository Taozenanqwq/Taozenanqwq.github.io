import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

type FeatureItem = {
  title: string
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
  description: JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: '个人日记',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg')
      .default,
    description: <>记录每天的生活和工作内容，总结并反思</>
  },
  {
    title: '学习笔记',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg')
      .default,
    description: <>记录学习笔记，提升学习效率</>
  },
  {
    title: '个人作品',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg')
      .default,
    description: <>个人作品集，记录个人搭建的项目</>
  }
]

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')} style={{ cursor: 'pointer' }}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
