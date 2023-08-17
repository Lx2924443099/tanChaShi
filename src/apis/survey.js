import request from '@/utils/request.js'
export const reqSurveyList = () => request({ url: "/system/survey/all", method: "get" })