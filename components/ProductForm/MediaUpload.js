import React, { useState } from 'react'
import Button from '../common/Button'

const MediaUpload = ({ defaultValues = [], setValue }) => {
  const [imageSrc, setImageSrc] = useState([...defaultValues])
  const [loading, setLoading] = useState(false)
  const [uploadData, setUploadData] = useState()
  const handleOnChange = (changeEvent) => {
    const selectedFIles = []
    const targetFiles = changeEvent.target.files
    const targetFilesObject = [...targetFiles]
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file))
    })
    setImageSrc(selectedFIles)
  }

  return (
    <div>
      <label htmlFor="media" className="text-sm text-gray-600 block mb-1">
        Upload multiple files
      </label>
      <input
        type="file"
        multiple
        name="media"
        onChange={handleOnChange}
        className="p-3 border rounded-md focus:ring-sky-300 focus:border-sky-300"
      />
      <div>
        <div className="max-w-full grid grid-cols-2 gap-2 mb-2 overflow-hidden">
          {imageSrc.map((i, idx) => (
            <img
              key={idx}
              className="rounded aspect-video max-h-40 flex-1 overflow-hidden"
              src={i}
              alt=""
            />
          ))}
        </div>
        {imageSrc.length && !uploadData ? (
          <Button
            variant="text"
            className="w-full"
            loading={loading}
            loadingText="Uploading..."
          >
            Upload
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default MediaUpload
