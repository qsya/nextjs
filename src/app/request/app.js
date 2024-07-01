import service from "./index"

export const getUserList = (params) =>
  service({ url: "/api/user", method: "get", params })
