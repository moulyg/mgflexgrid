import styled from 'styled-components';
import PropTypes from 'prop-types';


const generateColumnWidth = (props, type) => {
    let num = props[type];
    return (num / 12) * 100;
};

const Col = styled.div`
  padding-right: ${props => props.theme.row.gutter}px;
  padding-left: ${props => props.theme.row.gutter}px;
  box-sizing: border-box;
  flex: 0 0 auto;
  flex-basis: ${props => generateColumnWidth(props, 'xs')}%;
  max-width: ${props => generateColumnWidth(props, 'xs')}%;
  margin-left: ${props => generateColumnWidth(props, 'offsetxs')}%;
  @media only screen and (min-width: ${props => props.theme.xs}px) and (max-width: ${props => props.theme.sm - 1}px) {
    flex-basis: ${props => generateColumnWidth(props, 'sm')}%;
  	max-width: ${props => generateColumnWidth(props, 'sm')}%;
  	margin-left: ${props => generateColumnWidth(props, 'offsetsm')}%;
  }
  @media only screen and (min-width: ${props => props.theme.sm}px) and (max-width: ${props => props.theme.md - 1}px) {
    flex-basis: ${props => generateColumnWidth(props, 'md')}%;
  	max-width: ${props => generateColumnWidth(props, 'md')}%;
  	margin-left: ${props => generateColumnWidth(props, 'offsetmd')}%;
  }
  @media only screen and (min-width: 1300px) {
    flex-basis: ${props => generateColumnWidth(props, 'lg')}%;
  	max-width: ${props => generateColumnWidth(props, 'lg')}%;
  	margin-left: ${props => generateColumnWidth(props, 'offsetlg')}%;
  }
`;

Col.propTypes = {};

Col.defaultProps = {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12,
    offsetxs: 0,
    offsetsm: 0,
    offsetmd: 0,
    offsetlg: 0,
    theme: {
        xs: 768,
        sm: 1024,
        md: 1300,
        row: {
            gutter: 8
        }
    }
};

export default Col;