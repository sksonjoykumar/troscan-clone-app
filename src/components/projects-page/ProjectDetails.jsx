export default function ProjectDetailsPage() {
  return (
    <section
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(/bg-img/img-2.jpeg)` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Bottom text content */}
      <div className="absolute bottom-0 w-full px-14 py-10 z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <h1 className="text-white text-4xl md:text-6xl leading-tight">
            Luxurious Coastal <br /> Living
          </h1>
          <h5 className="text-white text-xl md:text-3xl max-w-md text-right">
            Bringing the beauty of the shore into your home.
          </h5>
        </div>
      </div>
    </section>
  );
}
