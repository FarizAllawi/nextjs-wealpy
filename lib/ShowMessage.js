import {toast} from 'react-toastify'

export const ErrorMessage = (error) => {
  if (error.response) {
    let message
    if (error.response.status === 500) message = "Something went terribly wrong"
    else {
      if (error.response.data?.message !== undefined) {
        message = error.response.data.message
        toast.error(message);
      } else {
        toast.error("Something went terribly wrong on our server, Please try again later")
      }
    }
    // return Promise.reject(error)
  }
}