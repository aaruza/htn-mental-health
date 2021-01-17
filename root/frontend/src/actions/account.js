export const login = (email) =>{
    const url = "/api/login"
    const request = new Request(url, {
        method: "GET",
        body: JSON.stringify({"email": email}),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    fetch(request).then(res => {
        return res.json()
    }).catch(error => {
        console.log(error)
    })
}


export const signup = (email, firstname, lastname, password) =>{
    const url = "/api/account"
    const request = new Request(url, {
        method: "POST",
        body: JSON.stringify({"email": email, "firstname": firstname, "lastname": lastname, "password": password}),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    fetch(request).then(res => {
        return res.json()
    }).catch(error => {
        console.log(error)
    })
}


export const getEntries = (email) => {
    const url = "/api/journal"
    const request = new Request(url, {
        method: "GET",
        body: JSON.stringify({"email": email}),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    fetch(request).then(res => {
        return res.json()
    }).catch(error => {
        console.log(error)
    })
}

export const addEntry = (email, title, text) => {
    const url = "/api/journal"
    const request = new Request(url, {
        method: "POST",
        body: JSON.stringify({"email": email, "title": title, "text": text}),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    })
    fetch(request).then(res => {
        return res.json()
    }).catch(error => {
        console.log(error)
    })
}

export const deleteEntry = (id) => {

}