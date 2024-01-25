export const fitRatingColor = (rating: number) => {
  switch (rating) {
    case 0 : {
      return 'text-red-500'
    }
    case 1 : {
      return 'text-orange-500'
    }
    case 2 : {
      return 'text-yellow-500'
    }
    case 3 : {
      return 'text-green-600'
    }
    case 4 : {
      return 'text-blue-500'
    }
    case 5 : {
      return 'text-purple-400'
    }

  }
}