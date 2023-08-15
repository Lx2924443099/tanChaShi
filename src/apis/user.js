import request from "@/utils/request"

/**
<<<<<<< HEAD
 * 包含username、password，要求返回值有token、code（200为成功）
 * @param {object} userInfo 
 * @returns 
 */
export const reqLogin = (userInfo) => request({ url: "/user/login", method: 'post', data: userInfo })
=======
 * 包含username、password，要求返回值有token、code（200为成功）、userInfo{name,avatar(头像地址)}
 * @param {object} userInfo 
 * @returns 
 */
export const reqLogin = (userInfo) => request({ url: "/system/user/login", method: 'post', data: userInfo })
>>>>>>> 352cb1d (主页面主体搭建完成)

/**
 * @param {object} userInfo 
 * @returns 
 */
<<<<<<< HEAD
export const reqRegister = (userInfo) => request({ url: "/user/register", method: 'post', data: userInfo })
=======
export const reqRegister = (userInfo) => request({ url: "/system/user/register", method: 'post', data: userInfo })
>>>>>>> 352cb1d (主页面主体搭建完成)
