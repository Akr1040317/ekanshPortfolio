import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ScrollAnimation from './ScrollAnimation';

const HONORS = [
  {
    title: 'Scripps National Spelling Bee',
    achievement: '5th Place',
    level: 'National',
    year: '2022',
    details: 'Out of 10M+ participants',
    icon: '🏆'
  },
  {
    title: 'National Merit Scholar',
    achievement: 'Semifinalist',
    level: 'National',
    year: '2025',
    details: 'PSAT 1520, Applying for Finalist',
    icon: '🎓'
  },
  {
    title: 'Sir Garfield Sobers International Cricket',
    achievement: 'Champion as Captain',
    level: 'International',
    year: '2025',
    details: 'First victory by American team',
    icon: '🏏'
  },
  {
    title: 'NSDA National Tournament',
    achievement: 'Qualifier',
    level: 'National',
    year: '2024, 2025',
    details: 'Speech & Debate',
    icon: '🎤'
  },
  {
    title: 'NCFL Nationals',
    achievement: 'Qualifier & Regional Champion',
    level: 'National',
    year: '2023, 2024',
    details: 'Speech & Debate',
    icon: '🎤'
  },
  {
    title: 'PrincetonMUNC',
    achievement: 'Selected Delegate',
    level: 'National',
    year: '2025',
    details: 'Chosen from 128 delegates to represent school',
    icon: '🌍'
  },
  {
    title: 'SeminoleMUN',
    achievement: 'Outstanding Delegate',
    level: 'School',
    year: '2025',
    details: '',
    icon: '🌍'
  },
  {
    title: 'National Honor Society',
    achievement: 'Inductee',
    level: 'School',
    year: '',
    details: '',
    icon: '📚'
  },
  {
    title: "Principal's Honor Roll",
    achievement: 'Academic Achievement',
    level: 'School',
    year: '',
    details: '',
    icon: '⭐'
  },
  {
    title: 'All-County Athlete',
    achievement: 'Academic Achievement Award',
    level: 'County',
    year: '2024, 2025',
    details: '2x Winner',
    icon: '🎾'
  },
  {
    title: 'USA Cricket U15 South Zone',
    achievement: 'Best Bowler',
    level: 'Regional',
    year: '2022',
    details: 'Vice-Captain Florida U15',
    icon: '🏆'
  },
  {
    title: 'MLC Jr. Championship',
    achievement: 'All-Conference Dream Team',
    level: 'National',
    year: '2022',
    details: 'Best Bowler Atlantic Conference',
    icon: '⭐'
  }
];

const extractYears = (yearValue) => {
  if (!yearValue) {
    return [];
  }

  return `${yearValue}`
    .split(',')
    .map((part) => part.trim())
    .filter(Boolean);
};

const Honors = () => {
  const [levelFilter, setLevelFilter] = useState('All');
  const [yearFilter, setYearFilter] = useState('All');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const viewportRef = useRef(null);

  const levelOptions = useMemo(
    () => ['All', ...Array.from(new Set(HONORS.map((honor) => honor.level)))],
    []
  );

  const yearOptions = useMemo(() => {
    const years = new Set();

    HONORS.forEach((honor) => {
      extractYears(honor.year).forEach((year) => years.add(year));
    });

    return ['All', ...Array.from(years).sort((a, b) => Number(b) - Number(a))];
  }, []);

  const filteredHonors = useMemo(() => {
    return HONORS.filter((honor) => {
      const matchesLevel = levelFilter === 'All' || honor.level === levelFilter;

      if (!matchesLevel) {
        return false;
      }

      if (yearFilter === 'All') {
        return true;
      }

      const years = extractYears(honor.year);
      return years.includes(yearFilter);
    });
  }, [levelFilter, yearFilter]);

  const updateScrollState = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = viewport;
    const maxScrollLeft = Math.max(0, scrollWidth - clientWidth);
    const threshold = 12;

    setCanScrollLeft(scrollLeft > threshold);
    setCanScrollRight(maxScrollLeft - scrollLeft > threshold);
  }, []);

  const scrollByAmount = useCallback(
    (direction) => {
      const viewport = viewportRef.current;
      if (!viewport) {
        return;
      }

      const card = viewport.querySelector('.honor-item');
      const amount = card ? card.getBoundingClientRect().width + 24 : 320;
      const offset = direction === 'left' ? -amount : amount;

      viewport.scrollBy({ left: offset, behavior: 'smooth' });

      setTimeout(updateScrollState, 250);
    },
    [updateScrollState]
  );

  useEffect(() => {
    updateScrollState();
  }, [filteredHonors.length, updateScrollState]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return undefined;
    }

    const handleScroll = () => updateScrollState();

    updateScrollState();
    viewport.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      viewport.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [filteredHonors.length, updateScrollState]);

  return (
    <section id="honors" className="section">
      <div className="container">
        <ScrollAnimation animation="fade-up">
          <h2 className="section-title">Honors & Achievements</h2>
        </ScrollAnimation>

        <div className="honors-controls">
          <div className="honors-filter-group">
            <span className="honors-filter-label">Level</span>
            <div className="honors-chip-group">
              {levelOptions.map((level) => (
                <button
                  type="button"
                  key={level}
                  className={`honors-chip ${levelFilter === level ? 'active' : ''}`}
                  onClick={() => setLevelFilter(level)}
                  aria-pressed={levelFilter === level}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="honors-filter-group">
            <label className="honors-filter-label" htmlFor="honors-year-select">
              Year
            </label>
            <select
              id="honors-year-select"
              className="honors-select"
              value={yearFilter}
              onChange={(event) => setYearFilter(event.target.value)}
            >
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year === 'All' ? 'All Years' : year}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="honors-carousel">
          <button
            type="button"
            className={`honors-nav honors-nav-left ${canScrollLeft ? '' : 'disabled'}`.trim()}
            onClick={() => scrollByAmount('left')}
            aria-label="Scroll honors left"
            disabled={!canScrollLeft}
          >
            <span aria-hidden="true">‹</span>
          </button>
          <div className="honors-viewport" ref={viewportRef}>
            <div className="honors-track">
              {filteredHonors.map((honor, index) => (
                <ScrollAnimation
                  key={`${honor.title}-${index}`}
                  className="honor-item"
                  animation="fade-up"
                  delay={index * 0.08}
                >
                  <div className="honor-card">
                    <div className="honor-icon">{honor.icon}</div>
                    <div className="honor-content">
                      <div className="honor-header">
                        <h3>{honor.title}</h3>
                        <span className={`honor-level ${honor.level.toLowerCase()}`}>
                          {honor.level}
                        </span>
                      </div>
                      <div className="honor-achievement">{honor.achievement}</div>
                      {honor.year && <div className="honor-year">{honor.year}</div>}
                      {honor.details && <div className="honor-details">{honor.details}</div>}
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
          <button
            type="button"
            className={`honors-nav honors-nav-right ${canScrollRight ? '' : 'disabled'}`.trim()}
            onClick={() => scrollByAmount('right')}
            aria-label="Scroll honors right"
            disabled={!canScrollRight}
          >
            <span aria-hidden="true">›</span>
          </button>
        </div>

        {filteredHonors.length > 1 && (
          <div className={`honors-hint ${canScrollRight ? 'visible' : ''}`}>
            Drag, scroll, or tap the arrows to explore more honors
          </div>
        )}

        {filteredHonors.length === 0 && (
          <div className="honors-empty-state">
            No honors match those filters—try adjusting them.
          </div>
        )}
      </div>
    </section>
  );
};

export default Honors;

