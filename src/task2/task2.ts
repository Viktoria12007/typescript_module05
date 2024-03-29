type UserResponse = {
    id: number,
    name: string,
    registrationDate: string,
}

type AuthResponse = {
    id: number;
    avatar: string;
    name: string;
    login: string;
    user_token: string;
}

type SomeOtherResponse = {
    field1: string;
    field2: string;
    field3: string;
}


type UserReponseAfterApiRefactoring<T, U> = {
    data: T,
    meta: U,
}

type MetaTrackMessage = {
    trackId: string, // айди трекера логирования
    trackerUrl: string, // юрл трекера логирования
}

type LoadMetaMessage = {
    currentNodeId: string, // текущий сервер, с которым установлено соединение
    currentNodeLoad: number // 0-100, текущая загрузка ноды
}

class SomeExternalApi {
    public static async getUsers(): Promise<UserResponse[]> {
        return [
            {
                "id": 47,
                "name": "Stanley",
                "registrationDate": "2020-07-12 08:11:45"
            },
            {
                "id": 48,
                "name": "Donald",
                "registrationDate": "2021-02-15 10:56:51"
            },
            {
                "id": 49,
                "name": "Kate",
                "registrationDate": "2020-08-30 14:17:23"
            },
            {
                "id": 50,
                "name": "Jeffrey",
                "registrationDate": "2021-07-22 12:22:50"
            },
            {
                "id": 51,
                "name": "Sue",
                "registrationDate": "2021-10-23 17:50:53"
            },
            {
                "id": 52,
                "name": "Mabelle",
                "registrationDate": "2021-11-30 05:30:07"
            }
        ]
    }

    public static async auth(): Promise<AuthResponse> {
        return {
            id: 124,
            avatar: "http://llss.qiniudn.com/d234b75b6a7dfeda793b7da04a7c080dd.png",
            name: "Johanna",
            login: "Johanna206",
            user_token: "eYEuVgUlDvRXgHR"
        }
    }

    public static async getSomeOther(): Promise<SomeOtherResponse[]> {
        return [
            {
                "field1": "7pfE0oQFUZJg",
                "field2": "rS9bzwuy8qb1U",
                "field3": "2vLYGgE"
            },
            {
                "field1": "vS",
                "field2": "Dl",
                "field3": "6JB28Del"
            },
            {
                "field1": "WVA",
                "field2": "9EAQk5w1sk0N8sm7j2d",
                "field3": "BFTkEIrJFzSCfo"
            },
            {
                "field1": "YDefs7phiN",
                "field2": "YDm4VYDfk2IrTgv",
                "field3": "OS9Pt8P7"
            },
            {
                "field1": "L1j",
                "field2": "BN3uUQIK3E3",
                "field3": "vV6jmUXNFlbM"
            },
            {
                "field1": "3R0BjEfiWKeyRG0",
                "field2": "cyVXpE6POSSZ6",
                "field3": "7NPSsdVD"
            },
            {
                "field1": "Sqny0mSDCByG",
                "field2": "st4Ork5nT7QvK4",
                "field3": "qizTiz"
            }
        ]
    }
}

class SomeExternalApiAfterRefactoring {
    private static getRandomMeta(): MetaTrackMessage | LoadMetaMessage {
        if (Math.random() > 0.5) {
            return {
                trackId: 'trackId',
                trackerUrl: 'url',
            }
        } else {
            return {
                currentNodeLoad: 14,
                currentNodeId: 'nodeId',
            }
        }
    }
    static async getUsers(): Promise<UserReponseAfterApiRefactoring<UserResponse[], MetaTrackMessage | LoadMetaMessage>> {
        return {
            data: await SomeExternalApi.getUsers(),
            meta: this.getRandomMeta(),
        };
    }

    static async auth(): Promise<UserReponseAfterApiRefactoring<AuthResponse, MetaTrackMessage | LoadMetaMessage>> {
        return {
            data: await SomeExternalApi.auth(),
            meta: this.getRandomMeta(),
        }
    }

    static async getSomeOther(): Promise<UserReponseAfterApiRefactoring<SomeOtherResponse[], MetaTrackMessage | LoadMetaMessage>> {
        return {
            data: await SomeExternalApi.getSomeOther(),
            meta: this.getRandomMeta(),
        }
    }
}

export class ApiProvider {
    async getUsers(): Promise<UserResponse[]> {
        return SomeExternalApi.getUsers();
    }

    async auth(): Promise<AuthResponse> {
        return SomeExternalApi.auth()
    }

    async getSomeOther(): Promise<SomeOtherResponse[]> {
        return SomeExternalApi.getSomeOther();
    }
}

export class ApiProviderAfterRefactoring {
    async getSomeOther(): Promise<SomeOtherResponse[]> {
        const { data } = await SomeExternalApiAfterRefactoring.getSomeOther();
        return data;
    }

    async getUsers(): Promise<UserResponse[]> {
        const { data } = await SomeExternalApiAfterRefactoring.getUsers();
        return data;
    }

    async auth(): Promise<AuthResponse> {
        const { data } = await SomeExternalApiAfterRefactoring.auth();
        return data;
    }
}


const oldApiProvider = new ApiProvider();
const newApiProvider = new ApiProviderAfterRefactoring();

const run = async () => {
    console.log(JSON.stringify(await oldApiProvider.getSomeOther()) === JSON.stringify(await newApiProvider.getSomeOther()));
}

run();
