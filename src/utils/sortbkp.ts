type TypeMatching<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never
}[keyof T];

export const sortAlphabetically = <T, K extends TypeMatching<T, string>>(
    data: T[],
    key: K,
    order: 'asc' | 'desc'
  ): T[] => {
  return data.sort((a, b) => {
    return order === 'asc' ? `${a[key]}`.localeCompare(`${b[key]}`) : `${b[key]}`.localeCompare(`${a[key]}`)
  })
}

export const sortNumeric = <T, K extends TypeMatching<T, number>>(
    data: T[],
    key: K,
    order: 'asc' | 'desc'
  ): T[] => {
  return data.sort((a, b) => {
    return order === 'asc' ? +a[key] - +b[key] : +b[key] - +a[key]
  })
}
