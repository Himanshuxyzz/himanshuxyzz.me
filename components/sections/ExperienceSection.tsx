import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-8 px-4 sm:px-0">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="w-full border dark:border-neutral-800 border-neutral-200 p-5 sm:p-6 rounded-lg">
        {/* Gigbei Experience */}
        <div className="w-full mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-1">
            <h3 className="font-medium text-lg">Software Developer</h3>
            <div>
              <Link href="https://www.gigbei.com/" target="_blank">
                <p className="font-medium flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Gigbei <MdOutlineArrowOutward width={16} height={16} />
                </p>
              </Link>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                Jun 2024 - Present
              </p>
            </div>
          </div>

          <ul className="space-y-3 pl-5 list-disc">
            <li className="text-neutral-700 dark:text-neutral-300">
              As the Sole Mobile Developer, leading the development lifecycle
              from technical design, to production deployment of customer-facing{" "}
              <strong>React Native</strong> applications,{" "}
              <strong>TypeScript</strong>, and modern tooling.
            </li>
            <li className="text-neutral-700 dark:text-neutral-300">
              Architected and built core features such as real-time booking
              system, payment flow that served <strong>300+</strong> monthly
              active users.
            </li>
            <li className="text-neutral-700 dark:text-neutral-300">
              Solved critical production challenges, including hard-to-reproduce
              bugs and performance bottlenecks on low-end devices, directly
              improving user retention.
            </li>
            <li className="text-neutral-700 dark:text-neutral-300">
              Established and automated the release pipeline using{" "}
              <strong>Expo EAS (Build & Submit)</strong>, enabling reliable
              weekly releases and rapid hotfix deployments via{" "}
              <strong>OTA (Over-the-Air)</strong> updates.
            </li>
            <li className="text-neutral-700 dark:text-neutral-300">
              Extending technical contributions to web development, building
              dynamic internal data dashboards and high-conversion marketing
              landing pages using <strong>Next.js</strong>,{" "}
              <strong>React</strong>, and <strong>Tailwind CSS</strong>.
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 my-8"></div>

        {/* Hackshade Experience */}
        <div className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-1">
            <h3 className="font-medium text-lg">Frontend Developer Intern</h3>
            <div>
              <Link href="https://hackshade.in/" target="_blank">
                <p className="font-medium flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Hackshade <MdOutlineArrowOutward width={16} height={16} />
                </p>
              </Link>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                Jan 2023 - June 2023
              </p>
            </div>
          </div>

          <ul className="space-y-3 pl-5 list-disc">
            <li className="text-neutral-700 dark:text-neutral-300">
              Engineered responsive, mobile-first web interfaces using{" "}
              <strong>HTML</strong>, <strong>CSS</strong>,{" "}
              <strong>Bootstrap</strong>, and <strong>JavaScript</strong>,
              ensuring seamless cross-browser compatibility and improving
              overall user accessibility for client projects.
            </li>
            <li className="text-neutral-700 dark:text-neutral-300">
              Built foundational full-stack skills by developing and integrating
              dynamic website components with <strong>PHP</strong> and{" "}
              <strong>MySQL</strong> for server-side logic and database
              operations.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
