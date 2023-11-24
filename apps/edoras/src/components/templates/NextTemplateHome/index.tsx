'use client'
import { Box, Container, Text } from '@nextime-ui/react'

import { LandingPageItems } from '@/data/types/LandingPageItems'

import {
  NextCallToAction,
  NextCallToActionProps
} from '../../organisms/NextCallToAction'

export const NextTemplateHome = ({
  items,
  idWhoInvited
}: {
  items: LandingPageItems
  idWhoInvited?: string | string[]
}) => {
  if (idWhoInvited && typeof idWhoInvited === 'string') {
    localStorage.setItem('idWhoInvited', idWhoInvited)
  }
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
        * As imagens desta página foram criadas utilizando a tecnologia de
        inteligência artificial midjourney.
      </Text>
    </Container>
  )
}
