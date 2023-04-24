import type {AxiosInstance} from 'axios'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance
    catTags: string[]
    imageUrl: string
    apiKey: string
    language: string
  }
}

export {}