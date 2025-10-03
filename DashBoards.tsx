import React, {useContext} from 'react';
import { ThemeContext } from './ThemeContexts';

const Dashboard: React.FC = () => {
  const theme = useContext(ThemeContext);

   return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>Welcome Student!</h1>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default Dashboard;