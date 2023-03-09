import axios from 'axios'

const getTravelInfo = async () => {
  const response = await axios('src/data/mock_data.json')

  if (response.status === 200) {
    const { data } = response
    return data
  }
  return null
}

export default getTravelInfo
