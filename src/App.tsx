import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
import usePrefetch from "./hooks/usePrefetch";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ColorbondLandscaping from "./pages/ColorbondFencing";
import TimberLandscaping from "./pages/TimberFencing";
import AluminumLandscaping from "./pages/AluminumFencing";
import GlassLandscaping from "./pages/GlassFencing";
import FeatureLandscaping from "./pages/FeatureFencing";
import ChainLinkLandscaping from "./pages/ChainLinkFencing";
import SecurityLandscaping from "./pages/SecurityFencing";
import SteelLandscaping from "./pages/SteelFencing";
import PoolLandscaping from "./pages/PoolFencing";
import LandscapingRepairs from "./pages/FenceRepairs";
import GateInstallation from "./pages/GateInstallation";
import Sydney from "./pages/Sydney";
import Melbourne from "./pages/Melbourne";
import Brisbane from "./pages/Brisbane";
import Perth from "./pages/Perth";
import Adelaide from "./pages/Adelaide";
import Canberra from "./pages/Canberra";
import Hobart from "./pages/Hobart";
import Darwin from "./pages/Darwin";
import LandscapingGuides from "./pages/FencingGuides";
import Quote from "./pages/Quote";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Sitemap from "./pages/Sitemap";
import SubscriptionConfirmation from "./pages/SubscriptionConfirmation";
import MelbournePakenham from "./pages/MelbournePakenham";
import MelbournePortsea from "./pages/MelbournePortsea";
import MelbourneSorrento from "./pages/MelbourneSorrento";
import MelbourneMountMartha from "./pages/MelbourneMountMartha";
import MelbourneLangwarrin from "./pages/MelbourneLangwarrin";
import MelbourneFrankston from "./pages/MelbourneFrankston";
import MelbourneCarrumDowns from "./pages/MelbourneCarrumDowns";
import MelbourneMornington from "./pages/MelbourneMornington";
import MelbourneRosebud from "./pages/MelbourneRosebud";
import MelbourneMountEliza from "./pages/MelbourneMountEliza";
import MelbourneCranbourne from "./pages/MelbourneCranbourne";
import MelbourneBerwick from "./pages/MelbourneBerwick";
import MelbourneNarreWarren from "./pages/MelbourneNarreWarren";
import MelbourneOfficer from "./pages/MelbourneOfficer";
import MelbourneBotanicRidge from "./pages/MelbourneBotanicRidge";
import MelbourneLynbrook from "./pages/MelbourneLynbrook";
import MelbourneRingwood from "./pages/MelbourneRingwood";
import MelbourneLilydale from "./pages/MelbourneLilydale";
import MelbourneRowville from "./pages/MelbourneRowville";
import MelbourneCroydon from "./pages/MelbourneCroydon";
import MelbourneBoxHill from "./pages/MelbourneBoxHill";
import MelbourneToorak from "./pages/MelbourneToorak";
import MelbourneGlenWaverley from "./pages/MelbourneGlenWaverley";
import MelbourneRichmond from "./pages/MelbourneRichmond";
import MelbourneSouthYarra from "./pages/MelbourneSouthYarra";
import MelbourneDoncaster from "./pages/MelbourneDoncaster";
import MelbourneStKilda from "./pages/MelbourneStKilda";
import MelbourneMountWaverley from "./pages/MelbourneMountWaverley";
import MelbourneCarlton from "./pages/MelbourneCarlton";
import MelbourneDandenong from "./pages/MelbourneDandenong";
// New suburb pages
import MelbourneBayswater from "./pages/MelbourneBayswater";
import MelbourneClayton from "./pages/MelbourneClayton";
import MelbourneWantirna from "./pages/MelbourneWantirna";
import MelbourneFerntreeGully from "./pages/MelbourneFerntreeGully";
import MelbourneSeaford from "./pages/MelbourneSeaford";
import MelbourneClyde from "./pages/MelbourneClyde";
import MelbourneBoronia from "./pages/MelbourneBoronia";
import MelbourneWheelersHill from "./pages/MelbourneWheelersHill";
import MelbourneSpringvale from "./pages/MelbourneSpringvale";
import MelbourneTemplestowe from "./pages/MelbourneTemplestowe";
import MelbourneAshwood from "./pages/MelbourneAshwood";
import MelbourneHamptonPark from "./pages/MelbourneHamptonPark";
import MelbourneMooroolbark from "./pages/MelbourneMooroolbark";
import MelbourneKilsyth from "./pages/MelbourneKilsyth";
import MelbourneBurwood from "./pages/MelbourneBurwood";
import MelbourneEndeavourHills from "./pages/MelbourneEndeavourHills";
import MelbourneKeysborough from "./pages/MelbourneKeysborough";
import MelbourneSomerville from "./pages/MelbourneSomerville";
import MelbourneBlackburn from "./pages/MelbourneBlackburn";
import MelbourneNoblePark from "./pages/MelbourneNoblePark";
import MelbourneBalwyn from "./pages/MelbourneBalwyn";
import MelbourneChirnsidePark from "./pages/MelbourneChirnsidePark";
import MelbourneScoresby from "./pages/MelbourneScoresby";
import MelbourneHallam from "./pages/MelbourneHallam";
import MelbourneMulgrave from "./pages/MelbourneMulgrave";
import MelbourneBeaconsfield from "./pages/MelbourneBeaconsfield";
import MelbourneChelsea from "./pages/MelbourneChelsea";
import MelbourneNunawading from "./pages/MelbourneNunawading";
import MelbourneRye from "./pages/MelbourneRye";
import MelbourneMitcham from "./pages/MelbourneMitcham";
import MelbourneDromana from "./pages/MelbourneDromana";
import MelbourneHastings from "./pages/MelbourneHastings";
import MelbourneHeathmont from "./pages/MelbourneHeathmont";
import MelbourneKnoxfield from "./pages/MelbourneKnoxfield";
import MelbourneSkye from "./pages/MelbourneSkye";
import MelbourneMontrose from "./pages/MelbourneMontrose";
import MelbourneWarranwood from "./pages/MelbourneWarranwood";
import MelbourneTheBasin from "./pages/MelbourneTheBasin";
import MelbourneSafetyBeach from "./pages/MelbourneSafetyBeach";
import MelbourneWongaPark from "./pages/MelbourneWongaPark";
import MelbourneLyndhurst from "./pages/MelbourneLyndhurst";
import MelbourneMentone from "./pages/MelbourneMentone";
import MelbourneSyndal from "./pages/MelbourneSyndal";
import MelbourneNottingHill from "./pages/MelbourneNottingHill";
import MelbourneEumemmerring from "./pages/MelbourneEumemmerring";
import MelbourneDoveton from "./pages/MelbourneDoveton";
import MelbourneColdstream from "./pages/MelbourneColdstream";
import MelbourneJunctionVillage from "./pages/MelbourneJunctionVillage";
import MelbourneSandhurst from "./pages/MelbourneSandhurst";
import MelbourneDingleyVillage from "./pages/MelbourneDingleyVillage";
import ColorbondLandscapingGuide from "./pages/guides/ColorbondFencingGuide";
import LandscapingHeightRegulationsGuide from "./pages/guides/FenceHeightRegulationsGuide";
import ChoosingFenceMaterialGuide from "./pages/guides/ChoosingFenceMaterialGuide";
import PoolLandscapingSafetyGuide from "./pages/guides/PoolFencingSafetyGuide";
import LandscapingOnlineQuoteGuide from "./pages/guides/FenceOnlineQuoteGuide";

const queryClient = new QueryClient();

// Prefetch wrapper component
const PrefetchProvider = ({ children }: { children: React.ReactNode }) => {
  usePrefetch();
  return <>{children}</>;
};

const App = () => {
  useEffect(() => {
    // Prevent image dragging
    const onDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement | null;
      if (target?.tagName === "IMG") e.preventDefault();
    };

    document.addEventListener("dragstart", onDragStart);
    
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed silently
      });
    }
    
    return () => document.removeEventListener("dragstart", onDragStart);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <PrefetchProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/garden-landscaping" element={<ColorbondLandscaping />} />
              <Route path="/turf-installation" element={<TimberLandscaping />} />
              <Route path="/outdoor-renovations" element={<AluminumLandscaping />} />
              <Route path="/landscape-lighting" element={<GlassLandscaping />} />
              <Route path="/garden-maintenance" element={<FeatureLandscaping />} />
              <Route path="/retaining-walls" element={<ChainLinkLandscaping />} />
              <Route path="/hard-landscaping" element={<SecurityLandscaping />} />
              <Route path="/decking-pergolas" element={<SteelLandscaping />} />
              <Route path="/garden-design" element={<PoolLandscaping />} />
              <Route path="/landscape-maintenance" element={<LandscapingRepairs />} />
              <Route path="/outdoor-structures" element={<GateInstallation />} />
              <Route path="/sydney" element={<Sydney />} />
              <Route path="/melbourne" element={<Melbourne />} />
              <Route path="/vic/pakenham-landscaping" element={<MelbournePakenham />} />
              <Route path="/vic/portsea-landscaping" element={<MelbournePortsea />} />
              <Route path="/vic/sorrento-landscaping" element={<MelbourneSorrento />} />
              <Route path="/vic/mount-martha-landscaping" element={<MelbourneMountMartha />} />
              <Route path="/vic/langwarrin-landscaping" element={<MelbourneLangwarrin />} />
              <Route path="/vic/frankston-landscaping" element={<MelbourneFrankston />} />
              <Route path="/vic/carrum-downs-landscaping" element={<MelbourneCarrumDowns />} />
              <Route path="/vic/mornington-landscaping" element={<MelbourneMornington />} />
              <Route path="/vic/rosebud-landscaping" element={<MelbourneRosebud />} />
              <Route path="/vic/mount-eliza-landscaping" element={<MelbourneMountEliza />} />
              <Route path="/vic/cranbourne-landscaping" element={<MelbourneCranbourne />} />
              <Route path="/vic/berwick-landscaping" element={<MelbourneBerwick />} />
              <Route path="/vic/narre-warren-landscaping" element={<MelbourneNarreWarren />} />
              <Route path="/vic/officer-landscaping" element={<MelbourneOfficer />} />
              <Route path="/vic/botanic-ridge-landscaping" element={<MelbourneBotanicRidge />} />
              <Route path="/vic/lynbrook-landscaping" element={<MelbourneLynbrook />} />
              <Route path="/vic/ringwood-landscaping" element={<MelbourneRingwood />} />
              <Route path="/vic/lilydale-landscaping" element={<MelbourneLilydale />} />
              <Route path="/vic/rowville-landscaping" element={<MelbourneRowville />} />
              <Route path="/vic/croydon-landscaping" element={<MelbourneCroydon />} />
              <Route path="/vic/box-hill-landscaping" element={<MelbourneBoxHill />} />
              <Route path="/vic/toorak-landscaping" element={<MelbourneToorak />} />
              <Route path="/vic/glen-waverley-landscaping" element={<MelbourneGlenWaverley />} />
              <Route path="/vic/richmond-landscaping" element={<MelbourneRichmond />} />
              <Route path="/vic/south-yarra-landscaping" element={<MelbourneSouthYarra />} />
              <Route path="/vic/doncaster-landscaping" element={<MelbourneDoncaster />} />
              <Route path="/vic/st-kilda-landscaping" element={<MelbourneStKilda />} />
              <Route path="/vic/mount-waverley-landscaping" element={<MelbourneMountWaverley />} />
              <Route path="/vic/carlton-landscaping" element={<MelbourneCarlton />} />
              <Route path="/vic/dandenong-landscaping" element={<MelbourneDandenong />} />
              {/* New suburb routes */}
              <Route path="/vic/bayswater-landscaping" element={<MelbourneBayswater />} />
              <Route path="/vic/clayton-landscaping" element={<MelbourneClayton />} />
              <Route path="/vic/wantirna-landscaping" element={<MelbourneWantirna />} />
              <Route path="/vic/ferntree-gully-landscaping" element={<MelbourneFerntreeGully />} />
              <Route path="/vic/seaford-landscaping" element={<MelbourneSeaford />} />
              <Route path="/vic/clyde-landscaping" element={<MelbourneClyde />} />
              <Route path="/vic/boronia-landscaping" element={<MelbourneBoronia />} />
              <Route path="/vic/wheelers-hill-landscaping" element={<MelbourneWheelersHill />} />
              <Route path="/vic/springvale-landscaping" element={<MelbourneSpringvale />} />
              <Route path="/vic/templestowe-landscaping" element={<MelbourneTemplestowe />} />
              <Route path="/vic/ashwood-landscaping" element={<MelbourneAshwood />} />
              <Route path="/vic/hampton-park-landscaping" element={<MelbourneHamptonPark />} />
              <Route path="/vic/mooroolbark-landscaping" element={<MelbourneMooroolbark />} />
              <Route path="/vic/kilsyth-landscaping" element={<MelbourneKilsyth />} />
              <Route path="/vic/burwood-landscaping" element={<MelbourneBurwood />} />
              <Route path="/vic/endeavour-hills-landscaping" element={<MelbourneEndeavourHills />} />
              <Route path="/vic/keysborough-landscaping" element={<MelbourneKeysborough />} />
              <Route path="/vic/somerville-landscaping" element={<MelbourneSomerville />} />
              <Route path="/vic/blackburn-landscaping" element={<MelbourneBlackburn />} />
              <Route path="/vic/noble-park-landscaping" element={<MelbourneNoblePark />} />
              <Route path="/vic/balwyn-landscaping" element={<MelbourneBalwyn />} />
              <Route path="/vic/chirnside-park-landscaping" element={<MelbourneChirnsidePark />} />
              <Route path="/vic/scoresby-landscaping" element={<MelbourneScoresby />} />
              <Route path="/vic/hallam-landscaping" element={<MelbourneHallam />} />
              <Route path="/vic/mulgrave-landscaping" element={<MelbourneMulgrave />} />
              <Route path="/vic/beaconsfield-landscaping" element={<MelbourneBeaconsfield />} />
              <Route path="/vic/chelsea-landscaping" element={<MelbourneChelsea />} />
              <Route path="/vic/nunawading-landscaping" element={<MelbourneNunawading />} />
              <Route path="/vic/rye-landscaping" element={<MelbourneRye />} />
              <Route path="/vic/mitcham-landscaping" element={<MelbourneMitcham />} />
              <Route path="/vic/dromana-landscaping" element={<MelbourneDromana />} />
              <Route path="/vic/hastings-landscaping" element={<MelbourneHastings />} />
              <Route path="/vic/heathmont-landscaping" element={<MelbourneHeathmont />} />
              <Route path="/vic/knoxfield-landscaping" element={<MelbourneKnoxfield />} />
              <Route path="/vic/skye-landscaping" element={<MelbourneSkye />} />
              <Route path="/vic/montrose-landscaping" element={<MelbourneMontrose />} />
              <Route path="/vic/warranwood-landscaping" element={<MelbourneWarranwood />} />
              <Route path="/vic/the-basin-landscaping" element={<MelbourneTheBasin />} />
              <Route path="/vic/safety-beach-landscaping" element={<MelbourneSafetyBeach />} />
              <Route path="/vic/wonga-park-landscaping" element={<MelbourneWongaPark />} />
              <Route path="/vic/lyndhurst-landscaping" element={<MelbourneLyndhurst />} />
              <Route path="/vic/mentone-landscaping" element={<MelbourneMentone />} />
              <Route path="/vic/syndal-landscaping" element={<MelbourneSyndal />} />
              <Route path="/vic/notting-hill-landscaping" element={<MelbourneNottingHill />} />
              <Route path="/vic/eumemmerring-landscaping" element={<MelbourneEumemmerring />} />
              <Route path="/vic/doveton-landscaping" element={<MelbourneDoveton />} />
              <Route path="/vic/coldstream-landscaping" element={<MelbourneColdstream />} />
              <Route path="/vic/junction-village-landscaping" element={<MelbourneJunctionVillage />} />
              <Route path="/vic/sandhurst-landscaping" element={<MelbourneSandhurst />} />
              <Route path="/vic/dingley-village-landscaping" element={<MelbourneDingleyVillage />} />
              <Route path="/brisbane" element={<Brisbane />} />
              <Route path="/perth" element={<Perth />} />
              <Route path="/adelaide" element={<Adelaide />} />
              <Route path="/canberra" element={<Canberra />} />
              <Route path="/hobart" element={<Hobart />} />
              <Route path="/darwin" element={<Darwin />} />
              <Route path="/landscaping-guides" element={<LandscapingGuides />} />
              <Route path="/guide/complete-guide-to-landscaping" element={<ColorbondLandscapingGuide />} />
              <Route path="/guide/landscaping-regulations-by-state" element={<LandscapingHeightRegulationsGuide />} />
              <Route path="/guide/choosing-the-right-landscaping-materials" element={<ChoosingFenceMaterialGuide />} />
              <Route path="/guide/garden-design-safety-guide" element={<PoolLandscapingSafetyGuide />} />
              <Route path="/guide/landscaping-online-quote-guide" element={<LandscapingOnlineQuoteGuide />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/subscription-confirmed" element={<SubscriptionConfirmation />} />
              <Route path="/quote" element={<Quote />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PrefetchProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
