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
  type,
  placeholder,
  onChange,
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
    <Styled.Input
      onChange={onChange}
      height={height}
      type={type}
      placeholder={placeholder}
    />
  </Styled.Wrapper>
);

InputField.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  labelWidth: PropTypes.number,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  className: '',
  label: '',
  width: 320,
  height: 40,
  labelWidth: 60,
  placeholder: '',
  type: 'text',
};

export default InputField;
