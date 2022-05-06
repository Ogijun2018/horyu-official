import React from 'react';
import type { FC } from 'react';
import { Box, Image } from '@chakra-ui/react';
import DummyImg from '../img/comming-soon.png';

export const CommingSoon: FC = () => (
  <Box
    maxW="250px"
    border="none"
    borderBottom="3px solid black"
    overflow="hidden"
  >
    <Image src={DummyImg} alt="jacketImg" />

    <Box p="6">
      <Box display="flex">
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="0"
        >
          xxxx-xx-xx
        </Box>
      </Box>
      <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
        comming soon...
      </Box>
    </Box>
  </Box>
);

export default CommingSoon;
