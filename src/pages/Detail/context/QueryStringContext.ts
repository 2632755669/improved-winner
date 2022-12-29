import React from 'react';

interface QueryStringContextType {
  moduleId: string;
  moduleName: string;
}

export const QueryStringContext = React.createContext<QueryStringContextType>({
  moduleId: '',
  moduleName: '',
});
