"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import { Command } from "cmdk";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaSun,
  FaMoon,
  FaFileAlt,
  FaHome,
  FaBriefcase,
  FaPaintBrush,
  FaBlog,
} from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const runCommand = useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />

      {/* Command Dialog */}
      <div className="absolute left-1/2 top-[20%] -translate-x-1/2 w-full max-w-lg">
        <Command
          className="bg-white dark:bg-[#1a1d21] rounded-xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden"
          loop
        >
          <div className="flex items-center border-b border-neutral-200 dark:border-neutral-800 px-4">
            <Command.Input
              ref={inputRef}
              placeholder="Type a command or search..."
              className="flex-1 py-4 text-base bg-transparent outline-none placeholder:text-neutral-500"
            />
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <IoClose className="w-5 h-5" />
            </button>
          </div>

          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-neutral-500">
              No results found.
            </Command.Empty>

            {/* Navigation */}
            <Command.Group heading="Navigation" className="mb-2">
              <CommandItem
                icon={<FaHome />}
                onSelect={() => runCommand(() => scrollToSection("hero"))}
              >
                Home
              </CommandItem>
              <CommandItem
                icon={<FaBriefcase />}
                onSelect={() => runCommand(() => scrollToSection("experience"))}
              >
                Experience
              </CommandItem>
              <CommandItem
                icon={<FaPaintBrush />}
                onSelect={() => runCommand(() => scrollToSection("crafts"))}
              >
                Crafts
              </CommandItem>
              <CommandItem
                icon={<FaBlog />}
                onSelect={() => runCommand(() => scrollToSection("blog"))}
              >
                Blog
              </CommandItem>
            </Command.Group>

            {/* Social Links */}
            <Command.Group heading="Social" className="mb-2">
              <CommandItem
                icon={<FaGithub />}
                onSelect={() =>
                  runCommand(() =>
                    window.open("https://github.com/himanshuxyzz", "_blank"),
                  )
                }
              >
                GitHub
              </CommandItem>
              <CommandItem
                icon={<FaLinkedin />}
                onSelect={() =>
                  runCommand(() =>
                    window.open(
                      "https://www.linkedin.com/in/himanshu-toppo/",
                      "_blank",
                    ),
                  )
                }
              >
                LinkedIn
              </CommandItem>
              <CommandItem
                icon={<FaTwitter />}
                onSelect={() =>
                  runCommand(() =>
                    window.open("https://twitter.com/himanshu_toppo", "_blank"),
                  )
                }
              >
                Twitter / X
              </CommandItem>
              <CommandItem
                icon={<FaInstagram />}
                onSelect={() =>
                  runCommand(() =>
                    window.open(
                      "https://instagram.com/savage_launda__",
                      "_blank",
                    ),
                  )
                }
              >
                Instagram
              </CommandItem>
            </Command.Group>

            {/* Actions */}
            <Command.Group heading="Actions">
              <CommandItem
                icon={theme === "light" ? <FaMoon /> : <FaSun />}
                onSelect={() =>
                  runCommand(() =>
                    setTheme(theme === "light" ? "dark" : "light"),
                  )
                }
              >
                Toggle Theme
              </CommandItem>
              <CommandItem
                icon={<FaFileAlt />}
                onSelect={() =>
                  runCommand(() =>
                    window.open(
                      "https://drive.google.com/file/d/1cmTYsPmPWAjtQz5eOKh2IH93VLSuqx41/view?usp=sharing",
                      "_blank",
                    ),
                  )
                }
              >
                View Resume
              </CommandItem>
            </Command.Group>
          </Command.List>

          {/* Footer hint */}
          <div className="px-4 py-3 border-t border-neutral-200 dark:border-neutral-800 text-xs text-neutral-500 flex items-center gap-4">
            <span>
              <kbd className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-[10px] font-mono">
                ↑↓
              </kbd>{" "}
              Navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-[10px] font-mono">
                ↵
              </kbd>{" "}
              Select
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded text-[10px] font-mono">
                Esc
              </kbd>{" "}
              Close
            </span>
          </div>
        </Command>
      </div>
    </div>
  );
}

// Command Item component
function CommandItem({
  children,
  icon,
  onSelect,
}: {
  children: React.ReactNode;
  icon: React.ReactNode;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer text-sm text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 data-[selected=true]:bg-neutral-100 dark:data-[selected=true]:bg-neutral-800 transition-colors"
    >
      <span className="text-neutral-500">{icon}</span>
      {children}
    </Command.Item>
  );
}
