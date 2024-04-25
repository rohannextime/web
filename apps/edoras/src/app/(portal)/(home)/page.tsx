import { Metadata } from 'next'

// import GithubProfile from '@/components/GithubProfile'

// import { Button } from '@rohan/ui'

// import { api } from '@/data/api'
// import { HomeProps } from '@/data/types/home'

export const metadata: Metadata = {
  title: 'Home'
}

// async function getHomeData(): Promise<HomeProps> {
//   const response = await api('/drivers')
//   const message = await response.json()
//   return message
// }
export default async function Home() {
  // const { message } = await getHomeData()
  return (
    <main>
      {/* <Button>{message}</Button> */}

      <h1 className="text-primary">teste</h1>
      <button
        type="button"
        className="hs-dark-mode hs-dark-mode-active:hidden inline-flex items-center gap-x-2 py-2 px-3 bg-white/10 rounded-full text-sm text-white hover:bg-white/20"
        data-hs-theme-click-value="dark"
      >
        <svg
          className="flex-shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
        </svg>
        Dark
      </button>
      <button
        type="button"
        className="hs-dark-mode hs-dark-mode-active:inline-flex hidden items-center gap-x-2 py-2 px-3 bg-white/10 rounded-full text-sm text-white hover:bg-white/20"
        data-hs-theme-click-value="light"
      >
        <svg
          className="flex-shrink-0 size-4"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
        Light
      </button>
      {/* <GithubProfile /> */}
    </main>
  )
}
