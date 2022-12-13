

let onChange =()=>{}

export type DialogPropsType = {
    id: number
    name: string
}

const dialogData:Array <DialogPropsType> = [
    {name: "Olga", id: 1},
    {name: "Vera", id: 2},
    {name: "Inga", id: 3},
    {name: "Anna", id: 4},
    {name: "Vladimir", id: 5},
]

export type MessagePropsType = {
    message: string
    id:number
}

const messageData: Array<MessagePropsType> = [
    {message: 'Hello', id: 1},
    {message: 'How are you doing?', id: 2},
    {message: 'Who are you?', id: 3},
    {message: "'Yo'", id: 4},
    {message: "'Hello'", id: 5},
]

export type PostPropsType = {
    id:number,
    message: string,
    likesCount: number
}
const postData: Array<PostPropsType> = [
    {id:1, message: "How are you doing?", likesCount: 12},
    {id:2, message: "It's my first message!", likesCount: 5},
]

export type FriendsPropsType = {
    id:number,
    name: string,
    photo: string
}
const friendsData: Array<FriendsPropsType> = [
    {id:1, name: "Ivan", photo: "https://kartinkin.net/uploads/posts/2022-03/1646527490_19-kartinkin-net-p-kartinki-na-avatarku-dlya-malchikov-20.jpg" },
    {id:2, name: "Olga", photo: "data:image/jpeg;base64,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" },
    {id:3, name: "Andrey", photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRLwAxLXzHBLfnaU5pNcWuXGSQh1Y9Xqbg4w&usqp=CAU" },
]
export const addPost = ()=> {
    const newPost:PostPropsType = {
        id: new Date().getTime(),
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    debugger
    state.profilePage.postData.push(newPost)
    state.profilePage.newPostText = " "

    onChange()
}

export const updateNewPostText = (newText:string)=> {
    state.profilePage.newPostText = newText
    onChange()
}

export const addText = ()=> {
    const newMessage:MessagePropsType = {
        id: new Date().getTime(),
        message: state.dialogPage.newMessageText,
    }
    debugger
    state.dialogPage.messageData.push(newMessage)
    state.dialogPage.newMessageText = " "

    onChange()
}

export const updateNewMessageText = (newText:string)=> {
    state.dialogPage.newMessageText = newText
    onChange()
}

export type AppPropsType = {
    dialogPage: {dialogData:Array <DialogPropsType>, messageData:Array<MessagePropsType>, addText: () => void,
    newMessageText: string, updateNewMessageText:(newText: string) => void},
    profilePage: {postData: Array<PostPropsType>, addPost: () => void, updateNewPostText:(newText: string) => void, newPostText: string}
    siteBar: {friendsData: Array<FriendsPropsType> },
}

export const state: AppPropsType = {
    dialogPage: {
        dialogData: dialogData,
        messageData: messageData,
        addText: addText,
        newMessageText: "hello",
        updateNewMessageText:updateNewMessageText
    },
    profilePage: {
        postData: postData,
        addPost: addPost,
        newPostText: "it-kamasutra.com",
        updateNewPostText:updateNewPostText
    },
    siteBar: {
        friendsData:friendsData
    },
}

export const subscribe = (observer:()=>void)=>{
    onChange=observer
}

