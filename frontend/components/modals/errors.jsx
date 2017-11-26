import React from 'react';

const Errors = ({ errors }) => {
  return (
    <ul className="errors">
      {
        errors.map((err, i) => <li key={`error-${i}`}>{err}</li>)
      }
    </ul>
  );
};

export default Errors;
