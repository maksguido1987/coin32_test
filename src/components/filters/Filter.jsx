import React from 'react';
import Image from 'next/image';
import { useClickOutside } from '../../shared/hooks/use-click-outside';
import { FilterStyled } from './filters.styled';
// @ts-ignore
import arrowDown from '../../../public/icons/down-arrow.png';

export const Filter = ({}) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const onSetIsOpen = () => {
    isOpen && setIsOpen(false);
  };

  const filterRef = useClickOutside(onSetIsOpen);

  return (
    <FilterStyled ref={filterRef}>
      <div className='filter-container' onClick={() => setIsOpen(!isOpen)}>
        Filter by platforms
        <Image
          src={arrowDown}
          alt='arrow-down'
          width={20}
          height={20}
          className={`filter-arrow ${isOpen ? 'open' : 'close'}`}
          priority
        />
      </div>
      {isOpen && (
        <div className='filter-select'>
          <div>weweweddwe</div>
          <div>weweweddwe</div>
          <div>weweweddwe</div>
        </div>
      )}
    </FilterStyled>
  );
};
