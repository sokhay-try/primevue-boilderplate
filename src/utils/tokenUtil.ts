import CryptoJS from 'crypto-js'
import Cookies from 'js-cookie'

const secretKey = 'yourSecretKey' // Replace with a strong secret key

const cookieName = 'encryptedToken'

// Function to encrypt the token
export const encryptToken = (token: string): string => {
  const ciphertext = CryptoJS.AES.encrypt(token, secretKey).toString()
  return ciphertext
}

// Function to decrypt the token
export const decryptToken = (encryptedToken: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedToken, secretKey)
  const decryptedToken = bytes.toString(CryptoJS.enc.Utf8)
  return decryptedToken
}

// Function to set the encrypted token in a cookie
export const setEncryptedTokenCookie = (token: string): void => {
  const encryptedToken = encryptToken(token)
  Cookies.set(cookieName, encryptedToken, {
    secure: true,
    httpOnly: false,
    sameSite: 'strict'
  })
}

// Function to get the decrypted token from the cookie
export const getDecryptedTokenFromCookie = (): string | null => {
  const encryptedToken = Cookies.get(cookieName)
  return encryptedToken ? decryptToken(encryptedToken) : null
}

export const clearAccessTokenCookie = (): void => {
  Cookies.remove(cookieName)
}
