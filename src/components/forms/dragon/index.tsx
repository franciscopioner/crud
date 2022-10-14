import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Dragon } from '../../../core/constants/types/dragon'
import { api } from '../../../services/api/methods'

type DragonFormProps = {
  data?: Dragon
  setIsVisibleDrawer?: (value: boolean) => void
}

const DragonForm = ({ data, setIsVisibleDrawer }: DragonFormProps) => {
  const { register, handleSubmit } = useForm()
  const { mutateAsync, isLoading } = data
    ? api.updateDragon(data.id)
    : api.createDragon()

  const onSubmit = (value: any) => {
    mutateAsync(value).then(() => {
      setIsVisibleDrawer && setIsVisibleDrawer(false)
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder={data?.name || 'Nome...'}
        defaultValue={data?.name || ''}
        {...register('name', { required: true })}
      />
      <input
        type="text"
        placeholder={data?.type || 'Tipo...'}
        defaultValue={data?.type || ''}
        {...register('type', { required: true })}
      />
      <input
        type="text"
        placeholder={data?.histories || 'Histórias...'}
        defaultValue={data?.histories || ''}
        {...register('histories', { required: true })}
      />
      <button disabled={isLoading} type="submit">
        {isLoading ? 'Salvando...' : 'Salvar'}
      </button>
    </form>
  )
}

export default DragonForm
