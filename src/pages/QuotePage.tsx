import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { QuoteCalculator } from '../components/QuoteCalculator';
import { Calculator, Receipt, CreditCard, Banknote, ShieldAlert } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export const QuotePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <PageHeader
        currentLabel="Cotizador"
        badge="Cotización Transparente e Inmediata"
        title="Cotizador de Pipas de Agua en Línea"
        subtitle="Calcula al instante el costo de tu servicio según litros, tipo de agua y municipio de entrega, y envía tu orden directa a WhatsApp."
        badgeIcon={<Calculator className="w-3.5 h-3.5 text-[#00AEEF]" />}
      />

      {/* Main Quote Calculator Component */}
      <QuoteCalculator />

      {/* Trust, Payment Methods & Invoicing Details */}
      <section className="py-14 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-100 text-[#0B3D91] flex-shrink-0">
                <Receipt className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Facturación Fiscal SAT (CFDI 4.0)</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Emitimos factura para empresas, constructoras, comercios y particulares con todos los requisitos fiscales.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 flex-shrink-0">
                <Banknote className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Pago Contra Entrega</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Puedes pagar en efectivo al operador una vez que la pipa arribe y verifiques la descarga o mediante transferencia bancaria SPEI.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-100 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-100 text-amber-700 flex-shrink-0">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-base mb-1">Despacho de Emergencia 24 hrs</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Si tu cisterna se quedó en ceros o necesitas suministro urgente, márcalo en el cotizador para priorizar tu salida de patio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
