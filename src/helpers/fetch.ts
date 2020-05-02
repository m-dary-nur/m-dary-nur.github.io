import CryptoJS from "crypto-js"
import { apiUrl } from "./url"

const myke = "muhammadevanozaflanalfarezel"

const debug: boolean = process.env.NODE_ENV === "development"

export const get: any = async (requestUrl: string, params: { [key: string]: any } = {}) => {
   const esc = encodeURIComponent
   const queryParams = params
      ? `?${Object.keys(params)
           .map(k => `${esc(k)}=${esc(params[k])}`)
           .join("&")}`
      : ""
   return await fetch(`${apiUrl}/${requestUrl}${queryParams}`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
      headers: {
         Accept: "application/json",
         "Content-Type": "text/plain",
      },
   })
      .then((raw: any) => raw.text())
      .then(response => {
         const resCheck = response.includes("message")
         let resp
         if (resCheck) {
            const jsonParse = JSON.parse(response)
            if (debug) console.log(`[${requestUrl}]`, jsonParse)
            resp = jsonParse
         } else {
            const jsonString: string = CryptoJS.Rabbit.decrypt(response, myke).toString(CryptoJS.enc.Utf8)
            const jsonParse = JSON.parse(jsonString)
            console.log(`[${requestUrl}]`, jsonParse)
            if (debug) console.log(`[${requestUrl}]`, jsonParse)
            resp = jsonParse
         }
         return resp
      })
}

export const post: any = async (requestUrl: string, params: object = {}) => {
   const body = CryptoJS.Rabbit.encrypt(JSON.stringify(params), myke).toString()
   return await fetch(`${apiUrl}/${requestUrl}`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
         Accept: "text/plain",
         "Content-Type": "text/plain",
      },
      body,
   })
      .then((raw: any) => raw.text())
      .then(response => {
         const resCheck = response.includes("message")
         let resp
         if (resCheck) {
            const jsonParse = JSON.parse(response)
            if (debug) console.log(`[${requestUrl}]`, jsonParse)
            resp = jsonParse
         } else {
            const jsonString: string = CryptoJS.Rabbit.decrypt(response, myke).toString(CryptoJS.enc.Utf8)
            const jsonParse = JSON.parse(jsonString)
            console.log(`[${requestUrl}]`, jsonParse)
            if (debug) console.log(`[${requestUrl}]`, jsonParse)
            resp = jsonParse
         }
         return resp
      })
}

export const put: any = async (requestUrl: string, params: object = {}) => {
   const body = CryptoJS.Rabbit.encrypt(JSON.stringify(params), myke).toString()
   return await fetch(`${apiUrl}/${requestUrl}`, {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
         Accept: "text/plain",
         "Content-Type": "text/plain",
      },
      body,
   })
      .then((raw: any) => raw.text())
      .then(response => {
         const resCheck = response.includes("message")
         let resp
         if (resCheck) {
            const jsonParse = JSON.parse(response)
            if (debug) console.log(`[${requestUrl}]`, jsonParse)
            resp = jsonParse
         } else {
            const jsonString: string = CryptoJS.Rabbit.decrypt(response, myke).toString(CryptoJS.enc.Utf8)
            const jsonParse = JSON.parse(jsonString)
            console.log(`[${requestUrl}]`, jsonParse)
            if (debug) console.log(`[${requestUrl}]`, jsonParse)
            resp = jsonParse
         }
         return resp
      })
}

export const del: any = async (requestUrl: string, params: { [key: string]: any } = {}) => {
   const esc = encodeURIComponent
   const objectKeys = Object.keys(params)
   const queryParams = objectKeys.length > 0 ? `?${objectKeys.map(k => `${esc(k)}=${esc(params[k])}`).join("&")}` : ""
   return await fetch(`${apiUrl}/${requestUrl}${queryParams}`, {
      method: "DELETE",
      mode: "cors",
      credentials: "include",
      headers: {
         Accept: "application/json",
         "Content-Type": "text/plain",
      },
   })
      .then((raw: any) => raw.text())
      .then(response => {
         const resCheck = response.includes("message")
         let resp
         if (resCheck) {
            const jsonParse = JSON.parse(response)
            if (debug) console.log(`[${requestUrl}]`, jsonParse)
            resp = jsonParse
         } else {
            const jsonString: string = CryptoJS.Rabbit.decrypt(response, myke).toString(CryptoJS.enc.Utf8)
            const jsonParse = JSON.parse(jsonString)
            console.log(`[${requestUrl}]`, jsonParse)
            if (debug) console.log(`[${requestUrl}]`, jsonParse)
            resp = jsonParse
         }
         return resp
      })
}
