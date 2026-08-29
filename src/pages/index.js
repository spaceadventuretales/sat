import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

const HomeNewsItems = [
  {
    title: 'Space Adventures Newsroom Launch',
    date: '2026-03-20',
    description:
      'The newsroom is live with canon updates, production milestones, and release notes.',
    permalink: '/news/newsroom-launch',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Stories First. Universe Always.
        </Heading>
        <p className="hero__subtitle">
          Space Adventures is a story and movie universe with a living reference
          encyclopedia.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/stories">
            Explore Stories
          </Link>
          <Link className="button button--secondary button--lg" to="/movies">
            Explore Movies
          </Link>
          <Link className="button button--outline button--lg" to="/news">
            Latest News
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/encyclopedia/intro">
            Canon Encyclopedia
          </Link>
        </div>
      </div>
    </header>
  );
}

function LatestNewsSection() {
  const latestPosts = HomeNewsItems.slice(0, 3);

  return (
    <section className={styles.newsSection}>
      <div className="container">
        <Heading as="h2">Latest From The News Feed</Heading>
        <p>
          Track new lore, story drops, movie progress, and production notes as
          they land.
        </p>
        <div className="row">
          {latestPosts.length === 0 && (
            <div className="col col--12">
              <article className={styles.panel}>
                <Heading as="h3">No posts yet</Heading>
                <p>
                  The feed is empty for now. Follow the newsroom for upcoming
                  updates.
                </p>
                <Link className="button button--sm button--outline" to="/news">
                  Open Newsroom
                </Link>
              </article>
            </div>
          )}
          {latestPosts.map((post) => (
            <div className="col col--4 margin-bottom--lg" key={post.permalink}>
              <article className={styles.panel}>
                <p className={styles.meta}>{post.date}</p>
                <Heading as="h3">{post.title}</Heading>
                <p>{post.description}</p>
                <Link className="button button--sm button--outline" to={post.permalink}>
                  Read Update
                </Link>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Portal`}
      description="Space Adventures portal focused on stories, movies, canon references, and universe updates.">
      <HomepageHeader />
      <main>
        <section className={styles.primarySection}>
          <div className="container">
            <div className="row">
              <div className="col col--8">
                <article className={styles.panel}>
                  <Heading as="h2">Stories And Movies Are The Core</Heading>
                  <p>
                    This portal is designed to prioritize narrative output:
                    episodic tales, cinematic arcs, and long-form movie
                    concepts that evolve inside one coherent universe.
                  </p>
                  <div className={styles.inlineButtons}>
                    <Link className="button button--primary" to="/stories">
                      Enter Stories
                    </Link>
                    <Link className="button button--primary" to="/movies">
                      Enter Movies
                    </Link>
                  </div>
                </article>
              </div>
              <div className="col col--4">
                <aside className={styles.panel}>
                  <Heading as="h3">Encyclopedia Reference</Heading>
                  <p>
                    Need canon facts while reading? The encyclopedia is a
                    dedicated reference layer for timeline, worlds, factions,
                    and technology continuity.
                  </p>
                  <Link className="button button--sm button--outline" to="/encyclopedia/intro">
                    Open Encyclopedia
                  </Link>
                </aside>
              </div>
            </div>
          </div>
        </section>

        <LatestNewsSection />

        <section className={styles.communitySection}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <article className={styles.panel}>
                  <Heading as="h3">Community & Social</Heading>
                  <p>
                    Join universe discussions, share theories, and collaborate
                    on world details.
                  </p>
                  <Link className="button button--sm button--outline" to="/community">
                    Community Hub
                  </Link>
                </article>
              </div>
              <div className="col col--6">
                <article className={styles.panel}>
                  <Heading as="h3">Manifesto & Motivation</Heading>
                  <p>
                    Read the storytelling manifesto and why this universe is
                    being built.
                  </p>
                  <div className={styles.inlineButtons}>
                    <Link className="button button--sm button--outline" to="/manifesto">
                      Manifesto
                    </Link>
                    <Link className="button button--sm button--outline" to="/motivation">
                      Motivation
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
