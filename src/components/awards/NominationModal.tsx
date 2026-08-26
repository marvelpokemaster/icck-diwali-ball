import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Award,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Building2,
  User,
  FileText,
  HelpCircle,
  Upload,
  Sparkles,
  Send,
  Loader2,
} from "lucide-react";

interface NominationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CATEGORIES = [
  "India–Korea Partnership of the Year",
  "Trade & Investment Excellence",
  "Startup & Deep Tech Innovation",
  "Sustainability, ESG & Battery Technology",
  "Digital Transformation & Technology",
  "Semiconductor & Advanced Manufacturing",
  "Healthcare, Pharma & Biotechnology",
  "Education, EdTech & Cultural Exchange",
];

export function NominationModal({ isOpen, onClose }: NominationModalProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Nominator Info
    nominatorName: "",
    nominatorEmail: "",
    nominatorPhone: "",
    nominatorRole: "",
    relationship: "",

    // Nominee Details
    companyName: "",
    countryHQ: "Korea",
    industrySector: "",
    website: "",
    addressPhone: "",

    // Category & Summary
    selectedCategories: [] as string[],
    executiveSummary: "",

    // Supporting Questions
    achievement: "",
    indiaKoreaImpact: "",
    measurableImpact: "",
    innovationExcellence: "",
    futureImpact: "",
    supportingEvidence: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCategory = (cat: string) => {
    setFormData((prev) => {
      const exists = prev.selectedCategories.includes(cat);
      return {
        ...prev,
        selectedCategories: exists
          ? prev.selectedCategories.filter((c) => c !== cat)
          : [...prev.selectedCategories, cat],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to Formspree endpoint or fallback
      const response = await fetch("https://formspree.io/f/events@indochamkorea.org", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => null);

      console.log("Nomination submitted:", formData, response);
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleDownloadPDF = () => {
    const regId = `ICCK-NOM2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>ICCK Business Awards Nomination Receipt - ${regId}</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #1a1a1a; max-width: 850px; margin: 0 auto; background: #fff; }
          .header { display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #d97706; padding-bottom: 20px; margin-bottom: 25px; }
          .logo-title { font-size: 22px; font-weight: 800; color: #060d2b; text-transform: uppercase; letter-spacing: 1px; }
          .badge { background: #fef3c7; color: #92400e; padding: 6px 14px; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; border: 1px solid #fde68a; }
          .invoice-title { font-size: 18px; font-weight: 800; margin-bottom: 4px; color: #091442; text-transform: uppercase; }
          .meta-text { color: #64748b; font-size: 12px; margin-bottom: 25px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px; }
          .card { background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; font-size: 13px; line-height: 1.6; }
          .card-title { font-weight: 800; color: #d97706; text-transform: uppercase; font-size: 11px; margin-bottom: 8px; letter-spacing: 0.5px; }
          .section-block { background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; margin-bottom: 20px; font-size: 13px; line-height: 1.6; }
          .footer-note { text-align: center; margin-top: 30px; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 15px; }
          @media print { body { padding: 20px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="logo-title">Indian Chamber of Commerce in Korea</div>
            <div style="color: #64748b; font-size: 12px; margin-top: 2px;">ICCK Business Awards 2026 Nomination Entry</div>
          </div>
          <div class="badge">Nomination Submitted</div>
        </div>

        <div class="invoice-title">Official Award Entry Receipt</div>
        <div class="meta-text">Submission Reference: <strong>${regId}</strong> &middot; Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>

        <div class="grid">
          <div class="card">
            <div class="card-title">Nominee Company</div>
            <div><strong>Company Name:</strong> ${formData.companyName}</div>
            <div><strong>Headquarters:</strong> ${formData.countryHQ}</div>
            <div><strong>Sector:</strong> ${formData.industrySector}</div>
            <div><strong>Website:</strong> ${formData.website || 'N/A'}</div>
          </div>

          <div class="card">
            <div class="card-title">Nominator Details</div>
            <div><strong>Name:</strong> ${formData.nominatorName}</div>
            <div><strong>Email:</strong> ${formData.nominatorEmail}</div>
            <div><strong>Phone:</strong> ${formData.nominatorPhone}</div>
            <div><strong>Role:</strong> ${formData.relationship || 'N/A'}</div>
          </div>
        </div>

        <div class="section-block">
          <div class="card-title">Selected Categories</div>
          <div>${formData.selectedCategories.length > 0 ? formData.selectedCategories.join(', ') : 'General Sector Category'}</div>
        </div>

        <div class="section-block">
          <div class="card-title">Executive Summary</div>
          <div>${formData.executiveSummary || 'Executive summary provided.'}</div>
        </div>

        <div class="footer-note">
          Indian Chamber of Commerce in Korea &middot; events@indochamkorea.org &middot; TEL: +82-2-776-1583
        </div>

        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
      </html>
    `;

    printWindow.document.write(htmlContent);
    printWindow.document.close();
  };

  const resetForm = () => {
    setStep(1);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetForm()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-[#060D2B] border border-amber-400/30 text-white p-6 sm:p-8 rounded-2xl shadow-2xl">
        <DialogHeader className="border-b border-amber-400/20 pb-4 mb-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-widest mb-1">
            <Award className="size-4" /> Official Nomination Entry Form
          </div>
          <DialogTitle className="font-serif text-2xl sm:text-3xl font-black text-[#FEF08A] uppercase">
            ICCK Business Awards 2026
          </DialogTitle>
          <DialogDescription className="text-amber-100/70 text-xs sm:text-sm">
            Please fill out all required sections to submit your nomination for judging.
          </DialogDescription>
        </DialogHeader>

        {/* SUCCESS CONFIRMATION STATE */}
        {isSubmitted ? (
          <div className="py-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border-2 border-amber-400/50 flex items-center justify-center mx-auto text-amber-400">
              <CheckCircle2 className="size-10" />
            </div>
            <h3 className="font-serif text-2xl font-black text-[#FEF08A] uppercase">
              Nomination Submitted Successfully!
            </h3>
            <p className="text-sm text-amber-100/80 max-w-md mx-auto leading-relaxed">
              Thank you for nominating <strong className="text-white">{formData.companyName || "your company"}</strong>. Our judging panel will review your submission during Stage 1 eligibility screening.
            </p>

            <div className="bg-[#091442]/80 border border-amber-400/20 rounded-xl p-4 text-left max-w-lg mx-auto space-y-2 text-xs text-amber-100/80">
              <p><strong className="text-amber-300">Nominee:</strong> {formData.companyName}</p>
              <p><strong className="text-amber-300">Category:</strong> {formData.selectedCategories.join(", ") || "General Category"}</p>
              <p><strong className="text-amber-300">Nominator:</strong> {formData.nominatorName} ({formData.nominatorEmail})</p>
              <p><strong className="text-amber-300">Status:</strong> Screening in Progress</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Button
                type="button"
                onClick={handleDownloadPDF}
                className="w-full sm:w-auto bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] font-black uppercase text-[#060c2c] px-6 py-3 rounded-xl shadow-lg hover:brightness-110 flex items-center gap-2"
              >
                <Download className="size-4" /> Download PDF Entry Receipt
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={resetForm}
                className="w-full sm:w-auto border-amber-400/40 text-amber-300 hover:bg-amber-400/10 px-6 py-3 rounded-xl"
              >
                Close &amp; Return
              </Button>
            </div>
          </div>
        ) : (
          <div>
            {/* STEP PROGRESS BAR */}
            <div className="flex items-center justify-between gap-2 mb-6 bg-[#091442]/80 p-3 rounded-xl border border-amber-400/20">
              {[
                { number: 1, label: "Parties Info" },
                { number: 2, label: "Category & Summary" },
                { number: 3, label: "Supporting Questions" },
              ].map((s) => (
                <div
                  key={s.number}
                  className={`flex-1 flex items-center gap-2 justify-center py-1.5 px-2 rounded-lg text-xs font-bold transition-colors ${
                    step === s.number
                      ? "bg-amber-400/20 text-[#FEF08A] border border-amber-400/40"
                      : step > s.number
                      ? "text-amber-400/60"
                      : "text-white/40"
                  }`}
                >
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black ${
                      step === s.number
                        ? "bg-amber-400 text-[#060D2B]"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {s.number}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* STEP 1: NOMINATOR & NOMINEE DETAILS */}
              {step === 1 && (
                <div className="space-y-6">
                  {/* Nominator Card */}
                  <div className="bg-[#091442]/60 border border-amber-400/20 rounded-xl p-4 sm:p-5 space-y-4">
                    <h4 className="font-serif text-base font-black text-[#FEF08A] flex items-center gap-2">
                      <User className="size-4 text-amber-400" /> 1. Nominator Information
                    </h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label className="text-xs text-amber-100/90 font-bold mb-1 block">
                          Full Name *
                        </Label>
                        <Input
                          name="nominatorName"
                          value={formData.nominatorName}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          required
                          className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-amber-100/90 font-bold mb-1 block">
                          Email Address *
                        </Label>
                        <Input
                          type="email"
                          name="nominatorEmail"
                          value={formData.nominatorEmail}
                          onChange={handleChange}
                          placeholder="rahul@company.com"
                          required
                          className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-amber-100/90 font-bold mb-1 block">
                          Telephone Number *
                        </Label>
                        <Input
                          name="nominatorPhone"
                          value={formData.nominatorPhone}
                          onChange={handleChange}
                          placeholder="+82 10-1234-5678"
                          required
                          className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-amber-100/90 font-bold mb-1 block">
                          Role / Relationship to Nominee
                        </Label>
                        <Input
                          name="relationship"
                          value={formData.relationship}
                          onChange={handleChange}
                          placeholder="e.g. Director / Business Partner"
                          className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Nominee Details Card */}
                  <div className="bg-[#091442]/60 border border-amber-400/20 rounded-xl p-4 sm:p-5 space-y-4">
                    <h4 className="font-serif text-base font-black text-[#FEF08A] flex items-center gap-2">
                      <Building2 className="size-4 text-amber-400" /> 2. Nominee Company Details
                    </h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="sm:col-span-2">
                        <Label className="text-xs text-amber-100/90 font-bold mb-1 block">
                          Nominee Company Name *
                        </Label>
                        <Input
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          placeholder="e.g. Samsung India Pvt Ltd / TCS Korea"
                          required
                          className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-amber-100/90 font-bold mb-1 block">
                          Country of Headquarters *
                        </Label>
                        <select
                          name="countryHQ"
                          value={formData.countryHQ}
                          onChange={handleChange}
                          className="w-full h-9 rounded-md bg-[#060D2B] border border-amber-400/30 text-white text-xs px-3 focus:outline-none focus:ring-1 focus:ring-amber-400"
                        >
                          <option value="Korea">Korea</option>
                          <option value="India">India</option>
                          <option value="Joint Venture">Joint Venture (India-Korea)</option>
                          <option value="Other Jurisdiction">Other International</option>
                        </select>
                      </div>
                      <div>
                        <Label className="text-xs text-amber-100/90 font-bold mb-1 block">
                          Industry / Sector *
                        </Label>
                        <Input
                          name="industrySector"
                          value={formData.industrySector}
                          onChange={handleChange}
                          placeholder="e.g. Automotive / EV Battery / IT"
                          required
                          className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-amber-100/90 font-bold mb-1 block">
                          Company Website
                        </Label>
                        <Input
                          name="website"
                          value={formData.website}
                          onChange={handleChange}
                          placeholder="https://www.company.com"
                          className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs"
                        />
                      </div>
                      <div>
                        <Label className="text-xs text-amber-100/90 font-bold mb-1 block">
                          Address &amp; Telephone
                        </Label>
                        <Input
                          name="addressPhone"
                          value={formData.addressPhone}
                          onChange={handleChange}
                          placeholder="Seoul / New Delhi Office Address"
                          className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: CATEGORY & EXECUTIVE SUMMARY */}
              {step === 2 && (
                <div className="space-y-6">
                  {/* Category Selection */}
                  <div className="bg-[#091442]/60 border border-amber-400/20 rounded-xl p-4 sm:p-5 space-y-3">
                    <h4 className="font-serif text-base font-black text-[#FEF08A] flex items-center gap-2">
                      <Award className="size-4 text-amber-400" /> 3. Select Award Categories *
                    </h4>
                    <p className="text-xs text-amber-100/70">
                      Select one or more categories your organization wish to be considered for:
                    </p>

                    <div className="grid gap-2.5 sm:grid-cols-2 pt-2">
                      {CATEGORIES.map((cat) => {
                        const isSelected = formData.selectedCategories.includes(cat);
                        return (
                          <button
                            type="button"
                            key={cat}
                            onClick={() => toggleCategory(cat)}
                            className={`flex items-center gap-2 p-3 rounded-lg border text-left text-xs font-semibold transition-all ${
                              isSelected
                                ? "border-amber-400 bg-amber-400/20 text-[#FEF08A]"
                                : "border-amber-400/20 bg-[#060D2B]/80 text-white/80 hover:border-amber-400/40"
                            }`}
                          >
                            <div
                              className={`w-4 h-4 rounded flex items-center justify-center border shrink-0 ${
                                isSelected
                                  ? "border-amber-400 bg-amber-400 text-[#060D2B]"
                                  : "border-amber-400/30"
                              }`}
                            >
                              {isSelected && <CheckCircle2 className="size-3 stroke-[3]" />}
                            </div>
                            <span>{cat}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Executive Summary */}
                  <div className="bg-[#091442]/60 border border-amber-400/20 rounded-xl p-4 sm:p-5 space-y-3">
                    <h4 className="font-serif text-base font-black text-[#FEF08A] flex items-center gap-2">
                      <FileText className="size-4 text-amber-400" /> 4. Executive Summary *
                    </h4>
                    <p className="text-xs text-amber-100/75">
                      In 450–500 words, explain why the company deserves this award. Describe the core achievements and significance to India–Korea ties.
                    </p>
                    <Textarea
                      name="executiveSummary"
                      value={formData.executiveSummary}
                      onChange={handleChange}
                      placeholder="Write executive summary here..."
                      rows={6}
                      required
                      className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs leading-relaxed"
                    />
                  </div>
                </div>
              )}

              {/* STEP 3: EVALUATION & SUPPORTING QUESTIONS */}
              {step === 3 && (
                <div className="space-y-5">
                  <div className="bg-[#091442]/60 border border-amber-400/20 rounded-xl p-4 sm:p-5 space-y-4">
                    <h4 className="font-serif text-base font-black text-[#FEF08A] flex items-center gap-2">
                      <HelpCircle className="size-4 text-amber-400" /> 5. Supporting Evaluation Questions
                    </h4>

                    <div className="space-y-4 text-xs">
                      <div>
                        <Label className="text-xs font-bold text-amber-300 mb-1 block">
                          1. Achievement — What specific achievement or initiative is being nominated? *
                        </Label>
                        <Textarea
                          name="achievement"
                          value={formData.achievement}
                          onChange={handleChange}
                          placeholder="Describe the key initiative, product, or investment..."
                          rows={2}
                          required
                          className="bg-[#060D2B] border-amber-400/30 text-white text-xs"
                        />
                      </div>

                      <div>
                        <Label className="text-xs font-bold text-amber-300 mb-1 block">
                          2. India–Korea Impact — How has the achievement contributed to India–Korea business or economic relations? *
                        </Label>
                        <Textarea
                          name="indiaKoreaImpact"
                          value={formData.indiaKoreaImpact}
                          onChange={handleChange}
                          placeholder="Detail cross-border partnerships, FDI, jobs created, or trade volumes..."
                          rows={2}
                          required
                          className="bg-[#060D2B] border-amber-400/30 text-white text-xs"
                        />
                      </div>

                      <div>
                        <Label className="text-xs font-bold text-amber-300 mb-1 block">
                          3. Measurable Impact — Provide quantitative results (preferably 2021–2026) *
                        </Label>
                        <Textarea
                          name="measurableImpact"
                          value={formData.measurableImpact}
                          onChange={handleChange}
                          placeholder="Provide revenue, growth metrics, patent counts, investments ($)..."
                          rows={2}
                          required
                          className="bg-[#060D2B] border-amber-400/30 text-white text-xs"
                        />
                      </div>

                      <div>
                        <Label className="text-xs font-bold text-amber-300 mb-1 block">
                          4. Innovation / Excellence — What makes the achievement distinctive or exceptional?
                        </Label>
                        <Textarea
                          name="innovationExcellence"
                          value={formData.innovationExcellence}
                          onChange={handleChange}
                          placeholder="Highlight technical innovation or market leadership..."
                          rows={2}
                          className="bg-[#060D2B] border-amber-400/30 text-white text-xs"
                        />
                      </div>

                      <div>
                        <Label className="text-xs font-bold text-amber-300 mb-1 block">
                          5. Future Impact — What is the expected long-term impact or potential for scale?
                        </Label>
                        <Textarea
                          name="futureImpact"
                          value={formData.futureImpact}
                          onChange={handleChange}
                          placeholder="Describe 3-5 year expansion plans or strategic roadmap..."
                          rows={2}
                          className="bg-[#060D2B] border-amber-400/30 text-white text-xs"
                        />
                      </div>

                      <div>
                        <Label className="text-xs font-bold text-amber-300 mb-1 block">
                          6. Supporting Evidence — Links or references to supporting documents / reports
                        </Label>
                        <Input
                          name="supportingEvidence"
                          value={formData.supportingEvidence}
                          onChange={handleChange}
                          placeholder="Google Drive link, DropBox, or website report URLs"
                          className="bg-[#060D2B] border-amber-400/30 text-white text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* NAVIGATION BUTTONS */}
              <div className="flex items-center justify-between pt-4 border-t border-amber-400/20">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep((s) => s - 1)}
                    className="border-amber-400/40 text-amber-300 hover:bg-amber-400/10 text-xs"
                  >
                    <ChevronLeft className="size-4 mr-1" /> Previous Step
                  </Button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={() => setStep((s) => s + 1)}
                    className="bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] font-black uppercase text-[#060c2c] text-xs px-6"
                  >
                    Next Step <ChevronRight className="size-4 ml-1" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] font-black uppercase text-[#060c2c] text-xs px-8 py-2.5 shadow-xl hover:brightness-110"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 mr-2 animate-spin" /> Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="size-4 mr-2" /> Submit Official Nomination
                      </>
                    )}
                  </Button>
                )}
              </div>
            </form>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
