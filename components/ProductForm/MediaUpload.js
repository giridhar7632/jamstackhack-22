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
      <label htmlFor="media" className="mb-1 block text-sm text-gray-600">
        Upload multiple files
      </label>
      <input
        type="file"
        multiple
        name="media"
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
