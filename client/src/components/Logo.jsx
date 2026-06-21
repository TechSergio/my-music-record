const Logo = ({ className = "w-10 h-10" }) => {
  return (
    <svg viewBox="0 0 40 40" className={`group ${className}`} xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="19" stroke="currentColor" strokeWidth="2" fill="none" className="text-amber-400 group-hover:text-white transition-colors" />
      <rect x="24" y="18" width="2.5" height="4" rx="1" className="fill-amber-400 group-hover:fill-white transition-colors" />
      <rect x="16" y="10" width="2.5" height="20" rx="1" className="fill-amber-400 group-hover:fill-white transition-colors" />
      <rect x="20" y="14" width="2.5" height="12" rx="1" className="fill-amber-400 group-hover:fill-white transition-colors" />
    </svg>
  )
}

export default Logo