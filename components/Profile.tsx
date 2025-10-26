import Image from "next/image"

export default function Profile() {
  return (
    <button>
      <Image
        src="/user.png"
        alt="Profile"
        width={30}
        height={30}
        className="object-cover h-auto w-auto"
        loading="eager"
        priority
      />
    </button>
  )
}

