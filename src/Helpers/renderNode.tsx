import React from 'react';

const renderNode = (Component: any, content: any, props: any = {}): React.ReactNode => {
  if (content == null || content === false) {
    return null;
  }
  if (React.isValidElement(content)) {
    return content;
  }
  if (typeof content === 'function') {
    return content();
  }
  // Just in case
  if (content === true) {
    return <Component {...props}/>;
  }
  if (typeof content === 'string' || typeof content === 'number') {
    return <Component {...props}>{content}</Component>;
  }
  return <Component {...props} {...content} />;
};

export default renderNode;
