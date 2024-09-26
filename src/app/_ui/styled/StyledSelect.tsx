import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { Select } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export type IOption<T> = {
  label: string;
  value: T;
};

type SelectProps<T> = {
  options: IOption<T>[];
  name?: string;
  className?: string;
  value?: T;
  defaultValue?: T;
  onChange?: (value: T) => void;
};

function SelectInner<T>(
  { options, name, className, value, defaultValue, onChange }: SelectProps<T>,
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
    <div className="relative">
      <Select
        name={name}
        ref={ref}
        onChange={(e) => handleOnChange(Number(e.target.value))}
        defaultValue={selectDefaultValue}
        value={selectValue}
        className={clsx(
          'w-full appearance-none rounded-lg bg-primary px-4 py-2 text-opposite',
          className,
        )}
      >
        {optionsWithIndexes.map((option) => {
          return (
            <option key={option.index} value={option.index}>
              {option.label}
            </option>
          );
        })}
      </Select>
      <ChevronDownIcon
        className="group pointer-events-none absolute right-2.5 top-2.5 size-4 fill-opposite/60"
        aria-hidden="true"
      />
    </div>
  );
}

const StyledSelect = forwardRef(SelectInner) as <T>(
  props: SelectProps<T> & { ref?: React.Ref<HTMLSelectElement> },
) => React.ReactElement;

export default StyledSelect;
