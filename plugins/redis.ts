
import {Redis} from '@upstash/redis/cloudflare'

export default defineNuxtPlugin((nuxtApp) => {
    const redis = new Redis({
        url: 'https://intent-herring-35701.upstash.io',
        token: '*****',
      })

      return {
        provide: {
          redis: redis as Redis
        }
      }
})