import React from 'react';
import Button from 'components/Button';

const Page = ({ signup, ...props }) => (
  <button onClick={() => signup({ name: 'Gwendall', email: 'gwen@c.com', password: '123' })}>
    Login
  </button>
);

export default Page;
