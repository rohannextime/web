import { LandingPageItems, Layout } from '../@types/LandingPageItems'
import { NextCallToActionProps } from '../app/components/organisms/NextCallToAction'

export const url =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://club.nextime.com.br'
const siteName = 'Larissa'

export const layout: Layout = {
  title: `${siteName} | Encontre conexões além das aparências`,
  url,
  description: '',
  keywords: ['Aplicativo de relacionamento'],
  siteName,
  socialTitle: `${siteName} | Encontre conexões além das aparências`,
  socialImageUrl: `${url}/images/social_image.jpg`,
  socialNetwork: `https://api.whatsapp.com/send?phone=5511972436305&text=Ol%C3%A1,%20${siteName}.%20`,
  logoSrc: '/images/logos/logo_500.png',
  logoWidth: 40,
  logoHeight: 40,
  logoAlt: `${siteName} Logo`,
  logoSubtitle: siteName,
  bg: 'next-quaternary',
  logoSubtitleColor: 'next-primary',
}

export const nextCallToActionItems: NextCallToActionProps[] = [
  {
    id: '0',
    title: 'Maximize seus Lucros com Eficiência',
    text: 'Descubra quais horários são mais rentáveis para você! Nosso relatório de eficiência de ganho analisa suas horas de trabalho versus o faturamento para ajudá-lo a otimizar sua agenda. Experimente grátis e veja a diferença!',
    textButton: 'Experimentar Relatório',
    url: 'https://larisumpani.com/',
    width: 500,
    height: 500,
    image: '/images/home/0.png',
    priority: true,
    directionMd: 'row-reverse',
  },
  {
    id: '1',
    title: 'Acompanhe seu Progresso com Análises Detalhadas',
    text: 'Veja um resumo completo da sua semana ou mês de trabalho com nosso aplicativo. Total de horas trabalhadas, quilometragem e renda, tudo em um só lugar. Comece agora a entender melhor suas tendências de trabalho!',
    image: '/images/home/1.png',
    textButton: 'Ver Análise de Desempenho',
    url: '/signup',
    width: 500,
    height: 500,
    priority: true,
  },
  {
    id: '2',
    title: 'Entenda o Verdadeiro Valor de Cada Quilômetro',
    text: 'Com nosso cálculo de custo por quilômetro, você pode descobrir o quanto realmente está ganhando. Saiba se as suas rotas estão sendo eficientes e aumente sua lucratividade. Teste grátis agora!',
    textButton: 'Calcular Custo por Km',
    url: '/novidades',
    width: 500,
    height: 500,
    image: '/images/home/2.png',
    directionMd: 'row-reverse',
  },
  {
    id: '3',
    title: 'Como Você se Compara com o Mercado?',
    text: 'Use nossa análise comparativa para medir seu desempenho contra as médias do setor ou seus próprios registros. Descubra áreas de melhoria e celebre suas conquistas. Acesse grátis e comece a comparar!',
    image: '/images/home/3.png',
    url: '/signup',
    width: 500,
    height: 500,
    textButton: 'Comparar Desempenho',
  }
]

export const items: LandingPageItems = {
  layout,
  nextCallToActionItems,
}
