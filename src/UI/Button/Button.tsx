import './Button.css';
import { Component, MouseEventHandler, ReactNode } from 'react';

interface Props {
    children: ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

export default class Button extends Component<Props> {
  render() {
    return (
        <button className='button' onClick={this.props.onClick}>{this.props.children}</button>
    )
  }
}