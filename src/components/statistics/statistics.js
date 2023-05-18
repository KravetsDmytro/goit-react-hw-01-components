import PropTypes from 'prop-types';
import css from './statistics.module.css';

 function Statistics({title, stats}){
return (
<section className="statistics">
{title &&  <h2 className="title">{title}</h2> }
<ul className="css">
{stats.map(stat => (
          <li
            key={stat.id}
            className="css"

          >
            <span className="css">{stat.label}</span>
            <span className="css">{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );

}




Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics
