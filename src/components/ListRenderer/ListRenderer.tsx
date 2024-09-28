import { ComponentType, Fragment, ReactNode } from "react";

export default function ListRenderer<
  dataType = unknown,
  WrapperComponentType = unknown
>({
  data = [],
  isLoading,
  isFetching,
  LoadingComponent = null,
  NoDataComponent = null,
  ItemWrapperComponent = Fragment,
  itemWrapperProps,
  renderItem,
}: ListRenderer<dataType, WrapperComponentType>) {
  return isLoading ? (
    LoadingComponent
  ) : data?.length ? (
    <>
      <ItemWrapperComponent {...itemWrapperProps}>
        {data.map(renderItem)}
      </ItemWrapperComponent>
      {isFetching && LoadingComponent}
    </>
  ) : (
    NoDataComponent
  );
}

type ListRenderer<dataType, WrapperComponentProps> = {
  data: dataType[];
  isLoading?: boolean;
  LoadingComponent?: JSX.Element | null;
  renderItem: (item: dataType, index: number) => ReactNode;
  NoDataComponent?: JSX.Element | null;
  itemWrapperProps?: WrapperComponentProps;
  ItemWrapperComponent?: ComponentType<any> | typeof Fragment;
  isFetching?: boolean;
};
