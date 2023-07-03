import data from './data.json';
import css from './statistics.module.css';
import PropTypes from 'prop-types';

const dataArray = data;
const titleStats = 'Upload stats';

export const Statistics = () => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{titleStats.toUpperCase()}</h2>
      <ul className={css.statList}>
        {dataArray.map(item => (
          <li className={css.item} key={item.id}>
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
