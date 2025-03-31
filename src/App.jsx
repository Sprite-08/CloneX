"use client"
import { useState } from "react"
import { Bell, Bookmark, Home, Mail, MoreHorizontal, Search, User, Users } from "lucide-react"
import React from "react";
import { Heart, Repeat, MessageCircle } from "lucide-react";
import spiderman from './assets/spiderman.jpg';
import elon from './assets/elon.jpg';
import nasa from './assets/nasa.jpg';
import galaxy from './assets/galaxy.jpg';
import vercel from './assets/vercel.jpg';
import space from './assets/space.jpg';
import github from './assets/github.jpg';
import react from './assets/react.jpg';
import marvel from './assets/marvel.jpg';
import tom from './assets/tom.jpg';
import alice from './assets/alice.jpg';
import sarah from './assets/sarah.jpg';
import jake from './assets/jake.jpg';
import moviemaniac from './assets/moviemaniac.jpg';
import football from './assets/football.jpg';
import sophia from './assets/sophia.jpg';
import gamer from './assets/gamer.jpg';
import lena from './assets/lena.jpg';
import ella from './assets/ella.jpg';
import chef from './assets/chef.jpg';
function App() {
  const [activeTab, setActiveTab] = useState("for-you")

  return (
    <div className="min-h-screen w-full bg-black text-white absolute inset-0">
      {/* Sidebar */}
      <div className="w-[68px] xl:w-64 p-2 xl:p-4 fixed top-0 bottom-0 hidden md:block">
        <div className="h-full flex flex-col">
          <div className="mb-6 p-2">
            <a href="/" className="text-2xl font-bold inline-block">
              𝕏
            </a>
          </div>
          <nav className="space-y-1 flex-1">
            <a href="#" className="flex items-center gap-4 text-xl font-bold hover:bg-gray-900 p-3 rounded-full">
              <Home className="h-6 w-6" />
              <span className="hidden xl:inline">Home</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-xl hover:bg-gray-900 p-3 rounded-full">
              <Search className="h-6 w-6" />
              <span className="hidden xl:inline">Explore</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-xl hover:bg-gray-900 p-3 rounded-full">
              <Bell className="h-6 w-6" />
              <span className="hidden xl:inline">Notifications</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-xl hover:bg-gray-900 p-3 rounded-full">
              <Mail className="h-6 w-6" />
              <span className="hidden xl:inline">Messages</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-xl hover:bg-gray-900 p-3 rounded-full">
              <Bookmark className="h-6 w-6" />
              <span className="hidden xl:inline">Bookmarks</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-xl hover:bg-gray-900 p-3 rounded-full">
              <Users className="h-6 w-6" />
              <span className="hidden xl:inline">Communities</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-xl hover:bg-gray-900 p-3 rounded-full">
              <User className="h-6 w-6" />
              <span className="hidden xl:inline">Profile</span>
            </a>
            <a href="#" className="flex items-center gap-4 text-xl hover:bg-gray-900 p-3 rounded-full">
              <MoreHorizontal className="h-6 w-6" />
              <span className="hidden xl:inline">More</span>
            </a>
          </nav>
          <button className="mt-4 w-full rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 xl:block hidden">
            Post
          </button>
          <button className="mt-4 w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-medium flex items-center justify-center xl:hidden">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <g>
                <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
              </g>
            </svg>
          </button>
          <div className="mt-auto mb-4 flex items-center gap-2 p-3 rounded-full hover:bg-gray-900 cursor-pointer">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src={spiderman} alt="User" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0 hidden xl:block">
              <p className="font-bold truncate">js</p>
              <p className="text-gray-500 truncate">@js_jansonn</p>
            </div>
            <MoreHorizontal className="h-4 w-4 text-gray-500 hidden xl:block" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 border-l border-r border-gray-800 md:ml-[68px] xl:ml-64 md:mr-0 lg:mr-80">
        <div className="p-4 border-b border-gray-800 sticky top-0 bg-black bg-opacity-80 backdrop-blur-sm z-10">
          <h1 className="text-xl font-bold">Home</h1>
          <div className="flex mt-4">
            <button
              onClick={() => setActiveTab("for-you")}
              className={`flex-1 text-center py-4 font-bold ${activeTab === "for-you" ? "border-b-4 border-blue-500" : "text-gray-500"}`}
            >
              For you
            </button>
            <button
              onClick={() => setActiveTab("following")}
              className={`flex-1 text-center py-4 font-bold ${activeTab === "following" ? "border-b-4 border-blue-500" : "text-gray-500"}`}
            >
              Following
            </button>
          </div>
        </div>

        {/* Post composer */}
        <div className="p-4 border-b border-gray-800 flex">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 sm:mr-4 flex-shrink-0">
          <img src={spiderman} alt="User" className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <input
              className="bg-transparent border-none text-lg placeholder:text-gray-500 focus:outline-none p-0 w-full"
              placeholder="What is happening?!"
            />
            <div className="flex justify-between items-center mt-6 flex-wrap gap-2">
              <div className="flex text-blue-500 gap-1 sm:gap-2 overflow-x-auto">
                <button className="p-2 rounded-full hover:bg-blue-500/10">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <g>
                      <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13zM19 15.414l-3-3-5 5-3-3-3 3V18.5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-3.086zM9.75 7C8.784 7 8 7.784 8 8.75s.784 1.75 1.75 1.75 1.75-.784 1.75-1.75S10.716 7 9.75 7z"></path>
                    </g>
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-blue-500/10">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <g>
                      <path d="M3 5.5C3 4.119 4.12 3 5.5 3h13C19.88 3 21 4.119 21 5.5v13c0 1.381-1.12 2.5-2.5 2.5h-13C4.12 21 3 19.881 3 18.5v-13zM5.5 5c-.28 0-.5.224-.5.5v13c0 .276.22.5.5.5h13c.28 0 .5-.224.5-.5v-13c0-.276-.22-.5-.5-.5h-13zM18 10.711V9.25h-3.74v5.5h1.44v-1.719h1.7V11.57h-1.7v-.859H18zM11.79 9.25h1.44v5.5h-1.44v-5.5zm-3.07 1.375c.34 0 .77.172 1.02.43l1.03-.86c-.51-.601-1.28-.945-2.05-.945C7.19 9.25 6 10.453 6 12s1.19 2.75 2.72 2.75c.85 0 1.54-.344 2.05-.945v-2.149H8.38v1.032H9.4v.515c-.17.086-.42.172-.68.172-.76 0-1.36-.602-1.36-1.375 0-.688.6-1.375 1.36-1.375z"></path>
                    </g>
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-blue-500/10">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <g>
                      <path d="M6 5c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zM2 7c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12V6h10v2zM6 15c-1.1 0-2 .895-2 2s.9 2 2 2 2-.895 2-2-.9-2-2-2zm-4 2c0-2.209 1.79-4 4-4s4 1.791 4 4-1.79 4-4 4-4-1.791-4-4zm20 1H12v-2h10v2zM7 7c0 .552-.45 1-1 1s-1-.448-1-1 .45-1 1-1 1 .448 1 1z"></path>
                    </g>
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-blue-500/10">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <g>
                      <path d="M8 9.5C8 8.119 8.672 7 9.5 7S11 8.119 11 9.5 10.328 12 9.5 12 8 10.881 8 9.5zm6.5 2.5c.828 0 1.5-1.119 1.5-2.5S15.328 7 14.5 7 13 8.119 13 9.5s.672 2.5 1.5 2.5zM12 16c-2.224 0-3.021-2.227-3.051-2.316l-1.897.633c.05.15 1.271 3.684 4.949 3.684s4.898-3.533 4.949-3.684l-1.896-.638c-.033.095-.83 2.322-3.053 2.322zm10.25-4.001c0 5.652-4.598 10.25-10.25 10.25S1.75 17.652 1.75 12 6.348 1.75 12 1.75 22.25 6.348 22.25 12zm-2 0c0-4.549-3.701-8.25-8.25-8.25S3.75 7.451 3.75 12s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25z"></path>
                    </g>
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-blue-500/10 hidden sm:block">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <g>
                      <path d="M6 3V2h2v1h6V2h2v1h1.5C18.88 3 20 4.119 20 5.5v2h-2v-2c0-.276-.22-.5-.5-.5H16v1h-2V5H8v1H6V5H4.5c-.28 0-.5.224-.5.5v12c0 .276.22.5.5.5h3v2h-3C3.12 20 2 18.881 2 17.5v-12C2 4.119 3.12 3 4.5 3H6zm9.5 8c-2.49 0-4.5 2.015-4.5 4.5s2.01 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.01-4.5-4.5-4.5zM9 15.5C9 11.91 11.91 9 15.5 9s6.5 2.91 6.5 6.5-2.91 6.5-6.5 6.5S9 19.09 9 15.5zm5.5-2.5h2v2.086l1.71 1.707-1.42 1.414-2.29-2.293V13z"></path>
                    </g>
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-blue-500/10 hidden sm:block">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <g>
                      <path d="M12 7c-1.93 0-3.5 1.57-3.5 3.5S10.07 14 12 14s3.5-1.57 3.5-3.5S13.93 7 12 7zm0 5c-.827 0-1.5-.673-1.5-1.5S11.173 9 12 9s1.5.673 1.5 1.5S12.827 12 12 12zm0-10c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 17.77c-1.665-1.241-6.5-5.196-6.5-9.27C5.5 6.916 8.416 4 12 4s6.5 2.916 6.5 6.5c0 4.073-4.835 8.028-6.5 9.27z"></path>
                    </g>
                  </svg>
                </button>
              </div>
              <button className="rounded-full bg-blue-500 hover:bg-blue-600 px-4 text-white font-medium py-2">
                Post
              </button>
            </div>
          </div>
        </div>

        {/* Posts feed */}
        <div>
          {/* Post 1 */}
          
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={elon} alt="Elon Musk" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">Elon Musk</span>
                  <span className="text-gray-500">@elonmusk</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">2h</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>Exciting updates coming to X! Stay tuned for our latest features.</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">142</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">2.4K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">18.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.2M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Post 2 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={nasa} alt="NASA" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">NASA</span>
                  <span className="text-gray-500">@NASA</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">5h</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>
                    Our Hubble Space Telescope captured this stunning image of a galaxy 50 million light-years away.
                  </p>
                </div>
                <div className="mt-3 rounded-2xl overflow-hidden">
               

                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">3.2K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">12.7K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path
                          d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 
                        1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                        ></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">45.2K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">2.8M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 3 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={marvel} alt="Marvel Studios" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">Marvel Studios</span>
                  <span className="text-gray-500">@marvelstudios</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">8h</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>#AvengersDoomsday. Now in production.</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">856</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">5.1K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">10.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.5M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 4 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={vercel} alt="Vercel" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">Vercel</span>
                  <span className="text-gray-500">@vercel</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">12h</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>Introducing our latest deployment features! Build and ship faster than ever before.</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">856</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">5.1K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">10.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.5M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 5 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={tom} alt="Tom" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">TechiTom</span>
                  <span className="text-gray-500">@tech_tom</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">1m</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>AI is evolving so fast! What do you think will be the next big breakthrough? 🤖💡.</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">856</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">5.1K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">10.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.5M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 6 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={alice} alt="Alice" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">Alice</span>
                  <span className="text-gray-500">@alice_writes</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">1h</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>Just finished writing my first novel! Excited to share it with the world. 📖✨.</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">856</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">5.1K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">10.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.5M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 7 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={sarah} alt="Sarah" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">Sarah</span>
                  <span className="text-gray-500">@sarah_travels</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">10m</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>Just landed in Tokyo! Can't wait to explore this amazing city. 🏯🍣.</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">856</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">5.1K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">10.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.5M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 8 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={jake} alt="Jake" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">Jake</span>
                  <span className="text-gray-500">@jake_fit</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">9h</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>Morning workout done! 💪🏽🔥 Starting the day with energy. #Fitness #Workout.</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">856</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">5.1K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">10.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.5M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 9 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={moviemaniac} alt="MovieManiac" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">MovieManiac</span>
                  <span className="text-gray-500">@cinema_fan</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">36m</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>Already watched 'Dune: Part Two' and WOW... cinematic masterpiece! 🎬🔥.</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">856</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">5.1K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">10.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.5M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 10 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={lena} alt="Lena" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">Lena</span>
                  <span className="text-gray-500">@lena_art</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">1d</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>Finished my latest digital painting! Feeling proud of this one. 🎨✨ #art #digitalart.</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">856</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">5.1K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">10.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.5M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 11 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={football} alt="FootballFrenzy" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">FootballFrenzy</span>
                  <span className="text-gray-500">@sports_corner</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">50m</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>What a game! That last-minute goal was unreal! ⚽🔥 #ChampionsLeague.</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">856</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">5.1K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">10.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.5M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 12 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={sophia} alt="Sophia" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">Sophia</span>
                  <span className="text-gray-500">@sophia_books</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">4m</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>Re-reading 'Pride & Prejudice' and falling in love with it all over again. 📚💖.</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">856</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">5.1K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">10.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.5M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 13 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={gamer} alt="GamerMax" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">GamerMax</span>
                  <span className="text-gray-500">@max_gaming</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">2m</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>Just hit Diamond rank in Valorant! Let’s gooo! 🎮🔥 #gaming".</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">856</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">5.1K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">10.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.5M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 14 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={ella} alt="Ella" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">Ella</span>
                  <span className="text-gray-500">@ella_music</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">30m</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>Listening to Taylor Swift’s new album on repeat. Pure magic. 🎶💖 #Swiftie".</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">856</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">5.1K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">10.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.5M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Post 15 */}
          <div className="p-4 border-b border-gray-800 hover:bg-gray-900/50 cursor-pointer">
            <div className="flex">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden mr-3 flex-shrink-0">
                <img src={chef} alt="ChefMarco" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 flex-wrap">
                  <span className="font-bold">ChefMarco</span>
                  <span className="text-gray-500">@marco_cooks</span>
                  <span className="text-gray-500">·</span>
                  <span className="text-gray-500">7h</span>
                  <MoreHorizontal className="h-4 w-4 text-gray-500 ml-auto" />
                </div>
                <div className="mt-1">
                  <p>Made homemade pasta today! Nothing beats fresh ingredients. 🍝✨ #Foodie".</p>
                </div>
                <div className="mt-3 flex justify-between text-gray-500 max-w-md">
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">856</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-green-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">5.1K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-pink-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">10.3K</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
                      </g>
                    </svg>
                    <span className="text-xs sm:text-sm">1.5M</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-blue-500 hidden sm:flex">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                      <g>
                        <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trending section */}
      <div className="w-80 p-4 hidden lg:block fixed right-0 top-0 bottom-0 overflow-y-auto">
        <div className="pt-4">
          <div className="bg-gray-900 rounded-full mb-4">
            <form className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
              <input
                className="bg-transparent border-none pl-10 py-2 w-full placeholder:text-gray-500 focus:outline-none rounded-full"
                placeholder="Search"
              />
            </form>
          </div>
          <div className="bg-gray-900 rounded-xl mb-4">
            <div className="p-4 border-b border-gray-800">
              <h2 className="text-xl font-bold">Trends for you</h2>
            </div>
            <div className="p-4 border-b border-gray-800 hover:bg-gray-800/50 cursor-pointer">
              <div className="text-xs text-gray-500">Trending in Technology</div>
              <div className="font-bold mt-0.5">#NextJS</div>
              <div className="text-xs text-gray-500 mt-0.5">25.4K posts</div>
            </div>
            <div className="p-4 border-b border-gray-800 hover:bg-gray-800/50 cursor-pointer">
              <div className="text-xs text-gray-500">Trending in Business</div>
              <div className="font-bold mt-0.5">#AI</div>
              <div className="text-xs text-gray-500 mt-0.5">125K posts</div>
            </div>
            <div className="p-4 border-b border-gray-800 hover:bg-gray-800/50 cursor-pointer">
              <div className="text-xs text-gray-500">Trending in Sports</div>
              <div className="font-bold mt-0.5">#WorldCup</div>
              <div className="text-xs text-gray-500 mt-0.5">58.2K posts</div>
            </div>
            <div className="p-4 hover:bg-gray-800/50 cursor-pointer">
              <div className="text-xs text-gray-500">Trending in Entertainment</div>
              <div className="font-bold mt-0.5">#MovieNight</div>
              <div className="text-xs text-gray-500 mt-0.5">12.8K posts</div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-xl">
            <div className="p-4 border-b border-gray-800">
              <h2 className="text-xl font-bold">Who to follow</h2>
            </div>
            <div className="p-4 border-b border-gray-800 hover:bg-gray-800/50 cursor-pointer">
              <div className="flex items-center">
                <div className="w-11 h-11 rounded-full overflow-hidden mr-3">
                  <img src={space} alt="SpaceX" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold">SpaceX</div>
                  <div className="text-gray-500 truncate">@SpaceX</div>
                </div>
                <button className="rounded-full bg-white text-black hover:bg-gray-200 px-4 py-2 font-medium">
                  Follow
                </button>
              </div>
            </div>
            <div className="p-4 border-b border-gray-800 hover:bg-gray-800/50 cursor-pointer">
              <div className="flex items-center">
                <div className="w-11 h-11 rounded-full overflow-hidden mr-3">
                  <img src={github} alt="GitHub" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold">GitHub</div>
                  <div className="text-gray-500 truncate">@github</div>
                </div>
                <button className="rounded-full bg-white text-black hover:bg-gray-200 px-4 py-2 font-medium">
                  Follow
                </button>
              </div>
            </div>
            <div className="p-4 hover:bg-gray-800/50 cursor-pointer">
              <div className="flex items-center">
                <div className="w-11 h-11 rounded-full overflow-hidden mr-3">
                  <img src={react} alt="React" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold">React</div>
                  <div className="text-gray-500 truncate">@reactjs</div>
                </div>
                <button className="rounded-full bg-white text-black hover:bg-gray-200 px-4 py-2 font-medium">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 flex justify-around items-center py-3 px-2 z-50">
        <a href="#" className="flex flex-col items-center text-white">
          <Home className="h-6 w-6" />
        </a>
        <a href="#" className="flex flex-col items-center text-gray-500">
          <Search className="h-6 w-6" />
        </a>
        <a href="#" className="flex flex-col items-center text-gray-500">
          <Bell className="h-6 w-6" />
        </a>
        <a href="#" className="flex flex-col items-center text-gray-500">
          <Mail className="h-6 w-6" />
        </a>
      </div>

      {/* Mobile Floating Post Button */}
      <div className="md:hidden fixed right-4 bottom-20 z-50">
        <button className="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-lg">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
            <g>
              <path d="M23 3c-6.62-.1-10.38 2.421-13.05 6.03C7.29 12.61 6 17.331 6 22h2c0-1.007.07-2.012.19-3H12c4.1 0 7.48-3.082 7.94-7.054C22.79 10.147 23.17 6.359 23 3zm-7 8h-1.5v2H16c.63-.016 1.2-.08 1.72-.188C16.95 15.24 14.68 17 12 17H8.55c.57-2.512 1.57-4.851 3-6.78 2.16-2.912 5.29-4.911 9.45-5.187C20.95 8.079 19.9 11 16 11zM4 9V6H1V4h3V1h2v3h3v2H6v3H4z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default App

