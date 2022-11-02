import React, { useState } from 'react'
import Button from '../common/Button'

const ThumbnailUpload = ({ defaultValue, setValue }) => {
  const [imageSrc, setImageSrc] = useState(defaultValue)
  const [loading, setLoading] = useState(false)
  const [uploadData, setUploadData] = useState()
  const handleOnChange = (changeEvent) => {
    const reader = new FileReader()

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result)
      setUploadData(undefined)
    }

    reader.readAsDataURL(changeEvent.target.files[0])
  }
  return (
    <div>
      <input
        type="file"
        onChange={handleOnChange}
        className="p-3 mb-3 w-full border rounded-md focus:ring-sky-300 focus:border-sky-300"
      />
      <div>
        <img className="rounded aspect-video mb-2" src={imageSrc} alt="" />
        {imageSrc && !uploadData && (
          <Button
            variant="text"
            className="w-full"
            loading={loading}
            loadingText="Uploading..."
          >
            Upload
          </Button>
        )}
      </div>
    </div>
  )
}

export default ThumbnailUpload
