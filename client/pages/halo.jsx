import Anak from '@/components/anak';
// Import Nama Fungsi lalu from Nama Folder/File
import React, { Component } from 'react'
// Class Turunan 
// jika ingin Memberikan turunan import Component
class Hello extends Component {
  render() {
    return (
        // Panggil dari Fungsi
        <Anak nama='arif'/>
    );
  }
}

export default Hello

