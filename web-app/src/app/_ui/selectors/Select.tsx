'use client';

import React, { forwardRef } from 'react';
import { IOption } from './IOption';
import clsx from 'clsx';

type SelectProps<T> = {
  options: IOption<T>[];
  label?: string;
  className?: string;
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
};

function SelectInner<T>(
  { options, label, className, value, defaultValue, onChange }: SelectProps<T>,
  ref?: React.Ref<HTMLSelectElement>,
) {
  const optionsWithIndexes = options.map((option, index) => {
    return {
      ...option,
      index,
    };
  });

  const handleOnChange = (index: number) => {
    onChange?.(optionsWithIndexes.find((opt) => opt.index === index)!.value);
  };

  const selectDefaultValue = defaultValue
    ? optionsWithIndexes.find((opt) => opt.value === defaultValue)?.index
    : undefined;

  const selectValue = value
    ? optionsWithIndexes.find((opt) => opt.value === value)?.index
    : undefined;

  return (
    <>
      {label && <label className="pl-1 text-xs">{label}</label>}
      <select
        ref={ref}
        onChange={(e) => handleOnChange(Number(e.target.value))}
        defaultValue={selectDefaultValue}
        value={selectValue}
        className={clsx('w-full rounded bg-primary px-4 py-2 text-opposite', className)}
      >
        {optionsWithIndexes.map((option) => {
          return (
            <option
              key={option.index}
              value={option.index}
              className="bg-secondary text-oppositeSecondary"
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
}

const Select = forwardRef(SelectInner) as <T>(
  props: SelectProps<T> & { ref?: React.Ref<HTMLSelectElement> },
) => React.ReactElement;

export default Select;
