import request from "@/utils/request"

/**
 * 包含username、password，要求返回值有token、code（200为成功）
 * @param {object} userInfo 
 * @returns 
 */
export const reqLogin = (userInfo) => request({ url: "/user/login", method: 'post', data: userInfo })

/**
 * @param {object} userInfo 
 * @returns 
 */
export const reqRegister = (userInfo) => request({ url: "/user/register", method: 'post', data: userInfo })