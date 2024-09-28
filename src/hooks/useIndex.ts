import { useEffect, useMemo, useState } from "react";
import { AnyObject } from "yup";

export default function useIndex<T = unknown>(
  array: T[],
  defaultIndex: number = 0,
  circular: boolean = false,
  cumulativeChecks: string[] = []
) {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);

  useEffect(() => {
    if (currentIndex > array.length - 1) {
      setCurrentIndex(array.length - 1);
    }
    return handleClear;
  }, [array.length]);

  useEffect(() => {
    setCurrentIndex(defaultIndex);
  }, [defaultIndex]);

  const handleSetCurrent = (index: number) => () => {
    setCurrentIndex(index);
  };
  const handleNext = () => {
    if (currentIndex === array.length - 1 && !circular) return;
    setCurrentIndex((currentIndex + 1) % array.length);
  };
  const handlePrev = () => {
    if (!currentIndex && !circular) return;
    setCurrentIndex((currentIndex - 1 + array.length) % array.length);
  };
  const handleClear = () => setCurrentIndex(0);

  const { next, prev } = getDisabledButtons(array.length, currentIndex);

  const checks = useMemo(() => {
    if (!cumulativeChecks.length) return {};

    return cumulativeChecks.reduce((acc: AnyObject, check) => {
      acc[check] = array.some((item: T) => (item as AnyObject)?.[check]);

      return acc;
    }, {});
  }, [array, cumulativeChecks]);

  return {
    next,
    prev,
    currentIndex,
    handleSetCurrent,
    handleNext,
    handlePrev,
    handleClear,
    checks,
    currentItem: array[currentIndex],
  };
}

function getDisabledButtons(length: number, currentIndex: number) {
  let disableNext = currentIndex === length - 1;
  let disableBack = !currentIndex;
  return {
    next: {
      disabled: disableNext,
      opacity: disableNext ? 0.5 : 1,
    },
    prev: {
      disabled: disableBack,
      opacity: disableBack ? 0.5 : 1,
    },
  };
}
