import { useEffect, useRef, useState } from 'react';

const statsData = [
  { icon: 'fa-users', target: 5000, label: 'Happy Clients' },
  { icon: 'fa-award', target: 15, label: 'Years Experience' },
  { icon: 'fa-user-tie', target: 25, label: 'Expert Staff' },
  { icon: 'fa-trophy', target: 12, label: 'Awards Won' },
];

function Counter({ target }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            animateCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animateCounter = () => {
    const duration = 2000;
    const startTime = performance.now();
    const suffix = target > 100 ? '+' : '';

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(0 + (target - 0) * ease);
      setValue(current);
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setValue(target);
      }
    }
    requestAnimationFrame(update);
  };

  const suffix = target > 100 ? '+' : '';

  return (
    <h3 className="counter" ref={ref} data-target={target}>
      {value}{value === target ? suffix : ''}
    </h3>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {statsData.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <i className={`fas ${stat.icon}`}></i>
              <Counter target={stat.target} />
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
