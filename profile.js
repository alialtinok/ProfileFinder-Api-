class Profile {
    constructor() {
        this.clientId
        this.clientSecret
    }

    async getProfile(userName) {
        const profileResponse = await fetch
            (`https://jsonplaceholder.typicode.com/users?username=${userName}`)

        const profile = await profileResponse.json()


        const todoResponse = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${profile[0].id}`)
        const todo = await todoResponse.json() 

        return { profile,todo }
    }
}