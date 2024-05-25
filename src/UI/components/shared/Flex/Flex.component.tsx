//** Dependencies **//
import { FlexProps } from "./Flex.props";

//** Flex Component **//
const Flex = (props: FlexProps) => {
  //** Props **//
  const {
    children,
    dir = "row",
    rtl = false,
    justify = "center",
    items = "center",
    className = "",
    onClick = () => {},
  } = props;

  //** JSX **//
  return (
    <div
      dir={rtl ? "rtl" : "ltr"}
      className={`flex flex-${dir} justify-${justify} items-${items} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Flex;
