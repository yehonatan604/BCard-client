import { ReactNode } from "react";
import { FlexProps } from "./Flex.props";

const Flex = (props: FlexProps) => {
  const {
    children,
    dir = "row",
    rtl = false,
    justify = "center",
    items = "center",
    className = "",
    onClick = () => {},
  } = props;

  const content: ReactNode[] | ReactNode = Array.isArray(children)
    ? [...children]
    : [children];
  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className={`flex flex-${dir} justify-${justify} items-${items} ${className}`}
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default Flex;
// Path: tshirt-client/src/UI/components/shared/DivEvenly.component.tsx
