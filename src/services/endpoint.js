import { callApi } from './api'

export const getSomething = payload => callApi('https://api.punkapi.com/v2/beers/random', payload)
