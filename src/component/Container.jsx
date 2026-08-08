import React from 'react';
import {Children} from 'react';

export default function Container({
  children,
  className = "",
  maxWidth = "1200px",
}) {
  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${className}`}style={{ maxWidth }}>
      {children}
    </div> 
  );
}
 