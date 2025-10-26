export default async function SongPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  console.log("id", id);

  return (
    <h2 className="text-xl">Song: {id}</h2>
  )
}
