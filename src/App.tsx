import React, { useState } from 'react';
import { Eye, Coins, Sparkles, ArrowRight, Twitter, Github, Menu, X, TrendingUp, Users, Globe, Send } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      >
        <source src="https://i.imgur.com/SoeSzFu.mp4" type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="glass-effect sticky top-0">
          <div className="container mx-auto">
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-between items-center p-4">
              <div className="flex items-center space-x-2 group cursor-pointer">
                <div className="relative">
                  <Eye className="h-8 w-8 text-purple-500 animate-pulse group-hover:animate-spin transition-all duration-500" />
                  <div className="absolute -inset-1 bg-purple-500 rounded-full blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <span className="text-2xl font-bold glow-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">Eyepocalypse</span>
              </div>
              <div className="flex items-center space-x-8">
                <div className="flex space-x-6">
                  <a href="#" className="nav-link">
                    <TrendingUp className="h-5 w-5" />
                    <span>Charts</span>
                  </a>
                  <a href="#roadmap" className="nav-link">
                    <Users className="h-5 w-5" />
                    <span>Roadmap</span>
                  </a>
                  <a href="#" className="nav-link">
                    <Globe className="h-5 w-5" />
                    <span>Ecosystem</span>
                  </a>
                </div>
                <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full flex items-center space-x-2 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 transform shadow-lg hover:shadow-purple-500/50">
                  <Coins className="h-5 w-5" />
                  <span>Buy $EYELYPSE</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <div className="flex justify-between items-center p-4">
                <div className="flex items-center space-x-2">
                  <Eye className="h-8 w-8 text-purple-500 animate-pulse" />
                  <span className="text-2xl font-bold glow-text">Eyepocalypse</span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white focus:outline-none"
                >
                  {isMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className={`${isMenuOpen ? 'block' : 'hidden'} glass-effect border-t border-white/10`}>
                <div className="flex flex-col space-y-4 p-4">
                  <a href="#" className="nav-link">
                    <TrendingUp className="h-5 w-5" />
                    <span>Charts</span>
                  </a>
                  <a href="#roadmap" className="nav-link">
                    <Users className="h-5 w-5" />
                    <span>Roadmap</span>
                  </a>
                  <a href="#" className="nav-link">
                    <Globe className="h-5 w-5" />
                    <span>Ecosystem</span>
                  </a>
                  <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-pink-700 transition-all">
                    <Coins className="h-5 w-5" />
                    <span>Buy $EYELYPSE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold mb-6 glow-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Welcome to the Eyepocalypse
            </h1>
            <p className="text-xl mb-8 text-gray-200">
              Join the vision of the future with $EYELYPSE, the revolutionary meme coin that's taking
              the Solana blockchain by storm. Don't blink, or you'll miss out!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://pump.fun" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 rounded-full flex items-center justify-center space-x-2 hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105 transform shadow-lg hover:shadow-purple-500/50">
                <span>Buy $EYELYPSE Now</span>
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/watch?v=FG79X7XzWiw" target="_blank" rel="noopener noreferrer" className="glass-effect px-8 py-4 rounded-full hover:bg-white/20 transition-all hover:scale-105 transform">
                See Here
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-effect p-8 rounded-xl hover:scale-105 transition-transform">
              <Coins className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Tokenomics</h3>
              <p className="text-gray-300">
                0% tax, 100% community owned. Fair launch with no pre-sale or team allocation.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-xl hover:scale-105 transition-transform">
              <Sparkles className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Community First</h3>
              <p className="text-gray-300">
                Join our rapidly growing community of visionaries and meme enthusiasts.
              </p>
            </div>
            <div className="glass-effect p-8 rounded-xl hover:scale-105 transition-transform">
              <Eye className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">The Vision</h3>
              <p className="text-gray-300">
                Building the next generation of meme culture on Solana, one blink at a time.
              </p>
            </div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div id="roadmap" className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center glow-text bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Roadmap to Visual Dominance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="glass-effect p-8 rounded-xl relative group hover:scale-105 transition-transform">
              <div className="absolute -inset-1 bg-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-2">Phase 1: Genesis</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Token Launch on Solana</li>
                  <li>• Community Building</li>
                  <li>• Initial Marketing Push</li>
                  <li>• Website Launch</li>
                </ul>
              </div>
            </div>
            <div className="glass-effect p-8 rounded-xl relative group hover:scale-105 transition-transform">
              <div className="absolute -inset-1 bg-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-2">Phase 2: Growth</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• CEX Listings</li>
                  <li>• Partnerships</li>
                  <li>• Community Events</li>
                  <li>• Meme Contest Platform</li>
                </ul>
              </div>
            </div>
            <div className="glass-effect p-8 rounded-xl relative group hover:scale-105 transition-transform">
              <div className="absolute -inset-1 bg-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-2">Phase 3: Evolution</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• NFT Collection</li>
                  <li>• Staking Platform</li>
                  <li>• Governance System</li>
                  <li>• Mobile App Beta</li>
                </ul>
              </div>
            </div>
            <div className="glass-effect p-8 rounded-xl relative group hover:scale-105 transition-transform">
              <div className="absolute -inset-1 bg-purple-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <h3 className="text-xl font-bold mb-2">Phase 4: Ascension</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Metaverse Integration</li>
                  <li>• Cross-chain Expansion</li>
                  <li>• DAO Implementation</li>
                  <li>• Global Marketing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="glass-effect py-8 mt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <Eye className="h-6 w-6 text-purple-500" />
                <span className="text-xl font-bold">Eyepocalypse</span>
              </div>
              <div className="flex space-x-4">
                <a href="https://twitter.com/eyepocalypse" target="_blank" rel="noopener noreferrer" className="social-button">
                  <Twitter className="h-6 w-6" />
                  <span>Twitter</span>
                </a>
                <a href="https://t.me/eyepocalypse" target="_blank" rel="noopener noreferrer" className="social-button">
                  <Send className="h-6 w-6" />
                  <span>Telegram</span>
                </a>
              </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-400">
              © 2024 Eyepocalypse. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
