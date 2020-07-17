const data = [
  {
    option_id: 54534529,
    option_value: 'o',
    cross_option_id: 54534529,
    cross_option_value: 'o',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534529,
    option_value: 'o',
    cross_option_id: 54534530,
    cross_option_value: 'p',
    num: 1,
    percent: 10,
  },
  {
    option_id: 54534529,
    option_value: 'o',
    cross_option_id: 54534531,
    cross_option_value: 'q',
    num: 0,
    percent: 34,
  },
  {
    option_id: 54534529,
    option_value: 'o',
    cross_option_id: 54534532,
    cross_option_value: 'r',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534529,
    option_value: 'o',
    cross_option_id: 54534533,
    cross_option_value: 's',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534529,
    option_value: 'o',
    cross_option_id: 54534534,
    cross_option_value: 't',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534530,
    option_value: 'p',
    cross_option_id: 54534530,
    cross_option_value: 'p',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534530,
    option_value: 'p',
    cross_option_id: 54534531,
    cross_option_value: 'q',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534530,
    option_value: 'p',
    cross_option_id: 54534532,
    cross_option_value: 'r',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534530,
    option_value: 'p',
    cross_option_id: 54534533,
    cross_option_value: 's',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534530,
    option_value: 'p',
    cross_option_id: 54534534,
    cross_option_value: 't',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534531,
    option_value: 'q',
    cross_option_id: 54534531,
    cross_option_value: 'q',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534531,
    option_value: 'q',
    cross_option_id: 54534532,
    cross_option_value: 'r',
    num: 1,
    percent: 1,
  },
  {
    option_id: 54534531,
    option_value: 'q',
    cross_option_id: 54534533,
    cross_option_value: 's',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534531,
    option_value: 'q',
    cross_option_id: 54534534,
    cross_option_value: 't',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534532,
    option_value: 'r',
    cross_option_id: 54534532,
    cross_option_value: 'r',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534532,
    option_value: 'r',
    cross_option_id: 54534533,
    cross_option_value: 's',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534532,
    option_value: 'r',
    cross_option_id: 54534534,
    cross_option_value: 't',
    num: 0,
    percent: 11,
  },
  {
    option_id: 54534533,
    option_value: 's',
    cross_option_id: 54534533,
    cross_option_value: 's',
    num: 0,
    percent: 0,
  },
  {
    option_id: 54534533,
    option_value: 's',
    cross_option_id: 54534534,
    cross_option_value: 't',
    num: 0,
    percent: 12,
  },
  {
    option_id: 54534534,
    option_value: 't',
    cross_option_id: 54534534,
    cross_option_value: 't',
    num: 0,
    percent: 0,
  },
]
// const body = [
//   {
//     connect: '斗罗大陆',
//     id: '1',
//     column1: '10%',
//     column2: '20%',
//   },
//   {
//     connect: '火影忍者',
//     column2: '20%',
//   },
// ]
// const head = [
//   {
//     key: 'connect',
//     value: '选项关联',
//   },
//   {
//     key: 'column1',
//     id: '12',
//     value: '斗罗大陆',
//   },
//   {
//     key: 'column2',
//     value: '火影忍者',
//   },
// ]

const removeDuplicates = function (arr) {
  let nums = arr.slice()
  let p = 0
  let q = 1
  while (q < nums.length) {
    if (nums[p].option_id !== nums[q].option_id) {
      nums[++p] = nums[q]
    }
    q++
  }
  nums.length = p + 1
  return nums
}

const transformData = (data) => {
  const curData = removeDuplicates(data)
  const body = []
  // 哈希表存取，速度快
  const map = new Map()
  data.forEach((cur) => {
    map.set(String(cur.option_id) + String(cur.cross_option_id), cur.percent)
  })
  const allIds = curData.map((cur) => cur.option_id)
  const head = []
  head.push({
    key: 'connect',
    value: '选项关联',
  })
  curData.map((el) => {
    const optId = el.option_id
    const value = el.option_value
    const tem = {
      connect: value,
      option_id: optId,
    }
    allIds.forEach((id) => {
      const key1 = String(id) + String(optId)
      const key2 = String(optId) + String(id)
      if (map.has(key1)) {
        tem[id] = map.get(key1)
      } else if (map.has(key2)) {
        tem[id] = map.get(key2)
      }
    })
    body.push(tem)
    head.push({
      key: optId,
      value,
    })
  })
  console.log(body, head)
  return {
    body,
    head,
  }
}
transformData(data)
