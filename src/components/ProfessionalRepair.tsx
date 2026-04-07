export default function ProfessionalRepair() {
  return (
    <section className="py-16 lg:py-[72px]">
      <div className="max-w-[1160px] mx-auto px-6">
        <div className="text-center mb-10 lg:mb-11">
          <h2 className="text-[clamp(1.4rem,2.8vw,1.85rem)] font-bold text-slate-900">
            Professional Repair For All Major Home Appliances
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 border border-slate-200 rounded-[10px] overflow-hidden">
          <div className="p-7 md:border-r md:border-slate-200">
            <h4 className="text-base font-bold text-slate-900 mb-2.5">Technical Precision</h4>
            <p className="text-[13px] text-slate-500 leading-[1.7]">
              Our team handles intricate technical challenges from circuit board failures to mechanical issues. We identify the root cause accurately ensuring a reliable, long-term fix for your appliances.
            </p>
            <h4 className="text-sm font-bold text-slate-900 mt-5 mb-2">Expert Repair for:</h4>
            <ul className="text-[13px] text-slate-500 leading-[2]">
              {["Refrigerators & Freezers", "Washers and Washing machines", "Dryers & Laundry systems", "Ovens, Stoves and Cooktops", "Dishwashers", "Ice Machines"].map((item) => (
                <li key={item} className="pl-3 relative">
                  <span className="absolute left-0">-</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-7 border-t md:border-t-0 md:border-r border-slate-200">
            <h4 className="text-base font-bold text-slate-900 mb-2.5">Factory Performance</h4>
            <p className="text-[13px] text-slate-500 leading-[1.7]">
              We restore your appliances to factory-grade efficiency by using professional expertise and specialised equipment, ensuring your home systems run perfectly again.
            </p>
            <h4 className="text-sm font-bold text-slate-900 mt-5 mb-2">Service Standards:</h4>
            <ul className="text-[13px] text-slate-500 leading-[2]">
              {["90 day Warranty on all parts", "Factory trained certified technicians", "Quality Parts for long-term reliability", "Professional Equipment"].map((item) => (
                <li key={item} className="pl-3 relative">
                  <span className="absolute left-0">-</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-7 border-t md:border-t-0">
            <h4 className="text-base font-bold text-slate-900 mb-2.5">Local Reliability</h4>
            <p className="text-[13px] text-slate-500 leading-[1.7]">
              Providing reliable support for home owners in Arlington, Alexandria and Fairfax. We focus on long-term reliability and same day service to restore your comfort without delay.
            </p>
            <h4 className="text-sm font-bold text-slate-900 mt-5 mb-2">Service Areas:</h4>
            <ul className="text-[13px] text-slate-500 leading-[2]">
              {["Arlington", "Arlington County", "Fort Myer", "Crystal City", "Potomac Yard", "Ballston"].map((item) => (
                <li key={item} className="pl-3 relative">
                  <span className="absolute left-0">-</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-10">
          <a
            href="#order"
            className="inline-flex items-center justify-center px-[30px] py-3.5 bg-blue text-white text-[15px] font-semibold rounded-md hover:bg-blue-hover transition-colors"
          >
            Order Service Now
          </a>
        </div>
      </div>
    </section>
  );
}
