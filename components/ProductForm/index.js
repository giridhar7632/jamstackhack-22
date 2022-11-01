import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../common/Button'
import Input from '../common/Input'
import MyDisclosure from '../common/MyDisclosure'
import MediaUpload from './MediaUpload'
import ThumbnailUpload from './ThumbnailUpload'

const ProductForm = ({ type, defaultValues, onFormSubmit, ...props }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm()

  useEffect(() => {
    if (defaultValues) {
      setValue('name', defaultValues.name)
      setValue('description', defaultValues.description)
      setValue('price', defaultValues.price)
      setValue('stock', defaultValues.stock)
      setValue('thumbnail', defaultValues.thumbnail)
      setValue('media', defaultValues.media)
    }
  }, [defaultValues, setValue])

  const onSubmit = handleSubmit(async (data) => {
    await onFormSubmit(data)
    reset()
  })

  return (
    <form onSubmit={onSubmit} {...props} className="flex flex-col space-y-6">
      <MyDisclosure defaultOpen={true} title={'Product Information'}>
        <Input
          name="name"
          label="Name of the Product"
          placeholder="My beautiful product..."
          type="text"
          error={errors.name ? errors.name.message : false}
          register={register('name', {
            required: {
              value: true,
              message: 'You must add the name of your product.',
            },
          })}
        />
        <Input
          name="description"
          label="Description (optional)"
          placeholder="Warm and cozy. Beautiful and elegant..."
          type="text"
          multiline
          error={errors.description ? errors.description.message : false}
          register={register('description')}
        />
        <div className="flex items-center flex-col md:flex-row md:space-x-2">
          <Input
            className=""
            name="price"
            label="Price"
            placeholder="36.5"
            type="number"
            multiline
            error={errors.price ? errors.price.message : false}
            register={register('price', {
              required: {
                value: true,
                message: 'You must add the price of your product.',
              },
            })}
          />
          <Input
            className=""
            name="stock"
            label="Stock"
            placeholder="1000"
            type="number"
            multiline
            error={errors.stock ? errors.stock.message : false}
            register={register('stock', {
              required: {
                value: true,
                message: 'You must add the price of your product.',
              },
            })}
          />
        </div>
      </MyDisclosure>
      <MyDisclosure title={'Thumbnail Upload'}>
        <ThumbnailUpload setValue={setValue} />
      </MyDisclosure>
      <MyDisclosure title={'Media Upload'}>
        <MediaUpload setValue={setValue} />
      </MyDisclosure>

      <Button type="submit" className="w-full">
        {type ? `${type} Product` : 'Submit'}
      </Button>
    </form>
  )
}

export default ProductForm
