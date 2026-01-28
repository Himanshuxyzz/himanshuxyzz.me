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
            <h3 className="font-medium text-lg">React Native Developer</h3>
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
              Led end-to-end mobile app development as sole React Native
              developer, delivering cross-platform solutions using React Native
              and Expo.
            </li>
            <li className="text-neutral-700 dark:text-neutral-300">
              Developed complex UI components and animations with seamless user
              experience, enhancing engagement and retention rates.
            </li>
            <li className="text-neutral-700 dark:text-neutral-300">
              Implemented push notification system using expo-notifications for
              real-time user engagement and improved app retention.
            </li>
            <li className="text-neutral-700 dark:text-neutral-300">
              Optimized app performance through various optimization techniques
              resulting in improved performance and app launch times in low-end
              devices.
            </li>
            <li className="text-neutral-700 dark:text-neutral-300">
              Scaled application to 300+ active monthly users while maintaining
              high performance across iOS and Android platforms.
            </li>
          </ul>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-200 dark:border-neutral-800 my-8"></div>

        {/* Hackshade Experience */}
        <div className="w-full">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-1">
            <h3 className="font-medium text-lg">Web Developer Intern</h3>
            <div>
              <Link href="https://hackshade.in/" target="_blank">
                <p className="font-medium flex items-center gap-1 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                  Hackshade <MdOutlineArrowOutward width={16} height={16} />
                </p>
              </Link>
              <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                Jan 2023 - Jun 2023
              </p>
            </div>
          </div>

          <ul className="space-y-3 pl-5 list-disc">
            <li className="text-neutral-700 dark:text-neutral-300">
              Increased website performance by 30% by optimizing web application
              pages using PHP, MySQL, HTML, Bootstrap, and JavaScript, resulting
              in improved user retention and engagement.
            </li>
            <li className="text-neutral-700 dark:text-neutral-300">
              Enhanced user interaction and content management capabilities
              through the implementation of CRUD (Create, Read, Update, Delete)
              functionality within the web application.
            </li>
            <li className="text-neutral-700 dark:text-neutral-300">
              Designed and developed a responsive website that adapts seamlessly
              to various screen sizes, improving accessibility and user
              experience across devices.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
