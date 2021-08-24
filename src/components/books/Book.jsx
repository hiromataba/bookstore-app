import PropTypes from 'prop-types';
import Progress from './BookProgress';
import ActionButtons from './ActionButtons';

const Book = ({ book }) => {
  const {
    id, title, category, author, progress,
  } = book;

  return (
    <div>
      <div>
        <div>
          <h4>{category}</h4>
          <h3>{title}</h3>
          <h6>{author}</h6>
        </div>
        <Progress progress={progress} />
      </div>
      <ActionButtons id={id} />
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    progress: Progress.propTypes.progress,
  }).isRequired,
};

export default Book;