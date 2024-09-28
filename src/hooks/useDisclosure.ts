import { useEffect, useState } from "react";

export default function useDisclosure<AdditionalStateType = unknown>(
  options?: UseDisclosureProps<AdditionalStateType>
) {
  const {
    resetOnClose = false,
    closeOnOutsideClick = false,
    defaultState,
  } = options || {};
  const [disclosure, setDisclosure] = useState<{
    isOpen: boolean;
    additionalState?: AdditionalStateType | null;
  }>({
    isOpen: false,
    additionalState: defaultState,
  });

  useEffect(() => {
    function onClick(e: MouseEvent) {
      e?.stopPropagation();
      if (closeOnOutsideClick) {
        onClose(e);
        console.log("clicked");
      }
    }

    window.addEventListener("click", onClick);

    () => window.removeEventListener("click", onClick);
  }, []);

  function onOpen(
    state: AdditionalStateType,
    e?: React.MouseEvent<HTMLElement>
  ) {
    e?.stopPropagation();
    setDisclosure({ additionalState: state, isOpen: true });
  }

  function onClose(e: React.MouseEvent<HTMLElement> | MouseEvent) {
    e?.stopPropagation();
    setDisclosure((prev) =>
      resetOnClose
        ? { isOpen: false, additionalState: null }
        : { ...prev, isOpen: false }
    );
  }

  function onAdditionStateChange(state: AdditionalStateType) {
    setDisclosure((prev) => ({ ...prev, additionalState: state }));
  }

  function onToggle(e?: React.MouseEvent<HTMLElement>) {
    e?.stopPropagation();
    setDisclosure((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  }

  return {
    ...disclosure,
    onOpen,
    onClose,
    onToggle,
    onAdditionStateChange,
  };
}

export type UseDisclosureProps<T> = {
  resetOnClose?: boolean;
  closeOnOutsideClick?: boolean;
  defaultState?: T | null;
};
