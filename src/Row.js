import styled from 'styled-components';
import PropTypes from 'prop-types';

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: -${props => props.theme.row.gutter}px;
  margin-left: -${props => props.theme.row.gutter}px;
`;

Row.propTypes = {

};

Row.defaultProps = {
    theme: {
        row: {
            gutter: 8
        }
    }
};

export default Row;