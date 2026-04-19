function ToggleSwitch({ enabled, onChange, disabled = false }) {
  return (
    <button
      onClick={onChange}
      disabled={disabled}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition ${enabled ? "bg-green-500" : "bg-gray-300"
        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:opacity-90"}`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow transform transition ${enabled ? "translate-x-6" : "translate-x-0"
          }`}
      />
    </button>
  );
}

export default ToggleSwitch;