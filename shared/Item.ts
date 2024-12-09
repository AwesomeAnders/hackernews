export interface Item {
  id: number
  deleted: boolean
  type: ItemType
  by: string
  time: number
  text: string
  dead: boolean
  parent?: number
  poll?: number
  kids?: number[]
  url?: string
  score?: number
  title?: string
  parts?: number[]
  descendants?: number
}

export enum ItemType {
  job = 'job',
  story = 'story',
  comment = 'comment',
  poll = 'poll',
  pollopt = 'pollopt',
}
