import CryptoJS from 'crypto-js'

export const enc = (str: string) => {
  const config = useRuntimeConfig()

  const iv = CryptoJS.lib.WordArray.random(16).toString(CryptoJS.Utf8)

  const key = CryptoJS.enc.Utf8.parse(config.public.secret)
  const ivBytes = CryptoJS.enc.Hex.parse(iv)

  const ciphertext = CryptoJS.AES.encrypt(str, key, {
    iv: ivBytes,
    mode: CryptoJS.mode.CBC,
  }).toString()

  return { iv, password: ciphertext }
}
