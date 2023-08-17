import request from "@/utils/request"

/**
 * 包含username、password，要求返回值有token、code（200为成功）、userInfo{name,avatar(头像地址)}
 * @param {object} userInfo 
 * @returns 
 */
export const reqLogin = (userInfo) => request({ url: "/system/user/login", method: 'post', data: userInfo })

/**
 * @param {object} userInfo 
 * @returns 
 */
export const reqRegister = (userInfo) => request({ url: "/system/user/register", method: 'post', data: userInfo })
