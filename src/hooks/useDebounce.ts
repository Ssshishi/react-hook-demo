import { useEffect } from 'react'

/**
 *
 * @param {执行函数} fn
 * @param {次数} ms
 * @param {参数} args
 */

const useDebounce = (
  fn: () => unknown,
  ms: number = 0,
  args: unknown[] = [],
) => {
  useEffect(() => {
    const handle = setTimeout(fn.bind(null, args), ms)

    return () => {
      // 当args参数变化时，清除定时器
      clearTimeout(handle)
    }
  }, args)
}

export default useDebounce
