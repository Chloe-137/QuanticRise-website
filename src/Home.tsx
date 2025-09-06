@@ .. @@
 // QuanticRise — SPA con hash routing (rutas simples) — enfoque resultados-first
 // Nicho: academias y colegios profesionales. RGPD y CTA reales.

 import React, { useEffect, useMemo, useState } from "react";
+import SobreNosotrosPageNuevo from "./About";
+import FAQPageOrdenado from "./FAQ";
+import ServiciosPageNuevo from "./Servicios";

 // --- Config ---
 const CALENDLY_URL = "https://calendly.com/quanticrise/mini-sesion-de-diagnostico";
@@ .. @@
 const routes = {
   home: "/",
   about: "/sobre-nosotros",
 }
+  servicios: "/servicios",
   chatbots: "/desarrollo-de-chatbots",
   riseleads: "/riseleads",
   riseflow: "/riseflow",
@@ .. @@
   const page = useMemo(()=>{
     switch(path){
     }
   }
   )
-      case routes.about: return <AboutPage/>;
+      case routes.about: return <SobreNosotrosPageNuevo/>;
+      case routes.servicios: return <ServiciosPageNuevo/>;
       case routes.chatbots: return <ChatbotsPage/>;
       case routes.riseleads: return <RiseLeadsPage/>;
       case routes.riseflow: return <RiseFlowPage/>;
       case routes.risesuite: return <RiseSuitePage/>;
       case routes.recursos: return <RecursosPage/>;
       case routes.casos: return <CasosPage/>;
-      case routes.faq: return <FAQPage/>;
+      case routes.faq: return <FAQPageOrdenado/>;
       case routes.contacto: return <ContactoPage/>;
       case routes.home:
       default: return <HomePage/>;
@@ .. @@
         <nav className="hidden md:flex items-center gap-7 text-sm text-white/80">
           <a href={`#${routes.about}`} className="hover:text-white">Sobre nosotros</a>
           <div className="group relative">
-            <a href={`#${routes.riseleads}`} className="hover:text-white">Servicios</a>
+            <a href={`#${routes.servicios}`} className="hover:text-white">Servicios</a>
             <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute top-full mt-2 left-0 bg-[#0f0f0f] border border-white/10 rounded-xl shadow-xl p-3 w-64">
               <a href={`#${routes.riseleads}`} className="block px-3 py-2 rounded-lg hover:bg-white/5">RiseLeads</a>
               <a href={`#${routes.riseflow}`} className="block px-3 py-2 rounded-lg hover:bg-white/5">RiseFlow</a>
@@ .. @@
         <div>
           <p className="text-white/70 mb-2">Servicios</p>
           <ul className="space-y-2 text-white/60">
+            <li><a href={`#${routes.servicios}`}>Todos los servicios</a></li>
             <li><a href={`#${routes.riseleads}`}>RiseLeads</a></li>
             <li><a href={`#${routes.riseflow}`}>RiseFlow</a></li>
             <li><a href={`#${routes.risesuite}`}>RiseSuite</a></li>