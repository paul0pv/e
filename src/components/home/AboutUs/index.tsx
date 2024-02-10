export default function AboutUs() {
  const description = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut odio dolores id quia facilis tempore quidem nemo. Eligendi, officiis accusantium eum quaerat quibusdam exercitationem iure iste autem quae saepe reprehenderit.`;

  return (
    <section className="grid text-justify mx-auto mt-6">
      <h2 className="font-bold text-3xl py-10">About Us</h2>
      <p>{description}</p>
    </section>
  )
}