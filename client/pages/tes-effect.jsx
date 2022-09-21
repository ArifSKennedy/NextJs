import React, { useState, useEffect } from 'react';

// Contoh Pengunaan UseEffect React
function Example() {
  const [count, setCount] = useState(0);

  // Mirip dengan componentDidMount dan componentDidUpdate:
  useEffect(() => {
    // Memperbarui judul dokumen menggunakan API browser
    document.title = `You clicked ${count} times`;
    console.log('Nama saya arif');
  }, []);
 

  return (
    <div align='center'>
      <p>Kamu|Mengklik {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    
    </div>
  );
}
  

  export default Example