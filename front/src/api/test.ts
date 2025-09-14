type User = {
  id: number,
  firstName: string,
  lastName: string,
}

const TestService = {

  get: async function (): Promise<User> {
    const response = await fetch('https://api.example.com/user')
    const responseJson = await response.json()
    return responseJson
  }
}

export default TestService
