import React from 'react'

export default React.createContext({
    page: 1,
    count: 0,
    changePage: () => {},
});
