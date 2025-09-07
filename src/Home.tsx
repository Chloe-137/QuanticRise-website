// QuanticRise — SPA con hash routing (rutas simples) — enfoque resultados-first
// Nicho: academias y colegios profesionales. RGPD y CTA reales.

import React, { useEffect, useMemo, useState } from "react";
import SobreNosotrosPageNuevo from "./About.tsx";
import FAQPageOrdenado from "./FAQ.tsx";
import ServiciosPageNuevo from "./Servicios.tsx";

// --- Config ---
const CALENDLY_URL = "https://calendly.com/quanticrise/mini-sesion-de-diagnostico";

const routes = {
  home: "/",
  about: "/sobre-nosotros",
  servicios: "/servicios",
  chatbots: "/desarrollo-de-chatbots",
  riseleads: "/riseleads",
  riseflow: "/riseflow",
  risesuite: "/risesuite",
  recursos: "/recursos",
  casos: "/casos-de-exito",
  faq: "/faq",
  contacto: "/contacto"
};

// --- Componentes de página ---
function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ResultadosSection />
      <ServiciosSection />
      <TestimoniosSection />
      <CTASection />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href={`#${routes.home}`} className="text-xl font-bold text-white">QuanticRise</a>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm text-white/80">
            <a href={`#${routes.about}`} className="hover:text-white">Sobre nosotros</a>
            <div className="group relative">
              <a href={`#${routes.servicios}`} className="hover:text-white">Servicios</a>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute top-full mt-2 left-0 bg-[#0f0f0f] border border-white/10 rounded-xl shadow-xl p-3 w-64">
                <a href={`#${routes.riseleads}`} className="block px-3 py-2 rounded-lg hover:bg-white/5">RiseLeads</a>
                <a href={`#${routes.riseflow}`} className="block px-3 py-2 rounded-lg hover:bg-white/5">RiseFlow</a>
                <a href={`#${routes.risesuite}`} className="block px-3 py-2 rounded-lg hover:bg-white/5">RiseSuite</a>
                <a href={`#${routes.chatbots}`} className="block px-3 py-2 rounded-lg hover:bg-white/5">Chatbots</a>
              </div>
            </div>
            <a href={`#${routes.recursos}`} className="hover:text-white">Recursos</a>
            <a href={`#${routes.casos}`} className="hover:text-white">Casos de éxito</a>
            <a href={`#${routes.faq}`} className="hover:text-white">FAQ</a>
            <a href={`#${routes.contacto}`} className="hover:text-white">Contacto</a>
          </div>
          <div className="hidden md:block">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition">
              Consulta gratuita
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Transformamos academias y colegios profesionales con IA
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Automatizamos la captación de estudiantes, optimizamos procesos administrativos y mejoramos la experiencia educativa con soluciones de inteligencia artificial personalizadas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition">
            Consulta gratuita de 30 min
          </a>
          <a href={`#${routes.casos}`} className="border border-white/20 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/5 transition">
            Ver casos de éxito
          </a>
        </div>
      </div>
    </section>
  );
}

function ResultadosSection() {
  const resultados = [
    { numero: "300%", texto: "Aumento promedio en leads cualificados" },
    { numero: "75%", texto: "Reducción en tiempo de gestión administrativa" },
    { numero: "90%", texto: "Mejora en satisfacción del estudiante" },
    { numero: "50%", texto: "Incremento en conversión de matrículas" }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Resultados que hablan por sí solos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {resultados.map((resultado, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{resultado.numero}</div>
              <div className="text-gray-300 text-sm md:text-base">{resultado.texto}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiciosSection() {
  const servicios = [
    {
      titulo: "RiseLeads",
      descripcion: "Sistema de captación automatizada de estudiantes con IA",
      beneficios: ["Leads cualificados 24/7", "Seguimiento automatizado", "ROI medible"]
    },
    {
      titulo: "RiseFlow",
      descripcion: "Automatización de procesos administrativos y académicos",
      beneficios: ["Gestión de matrículas", "Comunicación automatizada", "Reportes inteligentes"]
    },
    {
      titulo: "RiseSuite",
      descripcion: "Plataforma integral de gestión educativa con IA",
      beneficios: ["Dashboard unificado", "Análisis predictivo", "Integración completa"]
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Nuestras soluciones especializadas
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-900/50 to-gray-800/30 p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">{servicio.titulo}</h3>
              <p className="text-gray-300 mb-6">{servicio.descripcion}</p>
              <ul className="space-y-2">
                {servicio.beneficios.map((beneficio, idx) => (
                  <li key={idx} className="text-gray-400 flex items-center">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    {beneficio}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimoniosSection() {
  const testimonios = [
    {
      nombre: "María González",
      cargo: "Directora, Academia de Idiomas Premium",
      testimonio: "Con RiseLeads hemos triplicado nuestras inscripciones. El sistema funciona las 24 horas captando estudiantes interesados."
    },
    {
      nombre: "Carlos Ruiz",
      cargo: "Coordinador, Colegio Profesional de Arquitectos",
      testimonio: "RiseFlow nos ha permitido automatizar completamente la gestión de cursos y certificaciones. Ahorramos 20 horas semanales."
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900/50 to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 p-8 rounded-2xl border border-white/10">
              <p className="text-gray-300 mb-6 italic">"{testimonio.testimonio}"</p>
              <div>
                <div className="font-semibold text-white">{testimonio.nombre}</div>
                <div className="text-gray-400 text-sm">{testimonio.cargo}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          ¿Listo para transformar tu institución educativa?
        </h2>
        <p className="text-xl text-gray-300 mb-8">
          Agenda una consulta gratuita de 30 minutos y descubre cómo podemos ayudarte a crecer con IA.
        </p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition text-lg">
          Agendar consulta gratuita
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900/50 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">QuanticRise</h3>
            <p className="text-white/60">Transformando la educación con inteligencia artificial.</p>
          </div>
          <div>
            <p className="text-white/70 mb-2">Servicios</p>
            <ul className="space-y-2 text-white/60">
              <li><a href={`#${routes.servicios}`}>Todos los servicios</a></li>
              <li><a href={`#${routes.riseleads}`}>RiseLeads</a></li>
              <li><a href={`#${routes.riseflow}`}>RiseFlow</a></li>
              <li><a href={`#${routes.risesuite}`}>RiseSuite</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white/70 mb-2">Empresa</p>
            <ul className="space-y-2 text-white/60">
              <li><a href={`#${routes.about}`}>Sobre nosotros</a></li>
              <li><a href={`#${routes.casos}`}>Casos de éxito</a></li>
              <li><a href={`#${routes.recursos}`}>Recursos</a></li>
            </ul>
          </div>
          <div>
            <p className="text-white/70 mb-2">Soporte</p>
            <ul className="space-y-2 text-white/60">
              <li><a href={`#${routes.faq}`}>FAQ</a></li>
              <li><a href={`#${routes.contacto}`}>Contacto</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 QuanticRise. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

// Páginas placeholder (se reemplazarán con las reales)
function ChatbotsPage() { return <div className="pt-16 p-8"><h1 className="text-3xl font-bold text-white">Desarrollo de Chatbots</h1></div>; }
function RiseLeadsPage() { return <div className="pt-16 p-8"><h1 className="text-3xl font-bold text-white">RiseLeads</h1></div>; }
function RiseFlowPage() { return <div className="pt-16 p-8"><h1 className="text-3xl font-bold text-white">RiseFlow</h1></div>; }
function RiseSuitePage() { return <div className="pt-16 p-8"><h1 className="text-3xl font-bold text-white">RiseSuite</h1></div>; }
function RecursosPage() { return <div className="pt-16 p-8"><h1 className="text-3xl font-bold text-white">Recursos</h1></div>; }
function CasosPage() { return <div className="pt-16 p-8"><h1 className="text-3xl font-bold text-white">Casos de Éxito</h1></div>; }
function ContactoPage() { return <div className="pt-16 p-8"><h1 className="text-3xl font-bold text-white">Contacto</h1></div>; }

// --- Componente principal ---
export default function QuanticRiseSite() {
  const [path, setPath] = useState(window.location.hash.slice(1) || routes.home);

  useEffect(() => {
    const handleHashChange = () => setPath(window.location.hash.slice(1) || routes.home);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const page = useMemo(() => {
    switch(path) {
      case routes.about: return <SobreNosotrosPageNuevo/>;
      case routes.servicios: return <ServiciosPageNuevo/>;
      case routes.chatbots: return <ChatbotsPage/>;
      case routes.riseleads: return <RiseLeadsPage/>;
      case routes.riseflow: return <RiseFlowPage/>;
      case routes.risesuite: return <RiseSuitePage/>;
      case routes.recursos: return <RecursosPage/>;
      case routes.casos: return <CasosPage/>;
      case routes.faq: return <FAQPageOrdenado/>;
      case routes.contacto: return <ContactoPage/>;
      case routes.home:
      default: return <HomePage/>;
    }
  }, [path]);

  return (
    <div className="min-h-screen bg-black text-white">
      {page}
    </div>
  );
}