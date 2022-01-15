interface CresteUserData {
    name ?: string;
    email: string;
    password: string;
    techs: string[]
}

export default function createUser({name, email, password}: CresteUserData) {
    const user = {
        name,
        email,
        password,
    }
}