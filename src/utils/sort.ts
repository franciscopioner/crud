type Props<K> = {
  a: K,
  b: K,
  order: string
}
type SortDataProps<T, K> = {
  data: T[],
  key: K,
  order: 'asc' | 'desc'
}

export const sortData = <T extends object, K extends keyof T>({data, key, order}: SortDataProps<T, K>): T[] => {
  return data.sort((a, b) => {
    const values = {a: a[key], b: b[key], order}
    return typeof data[0][key] === 'number' ? numerically(values) : alphabetically(values)
  })
}

const numerically = <K>({a, b, order}: Props<K>) => {
  return order === 'asc' ? +a - +b : +b - +a
}

const alphabetically = <K>({a, b, order}: Props<K>) => {
  return order === 'asc' ? `${a}`.localeCompare(`${b}`) : `${b}`.localeCompare(`${a}`)
}
