import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <section>
      {options.map((type, i) => {
        return (
          <button
            key={i + 1}
            onClick={() => {
              onLeaveFeedback(type);
            }}
          >
            <b>{type.charAt(0).toUpperCase() + type.slice(1)}</b>
          </button>
        );
      })}
    </section>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
