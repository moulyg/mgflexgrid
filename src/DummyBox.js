import styled from 'styled-components';

const DummyBox = styled.div`
    position: relative;
    box-sizing: border-box;
    min-height: 1rem;
    margin-bottom: 0;
    background: #007FFF;
    border: 1px solid #FFF;
    border-radius: 2px;
    overflow: hidden;
    text-align: center;
    color: #fff;
    padding: 1rem;
    margin-bottom: 1rem;
    & > div > div > div {
        margin-bottom: 0;
        background: #06C;
        border-color: #007FFF;
    }
`;

DummyBox.propTypes = {};

DummyBox.defaultProps = {};

export default DummyBox;