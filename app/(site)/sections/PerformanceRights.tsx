export default function PerformanceRights() {
  return (
    <section
      data-section-id="performance-rights"
      className="bg-[#ffcc00] px-4 py-6 md:px-5 md:py-8"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Divider line */}
        <hr className="mb-10 border-[#e6b800]" />

        <h2 className="mb-8 text-center font-['Amatic_SC'] text-[28px] font-bold leading-[34px] text-[#cc3333] md:text-[36px] md:leading-[40px]">
          * Unser vereinfachtes Aufführungsrecht
        </h2>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[16px] border border-[#e6b800] bg-[#fdeaa1] p-5 md:p-8">
            <h4 className="mb-3 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333]">
              Für Schulen und Kitas
            </h4>
            <p className="text-[15px] leading-[1.65em] text-[#424242]">
              Sie erwerben mit dem Onlinekauf des Stückes das Aufführungsrecht für
              die Premiere plus einer weiteren Aufführung ohne zusätzliche
              Aufführungs- oder Kopiergebühren.
            </p>
          </div>

          <div className="rounded-[16px] border border-[#e6b800] bg-[#fdeaa1] p-5 md:p-8">
            <h4 className="mb-3 font-['Amatic_SC'] text-[24px] font-bold leading-[28px] text-[#cc3333]">
              Für Theater &amp; Theatergruppen
            </h4>
            <p className="text-[15px] leading-[1.65em] text-[#424242]">
              Sie erwerben mit dem Onlinekauf eines Stückes das Aufführungsrecht
              für die Premiere. Der Kaufpreis entspricht der
              Mindestaufführungsgebühr und wird mit den Tantiemen verrechnet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
