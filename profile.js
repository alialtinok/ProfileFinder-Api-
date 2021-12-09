class Profile {
    constructor() {
        this.clientId
        this.clientSecret
    }

    async getProfile(userName) {
        const profileResponse = await fetch
            (`https://jsonplaceholder.typicode.com/users?username=${userName}`)

        const profile = await profileResponse.json()

        return { profile }
    }
}