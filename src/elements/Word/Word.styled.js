/* External Dependencies */
import styled from 'styled-components';

const Word = styled.div`
    font-size : ${props => props.size || 1}em;
    color : #6b6b6b;
    font-weight : ${props => props.bold || 400};
    display: inline-block;
`;

export default Word;