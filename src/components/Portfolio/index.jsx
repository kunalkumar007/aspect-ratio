'use client';

import { useMemo, useState } from 'react';
import styles from './style.module.scss';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Short Videos', value: 'short' },
  { label: 'Long Videos', value: 'long' },
  { label: 'Podcast', value: 'podcast' },
];

const portfolioItems = [
  { id: 'BAibUCJmeKI', category: 'long', title: 'Long video 2 Quick bits' },
  { id: 'HdswZpgx7CE', category: 'short', title: 'reel 12 - J bhatia' },
  { id: 'KGim8Zbu0UI', category: 'short', title: 'Reel - 13 Navraj' },
  { id: 'yg4JAgxt8EI', category: 'long', title: 'Long 3 Story video' },
  { id: 'KEIorZziupI', category: 'long', title: 'Compass Culture' },
  { id: 'eskY2n9eEe4', category: 'podcast', title: 'Podcast 1 BBoy Super Shawn' },
  { id: 'PhK2ynHNfZY', category: 'podcast', title: "Podcast 2 Men's Rights False Allegations, Cruelty On Men" },
  { id: '5CpGaKob_B8', category: 'podcast', title: 'Podcast 3 - Amandeep' },
  { id: 'DZcFpZNEjvM', category: 'long', title: 'Long 1 Best Opener' },
  { id: 'vDZG7wcROj4', category: 'short', title: 'Reel 11 -- Capital Model Video' },
  { id: 'VNhnwcBtplk', category: 'short', title: 'Reel 8 Sankalp Convent Teaser' },
  { id: 'cdgwQb7R1_A', category: 'short', title: 'Reel 7 Showcase 2023' },
  { id: 'BdNGrzJvzNI', category: 'short', title: 'Reel 6 Drawing Video' },
  { id: 'UI813xBiOf8', category: 'short', title: 'Reel 5 Brain Tree Water' },
  { id: '5-9O5StQFtw', category: 'short', title: 'Reel 4 Sample' },
  { id: 'J_tGPfHk3gU', category: 'short', title: 'Reel 3 Supra' },
  { id: 'zWRcr7Y1DBc', category: 'short', title: 'Reel 1' },
  { id: 'NV9OnRutcBw', category: 'short', title: 'Reel 2 On AI' },
];

const categoryLabels = {
  short: 'Short Videos',
  long: 'Long Videos',
  podcast: 'Podcast',
};

const initialVisibleCount = 6;

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleItems = useMemo(() => {
    if (activeFilter === 'all') return portfolioItems;
    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  const displayedItems = isExpanded ? visibleItems : visibleItems.slice(0, initialVisibleCount);
  const hiddenCount = visibleItems.length - displayedItems.length;
  const canToggleItems = visibleItems.length > initialVisibleCount;

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setIsExpanded(false);
  };

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.header}>
        <p>Portfolio</p>
        <h2>Check our Project</h2>
      </div>

      <div className={styles.filters} aria-label="Portfolio filters">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter.value}
            className={activeFilter === filter.value ? styles.active : ''}
            onClick={() => handleFilterChange(filter.value)}
            aria-pressed={activeFilter === filter.value}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {displayedItems.map((item, index) => (
          <article className={`${styles.video} ${styles[item.category]}`} key={item.id}>
            <div className={styles.frame}>
              <iframe
                src={`https://www.youtube.com/embed/${item.id}`}
                title={`Aspect Ratio ${item.title}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className={styles.meta}>
              <span>{categoryLabels[item.category]}</span>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
            </div>
            <h3>{item.title}</h3>
          </article>
        ))}
      </div>

      {canToggleItems && (
        <div className={styles.actions}>
          <button type="button" onClick={() => setIsExpanded((expanded) => !expanded)}>
            {isExpanded ? 'Show less' : `Show more (${hiddenCount})`}
          </button>
        </div>
      )}
    </section>
  );
}
