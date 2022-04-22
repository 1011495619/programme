function request(url) {
  return new Promise((reslove, reject) => {
    if (!/^http/.test(url)) {
      throw new ParamError('请求地址格式错误')
    }
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = function () {
      if (this.status == 200) {
        reslove(JSON.parse(this.response))
      } else if (this.status == 404) {
        reject(new HttpError('不存在'))
      }
      else {
        reject("加载失败")
      }
    }
    xhr.onerror = function () {
      reject(this)
    }
  })
}