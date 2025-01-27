export default function Content() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-4 p-4 bg-primary place-items-center">
      <div className="p-4 text-center">
        <h1>Leistungen</h1>
        <div className="p-4">
          <p className="p-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum.
          </p>
        </div>
      </div>

      <div
        className="min-h-[500px] w-full h-full bg-cover bg-center rounded"
        style={{ backgroundImage: `url('/muehle.jpeg')` }}
      ></div>

      <div
        className="min-h-[500px] w-full h-full bg-cover bg-center order-4 md:order-3 rounded"
        style={{ backgroundImage: `url('/yoga.webp')` }}
      ></div>

      <div className=" p-4 text-center order-3 md:order-4">
        <h1>Yoga</h1>

        <div className="p-4">
          <p className="p-3">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </div>
  );
}
