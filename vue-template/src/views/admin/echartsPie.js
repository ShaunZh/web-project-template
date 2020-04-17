/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-04-17 16:29:40
 * @LastEditors: Hexon
 * @LastEditTime: 2020-04-17 16:35:06
 */

export let data = [
  {
    name: 'Apples',
    value: 70
  },
  {
    name: 'Strawberries',
    value: 68
  },
  {
    name: 'Bananas',
    value: 48
  },
  {
    name: 'Oranges',
    value: 40
  },
  {
    name: 'Pears',
    value: 32
  },
  {
    name: 'Pineapples',
    value: 27
  },
  {
    name: 'Grapes',
    value: 18
  }
]

export let option = {
  title: [
    {
      text: 'Pie label alignTo'
    },
    {
      subtext: 'alignTo: "none" (default)',
      left: '50%',
      top: '75%',
      textAlign: 'center'
    }
  ],
  series: [
    {
      type: 'pie',
      radius: '30%',
      data: data,
      label: {
        position: 'outer',
        bleedMargin: 5
      }
    }
  ]
}
