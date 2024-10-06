// components/LoadingSkeleton.tsx
import React from 'react';
import styles from './css/LoadingSkeleton.module.css';

const LoadingSkeleton: React.FC = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
            <div style={{
                border: '4px solid #f3f3f3',
                borderRadius: '50%',
                borderTop: '4px solid #3498db',
                width: '40px',
                height: '40px',
                animation: 'spin 2s linear infinite'
            }} />
            <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
        </div>
    );
};

export default LoadingSkeleton;
