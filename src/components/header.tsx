import React from 'react';
import type { FC } from 'react';
import { Link } from 'gatsby';
import {
  Image,
  IconButton,
  IconButtonProps,
  Tooltip,
  useColorMode,
  Spacer,
  HStack
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import Logo from '../img/Logo.png';

export const Header: FC = () => (
  <header>
    <HStack>
      <Link to="/" className="link">
        <Image src={Logo} alt="logo" height="20px" />
      </Link>
      <Spacer />
      <ColorSwitchButton aria-label={''} />
    </HStack>
  </header>
);

const ColorSwitchButton: React.FC<IconButtonProps> = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const tooltipLabel =
    colorMode === 'light' ? 'toggle dark mode' : 'toggle light mode';
  return (
    <Tooltip label={tooltipLabel}>
      <IconButton
        {...props}
        icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
        onClick={toggleColorMode}
      />
    </Tooltip>
  );
};
