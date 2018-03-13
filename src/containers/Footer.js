import React from 'react';
import FilterLink from './FilterLink';

const Filter = () => {
  return (
    <div>
      SHOW: {' '}
      <FilterLink filter="SHOW_ALL">
        ALL
      </FilterLink>
      {' | '}
      <FilterLink filter="SHOW_COMPLETED">
        COMPLETED
      </FilterLink>
      {' | '}
      <FilterLink filter="SHOW_ACTIVE">
        ACTIVE
      </FilterLink>
    </div>
  )
};

export default Filter;