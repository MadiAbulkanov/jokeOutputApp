import './DisplayingValues.css';
import { Component } from 'react';

interface Props {
    value: string;
}

export default class DisplayingValues extends Component<Props, {}> {
  render() {
    return (
        <>
        <p className='item'>{this.props.value}</p>
        </>
    )
  }
}