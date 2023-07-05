import data from './data.json';
import css from './statistics.module.css';
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = () => {
  const dataArray = data;
  const titleStats = 'Upload stats';
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{titleStats.toUpperCase()}</h2>
      <ul className={css.statList}>
        {dataArray.map(item => (
          <li
            className={css.item}
            key={item.id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
Statistics.propTypes = {
  id: PropTypes.string,
  item: PropTypes.string,
  percentage: PropTypes.number,
};
