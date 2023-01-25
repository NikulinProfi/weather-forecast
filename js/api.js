export const getWeatherData = async (city) => {
  //api https://home.openweathermap.org/api_keys
  //17cb3764a09fa0af8b992ccb27b3bd4e

  try {
    const responce = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9cd5331594db480ba02c577e0df8d0d3&lang=ru`
    )

    return await responce.json()
  } catch (error) {
    console.error(error)
  }
}

//
