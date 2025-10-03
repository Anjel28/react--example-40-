// Preview.tsx
import React from 'react';

interface PreviewProps {
  data: {
    name: string;
    email: string;
  };
}

const Preview: React.FC<PreviewProps> = ({ data }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '15px' }}>
      <h2>Live Preview</h2>
      <p>
        **Name:** {data.name }
      </p>
      <p>
        **Email:** {data.email}
      </p>
    </div>
  );
};

export default Preview;