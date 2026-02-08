export default function Hero() {
  return (
    <section
      data-section-id="hero"
      className="bg-[#ffcc00] px-4 py-6 md:px-5"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/startseite-web.jpg"
          alt="Theaterszenen — Jugendliche umarmen sich, Clown-Aufführung, Mädchen singt"
          className="w-full rounded-[20px] shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        />
      </div>
    </section>
  );
}
