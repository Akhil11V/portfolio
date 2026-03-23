import React from "react";
import { AiFillStar } from "react-icons/ai";
import { SiReact, SiRedux } from "react-icons/si";
import { GoDot } from "react-icons/go";

interface Stat {
  number: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

interface StatsSectionProps {
  stats: Stat[];
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  return (
    <section
      id="stats"
      className="py-8 px-4 sm:px-6 md:px-8 bg-(--bg-secondary) relative overflow-hidden transition-all duration-1000 ease-out opacity-100 translate-y-0"
    >
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-(--accent) rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-(--primary-color) rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-(--accent-bg) rounded-full blur-2xl animate-bounce animation-delay-500"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-(--accent-bg) rounded-full blur-xl animate-bounce animation-delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Section header */}
        <div
          className="text-center mb-16 transition-all duration-1000 ease-out"
          style={{
            opacity: 1,
            transform: "translateY(0)",
            transitionDelay: "200ms",
          }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-(--accent-bg) backdrop-blur-md px-4 py-2 rounded-full text-(--accent) text-sm font-semibold mb-6 border border-(--accent-border)">
            <span className="w-2 h-2 bg-(--accent) rounded-full animate-pulse"></span>
            <span>Professional Journey</span>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-(--accent) to-(--primary-color) bg-clip-text text-transparent mb-6 leading-tight">
              Key Achievements
            </h2>
            <div className="text-md text-(--text-secondary) max-w-3xl mx-auto leading-relaxed mb-2">
              Numbers that reflect my journey and expertise in frontend
              development
            </div>
          </div>

          {/* Enhanced Experience badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 flex-wrap">
            <div className="flex items-center gap-2 sm:gap-3 bg-(--bg-card) px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-(--border) shadow-lg">
              <span className="text-yellow-500">
                <AiFillStar size={20} />
              </span>
              <span className="text-sm sm:text-base font-semibold text-(--text-primary)">
                4.7+ years in frontend development
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-(--bg-card) px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-(--border) shadow-lg">
              <span className="text-red-600">
                <SiReact size={20} />
              </span>
              <span className="text-sm sm:text-base font-semibold text-(--text-primary)">
                4.7+ years with React
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-(--bg-card) px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-(--border) shadow-lg">
              <span className="text-blue-600">
                <GoDot size={20} />
              </span>
              <span className="text-sm sm:text-base font-semibold text-(--text-primary)">
                4.7+ years with TypeScript
              </span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 bg-(--bg-card) px-3 sm:px-6 py-2 sm:py-3 rounded-full border border-(--border) shadow-lg">
              <span className="text-blue-500">
                <SiRedux size={20} />
              </span>
              <span className="text-sm sm:text-base font-semibold text-(--text-primary)">
                4.7+ year with Redux
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 150 + 400}ms`,
                opacity: 1,
                transform: "translateY(0)",
                transition: "all 800ms cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Enhanced Card */}
              <div className="relative bg-(--bg-card) border border-(--border) rounded-2xl p-4 sm:p-6 text-center transition-all duration-500 ease-out hover:border-(--accent-border) hover:shadow-xl hover:-translate-y-2 cursor-pointer overflow-hidden">
                {/* Enhanced Background gradient on hover */}
                <div className="absolute inset-0 bg-(--accent-bg) opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out"></div>

                {/* Enhanced Icon container */}
                <div className="relative z-10 mb-4 flex justify-center">
                  <div className="from-(--accent) to-(--primary-color) flex items-center justify-center text-white text-2xl transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3">
                    {stat.icon}
                  </div>
                </div>

                {/* Enhanced Number */}
                <div className="relative z-10 text-3xl sm:text-4xl font-bold bg-linear-to-r from-(--accent) to-(--primary-color) bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-all duration-500 ease-out tracking-tight">
                  {stat.number}
                </div>

                {/* Enhanced Label */}
                <div className="relative z-10 text-sm sm:text-base text-(--text-primary) font-semibold mb-2 leading-tight group-hover:text-(--accent) transition-all duration-300 ease-out">
                  {stat.label}
                </div>

                {/* Enhanced Description */}
                <div className="relative z-10 text-xs sm:text-sm text-(--text-secondary) leading-relaxed max-w-xs mx-auto text-center group-hover:text-(--text-primary) transition-all duration-300 ease-out">
                  {stat.description}
                </div>

                {/* Enhanced Decorative elements */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-(--accent) rounded-full opacity-0 group-hover:opacity-80 transition-all duration-500 ease-out group-hover:scale-150 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-(--primary-color) rounded-full opacity-0 group-hover:opacity-80 transition-all duration-500 ease-out animation-delay-100 group-hover:scale-150 animate-pulse animation-delay-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
