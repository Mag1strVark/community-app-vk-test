import { IUseEntitiesProps } from './useEntities.types.ts'
import { useRecoilState } from 'recoil'
import useHttpLoader from '../../shared/hooks/httpLoader/useHttpLoader.ts'
import { useEffect } from 'react'
import { HttpStatusEnum } from '../../enums/httpStatus.enum.ts'

const useEntities = <T extends any>(props: IUseEntitiesProps<T>) => {
  const [state, setState] = useRecoilState(props.atom)
  const { wait, loading } = useHttpLoader()

  useEffect(() => {
    if (state.loaded) return

    wait(props.itemFetcher(), (resp) => {
      if (resp.status === HttpStatusEnum.success) {
        setState((prev) => ({
          ...prev,
          loaded: true,
          data: resp.body.data,
        }))
      }
    })
  }, [])

  return { state, loading: loading || !state.loaded }
}

export default useEntities
