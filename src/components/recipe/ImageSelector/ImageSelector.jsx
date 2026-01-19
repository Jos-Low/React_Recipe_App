import { getImageSrc } from '../../../utils/helpers'
import './ImageSelector.css'

export default function ImageSelector({ value, onChange, options }) {
  return (
    <div className="image-selector">
      <label className="image-selector__field">
        <span className="image-selector__label">Recipe Image</span>

        <select value={value} onChange={(e) => onChange(e.target.value)}>
          {options.map((file) => (
            <option key={file} value={file}>
              {file}
            </option>
          ))}
        </select>
      </label>

      <div className="image-selector__preview">
        <p className="image-selector__preview-label">Selected image preview</p>
        <img
          src={getImageSrc(value)}
          alt={`Preview of ${value}`}
          width={240}
          height={160}
        />
      </div>
    </div>
  )
}