'use client'
import React from 'react'

import { Box, Container, Text } from '@nextime-ui/react'

import { LandingPageItems } from '@rohan/ui/src/@types/LandingPageItems'
import {
  NextCallToActionProps,
  NextCallToAction
} from '../../organisms/NextCallToAction'

export const NextTemplateHome = ({ items }: { items: LandingPageItems }) => {
  const { nextCallToActionItems } = items
  return (
    <Container maxW={'container.lg'} mb={20}>
      <Box>
        {nextCallToActionItems?.map((item: NextCallToActionProps) => (
          <NextCallToAction
            color={item.color}
            directionBase={item.directionBase}
            directionMd={item.directionMd}
            height={item.height}
            id={item.id}
            image={item.image}
            priority={item.priority}
            isLoading={item.isLoading}
            key={item.id}
            text={item.text}
            textButton={item.textButton}
            title={item.title}
            url={item.url}
            width={item.width}
          />
        ))}
      </Box>
      <Text fontSize={'xs'} fontStyle={'italic'}>
        * Se quiser deixar algum texto aqui como imagem ou algo do tipo
      </Text>
    </Container>
  )
}
