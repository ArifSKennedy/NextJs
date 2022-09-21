import Coba from '@/components/coba';
import React, { Component } from 'react'
// Class Turunan 
// jika ingin Memberikan turunan import Component
class HelloMessage extends Component {
  render() {
    return (
      <Coba nilai={true} />
    );
  }
}

export default HelloMessage

