const localData = {
    save: (title, value) => {
        localStorage.setItem(title, value)
    },
    read: (title) => {
        localStorage.getItem(title)
    }
}

export default localData