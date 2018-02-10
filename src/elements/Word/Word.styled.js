/* External Dependencies */
import styled, { css } from 'styled-components';

const Word = styled.div`
    font-size : ${props => props.size || 14}px;
    color : #6b6b6b;
    display: inline-block;

    ${props => props.bold && css`
            font-weight : bold;
    `}
`;

export default Word;