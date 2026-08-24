import EkkaWheel from './EkkaWheel'

/**
 * The mark locked up with the "ekka" wordmark. Horizontal by default; pass
 * `stacked` for the vertical lockup used on the master artwork.
 */
export default function EkkaWordmark({ size = 26, stacked = false, className = '' }) {
  return (
    <span className={`wordmark ${stacked ? 'wordmark--stacked' : ''} ${className}`}>
      <EkkaWheel size={size} label={null} />
      <span className="wordmark__text" style={{ fontSize: size * 0.82 }}>
        ekka
      </span>
    </span>
  )
}
