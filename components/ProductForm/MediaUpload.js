import React, { useState } from 'react'
import Button from '../common/Button'

const MediaUpload = ({ defaultValues = [], setValue }) => {
  const [imageSrc, setImageSrc] = useState([...defaultValues])
  const [loading, setLoading] = useState(false)
  const [uploadedData, setUploadedData] = useState(false)
  const handleOnChange = (changeEvent) => {
    const selectedFIles = []
    const targetFiles = changeEvent.target.files
    const targetFilesObject = [...targetFiles]
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file))
    })
    setImageSrc(selectedFIles)
  }

  const handleUpload = async (uploadEvent) => {
    uploadEvent.preventDefault()
    setLoading(true)

    const form = uploadEvent.currentTarget
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'file'
    )
    try {
      // adding upload preset
      const files = []
      for (const file of fileInput.files) {
        files.push(file)
      }
      const urls = await Promise.all(
        files.map(async (file) => {
          const formData = new FormData()
          formData.append('file', file)
          formData.append('upload_preset', 'vnqoc9iz')

          const res = await fetch(
            'https://api.cloudinary.com/v1_1/scrapbook/image/upload',
            {
              method: 'POST',
              body: formData,
            }
          )
          const data = await res.json()
          return data.secure_url
        })
      )

      setImageSrc(urls)
      setValue('media', urls)
      setUploadedData(true)
    } catch (error) {
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <form onSubmit={handleUpload}>
      <label htmlFor="file" className="mb-1 block text-sm text-gray-600">
        Upload multiple files
      </label>
      <input
        name="file"
        type="file"
        multiple
        onChange={handleOnChange}
        className="mb-3 w-full rounded-md border p-3 focus:border-sky-300 focus:ring-sky-300"
      />
      <div>
        <div className="mb-2 grid max-w-full grid-cols-2 gap-2 overflow-hidden">
          {imageSrc.map((i, idx) => (
            <div key={idx}>
              <img
                className="aspect-video max-h-40 flex-1 overflow-hidden rounded"
                src={i}
                alt=""
              />
            </div>
          ))}
        </div>
        {imageSrc.length && !uploadedData ? (
          <Button
            type="submit"
            variant="text"
            className="w-full"
            loading={loading}
            loadingText="Uploading..."
          >
            Upload
          </Button>
        ) : null}
      </div>
    </form>
  )
}

export default MediaUpload
