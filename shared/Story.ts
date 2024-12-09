import type { Item } from './Item'
import type { User } from './User'

export type Story = Item & { author: User }
