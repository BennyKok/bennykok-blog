export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      <img
        src={picture.url}
        className="w-8 h-8 rounded-full mr-3"
        alt={name[0].text}
      />
      <div className="text-md font-bold">{name}</div>
    </div>
  )
}
