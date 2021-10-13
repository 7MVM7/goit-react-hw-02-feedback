import PropTypes from 'prop-types';
import { MySection } from './Section.styled';
const Section = ({ title, children }) => {
  return (
    <MySection>
      <h2 className="title">{title}</h2>
      {children}
    </MySection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;