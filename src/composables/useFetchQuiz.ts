import { ref, type Ref } from 'vue'
import axios, { type AxiosResponse } from 'axios'

export const useFetchQuiz = (url: string, config = {}) => {
  const data: Ref<null | []> = ref(null)
  const response: Ref<null | AxiosResponse> = ref(null)
  const error: Ref<null | Error | unknown> = ref(null)
  const loading: Ref<null | boolean> = ref(null)
  
  const fetch = async () => {
    loading.value = true
    try {
      const result = await axios.request({
        url,
        ...config
      })

      response.value = result
      data.value = result.data?.results
    } 
    
    catch (err) {
      error.value = err
    } 
    
    finally {
      loading.value = false
    }
  }

  fetch()

  return {
    data,
    response,
    error,
    loading,
    fetch 
  }
}