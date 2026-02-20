import { AlertTriangle } from "lucide-react";

export default function PolicyDisclaimer() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="p-2 rounded-full bg-red-500/20 shrink-0">
          <AlertTriangle className="w-5 h-5 text-red-400" />
        </div>
        <div className="text-sm">
          <h4 className="font-semibold text-red-200 mb-1">Strict Usage Policy & Legal Disclaimer</h4>
          <p className="text-red-200/70 leading-relaxed">
            By using this tool, you agree to our Terms of Service. It is strictly prohibited to upload images or videos of 
            <strong className="text-red-300"> minors (under 18) </strong> 
            or to use the likeness of any individual <strong className="text-red-300"> without their explicit consent</strong>. 
           </p>
        </div>
      </div>
    </div>
  );
}
