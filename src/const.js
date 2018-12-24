const menus = [
  {
    key: 'diary',
    title: '生活日常',
    subMenu: [
      {
        key: 'caseImport',
        title: '日常事件录入',
        url: '/diary/import',
      },
    ],
  },
  {
    key: 'skinCare',
    title: '护肤手账',
    subMenu: [
      {
        key: 'entryInfo',
        title: '护肤品信息录入',
        url: '/skinCare/entryInfo',
      },
      {
        key: 'entryPrice',
        title: '护肤品价格录入',
        url: '/skinCare/entryPrice',
      },
    ],
  },
]
export default menus
