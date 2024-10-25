import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  Container,
  Center as UICenter,
  Text as UIText,
  VStack,
  Divider,
  Heading,
  Highlight,
  Box,
  OrderedList,
  ListItem,
  Image,
  Spacer,
} from "@chakra-ui/react";

import Jacket from "../img/nostalgenic_jacket.png";
import { Header } from "../components/header";
import { useWindowDimensions } from "../util/useWindowDimensions";
import "../styles/index.scss";

export default function onyourmark_lp() {
  const { width } = useWindowDimensions();

  return (
    <div className="wrapper">
      <Header />
      <UICenter pt={50}>
        <VStack>
          <div className="youtube">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/xroZzJ2jhiU?si=n9KcTl6O9T2spZ9f"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <Spacer />
          <UIText fontSize="4xl" fontWeight="bold">
            NOSTALGENIC
          </UIText>
          <UIText fontSize="2xl" fontWeight="semibold" fontStyle="italic">
            あの頃に、帰ろう__。
          </UIText>
          <Divider />
          <UIText fontSize="2xl" fontWeight="semibold">
            2024 M3-autumn 2024/10/24(SUN)
          </UIText>
          <UIText fontSize="2xl" fontWeight="semibold">
            第一展示場 L-05a
          </UIText>
          <Box maxW="80%" pt={50} pb={50}>
            <Heading as="h3" size="lg" lineHeight="tall">
              <Highlight
                query={["NOSTALGENIC"]}
                styles={{ px: "2", py: "2", bg: "blue.300", color: "black" }}
              >
                あの頃に、帰ろう__。
              </Highlight>
            </Heading>
            <Heading as="h3" size="lg" lineHeight="tall">
              <Highlight
                query={["ワクワク", "心温まる", "なんだか懐かしい"]}
                styles={{ px: "2", py: "2", bg: "blue.300", color: "black" }}
              >
                懐かしさをテーマに、ワクワク 心温まる なんだか懐かしい
                そんな新作4曲を収録。
              </Highlight>
            </Heading>
            <Heading as="h3" size="lg" lineHeight="tall">
              保留がお送りするサウンド、ビジュアル体験が、あなたの思い出を彩ります。
            </Heading>
          </Box>
          <Divider />
          <Image pt={50} maxW="sm" src={Jacket} alt="onyourmark_jacket" />
          <Heading pt={50}>TrackList</Heading>
          <OrderedList fontSize="2xl" fontWeight="semibold" pb={50} maxW="80%">
            <ListItem>CONTINUE [CHIPTUNE]</ListItem>
            <ListItem>RetrosPective Groove [TECHELECTRO]</ListItem>
            <ListItem>My only Adventure [SPEEDCORE]</ListItem>
            <ListItem>See you tomorrow [TECHELECTRO]</ListItem>
          </OrderedList>
          <Divider />
          <Heading pt={50}>Credit</Heading>
          <Heading pt={10} fontSize="3xl">
            All Music Compose
          </Heading>
          <UIText fontSize="4xl">
            <div className="social-link">
              <a href="https://twitter.com/shimaemon_o3o?s=20">shimaemon</a>
            </div>
          </UIText>
          <Heading pt={10} fontSize="3xl">
            Illustration
          </Heading>
          <UIText fontSize="4xl">
            <div className="social-link">
              <a href="https://twitter.com/cat_earthen_pot?s=20">猫土瓶</a>
            </div>
          </UIText>
          <Heading pt={10} fontSize="3xl">
            Design
          </Heading>
          <UIText pb={50} fontSize="4xl">
            <div className="social-link">
              <a href="https://twitter.com/ogijun_design?s=20">ogijun</a>
            </div>
          </UIText>
          <Divider />
          <UIText pt={50}>©︎ 保留 2024</UIText>
        </VStack>
      </UICenter>
    </div>
  );
}
