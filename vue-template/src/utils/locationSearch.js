const locationSearch = (search) => {
  let s = search.substring(search[0] === '?' ? 1 : 0)
  let a = []
  if (s !== '') {
    a = s.split('&')
  }
  let kv = {}
  for (let i of a) {
    let str = i.split('=')
    let k = str[0]
    let v = str[1]
    kv[k] = decodeURIComponent(v)
  }
  return kv
}

export default locationSearch
