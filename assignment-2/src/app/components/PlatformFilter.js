const PlatformFilter = ({ platforms, selectedPlatform, setSelectedPlatform }) => {
    return (
      <div>
        <select
          value={selectedPlatform}
          onChange={(e) => setSelectedPlatform(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {platforms.map((platform, index) => (
            <option key={index} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </div>
    )
  }
  
  export default PlatformFilter
  
  