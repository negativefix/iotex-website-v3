import axios from "axios";

export const publicConfig = {
  MAIL_CHIMP: 'https://Iotex.us6.list-manage.com/subscribe/post?u=76695f0cff963129d31cdaae6&amp;id=a82d76e093',
  graphAPIURL: "https://nsv3-hasura.iotex.io/v1/graphql",
  IOPAY_IOS_DOWNLOAD: "itms-apps://itunes.apple.com/app/id1478086371",
  IOPAY_MIRROR_DOWNLOAD: "https://iopay-app-cn.s3.cn-northwest-1.amazonaws.com.cn/iopay-release.apk",
  IOPAY_APK_DOWNLOAD: "https://iopay-app.s3.amazonaws.com/iopay-release.apk",
  IOPAY_GOOGLE_DOWNLOAD: "https://play.google.com/store/apps/details?id=io.iotex.iopay.gp",
  IOPAY_GITHUB_API_URL: "https://api.github.com/repos/iotexproject/iotex-explorer/releases/latest",
  IOPAY_AWS_DOWNLOAD_LINK_PREFIX:'https://iopay-app-cn.s3.cn-northwest-1.amazonaws.com.cn/'
}

export const getOS =  ()=>{
  if (navigator.userAgent.indexOf('Window') > 0) {
    return 'windows'
  } else if (navigator.userAgent.indexOf('Mac OS X') > 0) {
    return 'mac'
  } else if (navigator.userAgent.indexOf('Linux') > 0) {
    return 'linux'
  } else {
    return 'NUll'
  }
}
export const getIopayDownloadUrl = async () => {
  const axiosInstance = axios.create({timeout: 5000})
  const resp = await axiosInstance.get(publicConfig.IOPAY_GITHUB_API_URL)
  if (resp.status !== 200) {
    return
  }
  if (!resp.data.assets || !resp.data.assets.length) {
    return
  }
  const packages = {mac: "", linux: "", window: ""}
  resp.data.assets.forEach((item) => {
    if (/.dmg$/.test(item.name)) {
      packages.mac = item.browser_download_url
    }
    if (/.snap$/.test(item.name)) {
      packages.linux = item.browser_download_url
    }
    if (/.exe$/.test(item.name)) {
      packages.window = item.browser_download_url
    }
  })
  return packages
}

export const getIopayMirroLinkUrl=async ()=>{
  const axiosInstance = axios.create({timeout: 5000})
  const resp = await axiosInstance.get(publicConfig.IOPAY_GITHUB_API_URL)
  if (resp.status !== 200) {
    return
  }
  if (!resp.data.assets || !resp.data.assets.length) {
    return
  }
  const packages = {mac: "", linux: "", window: ""}
  resp.data.assets.forEach((item) => {
    const [packageName] = item.browser_download_url.split('/').slice(-1)
    if (/.dmg$/.test(item.name)) {
      packages.mac = publicConfig.IOPAY_AWS_DOWNLOAD_LINK_PREFIX+packageName
    }
    if (/.snap$/.test(item.name)) {
      packages.linux = publicConfig.IOPAY_AWS_DOWNLOAD_LINK_PREFIX+packageName
    }
    if (/.exe$/.test(item.name)) {
      packages.window = publicConfig.IOPAY_AWS_DOWNLOAD_LINK_PREFIX+packageName
    }
  })
  return packages
}
