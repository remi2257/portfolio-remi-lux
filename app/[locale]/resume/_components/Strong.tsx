import { Text } from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";

export const Strong: React.FC<React.PropsWithChildren<{ style?: Style }>> = ({
  children,
  style = {},
  ...props
}) => {
  return (
    <Text style={[{ fontWeight: "bold" }, style]} {...props}>
      {children}
    </Text>
  );
};
