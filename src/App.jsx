import React, { useState, useEffect } from 'react';
import { 
  Leaf, 
  Database, 
  Cpu, 
  ArrowRight, 
  ArrowUpRight,
  MapPin, 
  Menu, 
  X, 
  Globe2,
  Activity,
  ChevronDown,
  Layers, 
  BarChart3,
  Network,
  Sun,
  ShieldCheck,
  Zap,
  Tractor,
  Truck,
  Sprout,
  PackageCheck,
  BrainCircuit,
  Boxes,
  Users,
  Store,
  Navigation,
  Droplets,
  CloudSun,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
  CloudRain,
  Coins,
  ShieldAlert,
  Factory,
  Building2,
  Mail,
  Phone,
  Briefcase,
  FileText,
  PieChart,
  Building,
  ArrowRightCircle,
  Microscope,
  Code2,
  Wheat,
  TestTube
} from 'lucide-react';

// ---------------------------------------------------------
// EXPLICIT FARMING IMAGE DICTIONARY
// ---------------------------------------------------------
const IMAGES = {
  heroVideo: "https://video.wixstatic.com/video/548938_4afc2eb1d16e4d8499905f0736c56a9b/1080p/mp4/file.mp4",
  // User Provided Specifics
  supplyLeft: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?q=80&w=943&auto=format&fit=crop",
  supplyRight: "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=987&auto=format&fit=crop",
  agriInputs: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=800&q=80",
  fieldIntel: "https://images.unsplash.com/photo-1559863415-1811e58286a1?auto=format&fit=crop&w=800&q=80",
  decisionIntel: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&q=80",
  // Handpicked Farming Photography
  climateStress: "https://images.unsplash.com/photo-1704883038327-e9cd4c164455?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  soilDegradation: "https://images.unsplash.com/photo-1618212624319-3cd9681707e2?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  supplyChainWastage: "https://images.unsplash.com/photo-1590497008432-598f04441de8?q=80&w=2782&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  infrastructureSmartFleet: "https://images.unsplash.com/photo-1713127563314-5163b052cf8b?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  infrastructureLabs: "https://images.unsplash.com/photo-1515150144380-bca9f1650ed9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  infrastructureHubs: "https://images.unsplash.com/photo-1524486361537-8ad15938e1a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGFncmljdWx0dXJlfGVufDB8fDB8fHww",
  inventoryIntel: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  soilAsCapital: "https://images.unsplash.com/photo-1557234195-bd9f290f0e4d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  aboutFounder: "https://static.wixstatic.com/media/548938_e507a6ab6a2446ffb8276bbc5dc7458b~mv2.jpg/v1/fill/w_980,h_1156,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Sheth%20Giga%20Ram%20Chotalia%20.jpg",
  chairmanBackdrop: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=80",
  decisionMakersHero: "https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?auto=format&fit=crop&w=1600",
  investorsHero: "https://images.unsplash.com/photo-1598331668826-20cecb59824f?auto=format&fit=crop&w=1600",
  cropProtectionHero: "https://images.unsplash.com/photo-1559863415-1811e58286a1?auto=format&fit=crop&w=1600",
  droneCrop: "https://images.unsplash.com/photo-1713952152768-5f28b8093166?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  seedScienceHero: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1600",
  seedResearch: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&w=800",
  nutrientMgmtHero: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600",
  invadeAgroHero: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600",
  agroOperations: "https://images.unsplash.com/photo-1600857062241-9c882bbd1a07?auto=format&fit=crop&w=800",
  invadeMillHero: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=1600",
  millOperations: "https://images.unsplash.com/photo-1495107336281-19d4f7a7d0aa?auto=format&fit=crop&w=800",
  invadeCodeHero: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=1600",
  codeTech: "https://images.unsplash.com/photo-1530836369250-ef71a35921bc?auto=format&fit=crop&w=800",
  careersHero: "https://images.unsplash.com/photo-1500937386664-56d1dfef473c?auto=format&fit=crop&w=1600",
  blogsHero: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600",
  blogFeatured: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1000",
  blog1: "https://images.unsplash.com/photo-1600857062241-9c882bbd1a07?auto=format&fit=crop&w=800",
  blog2: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800",
  blog3: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&w=800",
  blog4: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?auto=format&fit=crop&w=800",
  blog5: "https://images.unsplash.com/photo-1559863415-1811e58286a1?auto=format&fit=crop&w=800",
  blog6: "https://images.unsplash.com/photo-1591647620471-cffbb4ec2242?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  contactHero: "https://images.unsplash.com/photo-1586771107595-cb2869c3943b?auto=format&fit=crop&w=1600"
};

// ---------------------------------------------------------
// REUSABLE PAGE HOOK FOR SCROLL ANIMATIONS
// ---------------------------------------------------------
function usePageScroll() {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add('visible');
        }
      });
    };
    handleScroll(); // Trigger on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
}

// ---------------------------------------------------------
// IMAGE FALLBACK HANDLER (Farming specific)
// ---------------------------------------------------------
const handleImageError = (e) => {
  e.target.onerror = null; 
  e.target.src = IMAGES.soilAsCapital; 
};

// ---------------------------------------------------------
// MAIN APP COMPONENT & ROUTER
// ---------------------------------------------------------
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [currentPage]);

  // Global Styles & Scroll Listener
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;1,100&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const style = document.createElement('style');
    style.innerHTML = `
      body { 
        font-family: 'Poppins', sans-serif; 
        font-weight: 300; 
        overflow-x: hidden; 
        width: 100%; 
        -webkit-font-smoothing: antialiased; 
        background-color: #fff; 
      }
      .tracking-ultra { letter-spacing: 0.25em; }
      ::-webkit-scrollbar { width: 6px; }
      ::-webkit-scrollbar-track { background: #fff; }
      ::-webkit-scrollbar-thumb { background: #10b981; border-radius: 9px; }
      html { scroll-behavior: smooth; }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-15px); }
      }
      .animate-float { animation: float 6s ease-in-out infinite; }

      .reveal-on-scroll {
        opacity: 0;
        transform: translateY(40px);
        transition: all 1.2s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .reveal-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
      }
    `;
    document.head.appendChild(style);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
      
      const elements = document.querySelectorAll('.reveal-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.92) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const logoUrl = "https://static.wixstatic.com/media/548938_a34a84020ba14e6c8df35c63dddc2b35~mv2.png";

  const menuItems = [
    { label: 'Home', id: 'home' },
    { 
      label: 'About Us', 
     // id: 'about',
      id: 'decision-makers',
      dropdown: [
      //  { label: 'Our Story', id: 'about' },
        { label: 'Decision Makers', id: 'decision-makers' },
        { label: 'Investor Relations', id: 'investors' }
      ]
    },
    { 
      label: 'Offerings', 
      id: 'offerings-overview', 
      dropdown: [
        { label: 'Crop Protection', id: 'crop-protection' },
        { label: 'Seed Science', id: 'seed-science' },
        { label: 'Nutrient Management', id: 'nutrient-management' }
      ] 
    },
    { 
      label: 'Business Areas', 
      id: 'business-areas-overview', 
      dropdown: [
        { label: 'Invade Agro', id: 'invade-agro' },
        { label: 'Invade Mill', id: 'invade-mill' },
        { label: 'Invade Code', id: 'invade-code' }
      ] 
    },
    { label: 'Careers', id: 'careers' },
    { label: 'Branch Locator', url: 'https://branches.invadeagro.com/' },
    { label: 'Blogs', id: 'blogs' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen w-full selection:bg-emerald-500 selection:text-white relative flex flex-col">
      
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-emerald-950 z-[200] transition-transform duration-700 flex flex-col justify-center items-center gap-6 text-white overflow-y-auto py-20 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button onClick={() => setMobileMenuOpen(false)} className="fixed top-8 right-8 bg-white/10 p-2 rounded-full">
          <X size={24} />
        </button>
        {menuItems.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <button 
              onClick={() => {
                if (item.url) {
                  window.location.href = item.url;
                } else {
                  setCurrentPage(item.id);
                }
              }}
              className={`text-xl font-light tracking-ultra uppercase transition-colors ${currentPage === item.id ? 'text-amber-500' : 'hover:text-emerald-400'}`}
            >
              {item.label}
            </button>
            {item.dropdown && (
              <div className="flex flex-col items-center gap-3 mt-3 opacity-60">
                {item.dropdown.map(sub => (
                  <button 
                    key={sub.label} 
                    onClick={() => {
                      if (sub.url) {
                        window.location.href = sub.url;
                      } else {
                        setCurrentPage(sub.id);
                        setMobileMenuOpen(false);
                      }
                    }} 
                    className="text-[12px] uppercase tracking-widest hover:text-white transition-colors"
                  >
                    {sub.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        isScrolled 
        ? 'bg-gradient-to-r from-emerald-900 to-emerald-700 border border-white/10 shadow-2xl py-3 text-white mx-[2%] mt-4 rounded-[20px]' 
        : 'bg-transparent border-transparent py-6 text-white rounded-none'
      }`}>
        <div className="flex justify-between items-center px-[3%] w-full">
          <button onClick={() => setCurrentPage('home')} className="flex-shrink-0 cursor-pointer">
            <img src={logoUrl} alt="IAG Logo" className="h-[52px] md:h-[72px] w-auto object-contain transition-transform duration-500 hover:scale-105" />
          </button>
          
          {/* Main Menu Links */}
          <div className="hidden xl:flex items-center justify-center gap-8 text-[13px] font-semibold tracking-[0.15em] uppercase w-full px-4">
            {menuItems.map((item) => {
              const isActive = currentPage === item.id || (item.dropdown && item.dropdown.some(sub => sub.id === currentPage));
              return (
                <div key={item.label} className="relative group">
                  <button 
                    onClick={() => {
                      if (item.url) {
                        window.location.href = item.url;
                      } else {
                        setCurrentPage(item.id);
                      }
                    }} 
                    className={`flex items-center gap-2 transition-colors py-4 drop-shadow-sm ${
                      isActive ? (isScrolled ? 'text-amber-400' : 'text-amber-500') : (isScrolled ? 'text-white hover:text-emerald-200' : 'text-white/90 hover:text-white')
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0"></span>}
                    <span>{item.label}</span>
                    {item.dropdown && <ChevronDown size={14} strokeWidth={2.5} className="opacity-80" />}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-56 bg-white border border-black/5 shadow-2xl rounded-2xl opacity-0 translate-y-4 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 overflow-hidden flex flex-col p-2">
                      {item.dropdown.map(subItem => (
                        <button 
                          key={subItem.label} 
                          onClick={() => {
                            if (subItem.url) {
                              window.location.href = subItem.url;
                            } else {
                              setCurrentPage(subItem.id);
                            }
                          }}
                          className="text-left px-5 py-3.5 text-[11px] text-black/70 hover:bg-emerald-50 hover:text-emerald-700 rounded-xl transition-colors tracking-widest uppercase font-bold"
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex-shrink-0 flex items-center gap-4">
            <button onClick={() => setCurrentPage('contact')} className={`hidden lg:block px-6 py-2.5 text-[10px] font-semibold tracking-widest uppercase rounded-full transition-all duration-500 ${
              isScrolled 
              ? 'bg-white text-emerald-800 hover:bg-black hover:text-white shadow-xl' 
              : 'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black'
            }`}>
              Talk To Us
            </button>
            <button className="xl:hidden text-white ml-auto" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content Area - Router Switch */}
      <div className="flex-grow">
        {currentPage === 'home' && <HomeContent setPage={setCurrentPage} />}
        {currentPage === 'about' && <AboutContent setPage={setCurrentPage} />}
        {currentPage === 'decision-makers' && <DecisionMakersContent setPage={setCurrentPage} />}
        {currentPage === 'investors' && <InvestorsContent setPage={setCurrentPage} />}
        {currentPage === 'offerings-overview' && <OfferingsOverviewContent setPage={setCurrentPage} />}
        {currentPage === 'business-areas-overview' && <BusinessAreasOverviewContent setPage={setCurrentPage} />}
        {currentPage === 'crop-protection' && <CropProtectionContent setPage={setCurrentPage} />}
        {currentPage === 'seed-science' && <SeedScienceContent setPage={setCurrentPage} />}
        {currentPage === 'nutrient-management' && <NutrientManagementContent setPage={setCurrentPage} />}
        {currentPage === 'invade-agro' && <InvadeAgroContent setPage={setCurrentPage} />}
        {currentPage === 'invade-mill' && <InvadeMillContent setPage={setCurrentPage} />}
        {currentPage === 'invade-code' && <InvadeCodeContent setPage={setCurrentPage} />}
        {currentPage === 'careers' && <CareersContent setPage={setCurrentPage} />}
        {currentPage === 'blogs' && <BlogsContent setPage={setCurrentPage} />}
        {currentPage === 'contact' && <ContactContent setPage={setCurrentPage} />}
      </div>

      {/* Global Footer */}
      <footer id="footer" className="bg-white pt-24 pb-12 px-[3%] relative z-10 border-t border-black/5 mt-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full">
          <div className="lg:col-span-4">
            <img src="https://static.wixstatic.com/media/548938_cc77931a18df4d6e99df02e5e08b1b5d~mv2.png" alt="IAG Logo" className="h-[99px] w-auto object-contain mb-8" />
            <p className="text-black/40 font-light text-[14px] max-w-sm leading-relaxed mb-8">
              Redefining the agricultural stack through predictive intelligence and vertically integrated logistics.
            </p>
            <div className="flex gap-6">
              {[Linkedin, Instagram, Twitter].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-black/10 text-black/30 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
             <div>
                <h4 className="text-[10px] font-bold tracking-ultra uppercase text-emerald-600 mb-6">Platform</h4>
                <ul className="space-y-4 text-[13px] text-black/60 font-light">
                  <li><button onClick={() => setCurrentPage('offerings-overview')} className="hover:text-black transition-colors">Digital Platform</button></li>
                  <li><button onClick={() => window.location.href = 'https://branches.invadeagro.com/'} className="hover:text-black transition-colors">Branch Locator</button></li>
                  <li><button onClick={() => setCurrentPage('business-areas-overview')} className="hover:text-black transition-colors">The Ecosystem</button></li>
                </ul>
             </div>
             <div>
                <h4 className="text-[10px] font-bold tracking-ultra uppercase text-emerald-600 mb-6">Company</h4>
                <ul className="space-y-4 text-[13px] text-black/60 font-light">
                 <li><button onClick={() => setCurrentPage('about')} className="hover:text-black transition-colors">Our Story</button></li>
                  <li><button onClick={() => setCurrentPage('careers')} className="hover:text-black transition-colors">Careers</button></li>
                  <li><button onClick={() => setCurrentPage('investors')} className="hover:text-black transition-colors">Investors</button></li>
                </ul>
             </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
              <div className="p-6 rounded-[20px] bg-neutral-50 border border-black/5 flex items-start gap-4 hover:bg-white hover:shadow-md transition-all duration-500">
                  <MapPin className="text-emerald-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                      <h4 className="text-[9px] font-bold tracking-ultra uppercase text-black/30 mb-1">South Asia HQ</h4>
                      <p className="text-[12px] font-light leading-relaxed uppercase">Mumbai Corporate Hub,<br />Maharashtra, India</p>
                  </div>
              </div>
              <div className="p-6 rounded-[20px] bg-neutral-50 border border-black/5 flex items-start gap-4 hover:bg-white hover:shadow-md transition-all duration-500">
                  <Globe2 className="text-blue-500 flex-shrink-0 mt-1" size={20} />
                  <div>
                      <h4 className="text-[9px] font-bold tracking-ultra uppercase text-black/30 mb-1">Global Operations</h4>
                      <p className="text-[12px] font-light leading-relaxed uppercase">IAG Grow Center,<br />Kigali, Rwanda</p>
                  </div>
              </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] font-semibold text-black/30 uppercase tracking-[0.3em]">
          <p className="text-center md:text-left leading-relaxed">
            © {new Date().getFullYear()} IAG GLOBAL. ALL RIGHTS RESERVED. 
            <span className="mx-2 hidden md:inline">|</span> 
            <span className="block md:inline mt-2 md:mt-0 font-medium">Built by <a href="https://www.invadecode.ai" target="_blank" rel="noreferrer" className="hover:text-emerald-600 transition-colors underline decoration-emerald-500/30 underline-offset-2">InCode (www.invadecode.ai)</a></span>
          </p>
          <div className="flex gap-12">
            <button className="hover:text-emerald-600 transition-all">Privacy Policy</button>
            <button className="hover:text-emerald-600 transition-all">Terms of Use</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ---------------------------------------------------------
// 1. HOME PAGE
// ---------------------------------------------------------
function HomeContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden z-0 bg-neutral-100 pt-32">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover scale-[1.05]">
          <source src={IMAGES.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60"></div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-[3%] w-full max-w-6xl">
          <div className="flex items-center gap-4 mb-8 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 reveal-on-scroll visible">
            <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_12px_#10b981] animate-pulse"></div>
            <p className="text-[10px] font-semibold tracking-[0.4em] uppercase text-white">Agriculture Empowered by Tech</p>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-light leading-[1] tracking-tighter mb-6 text-white uppercase reveal-on-scroll visible">
            FARMING <br />
            <span className="font-light text-white drop-shadow-2xl">MADE SMART.</span>
          </h1>
          <p className="text-[14px] md:text-[16px] font-light text-white/80 max-w-2xl leading-relaxed mb-10 reveal-on-scroll visible" style={{transitionDelay: '0.2s'}}>
            A global agricultural leader, integrating world-class digital tools into Indian farming cycles to enhance yield, ensure land longevity, and solve real-world grower challenges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full reveal-on-scroll visible" style={{transitionDelay: '0.3s'}}>
            <button onClick={() => setPage('offerings-overview')} className="w-full sm:w-auto bg-emerald-500 text-white px-10 py-4 text-[10px] font-bold tracking-[0.3em] uppercase rounded-full hover:bg-white hover:text-black transition-all shadow-2xl">
              EXPLORE SOLUTIONS
            </button>
            <button onClick={() => window.location.href = 'https://branches.invadeagro.com/'} className="group flex items-center justify-center gap-3 w-full sm:w-auto text-[10px] font-bold tracking-[0.3em] uppercase text-white hover:text-emerald-400 transition-all py-4">
              OUR REACH
              <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
        <ChevronDown size={32} className="absolute bottom-8 text-white animate-bounce opacity-40" />
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.15)]">
        {/* Built for India's Complex Agricultural Supply Chain */}
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative z-10 overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-12 lg:mb-16 gap-8">
               <div className="lg:w-[55%]">
                  <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">The Intelligence of Growth</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-neutral-900 leading-[1.1] uppercase">
                    BUILT FOR INDIA'S COMPLEX AGRICULTURAL SUPPLY CHAIN.
                  </h2>
               </div>
               <div className="lg:w-[45%] flex flex-col justify-end">
                 <p className="text-black/60 font-light text-[14px] md:text-[15px] leading-relaxed mb-6">
                    India's agricultural ecosystem is large, fragmented, and operationally complex. IAG brings structure to this complexity by integrating agri inputs, distribution networks, and field intelligence into a single operating system built for scale.
                 </p>
                 <button onClick={() => setPage('contact')} className="bg-emerald-700 hover:bg-emerald-900 text-white px-8 py-3 rounded-full text-[11px] font-bold tracking-widest uppercase transition-colors self-start shadow-md">
                    Talk To Us
                 </button>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
               <div className="h-[250px] lg:h-[350px] rounded-[24px] overflow-hidden shadow-sm border border-black/5 relative group w-full">
                 <img src={IMAGES.supplyLeft} onError={handleImageError} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Agriculture Field" />
               </div>
               <div className="h-[250px] lg:h-[350px] rounded-[24px] overflow-hidden shadow-sm border border-black/5 relative group w-full">
                 <img src={IMAGES.supplyRight} onError={handleImageError} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Farmer in field" />
               </div>
               <div className="h-[250px] lg:h-[350px] rounded-[24px] shadow-sm border border-black/5 bg-emerald-50 p-8 flex flex-col justify-center relative overflow-hidden group w-full">
                 <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:scale-110 transition-transform duration-700">
                   <Sprout size={160} strokeWidth={1} className="text-emerald-900" />
                 </div>
                 <div className="relative z-10">
                   <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-900 mb-2 tracking-tight">175 YEARS</h3>
                   <p className="text-emerald-800 font-medium text-sm md:text-md mb-4">of operating experience</p>
                   <p className="text-emerald-900/70 text-[13px] md:text-[14px] leading-relaxed max-w-[220px]">
                     Across commodities trade, agri inputs, and distribution networks.
                   </p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* How IAG Works Across India's Agri Value Chain? */}
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-50 relative z-10 overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">End-To-End Integration</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tighter text-neutral-900 leading-[1.1] mb-6 uppercase">
                HOW IAG SHAPES THE AGRI-VALUE CHAIN?
              </h2>
              <p className="text-black/60 font-light text-[14px] md:text-[15px] leading-relaxed max-w-2xl mx-auto">
                IAG connects agri inputs, distribution networks, field intelligence, and decision-making into a single integrated system built to reduce inefficiencies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5 flex flex-col group hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="h-[200px] lg:h-[240px] rounded-2xl overflow-hidden mb-6 relative flex-shrink-0">
                  <img src={IMAGES.agriInputs} onError={handleImageError} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Agri Inputs" />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-medium text-emerald-900 mb-3">Agri Inputs & Distribution</h3>
                  <p className="text-black/60 font-light text-[13px] leading-relaxed">
                    Manage seeds, fertilizers, and crop protection products across dealer networks with full control over inventory, pricing, and supply across regions.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5 flex flex-col group hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="h-[200px] lg:h-[240px] rounded-2xl overflow-hidden mb-6 relative flex-shrink-0">
                  <img src={IMAGES.fieldIntel} onError={handleImageError} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Field Intelligence" />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-medium text-emerald-900 mb-3">Field Intelligence & Operations</h3>
                  <p className="text-black/60 font-light text-[13px] leading-relaxed">
                    Track on-ground performance across farms and regions using real-time data, enabling better crop decisions, advisory, and execution at scale.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-[24px] p-6 shadow-sm border border-black/5 flex flex-col group hover:shadow-xl transition-shadow duration-300 h-full">
                <div className="h-[200px] lg:h-[240px] rounded-2xl overflow-hidden mb-6 relative flex-shrink-0">
                  <img src={IMAGES.decisionIntel} onError={handleImageError} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Decision Intelligence" />
                </div>
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-medium text-emerald-900 mb-3">Decision Intelligence & Forecasting</h3>
                  <p className="text-black/60 font-light text-[13px] leading-relaxed">
                    Predict demand, optimize supply, and identify risks early using integrated data across distribution, field activity, and market signals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Real World Farmer Problems */}
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
              <p className="text-[10px] font-bold tracking-ultra text-red-500 uppercase mb-4">Ground Realities</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-black">
                REAL CHALLENGES.<br />REAL SOLUTIONS.
              </h2>
              <p className="text-black/60 font-light text-[14px] md:text-[15px] leading-relaxed">
                Indian agriculture is facing unprecedented hurdles. We aren't just building software; we are engineering physical and economic interventions for the most critical problems farmers face today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {[
                { icon: CloudRain, color: 'text-blue-500', title: "Unpredictable Monsoons & Climate Stress", solution: "AI-driven localized weather forecasting combined with climate-resilient seed varieties. We help farmers adapt before the storm hits.", img: IMAGES.climateStress },
                { icon: ShieldAlert, color: 'text-amber-500', title: "Soil Degradation & Pest Epidemics", solution: "Mobile soil-testing labs and drone-based multispectral imaging instantly diagnose soil health and target pest outbreaks precisely.", img: IMAGES.soilDegradation },
                { icon: Network, color: 'text-emerald-500', title: "Broken Supply Chains & Wastage", solution: "End-to-end logistics ownership. We buy directly from the farm gate, process it locally, and route it globally—eliminating middlemen delays.", img: IMAGES.supplyChainWastage }
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-[24px] overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                  <div className="h-[200px] lg:h-[240px] overflow-hidden relative flex-shrink-0">
                    <img src={item.img} onError={handleImageError} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className={`w-10 h-10 rounded-full bg-neutral-50 flex items-center justify-center ${item.color} mb-5 border border-black/5 flex-shrink-0`}>
                      <item.icon size={18} />
                    </div>
                    <h3 className="text-lg md:text-xl font-medium tracking-tight mb-3 text-black leading-snug">{item.title}</h3>
                    <p className="text-black/60 font-light text-[13px] md:text-[14px] leading-relaxed mb-6 flex-grow">{item.solution}</p>
                    <button className="mt-auto flex items-center gap-2 text-[9px] font-bold tracking-ultra uppercase text-black hover:text-emerald-600 transition-colors w-fit">
                      Learn How <ChevronRight size={12} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Support System - Infrastructure */}
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-16 gap-8">
              <div className="max-w-2xl">
                <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Integrated Support</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1]">
                  DIGITAL POWER <br />IN THE FIELD.
                </h2>
              </div>
              <p className="text-black/60 font-light text-[14px] md:text-[15px] lg:w-1/3 leading-relaxed lg:mt-10">
                We bridge the gap between data and action by providing physical infrastructure powered by digital logic.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {[
                { img: IMAGES.infrastructureSmartFleet, icon: Tractor, title: 'Smart Fleet', text: 'Real-time machine tracking for precision pathing.' },
                { img: IMAGES.infrastructureLabs, icon: Database, title: 'Real-time Labs', text: 'Instant soil health diagnosis at collection centers.' },
                { img: IMAGES.infrastructureHubs, icon: Store, title: 'Regional Hubs', text: 'Direct access points for tech deployment.' }
              ].map((item, i) => (
                <div key={i} className="group relative rounded-[24px] overflow-hidden border border-black/5 shadow-sm hover:shadow-xl transition-all duration-500 h-[300px] md:h-[400px]">
                  <img src={item.img} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" alt={item.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent group-hover:from-emerald-50 group-hover:via-white/20 transition-colors duration-500"></div>
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    <item.icon className="text-emerald-500 group-hover:scale-110 transition-transform" size={32} strokeWidth={1.5} />
                    <div>
                      <h3 className="text-xl md:text-2xl font-light uppercase tracking-widest mb-3">{item.title}</h3>
                      <p className="text-black/50 font-light text-[13px] md:text-[14px]">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Predictive Alpha */}
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-20 items-center">
              <div className="lg:w-1/2">
                <p className="text-[10px] font-bold tracking-ultra text-blue-600 uppercase mb-6">Inventory Intelligence</p>
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-8 leading-[1.1] text-neutral-900 uppercase">
                  PREDICTIVE <br />ALPHA.
                </h2>
                <p className="text-black/60 font-light text-[14px] md:text-[16px] leading-relaxed mb-12 max-w-lg">
                  Positioning materials before demand triggers. Modeling regional requirements 45 days in advance reduces inventory costs by 22% and secures the supply chain.
                </p>
                <div className="flex flex-col gap-5">
                   <div className="border border-black/5 shadow-sm rounded-2xl p-6 md:p-8 flex items-center gap-5 bg-white">
                      <BrainCircuit className="text-blue-400 flex-shrink-0" size={32} strokeWidth={1.5} />
                      <div>
                        <h4 className="text-[10px] md:text-[11px] font-bold tracking-ultra uppercase mb-1">Regional Demand Modeling</h4>
                        <p className="text-[12px] md:text-[13px] text-black/50 font-light">Proprietary AI with 99.2% accuracy.</p>
                      </div>
                   </div>
                   <div className="border border-black/5 shadow-sm rounded-2xl p-6 md:p-8 flex items-center gap-5 bg-white">
                      <PackageCheck className="text-blue-400 flex-shrink-0" size={32} strokeWidth={1.5} />
                      <div>
                        <h4 className="text-[10px] md:text-[11px] font-bold tracking-ultra uppercase mb-1">Asset Preservation</h4>
                        <p className="text-[12px] md:text-[13px] text-black/50 font-light">Eliminating supply shocks through JIT logistics.</p>
                      </div>
                   </div>
                </div>
              </div>
              <div className="lg:w-1/2 w-full mt-12 lg:mt-0 relative min-h-[350px] md:min-h-[500px]">
                 <div className="bg-neutral-100 rounded-[32px] overflow-hidden shadow-sm absolute inset-0 w-full lg:w-11/12 ml-auto border border-black/5">
                    <img src={IMAGES.inventoryIntel} onError={handleImageError} className="w-full h-full object-cover grayscale-[0.2]" alt="Warehouse" />
                 </div>
                 <div className="absolute -bottom-6 lg:-bottom-12 left-0 md:-left-8 bg-white rounded-2xl shadow-xl p-8 md:p-10 max-w-sm border border-black/5 z-10">
                    <p className="text-black/50 font-light text-[14px] md:text-[15px] italic leading-relaxed">
                      "Integrated logistics prevent waste and ensure consistent ROI across territorial networks."
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Soil As Capital */}
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center relative overflow-hidden bg-emerald-950 py-[10vh] lg:py-[15vh]">
          <img src={IMAGES.soilAsCapital} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay" alt="Soil" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-900/90 to-emerald-800/80"></div>
          
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-3/5">
                <p className="text-[10px] font-bold tracking-ultra text-emerald-400 uppercase mb-6">ESG Assets</p>
                <h2 className="text-5xl md:text-6xl lg:text-[7rem] font-light tracking-tighter uppercase mb-8 leading-[0.9] text-white">
                  SOIL AS <br />CAPITAL.
                </h2>
                <p className="text-emerald-100/60 font-light text-[15px] md:text-[17px] leading-relaxed mb-12 max-w-lg italic">
                  "Soil health is a generational appreciating asset. Our biological restoration programs ensure land longevity and multi-year productivity stability."
                </p>
                <div className="flex flex-wrap items-center gap-8 text-[9px] font-bold tracking-ultra uppercase text-emerald-400">
                   <div className="flex items-center gap-2">
                      <Droplets size={18} strokeWidth={1.5} /> WATER SECURITY
                   </div>
                   <div className="flex items-center gap-2">
                      <CloudSun size={18} strokeWidth={1.5} /> GREEN HUBS
                   </div>
                </div>
              </div>
              <div className="lg:w-2/5 w-full">
                 <div className="bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[32px] p-10 md:p-12 shadow-2xl relative overflow-hidden group transition-colors duration-500">
                    <h3 className="text-2xl md:text-3xl font-light text-emerald-300 mb-6">Risk Management</h3>
                    <p className="text-emerald-100/60 font-light text-[15px] md:text-[16px] leading-relaxed mb-12">
                      Standardizing operational SOPs through deep-science field mapping lowers territory risk for group partners.
                    </p>
                    <button className="flex items-center gap-3 text-[10px] font-bold tracking-ultra uppercase text-emerald-400 hover:text-white transition-colors">
                      GOVERNANCE HUB <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </button>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Empowerment */}
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-emerald-900 text-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
           <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-800 rounded-full blur-[100px] opacity-40 translate-x-1/3 -translate-y-1/3"></div>
           <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10 flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
              <div className="lg:w-1/2">
                <p className="text-[10px] font-bold tracking-ultra text-amber-400 uppercase mb-6">Farmer Economics</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase mb-8 leading-[1.1]">
                  FINANCIAL <br />EMPOWERMENT.
                </h2>
                <p className="text-white/70 font-light text-[15px] md:text-[16px] leading-relaxed mb-12 max-w-lg">
                  Farming is a business. We treat our farmers like entrepreneurs. Through the IAG ecosystem, farmers gain access to fair credit, crop insurance, and transparent market pricing.
                </p>
                <ul className="space-y-6">
                  {['Micro-financing for seed and equipment', 'Instant digital payments post-harvest', 'Weather-indexed crop insurance'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                       <div className="w-6 h-6 rounded-full bg-emerald-700 flex items-center justify-center flex-shrink-0">
                         <ChevronRight size={14} className="text-amber-400" />
                       </div>
                       <span className="text-[15px] md:text-[16px] font-light text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
                 <div className="grid grid-cols-2 gap-6 relative">
                    <div className="aspect-square bg-emerald-950 rounded-[24px] overflow-hidden shadow-lg p-8 md:p-10 border border-white/10 flex flex-col justify-between">
                       <Coins size={40} className="text-amber-400" />
                       <div>
                         <h4 className="text-3xl lg:text-4xl font-light mb-2">₹120Cr</h4>
                         <p className="text-[10px] md:text-[11px] tracking-widest uppercase text-white/50">Credit Disbursed</p>
                       </div>
                    </div>
                    <div className="aspect-square bg-emerald-800 rounded-[24px] overflow-hidden shadow-lg p-8 md:p-10 border border-white/10 flex flex-col justify-between translate-y-8 lg:translate-y-16">
                       <BarChart3 size={40} className="text-emerald-300" />
                       <div>
                         <h4 className="text-3xl lg:text-4xl font-light mb-2">35%</h4>
                         <p className="text-[10px] md:text-[11px] tracking-widest uppercase text-white/50">Avg Income Increase</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* The Closed-Loop Ecosystem */}
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-950 text-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10">
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-400 uppercase mb-6">End-to-End Control</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8">
                COMPLETING THE ECOSYSTEM.
              </h2>
              <p className="text-white/60 font-light text-[15px] md:text-[16px] leading-relaxed">
                By controlling the flow from the very first seed to the final processed product, we create a flawless, highly profitable closed-loop economy.
              </p>
            </div>

            <div className="relative mt-16">
              <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-emerald-500/0 via-emerald-500/30 to-emerald-500/0 z-0"></div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 relative z-10">
                {[
                  { step: '01', title: 'Input Supply', desc: 'Premium seeds & nutrients supplied directly to farmers.', icon: Sprout },
                  { step: '02', title: 'Market Arrival', desc: 'Harvests arrive at local APMCs and FPOs for sale.', icon: Building2 },
                  { step: '03', title: 'Procurement', desc: 'Active procurement directly from APMCs/FPOs.', icon: Truck },
                  { step: '04', title: 'Processing', desc: 'Transforming yield to sell to FMCG titans like ITC.', icon: Factory }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="w-24 h-24 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center mb-8 shadow-xl relative">
                      <div className="absolute -top-2 -right-2 text-[10px] font-bold tracking-widest text-emerald-500 bg-neutral-950 px-2 py-1 rounded-full border border-white/10">
                        {item.step}
                      </div>
                      <item.icon size={32} className="text-white/70" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-medium tracking-tight mb-4">{item.title}</h3>
                    <p className="text-white/50 font-light text-[14px] leading-relaxed px-4">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

// ---------------------------------------------------------
// 2. ABOUT US PAGE
// ---------------------------------------------------------
function AboutContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.aboutHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="About Us" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">OUR STORY</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            THE ROOTS OF A <br />MODERN ECOSYSTEM.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              Transitioning 175 years of traditional commodities experience into the world's most vertically integrated, technology-driven agricultural network.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        {/* What We Stand For */}
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className="lg:w-[55%]">
                <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-6">1851 to Present</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-neutral-900">
                  WHAT WE <br />STAND FOR.
                </h2>
                <div className="space-y-6 text-black/60 font-light text-[15px] md:text-[16px] leading-relaxed">
                  <p>
                    IAG was established in 1851 in Gira, Gujarat. Today, we operate an integrated agri platform across Africa and India—combining regulated distribution, agronomy programs, and field execution.
                  </p>
                  <p>
                    We support farmers and agri-businesses through reliable agri-input supply (seeds, crop nutrition, biostimulants, and crop protection), backed by on-ground advisory and disciplined operating processes—built for scale, traceability, and consistent outcomes.
                  </p>
                  <p className="font-medium text-emerald-900">
                    Operating with quality controls, partner governance, and region-specific agronomy.
                  </p>
                </div>
              </div>
              <div className="lg:w-[45%] w-full">
                 <div className="h-[400px] lg:h-[550px] rounded-[24px] overflow-hidden shadow-2xl relative border border-black/5">
                   <img src={IMAGES.aboutFounder} onError={handleImageError} className="w-full h-full object-cover grayscale-[0.3]" alt="Sheth Giga Ram Chotalia" />
                   <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg">
                     <p className="text-[11px] font-bold tracking-widest text-emerald-900 uppercase">Legacy Founder</p>
                     <p className="text-[13px] text-black/70">Sheth Giga Ram Chotalia</p>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Mission & Global Presence */}
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-950 text-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-900/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10">
            <div className="text-center mb-16 lg:mb-24 max-w-5xl mx-auto">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-400 uppercase mb-6">The Mission</p>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.2] mb-8 text-white">
                Engineering agricultural productivity through <span className="font-semibold text-emerald-400">dependable inputs</span> and <span className="font-semibold text-emerald-400">scalable field execution</span>.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/[0.03] border border-white/10 rounded-[24px] p-8 md:p-10 backdrop-blur-md hover:bg-white/[0.06] transition-colors">
                <Globe2 className="text-blue-400 mb-6" size={32} strokeWidth={1.5} />
                <p className="text-[10px] font-bold tracking-ultra text-white/40 uppercase mb-2">Global HQ</p>
                <h3 className="text-2xl font-light text-white mb-4">Kigali, Rwanda</h3>
                <p className="text-white/60 font-light text-[14px] leading-relaxed">
                  Our gateway to Sub-Saharan Africa. Managing procurement, multi-national licensing, and our African market expansion.
                </p>
              </div>
              <div className="bg-white/[0.03] border border-emerald-500/30 rounded-[24px] p-8 md:p-10 backdrop-blur-md hover:bg-white/[0.06] transition-colors shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                <MapPin className="text-emerald-400 mb-6" size={32} strokeWidth={1.5} />
                <p className="text-[10px] font-bold tracking-ultra text-emerald-400/50 uppercase mb-2">South Asia Hub</p>
                <h3 className="text-2xl font-light text-white mb-4">Mumbai, India</h3>
                <p className="text-white/60 font-light text-[14px] leading-relaxed">
                  The operational core. Orchestrating 180+ branches, massive dealer networks, and real-time field operations across the subcontinent.
                </p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-[24px] p-8 md:p-10 backdrop-blur-md hover:bg-white/[0.06] transition-colors">
                <MapPin className="text-amber-400 mb-6" size={32} strokeWidth={1.5} />
                <p className="text-[10px] font-bold tracking-ultra text-white/40 uppercase mb-2">East Africa Node</p>
                <h3 className="text-2xl font-light text-white mb-4">Dar es Salaam</h3>
                <p className="text-white/60 font-light text-[14px] leading-relaxed">
                  Strategic coastal operations ensuring tight quality controls, robust partner governance, and seamless last-mile delivery.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Sets Us Apart */}
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="mb-12 lg:mb-16">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">The IAG Advantage</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-neutral-900">
                WHAT SETS US APART.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              <div className="lg:col-span-2 bg-emerald-900 text-white rounded-[32px] p-8 md:p-12 shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600 rounded-full blur-[80px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <Cpu size={40} className="text-emerald-400 mb-8 relative z-10" strokeWidth={1.5} />
                <h3 className="text-3xl font-light mb-4 relative z-10">Science-Led Innovation</h3>
                <p className="text-emerald-100/80 font-light text-[15px] max-w-md relative z-10">
                  Deploying proprietary agronomy programs, cutting-edge inputs, and predictive decision-support tools directly to the farmer.
                </p>
              </div>
              <div className="bg-white border border-black/5 rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col justify-between">
                <ShieldCheck size={36} className="text-amber-500 mb-6" strokeWidth={1.5} />
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-neutral-900">Ironclad Trust</h3>
                  <p className="text-black/60 font-light text-[14px]">
                    174 years of operating legacy built entirely on governance, compliance, and long-term grower partnerships.
                  </p>
                </div>
              </div>
              <div className="bg-white border border-black/5 rounded-[32px] p-8 md:p-10 shadow-sm flex flex-col justify-between">
                <Network size={36} className="text-blue-500 mb-6" strokeWidth={1.5} />
                <div>
                  <h3 className="text-2xl font-medium mb-3 text-neutral-900">Massive Scale</h3>
                  <p className="text-black/60 font-light text-[14px]">
                    Multi-country operations powered by vast branch networks and seamless partner-led distribution channels.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-2 bg-neutral-900 text-white rounded-[32px] p-8 md:p-12 shadow-md relative overflow-hidden flex flex-col justify-end">
                <img src={IMAGES.soilAsCapital} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale mix-blend-luminosity" alt="Fields" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent"></div>
                <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between items-end">
                  <div>
                    <Leaf size={40} className="text-emerald-400 mb-6" strokeWidth={1.5} />
                    <h3 className="text-3xl font-light mb-4">Regenerative Sustainability</h3>
                    <p className="text-white/60 font-light text-[15px] max-w-sm">
                      Resource efficiency is non-negotiable. We track outcomes through adoption rates, input-use efficiency, and multi-season yield stability.
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                    <Activity size={24} className="text-white mb-2" />
                    <p className="text-[11px] font-bold tracking-widest uppercase text-emerald-400">Measurable Impact</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 3. DECISION MAKERS PAGE
// ---------------------------------------------------------
function DecisionMakersContent({ setPage }) {
  usePageScroll();

  const boardMembers = [
    { name: "Meenal S Patwardhan", title: "MD & Vice-Chairman, Asia" },
    { name: "Chirag Kotecha", title: "CEO & MD, Invade Mill" },
    { name: "Dr. MY Farooqui", title: "Additional Director" },
    { name: "Vishal Jamdade", title: "Director (Agro Inputs), India" },
    { name: "Bhavin Kapadia", title: "Director - Funds (Global)" },
    { name: "Yagnik Waghela", title: "Director - Investor Relations" },
    { name: "Mahesh Mastan", title: "Director - Public Relations" },
    { name: "Hitesh Waghela", title: "CFO, India" }
  ];

  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/30 mix-blend-overlay z-0"></div>
        <img src={IMAGES.decisionMakersHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Farmers" />
        
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">DECISION MAKERS</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            BOARD <br />MEMBERS.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              The minds steering the global agricultural transition. Our leadership team brings together decades of expertise in agronomy, supply chain logistics, and software engineering.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1200px] mx-auto w-full reveal-on-scroll">
            
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-4 mb-10">
                <span className="w-12 h-[1px] bg-emerald-500"></span>
                <p className="text-[10px] font-bold tracking-[0.2em] text-emerald-700 uppercase">A Message from Leadership</p>
                <span className="w-12 h-[1px] bg-emerald-500"></span>
              </div>

              <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-light tracking-tighter text-neutral-900 leading-[1.15] mb-16 max-w-5xl">
                "Our focus has always been on building <span className="font-medium text-emerald-800">disciplined operating structures</span> that empower farmers and scale across borders."
              </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start pt-12 lg:pt-16 border-t border-black/10">
              <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left w-full">
                 <div className="w-20 h-20 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                   <span className="text-xl font-medium tracking-widest">KC</span>
                 </div>
                 <h3 className="text-2xl lg:text-3xl font-light text-neutral-900 mb-2">Kamlesh M. Chotalia</h3>
                 <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase mb-8">Executive Director & Chairman<br/>Kigali, Rwanda</p>
                 <a href="https://www.linkedin.com/in/kc6666/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-white bg-emerald-900 hover:bg-emerald-800 px-8 py-4 rounded-full transition-all shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:-translate-y-1">
                   <Linkedin size={16} />
                   <span className="text-[11px] font-bold tracking-widest uppercase">Connect</span>
                 </a>
              </div>
              <div className="md:w-2/3 space-y-6 text-black/60 font-light text-[15px] md:text-[17px] leading-relaxed w-full">
                <p className="text-xl text-black/80 font-medium mb-4">
                  Driving regional expansion through structured growth.
                </p>
                <p>
                  Kamlesh M. Chotalia (KC) brings over 28 years of leadership experience across agriculture and food processing. He has played a key role in shaping IAG’s regional expansion and building disciplined operating structures across all our markets.
                </p>
                <p>
                  As Chairman and Executive Director, he oversees strategic growth, high-level partnerships, and rigorous corporate governance. His vision guides IAG’s long-term direction across its global footprint, ensuring that our operations remain both profitable and sustainably impactful.
                </p>
              </div>
            </div>

          </div>
        </section>

        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">The Leadership</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-neutral-900">
                DIRECTORS & CORE TEAM.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member, i) => (
                <div key={i} className="bg-white border border-black/5 rounded-[24px] p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-900 group-hover:text-white transition-colors duration-500">
                      <span className="text-sm font-medium tracking-widest">{member.name.split(' ').map(n => n[0]).join('').substring(0, 2)}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-neutral-900">{member.name}</h3>
                    <p className="text-emerald-700/80 font-medium text-[11px] tracking-widest uppercase leading-relaxed max-w-[240px]">{member.title}</p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                    <a href="#" className="inline-flex items-center gap-2 text-black/30 hover:text-emerald-600 transition-colors">
                      <Linkedin size={18} />
                      <span className="text-[10px] font-bold tracking-widest uppercase">LinkedIn</span>
                    </a>
                    <ArrowUpRight size={18} className="text-black/10 group-hover:text-emerald-500 transition-colors" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 4. INVESTORS PAGE
// ---------------------------------------------------------
function InvestorsContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.investorsHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Corporate" />
        
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">INVESTOR RELATIONS</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            TRANSPARENCY <br />& GOVERNANCE.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              For all investor-related inquiries, compliance details, and access to our corporate regulatory framework.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 border-b border-black/5 pb-12">
               <div className="lg:w-[55%]">
                  <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Get in Touch</p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-neutral-900 leading-[1.1] uppercase">
                    DIRECT CONTACTS.
                  </h2>
               </div>
               <div className="lg:w-[45%] flex flex-col justify-end">
                 <p className="text-black/60 font-light text-[14px] md:text-[15px] leading-relaxed">
                    Our investor relations team is committed to providing timely, transparent communication to our shareholders and institutional partners.
                 </p>
               </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="rounded-[24px] shadow-sm border border-black/5 bg-emerald-50 p-8 md:p-12 flex flex-col relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                   <Briefcase size={120} strokeWidth={1} className="text-emerald-900" />
                 </div>
                 <div className="relative z-10 flex-grow">
                   <h3 className="text-3xl md:text-4xl font-light text-emerald-900 mb-2">Dam Ngoc Tu</h3>
                   <p className="text-emerald-800 font-bold text-[11px] tracking-widest uppercase mb-10">Deputy Director (Investor Relations, Global)</p>
                   <div className="space-y-6">
                     <a href="tel:+919920779198" className="flex items-center gap-4 text-emerald-900/80 hover:text-emerald-600 transition-colors">
                       <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                         <Phone size={16} />
                       </div>
                       <span className="text-[15px] font-medium">+84 0377279475</span>
                     </a>
                     <a href="mailto:yagnik@invadeagro.com" className="flex items-center gap-4 text-emerald-900/80 hover:text-emerald-600 transition-colors">
                       <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                         <Mail size={16} />
                       </div>
                       <div className="flex flex-col">
                         <span className="text-[15px] font-medium text-emerald-900">tu@invadeagro.com</span>
                         <span className="text-[14px] text-emerald-900/70 mt-0.5">ir@invadeagro.com (Alt)</span>
                       </div>
                     </a>
                   </div>
                 </div>
               </div>
               
               <div className="rounded-[24px] shadow-sm border border-black/5 overflow-hidden relative h-full group bg-emerald-950 flex flex-col justify-center p-8 md:p-10">
                  <img src={IMAGES.stockMarket} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" alt="Market Growth" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-950 via-emerald-900/80 to-transparent"></div>
                  <div className="relative z-10 text-white">
                     <svg className="w-10 h-10 text-amber-400 mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
                     <h3 className="text-xl md:text-2xl lg:text-[1.7rem] font-light leading-snug text-white/90">"Our commitment to transparency and disciplined governance ensures long-term, sustainable value for all our stakeholders."</h3>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16 lg:mb-24 max-w-4xl mx-auto">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Regulatory & Compliance</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter text-neutral-900 leading-[1.1] mb-6 uppercase">
                CORPORATE DIRECTORY.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-black/5 flex flex-col hover:shadow-xl transition-shadow duration-300 group">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Building size={24} />
                </div>
                <p className="text-[10px] font-bold tracking-ultra text-black/40 uppercase mb-3">Registered Address</p>
                <h3 className="text-2xl font-medium text-neutral-900 mb-4">Invade Agro Limited</h3>
                <p className="text-black/60 font-light text-[14px] md:text-[15px] leading-relaxed flex-grow">
                  8th Floor, Centrum IT Park, <br />
                  Unit No. 805 & 806, Plot No. D-1, <br />
                  Neheru Nagar, Wagle Industrial Estate, <br />
                  Thane West, Thane, Maharashtra 400604
                </p>
              </div>
              <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-black/5 flex flex-col hover:shadow-xl transition-shadow duration-300 group">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <p className="text-[10px] font-bold tracking-ultra text-black/40 uppercase mb-3">Company Secretary</p>
                <h3 className="text-2xl font-medium text-neutral-900 mb-4">Kaushal Dalal & Associates</h3>
                <p className="text-black/60 font-light text-[14px] md:text-[15px] leading-relaxed mb-6">
                  Practising Company Secretary <br />
                  Flat No. 1, Nishant Building, Poddar Street, <br />
                  Opposite SVC Bank, Santacruz West, Mumbai – 400054
                </p>
                <div className="mt-auto pt-6 border-t border-black/5 space-y-3">
                  <p className="text-[13px] text-black/60"><span className="font-medium text-black">Email:</span> team@cskda.com</p>
                  <p className="text-[13px] text-black/60"><span className="font-medium text-black">Web:</span> www.cskda.com</p>
                </div>
              </div>
              <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-black/5 flex flex-col hover:shadow-xl transition-shadow duration-300 group">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <PieChart size={24} />
                </div>
                <p className="text-[10px] font-bold tracking-ultra text-black/40 uppercase mb-3">Auditor</p>
                <h3 className="text-2xl font-medium text-neutral-900 mb-4">MRB and Associates</h3>
                <p className="text-black/60 font-light text-[14px] md:text-[15px] leading-relaxed mb-6">
                  A-102, 1st Floor Shraddha Heights <br />
                  Telly Gully Cross Road, <br />
                  Andheri (E), Mumbai – 400069
                </p>
                <div className="mt-auto pt-6 border-t border-black/5 space-y-3">
                  <p className="text-[13px] text-black/60"><span className="font-medium text-black">Email:</span> manish.b@mrbassociates.com</p>
                  <p className="text-[13px] text-black/60"><span className="font-medium text-black">Web:</span> www.mrbassociates.com</p>
                </div>
              </div>
              <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-sm border border-black/5 flex flex-col hover:shadow-xl transition-shadow duration-300 group">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Network size={24} />
                </div>
                <p className="text-[10px] font-bold tracking-ultra text-black/40 uppercase mb-3">Registrar & Transfer Agents</p>
                <h3 className="text-2xl font-medium text-neutral-900 mb-4">Purva Sharegistry (India) Pvt. Ltd.</h3>
                <p className="text-black/60 font-light text-[14px] md:text-[15px] leading-relaxed mb-6">
                  Unit No. 9, Ground Floor, Shiv Shakti Ind. Estt, <br />
                  J. R. Boricha Marg, Lower Parel East, <br />
                  Mumbai, Maharashtra – 400011
                </p>
                <div className="mt-auto pt-6 border-t border-black/5 space-y-3">
                  <p className="text-[13px] text-black/60"><span className="font-medium text-black">Phone:</span> 022 4790 0138</p>
                  <p className="text-[13px] text-black/60"><span className="font-medium text-black">Web:</span> www.purvashare.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// OFFERINGS OVERVIEW PAGE
// ---------------------------------------------------------
function OfferingsOverviewContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.agriInputs} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="Offerings Overview" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">OUR PORTFOLIO</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            COMPREHENSIVE <br />SOLUTIONS.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              From climate-resilient seed tech to post-harvest processing, IAG provides an end-to-end suite of services designed to maximize yield and farmer profitability.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Core Offerings</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-neutral-900">
                THE AGRICULTURAL STACK.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {[
                { id: 'crop-protection', title: 'Crop Protection', desc: 'Targeted drone application and eco-friendly biological fungicides.', img: IMAGES.droneCrop, icon: ShieldAlert },
                { id: 'seed-science', title: 'Seed Science', desc: 'High-yield, drought-resistant varieties developed for regional soil profiles.', img: IMAGES.seedResearch, icon: Sprout },
                { id: 'nutrient-management', title: 'Nutrient Management', desc: 'Prescription-based nutrient plans calculated by real-time soil testing.', img: IMAGES.infrastructureLabs, icon: TestTube }
              ].map((item, i) => (
                <div key={i} className="group bg-white rounded-[24px] overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer" onClick={() => setPage(item.id)}>
                  <div className="h-[240px] overflow-hidden relative flex-shrink-0">
                    <img src={item.img} onError={handleImageError} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <item.icon size={20} />
                    </div>
                    <h3 className="text-2xl font-medium mb-3 text-neutral-900 leading-snug">{item.title}</h3>
                    <p className="text-black/60 font-light text-[14px] leading-relaxed mb-8 flex-grow">{item.desc}</p>
                    <button className="mt-auto flex items-center gap-2 text-[10px] font-bold tracking-ultra uppercase text-emerald-700 group-hover:text-emerald-500 transition-colors w-fit">
                      Explore Capability <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// BUSINESS AREAS OVERVIEW PAGE
// ---------------------------------------------------------
function BusinessAreasOverviewContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.fieldIntel} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="Business Areas" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">THE ECOSYSTEM</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            BUSINESS <br />AREAS.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              Three specialized forces operating in complete synergy. Invade Agro, Invade Mill, and Invade Code work together to create a seamless agricultural pipeline.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16 lg:mb-24">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Divisions</p>
              <h2 className="text-4xl md:text-5xl font-light tracking-tighter uppercase leading-[1.1] text-neutral-900">
                THE FORCES OF IAG.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {[
                { id: 'invade-agro', title: 'Invade Agro', desc: 'Our core farming and biologicals enterprise. Operating massive physical infrastructures and smart fleets.', img: IMAGES.agroOperations, icon: Tractor, 
                  colors: { light: 'bg-emerald-100 text-emerald-700', solid: 'group-hover:bg-emerald-600 group-hover:text-white', text: 'text-emerald-700 group-hover:text-emerald-500' }
                },
                { id: 'invade-mill', title: 'Invade Mill', desc: 'The trade and processing force. Procuring directly and supplying volumes to FMCG titans.', img: IMAGES.millOperations, icon: Factory,
                  colors: { light: 'bg-amber-100 text-amber-700', solid: 'group-hover:bg-amber-500 group-hover:text-white', text: 'text-amber-700 group-hover:text-amber-500' }
                },
                { id: 'invade-code', title: 'Invade Code', desc: 'Our internal technology engine developing the proprietary AI that powers the entire ecosystem.', img: IMAGES.codeTech, icon: Code2,
                  colors: { light: 'bg-blue-100 text-blue-700', solid: 'group-hover:bg-blue-600 group-hover:text-white', text: 'text-blue-700 group-hover:text-blue-500' }
                }
              ].map((item, i) => (
                <div key={i} className="group bg-neutral-50 rounded-[24px] overflow-hidden shadow-sm border border-black/5 hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer" onClick={() => setPage(item.id)}>
                  <div className="h-[240px] overflow-hidden relative flex-shrink-0">
                    <img src={item.img} onError={handleImageError} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={item.title} />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className={`w-12 h-12 rounded-full ${item.colors.light} flex items-center justify-center mb-6 ${item.colors.solid} transition-colors`}>
                      <item.icon size={20} />
                    </div>
                    <h3 className="text-2xl font-medium mb-3 text-neutral-900 leading-snug">{item.title}</h3>
                    <p className="text-black/60 font-light text-[14px] leading-relaxed mb-8 flex-grow">{item.desc}</p>
                    <button className={`mt-auto flex items-center gap-2 text-[10px] font-bold tracking-ultra uppercase ${item.colors.text} transition-colors w-fit`}>
                      Explore Division <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5A. OFFERINGS - CROP PROTECTION
// ---------------------------------------------------------
function CropProtectionContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.cropProtectionHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="Crop Protection" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">OUR CAPABILITIES</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            CROP <br />PROTECTION.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              Safeguarding harvests from unpredictable pathogens requires more than just chemistry; it requires intelligence and targeted interventions.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className="lg:w-[50%]">
                <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-6">Precision Defense</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-neutral-900">
                  TARGETED <br />INTERVENTIONS.
                </h2>
                <div className="space-y-6 text-black/60 font-light text-[15px] md:text-[16px] leading-relaxed mb-10">
                  <p>Generic spraying leads to chemical resistance and soil degradation. We utilize a highly targeted approach.</p>
                  <p>Our drone fleets equipped with multispectral imaging identify exact zones of pathogen stress. We then deploy eco-friendly, biological fungicides only exactly where needed.</p>
                </div>
                <ul className="space-y-4 border-t border-black/10 pt-8">
                  <li className="flex items-center gap-4"><ChevronRight size={16} className="text-emerald-500" /><span>Early Pathogen Detection</span></li>
                  <li className="flex items-center gap-4"><ChevronRight size={16} className="text-emerald-500" /><span>Eco-friendly Fungicides</span></li>
                  <li className="flex items-center gap-4"><ChevronRight size={16} className="text-emerald-500" /><span>Targeted Drone Application</span></li>
                </ul>
              </div>
              <div className="lg:w-[50%] w-full h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-2xl relative border border-black/5">
                <img src={IMAGES.droneCrop} onError={handleImageError} className="w-full h-full object-cover" alt="Drone Defense" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5B. OFFERINGS - SEED SCIENCE
// ---------------------------------------------------------
function SeedScienceContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.seedScienceHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="Seed Science" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">OUR CAPABILITIES</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            SEED <br />SCIENCE.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              The foundation of every harvest begins with the seed. We supply our farmers with high-yield, drought-resistant varieties developed for regional soil profiles.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
              <div className="lg:w-[50%]">
                <p className="text-[10px] font-bold tracking-ultra text-amber-600 uppercase mb-6">Genetics & Resilience</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-neutral-900">
                  CLIMATE PROOF <br />GENETICS.
                </h2>
                <div className="space-y-6 text-black/60 font-light text-[15px] md:text-[16px] leading-relaxed mb-10">
                  <p>Through ongoing R&D partnerships, we continuously improve seed genetics to withstand extreme climate volatility—be it intense droughts or unpredictable monsoons.</p>
                  <p>Our focus is on maximizing the output per acre without compromising the natural ecosystem or requiring heavy chemical dependencies.</p>
                </div>
                <div className="grid grid-cols-2 gap-6 border-t border-black/10 pt-8">
                  <div>
                    <Microscope className="text-amber-500 mb-4" size={28} />
                    <h4 className="text-xl text-neutral-900 mb-1">R&D Backed</h4>
                    <p className="text-[12px] text-black/50">Continuous genetic refinement</p>
                  </div>
                  <div>
                    <Sun className="text-amber-500 mb-4" size={28} />
                    <h4 className="text-xl text-neutral-900 mb-1">Climate Proof</h4>
                    <p className="text-[12px] text-black/50">Drought & heat resistant</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-[50%] w-full h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-2xl relative border border-black/5">
                <img src={IMAGES.seedResearch} onError={handleImageError} className="w-full h-full object-cover" alt="Seed Research" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 5C. OFFERINGS - NUTRIENT MANAGEMENT
// ---------------------------------------------------------
function NutrientManagementContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.nutrientMgmtHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" alt="Nutrient Management" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">OUR CAPABILITIES</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            NUTRIENT <br />MANAGEMENT.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              Generic fertilizers degrade soil over time. We provide precise, prescription-based nutrient plans calculated by our real-time soil testing laboratories.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-emerald-950 text-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll relative z-10 text-center">
            <p className="text-[10px] font-bold tracking-ultra text-emerald-400 uppercase mb-6">Soil Health</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8">
              BIOLOGICAL RESTORATION.
            </h2>
            <p className="text-white/60 font-light text-[15px] md:text-[16px] leading-relaxed max-w-2xl mx-auto mb-16">
              Our approach to crop nutrition is entirely biological. We want to feed the plant while simultaneously repairing the soil microbiome, ensuring long-term yield viability.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-[24px] p-8 backdrop-blur-sm flex flex-col items-center">
                <TestTube size={40} className="text-emerald-400 mb-6" />
                <h3 className="text-xl font-medium mb-4">Soil Testing Labs</h3>
                <p className="text-white/50 text-[14px]">Regional hubs equipped to diagnose exact mineral deficiencies instantly.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[24px] p-8 backdrop-blur-sm flex flex-col items-center">
                <Leaf size={40} className="text-emerald-400 mb-6" />
                <h3 className="text-xl font-medium mb-4">Bio-Stimulants</h3>
                <p className="text-white/50 text-[14px]">Organic compounds that naturally boost plant immunity and nutrient uptake.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-[24px] p-8 backdrop-blur-sm flex flex-col items-center">
                <Activity size={40} className="text-emerald-400 mb-6" />
                <h3 className="text-xl font-medium mb-4">Prescription Dosing</h3>
                <p className="text-white/50 text-[14px]">Ensuring farmers use exactly what they need, eliminating chemical waste.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 6A. BUSINESS AREAS - INVADE AGRO
// ---------------------------------------------------------
function InvadeAgroContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.invadeAgroHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Invade Agro" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">DIVISION 01</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            INVADE <br />AGRO.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              Our core farming and biologicals enterprise. Interacting directly with the soil to maximize yield through science.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className="lg:w-[45%] w-full h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-xl border border-black/5">
                <img src={IMAGES.agroOperations} onError={handleImageError} className="w-full h-full object-cover" alt="Invade Agro Operations" />
              </div>
              <div className="lg:w-[55%]">
                <p className="text-[10px] font-bold tracking-widest text-emerald-600 uppercase mb-6">Field Operations</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-neutral-900">
                  PHYSICAL <br/>INFRASTRUCTURE.
                </h2>
                <p className="text-black/60 font-light text-[15px] md:text-[16px] leading-relaxed mb-8">
                  Invade Agro operates the vast physical infrastructure required to modernize farming. From our massive distribution centers to our intelligent tractor fleets, we provide the hardware necessary to execute digital logic.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="p-6 bg-neutral-50 rounded-2xl border border-black/5">
                    <Wheat size={24} className="text-emerald-600 mb-4" />
                    <h4 className="font-medium text-[15px] mb-2">Biologicals</h4>
                    <p className="text-[12px] text-black/50">Inputs & Crop Nutrition</p>
                  </div>
                  <div className="p-6 bg-neutral-50 rounded-2xl border border-black/5">
                    <Tractor size={24} className="text-emerald-600 mb-4" />
                    <h4 className="font-medium text-[15px] mb-2">Fleet Ops</h4>
                    <p className="text-[12px] text-black/50">Smart Machinery</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 6B. BUSINESS AREAS - INVADE MILL
// ---------------------------------------------------------
function InvadeMillContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.invadeMillHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Invade Mill" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">DIVISION 02</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            INVADE <br />MILL.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              The trade and processing force. Completing the closed-loop system by procuring directly and supplying massive volumes to FMCG titans.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
              <div className="lg:w-[45%] w-full h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-xl border border-black/5">
                <img src={IMAGES.millOperations} onError={handleImageError} className="w-full h-full object-cover" alt="Invade Mill Operations" />
              </div>
              <div className="lg:w-[55%]">
                <p className="text-[10px] font-bold tracking-widest text-amber-600 uppercase mb-6">Processing & Trade</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-neutral-900">
                  CLOSING THE <br/>SUPPLY LOOP.
                </h2>
                <p className="text-black/60 font-light text-[15px] md:text-[16px] leading-relaxed mb-8">
                  Invade Mill is where raw yield becomes global capital. We procure directly from APMCs/FPOs, engage in advanced food processing, and manage the complex logistics required to supply companies like ITC and Britannia on time, every time.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm">
                    <Factory size={24} className="text-amber-500 mb-4" />
                    <h4 className="font-medium text-[15px] mb-2">Processing</h4>
                    <p className="text-[12px] text-black/50">Milling & Value Add</p>
                  </div>
                  <div className="p-6 bg-white rounded-2xl border border-black/5 shadow-sm">
                    <Truck size={24} className="text-amber-500 mb-4" />
                    <h4 className="font-medium text-[15px] mb-2">Logistics</h4>
                    <p className="text-[12px] text-black/50">Global Supply Chain</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 6C. BUSINESS AREAS - INVADE CODE
// ---------------------------------------------------------
function InvadeCodeContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.invadeCodeHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Invade Code" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">DIVISION 03</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            INVADE <br />CODE.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              Our internal technology engine. We do not rely on third-party software. Invade Code develops the proprietary AI that powers the entire ecosystem.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
              <div className="lg:w-[45%] w-full h-[400px] lg:h-[600px] rounded-[32px] overflow-hidden shadow-xl border border-black/5 bg-neutral-900">
                <img src={IMAGES.codeTech} onError={handleImageError} className="w-full h-full object-cover opacity-60 mix-blend-luminosity" alt="Invade Code Tech" />
              </div>
              <div className="lg:w-[55%]">
                <p className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-6">Software & Data</p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-8 text-neutral-900">
                  THE DIGITAL <br/>NERVOUS SYSTEM.
                </h2>
                <p className="text-black/60 font-light text-[15px] md:text-[16px] leading-relaxed mb-8">
                  Invade Code builds the predictive models, inventory AI, and IoT architectures that connect every tractor, every lab, and every branch in the IAG network. This internal capability guarantees unparalleled operational security and agility.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="p-6 bg-neutral-50 rounded-2xl border border-black/5">
                    <Code2 size={24} className="text-blue-500 mb-4" />
                    <h4 className="font-medium text-[15px] mb-2">Software</h4>
                    <p className="text-[12px] text-black/50">Custom Infrastructure</p>
                  </div>
                  <div className="p-6 bg-neutral-50 rounded-2xl border border-black/5">
                    <BrainCircuit size={24} className="text-blue-500 mb-4" />
                    <h4 className="font-medium text-[15px] mb-2">AI Analytics</h4>
                    <p className="text-[12px] text-black/50">Predictive Alpha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 7. CAREERS PAGE
// ---------------------------------------------------------
function CareersContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.careersHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Careers" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">JOIN THE FORCES</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            SHAPE THE <br />FUTURE.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              We are seeking driven agronomists, software engineers, and supply chain experts to build the next century of global food security.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-50 relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="text-center mb-16 lg:mb-24 max-w-3xl mx-auto">
              <p className="text-[10px] font-bold tracking-ultra text-emerald-600 uppercase mb-4">Open Roles</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-black">
                OPPORTUNITIES.
              </h2>
              <p className="text-black/60 font-light text-[15px] leading-relaxed">
                Explore openings across our operational hubs in India and Rwanda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Senior Agronomist", dept: "Invade Agro", location: "Maharashtra, IN", type: "Full-Time" },
                { title: "Supply Chain Director", dept: "Invade Mill", location: "Kigali, RW", type: "Full-Time" },
                { title: "AI/ML Engineer (Predictive Models)", dept: "Invade Code", location: "Remote / Mumbai", type: "Full-Time" },
                { title: "Field Operations Manager", dept: "Invade Agro", location: "Gujarat, IN", type: "Full-Time" },
                { title: "Commodities Trader", dept: "Invade Mill", location: "Dar es Salaam", type: "Full-Time" },
                { title: "IoT Hardware Specialist", dept: "Invade Code", location: "Mumbai, IN", type: "Full-Time" }
              ].map((job, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 border border-black/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 group cursor-pointer">
                  <div>
                    <h3 className="text-xl font-medium text-neutral-900 mb-2 group-hover:text-emerald-600 transition-colors">{job.title}</h3>
                    <div className="flex gap-4 text-[12px] text-black/50 font-light uppercase tracking-widest">
                      <span>{job.dept}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <button className="flex-shrink-0 w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 transition-colors">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <button className="bg-neutral-900 text-white px-10 py-4 rounded-full text-[11px] font-bold tracking-widest uppercase hover:bg-emerald-600 transition-colors">
                View All Positions
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 8. BLOGS PAGE
// ---------------------------------------------------------
function BlogsContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.blogsHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Blogs" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">FIELD NOTES & INTEL</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            INSIGHTS.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              Research on climate-resilient crops, supply chain optimization techniques, and the socioeconomic impact of digital farming.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            
            {/* Featured Post */}
            <div className="mb-20 cursor-pointer group">
              <div className="h-[400px] lg:h-[500px] w-full rounded-[32px] overflow-hidden relative shadow-lg mb-8">
                <img src={IMAGES.blogFeatured} onError={handleImageError} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Neural Forecasting" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 text-white">
                  <span className="bg-emerald-500 text-white px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">Featured Insight</span>
                  <h2 className="text-3xl md:text-5xl font-light mb-4 leading-tight">The Impact of Neural Forecasting on Indian Monsoons</h2>
                  <p className="text-white/80 text-[14px] md:text-[15px] max-w-3xl hidden md:block leading-relaxed">
                    How Invade Code's predictive AI reduced input waste by 22% in Maharashtra during the highly volatile 2025 season by pre-positioning critical biologicals 45 days in advance.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Direct to ITC: The Invade Mill Pipeline", desc: "Analyzing the logistics required to secure multi-million dollar procurement contracts with FMCG giants.", img: IMAGES.blog1, tag: "Logistics" },
                { title: "Soil Health as a Generational Asset", desc: "Why we abandoned generic NPK fertilizers for localized, prescription-based biological nutrient management.", img: IMAGES.blog2, tag: "Sustainability" },
                { title: "Re-engineering the Modern Tractor", desc: "IoT integration in our Invade Agro fleet allows for centimeter-perfect pathing and 15% fuel reduction.", img: IMAGES.blog3, tag: "Tech" },
                { title: "Empowering Rwanda's Agri-Sector", desc: "Deploying the IAG closed-loop model from India to Sub-Saharan Africa to establish food security networks.", img: IMAGES.blog4, tag: "Global Expansion" },
                { title: "Drone-Based Multispectral Imaging", desc: "Detecting early-stage pathogen stress before it becomes visible to the human eye, saving entire harvests.", img: IMAGES.blog5, tag: "Crop Protection" },
                { title: "The Farmer as an Entrepreneur", desc: "How fair micro-financing and transparent market pricing is breaking the cycle of predatory lending.", img: IMAGES.blog6, tag: "Economics" }
              ].map((post, i) => (
                <div key={i} className="cursor-pointer group flex flex-col h-full">
                  <div className="h-64 rounded-[24px] overflow-hidden mb-6 shadow-sm border border-black/5 relative flex-shrink-0">
                    <img src={post.img} onError={handleImageError} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={post.title} />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold tracking-widest uppercase text-emerald-900 shadow-sm">
                      {post.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-neutral-900 mb-3 group-hover:text-emerald-600 transition-colors leading-snug">{post.title}</h3>
                  <p className="text-black/60 text-[13px] leading-relaxed mb-6 flex-grow">{post.desc}</p>
                  <div className="flex items-center text-[10px] text-emerald-700 font-bold tracking-widest uppercase mt-auto">
                    Read Article <ArrowRight size={12} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// 9. CONTACT PAGE
// ---------------------------------------------------------
function ContactContent({ setPage }) {
  usePageScroll();
  return (
    <>
      <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
        <div className="absolute inset-0 bg-black/40 mix-blend-overlay z-0"></div>
        <img src={IMAGES.contactHero} onError={handleImageError} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-luminosity" alt="Contact" />
        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
          <p className="text-[10px] font-bold tracking-[0.25em] text-emerald-400 uppercase mb-6">CONNECT</p>
          <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
            START A <br />CONVERSATION.
          </h1>
          <div className="border-l border-emerald-500/50 pl-6 ml-2">
            <p className="text-emerald-100/80 font-light text-[16px] md:text-[18px] leading-relaxed max-w-2xl">
              Whether you are a farming cooperative seeking integration, an investor, or a potential technology partner, our doors are open.
            </p>
          </div>
        </div>
      </section>

      <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-white relative overflow-hidden py-[10vh] lg:py-[15vh]">
          <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
              
              <div className="lg:w-[45%] w-full">
                <h3 className="text-3xl font-light uppercase tracking-widest text-emerald-900 mb-10">Send a Direct Inquiry</h3>
                <form className="space-y-8 w-full">
                   <div>
                     <label className="block text-[11px] font-bold tracking-ultra uppercase text-black/50 mb-3">Full Name</label>
                     <input type="text" className="w-full border-b border-black/20 pb-3 text-[15px] focus:outline-none focus:border-emerald-500 transition-colors" placeholder="John Doe" />
                   </div>
                   <div>
                     <label className="block text-[11px] font-bold tracking-ultra uppercase text-black/50 mb-3">Email Address</label>
                     <input type="email" className="w-full border-b border-black/20 pb-3 text-[15px] focus:outline-none focus:border-emerald-500 transition-colors" placeholder="john@example.com" />
                   </div>
                   <div>
                     <label className="block text-[11px] font-bold tracking-ultra uppercase text-black/50 mb-3">Topic / Subject</label>
                     <input type="text" className="w-full border-b border-black/20 pb-3 text-[15px] focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Investment, Partnership, etc." />
                   </div>
                   <div>
                     <label className="block text-[11px] font-bold tracking-ultra uppercase text-black/50 mb-3">Message</label>
                     <textarea className="w-full border-b border-black/20 pb-3 text-[15px] focus:outline-none focus:border-emerald-500 transition-colors h-32 resize-none" placeholder="Tell us about your needs..."></textarea>
                   </div>
                   <button type="button" className="bg-emerald-900 text-white px-12 py-4 text-[11px] font-bold tracking-ultra uppercase rounded-full hover:bg-emerald-600 transition-colors mt-6 w-full sm:w-auto shadow-xl">
                     Submit Request
                   </button>
                </form>
              </div>

              <div className="lg:w-[55%] w-full bg-neutral-50 rounded-[32px] p-8 md:p-12 border border-black/5">
                 <h3 className="text-3xl font-light uppercase tracking-widest text-emerald-900 mb-10">Global Offices</h3>
                 
                 <div className="space-y-12">
                   <div className="flex items-start gap-6">
                     <div className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center flex-shrink-0 shadow-sm text-emerald-600">
                       <MapPin size={20} />
                     </div>
                     <div>
                       <h4 className="text-xl font-medium mb-2">South Asia Headquarters</h4>
                       <p className="text-black/60 text-[14px] leading-relaxed mb-4">
                         8th Floor, Centrum IT Park, Unit No. 805 & 806,<br/>
                         Plot No. D-1, Neheru Nagar, Wagle Industrial Estate,<br/>
                         Thane West, Thane, Maharashtra 400604
                       </p>
                       <p className="text-[11px] font-bold tracking-widest text-emerald-600 uppercase">Operating Core</p>
                     </div>
                   </div>

                   <div className="w-full h-[1px] bg-black/10"></div>

                   <div className="flex items-start gap-6">
                     <div className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center flex-shrink-0 shadow-sm text-blue-600">
                       <Globe2 size={20} />
                     </div>
                     <div>
                       <h4 className="text-xl font-medium mb-2">African Regional Base</h4>
                       <p className="text-black/60 text-[14px] leading-relaxed mb-4">
                         IAG Grow, KN7 Road,<br/>
                         Quartier de Kiyovu,<br/>
                         Kigali, Rwanda
                       </p>
                       <p className="text-[11px] font-bold tracking-widest text-blue-600 uppercase">Global Expansion</p>
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Embedded Branch Locator Section */}
        <section className="px-[3%] w-full min-h-[100vh] flex flex-col justify-center bg-neutral-950 py-[10vh] lg:py-[15vh]">
           <div className="max-w-[1440px] mx-auto w-full reveal-on-scroll flex flex-col items-center">
              <div className="text-center mb-12">
                 <p className="text-[10px] font-bold tracking-ultra text-emerald-400 uppercase mb-4">Our Network</p>
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tighter uppercase leading-[1.1] mb-6 text-white">
                   BRANCH LOCATOR.
                 </h2>
                 <p className="text-white/60 font-light text-[14px] md:text-[15px] leading-relaxed max-w-2xl mx-auto">
                   Explore our expansive network of 180+ operational hubs physically connecting data to dirt across our key agricultural regions.
                 </p>
              </div>
              <div className="w-full h-[600px] lg:h-[70vh] rounded-[32px] overflow-hidden shadow-2xl border border-white/10 bg-white">
                 <iframe 
                   src="https://branches.invadeagro.com/" 
                   className="w-full h-full border-0" 
                   title="IAG Branch Locator"
                 ></iframe>
              </div>
           </div>
        </section>
      </main>
    </>
  );
}

// ---------------------------------------------------------
// FALLBACK CONTENT
// ---------------------------------------------------------
function GenericPageContent({ pageId, setPage }) {
  usePageScroll();
  return (
    <>
       <section className="sticky top-0 h-screen w-full flex flex-col justify-center bg-[#043b25] text-white relative overflow-hidden pt-32 z-0">
          <div className="absolute inset-0 bg-black/20 mix-blend-overlay z-0"></div>
          <div className="max-w-[1440px] mx-auto w-full relative z-10 px-[3%] reveal-on-scroll">
            <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-normal tracking-tight uppercase leading-[1.05] mb-10 text-white">
              {pageId.replace('-', ' ')}
            </h1>
          </div>
       </section>
       <main className="relative z-10 bg-white rounded-t-[32px] shadow-[0_-20px_50px_rgba(0,0,0,0.1)] min-h-[50vh] flex flex-col justify-center py-[10vh]">
       </main>
    </>
  );
}
