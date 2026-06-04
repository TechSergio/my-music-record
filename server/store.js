let accessToken = null
let refreshToken = null
export function setAccessToken(token) {
    accessToken = token
}

export function getAccessToken() {
    return accessToken
}

export function setRefreshToken(token){
    refreshToken = token
}

export function getRefreshToken(){
    return refreshToken
}