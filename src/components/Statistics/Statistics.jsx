import s from './Statistics.module.css';
import { colorRandomizer } from '../../utils/colorRandomizer';
import PropTypes from 'prop-types';

const Statistics = ({title, stats}) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map(({id, label, percentage}) => <li className={s.item} key={id} style={{backgroundColor: colorRandomizer()}}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>)}
      </ul>
    </section>
  )
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
};
