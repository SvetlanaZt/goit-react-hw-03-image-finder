import PropTypes from 'prop-types';
import css from './button.module.css'

export default function Button({ loadMore }) {
    return (
        <button type='button' onClick={loadMore} className={css.button}> Load More</button>
    )
}

Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
};
 /* (<Button loadMore={this.loadMore}/>) */