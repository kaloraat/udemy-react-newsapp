import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ onClick, children, className='' }) => 
  <button
    className={ className }  
    onClick={ onClick } >
    { children }
  </button>

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

Button.defaultProps = {
  className: '',
}

export const Loading = () => 
  <div>
    <h2>Loading...</h2>
  </div>


export const Sort = ({ sortKey, onSort, children, className, activeSortKey }) =>
{

  const sortClass = ['btn default'];

  if (sortKey === activeSortKey) {
    sortClass.push('btn btn-primary');
  }

  return(
    <Button
      className={ sortClass.join(' ') }
      onClick={ () => onSort(sortKey) }>
      { children }
    </Button>
  )
}