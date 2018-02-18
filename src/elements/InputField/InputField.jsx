/* External dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import autobind from 'core-decorators/lib/autobind';

/* Internal dependencies */
import Styled from './InputField.styled';

class InputField extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    labelWidth: PropTypes.number,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    className: '',
    label: '',
    width: 320,
    height: 40,
    labelWidth: 60,
    placeholder: '',
    type: 'text',
  };

  constructor() {
    super();
    this.state = {
      focused: false,
    };
  }

  @autobind
  handleFocus() {
    this.setState(prevState => ({
      ...prevState,
      focused: true,
    }));
  }

  @autobind
  handleBlur() {
    this.setState(prevState => ({
      ...prevState,
      focused: false,
    }));
  }

  render() {
    const {
      className,
      label,
      height,
      width,
      labelWidth,
      type,
      placeholder,
      onChange,
    } = this.props;

    return (
      <Styled.Wrapper
        className={className}
        width={width}
        focused={this.state.focused}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
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
  }
}

export default InputField;
