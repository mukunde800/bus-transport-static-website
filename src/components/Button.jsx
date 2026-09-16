const Button = ({ children, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`
        px-6 py-3
        bg-red-600
        text-white
        font-semibold
        rounded-lg
        hover:bg-red-700
        transition
        duration-300
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button