/* External dependencies */
import React from 'react';
import PropTypes from 'prop-types';

/* Internal dependencies */
import Styled from './InputField.styled';

const InputField = ({
  className,
  label,
  height,
  width,
  labelWidth,
}) => (
  <Styled.Wrapper
    className={className}
    width={width}
  >
    <Styled.Label
      height={height}
      width={labelWidth}
    >
      {label}
    </Styled.Label>
    <Styled.Input height={height} />
  </Styled.Wrapper>
);

InputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  labelWidth: PropTypes.number,
};

InputField.defaultProps = {
  className: '',
  label: '',
  width: 320,
  height: 40,
  labelWidth: 60,
};

export default InputField;
