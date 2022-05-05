import React from 'react';
import type { FC } from 'react';
import { Link } from 'gatsby';
import { Text, Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';

export const Header: FC = () => (
  <header>
    <Link to="/" className="link">
      <Avatar bg="teal.500" />
    </Link>
  </header>
);
