import { StyledSection, Container } from './Section.styled';
import PropeTypes from 'prop-types';

const Section = ({ children, title }) => {
  return (
    <StyledSection>
      <Container>
        <h2>{title}</h2>
        {children}
      </Container>
    </StyledSection>
  );
};

Section.propTypes = {
  children: PropeTypes.arrayOf(PropeTypes.element),
  title: PropeTypes.string
}

export default Section;
