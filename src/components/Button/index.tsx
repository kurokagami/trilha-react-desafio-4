import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, disabled, onClick }: IButtonProps) => {
  console.log('Button disabled:', disabled);
  return <ButtonContainer onClick={onClick} disabled={disabled}>{title}</ButtonContainer>;
};

export default Button;
