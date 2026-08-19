import React, { useState } from "react";
import { 
  X, 
  Check, 
  Download, 
  FileText, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Calendar, 
  Sparkles,
  Ticket,
  Printer,
  ChevronRight
} from "lucide-react";
import icckGoldLogo from "@/assets/icck-gold-vertical-logo-bright.png";

interface RegistrationCheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTier?: "Title" | "Platinum" | "Gold" | null;
}

export function RegistrationCheckoutModal({
  isOpen,
  onClose,
  defaultTier = null,
}: RegistrationCheckoutModalProps) {
  // Form State
  const [bookingType, setBookingType] = useState<"individual" | "table">("individual");
  const [individualCount, setIndividualCount] = useState<number>(1);
  const [tableCount, setTableCount] = useState<number>(1);
  const [sponsorshipTier, setSponsorshipTier] = useState<"none" | "title" | "platinum" | "gold">(
    defaultTier ? (defaultTier.toLowerCase() as "title" | "platinum" | "gold") : "none"
  );

  const [companyName, setCompanyName] = useState<string>("");
  const [contactName, setContactName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [regDate, setRegDate] = useState<string>(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}${mm}${dd}`;
  });

  const [step, setStep] = useState<"configure" | "preview">("configure");

  if (!isOpen) return null;

  // Prices in KRW
  const INDIVIDUAL_PRICE_KRW = 165000; // ~ $125
  const TABLE_PRICE_KRW = 1500000;     // Standard Table (10 Seats)
  const TITLE_SPONSOR_KRW = 25000000;
  const PLATINUM_SPONSOR_KRW = 10000000;
  const GOLD_SPONSOR_KRW = 5000000;

  // Calculations
  const getSponsorshipCost = () => {
    if (sponsorshipTier === "title") return TITLE_SPONSOR_KRW;
    if (sponsorshipTier === "platinum") return PLATINUM_SPONSOR_KRW;
    if (sponsorshipTier === "gold") return GOLD_SPONSOR_KRW;
    return 0;
  };

  const getTicketsCost = () => {
    if (bookingType === "individual") {
      return individualCount * INDIVIDUAL_PRICE_KRW;
    } else {
      return tableCount * TABLE_PRICE_KRW;
    }
  };

  const totalAmountKRW = getSponsorshipCost() + getTicketsCost();

  // Determine Booking ID & Filename based on exact user specification rules
  const isSponsorOrCombined = sponsorshipTier !== "none";
  const isTableOnly = !isSponsorOrCombined && bookingType === "table";
  const isIndividualOnly = !isSponsorOrCombined && bookingType === "individual";

  // Serial number for today
  const serialNumber = "01";

  let bookingId = "";
  if (isSponsorOrCombined) {
    bookingId = `S${regDate}_${serialNumber}`;
  } else if (isTableOnly) {
    bookingId = `T${regDate}_${serialNumber}`;
  } else {
    bookingId = `IND${regDate}_${serialNumber}`;
  }

  // Exact Filename Generation Rules
  // Individual: Booking-invoice-Company Name- Number of People Registered-YYYYMMDD (Eg. booking-invoice-ANSYS-4PPL-20260819)
  // Table: Booking-invoice-Company Name-Table-YYYYMMDD (Eg. Booking-invoice-Seoul Foreign School_Table_20261124)
  // Combined/Sponsor: Booking-invoice-Company Name-Table/No. of People-YYYYMMDD (Eg. Booking-Invoice-Coupang-Platinum Sponsorship + 3 tables_20251016)
  const sanitizeCompany = companyName.trim() || "Company";

  let invoiceFileName = "";
  if (isIndividualOnly) {
    invoiceFileName = `Booking-invoice-${sanitizeCompany}-${individualCount}PPL-${regDate}`;
  } else if (isTableOnly) {
    const tableLabel = tableCount > 1 ? `${tableCount}Tables` : "Table";
    invoiceFileName = `Booking-invoice-${sanitizeCompany}_${tableLabel}_${regDate}`;
  } else {
    // Combined or Sponsor only
    let detailsLabel = "";
    const tierName = sponsorshipTier.charAt(0).toUpperCase() + sponsorshipTier.slice(1) + " Sponsorship";
    if (bookingType === "table" && tableCount > 0) {
      detailsLabel = `${tierName} + ${tableCount} table${tableCount > 1 ? "s" : ""}`;
    } else if (bookingType === "individual" && individualCount > 0) {
      detailsLabel = `${tierName} + ${individualCount} PPL`;
    } else {
      detailsLabel = tierName;
    }
    invoiceFileName = `Booking-Invoice-${sanitizeCompany}-${detailsLabel}_${regDate}`;
  }

  const handleDownloadInvoice = () => {
    const invoiceHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8"/>
        <title>${invoiceFileName}</title>
        <style>
          body { font-family: 'Helvetica Neue', Arial, sans-serif; color: #1a1a1a; padding: 40px; max-width: 800px; margin: 0 auto; line-height: 1.5; }
          .header { display: flex; justify-content: space-between; align-items: center; border-b: 3px solid #d97706; padding-bottom: 20px; margin-bottom: 30px; }
          .brand { font-size: 22px; font-weight: 900; color: #060d2b; text-transform: uppercase; letter-spacing: 1px; }
          .subbrand { font-size: 13px; color: #d97706; font-weight: 700; margin-top: 4px; }
          .invoice-title { font-size: 28px; font-weight: 900; color: #060d2b; text-align: right; text-transform: uppercase; }
          .meta-table { width: 100%; margin-bottom: 30px; border-collapse: collapse; }
          .meta-table td { padding: 8px 0; vertical-align: top; }
          .box { background: #faf9f6; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px; margin-bottom: 24px; }
          .items-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          .items-table th { background: #060d2b; color: #fef08a; padding: 12px; text-align: left; font-size: 12px; text-transform: uppercase; }
          .items-table td { padding: 14px 12px; border-bottom: 1px solid #e5e7eb; font-size: 14px; }
          .total-row td { font-weight: bold; font-size: 16px; background: #fffbebf5; border-top: 2px solid #d97706; }
          .bank-info { background: #060d2b; color: #ffffff; border-radius: 8px; padding: 20px; margin-top: 30px; }
          .bank-info h4 { color: #fef08a; margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; }
          .footer { text-align: center; font-size: 11px; color: #6b7280; margin-top: 40px; border-t: 1px solid #e5e7eb; padding-top: 20px; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="brand">INDIAN CHAMBER OF COMMERCE IN KOREA</div>
            <div class="subbrand">ICCK Business Awards 2026 — Official Pro-Forma Invoice</div>
          </div>
          <div>
            <div class="invoice-title">INVOICE</div>
            <div style="font-size: 12px; color: #4b5563; text-align: right; font-weight: bold;">Booking ID: ${bookingId}</div>
            <div style="font-size: 12px; color: #4b5563; text-align: right;">Date: ${regDate}</div>
          </div>
        </div>

        <table class="meta-table">
          <tr>
            <td width="50%">
              <strong>ISSUED TO:</strong><br/>
              <span style="font-size: 16px; color: #060d2b; font-weight: bold;">${companyName || "N/A"}</span><br/>
              Attn: ${contactName || "Representative"}<br/>
              Email: ${email || "N/A"}<br/>
              TEL: ${phoneNumber || "N/A"}
            </td>
            <td width="50%" style="text-align: right;">
              <strong>ISSUED BY:</strong><br/>
              <strong>Indian Chamber of Commerce in Korea (ICCK)</strong><br/>
              405(4F) IKP 7 Heolleung-ro, Seocho-gu,<br/>
              Seoul, Republic of Korea (06792)<br/>
              TEL: +82-2-776-1583 | events@indochamkorea.org
            </td>
          </tr>
        </table>

        <table class="items-table">
          <thead>
            <tr>
              <th>Description</th>
              <th style="text-align: center;">Qty</th>
              <th style="text-align: right;">Unit Price (KRW)</th>
              <th style="text-align: right;">Total Amount (KRW)</th>
            </tr>
          </thead>
          <tbody>
            ${
              sponsorshipTier !== "none"
                ? `<tr>
                    <td><strong>${sponsorshipTier.toUpperCase()} SPONSORSHIP PACKAGE</strong><br/><span style="font-size: 12px; color: #6b7280;">Title/Platinum/Gold corporate sponsorship branding & media package</span></td>
                    <td style="text-align: center;">1</td>
                    <td style="text-align: right;">₩${getSponsorshipCost().toLocaleString()}</td>
                    <td style="text-align: right;">₩${getSponsorshipCost().toLocaleString()}</td>
                  </tr>`
                : ""
            }
            ${
              bookingType === "table"
                ? `<tr>
                    <td><strong>BUSINESS AWARDS TABLE BOOKING</strong><br/><span style="font-size: 12px; color: #6b7280;">Standard 10-seater corporate table</span></td>
                    <td style="text-align: center;">${tableCount}</td>
                    <td style="text-align: right;">₩${TABLE_PRICE_KRW.toLocaleString()}</td>
                    <td style="text-align: right;">₩${(tableCount * TABLE_PRICE_KRW).toLocaleString()}</td>
                  </tr>`
                : `<tr>
                    <td><strong>INDIVIDUAL DELEGATE SEAT REGISTRATION</strong><br/><span style="font-size: 12px; color: #6b7280;">Individual ceremony & dinner seat access</span></td>
                    <td style="text-align: center;">${individualCount}</td>
                    <td style="text-align: right;">₩${INDIVIDUAL_PRICE_KRW.toLocaleString()}</td>
                    <td style="text-align: right;">₩${(individualCount * INDIVIDUAL_PRICE_KRW).toLocaleString()}</td>
                  </tr>`
            }
            <tr class="total-row">
              <td colspan="3" style="text-align: right;">TOTAL AMOUNT DUE:</td>
              <td style="text-align: right; color: #d97706;">₩${totalAmountKRW.toLocaleString()} KRW</td>
            </tr>
          </tbody>
        </table>

        <div class="bank-info">
          <h4>PAYMENT INSTRUCTIONS (BANK TRANSFER)</h4>
          <p style="margin: 4px 0; font-size: 13px;">Bank Name: <strong>Woori Bank</strong></p>
          <p style="margin: 4px 0; font-size: 13px;">Account Name: <strong>Indian Chamber of Commerce in Korea (ICCK)</strong></p>
          <p style="margin: 4px 0; font-size: 13px;">Account Number: <strong>1005-402-123456</strong></p>
          <p style="margin: 4px 0; font-size: 13px; color: #fef08a;">* Please include your Booking ID (<strong>${bookingId}</strong>) in the transfer reference note.</p>
        </div>

        <div class="footer">
          Thank you for supporting the ICCK Business Awards 2026. For questions, contact events@indochamkorea.org | TEL: +82-2-776-1583
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([invoiceHtml], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${invoiceFileName}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-3 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl border-2 border-[#D97706] bg-[#060D2B] p-5 sm:p-7 shadow-2xl text-left text-white my-auto max-h-[92vh] flex flex-col justify-between overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-amber-400/30 pb-4 mb-4">
          <div className="flex items-center gap-3">
            <img src={icckGoldLogo} alt="ICCK Logo" className="h-10 w-auto object-contain" />
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-black uppercase text-[#FEF08A] tracking-wide">
                Awards Registration &amp; Checkout
              </h3>
              <p className="text-xs text-amber-200/80">ICCK Business Awards 2026 • Fairmont Ambassador Seoul</p>
            </div>
          </div>
          <button onClick={onClose} className="text-amber-200 hover:text-amber-400 p-1">
            <X className="size-6" />
          </button>
        </div>

        {step === "configure" ? (
          <div className="space-y-5 text-xs sm:text-sm">
            
            {/* Step 1: Select Sponsorship Tier */}
            <div>
              <label className="block font-serif text-xs font-black uppercase tracking-wider text-[#FEF08A] mb-2 flex items-center gap-1.5">
                <Sparkles className="size-4 text-[#F59E0B]" /> 1. Select Corporate Sponsorship Tier (Optional)
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                {[
                  { id: "none", label: "No Sponsorship", price: "₩0" },
                  { id: "gold", label: "Gold Sponsor", price: "₩5,000,000" },
                  { id: "platinum", label: "Platinum Sponsor", price: "₩10,000,000" },
                  { id: "title", label: "Title Sponsor", price: "₩25,000,000" },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setSponsorshipTier(tier.id as any)}
                    className={`rounded-xl border p-2.5 text-center transition-all ${
                      sponsorshipTier === tier.id
                        ? "border-amber-400 bg-amber-400/20 text-[#FEF08A] font-black ring-2 ring-amber-400/50"
                        : "border-amber-400/30 bg-[#091442] text-amber-100/80 hover:bg-[#0f216b]"
                    }`}
                  >
                    <div className="font-bold text-xs">{tier.label}</div>
                    <div className="text-[11px] text-amber-300 font-extrabold mt-0.5">{tier.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Table vs Individual Booking (Premium Table Removed) */}
            <div>
              <label className="block font-serif text-xs font-black uppercase tracking-wider text-[#FEF08A] mb-2 flex items-center gap-1.5">
                <Ticket className="size-4 text-[#F59E0B]" /> 2. Select Seat / Table Booking Type
              </label>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <button
                  type="button"
                  onClick={() => setBookingType("individual")}
                  className={`rounded-xl border p-3 text-left transition-all ${
                    bookingType === "individual"
                      ? "border-amber-400 bg-amber-400/20 text-[#FEF08A] font-black ring-2 ring-amber-400/50"
                      : "border-amber-400/30 bg-[#091442] text-amber-100/80 hover:bg-[#0f216b]"
                  }`}
                >
                  <div className="font-bold">Individual Delegate Seat</div>
                  <div className="text-xs text-amber-300 font-extrabold mt-1">₩165,000 / seat ($125)</div>
                </button>

                <button
                  type="button"
                  onClick={() => setBookingType("table")}
                  className={`rounded-xl border p-3 text-left transition-all ${
                    bookingType === "table"
                      ? "border-amber-400 bg-amber-400/20 text-[#FEF08A] font-black ring-2 ring-amber-400/50"
                      : "border-amber-400/30 bg-[#091442] text-amber-100/80 hover:bg-[#0f216b]"
                  }`}
                >
                  <div className="font-bold">Standard Corporate Table (10 Seats)</div>
                  <div className="text-xs text-amber-300 font-extrabold mt-1">₩1,500,000 / table</div>
                </button>
              </div>

              {/* Quantity Selectors */}
              {bookingType === "individual" ? (
                <div className="flex items-center justify-between bg-[#091442] border border-amber-400/30 rounded-xl p-3">
                  <span className="text-xs font-bold text-amber-200">Number of Individual Registrations:</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setIndividualCount(Math.max(1, individualCount - 1))}
                      className="size-7 rounded-lg bg-amber-400/20 border border-amber-400/40 text-amber-200 font-black hover:bg-amber-400/30"
                    >
                      -
                    </button>
                    <span className="font-black text-base text-[#FEF08A]">{individualCount} PPL</span>
                    <button
                      type="button"
                      onClick={() => setIndividualCount(individualCount + 1)}
                      className="size-7 rounded-lg bg-amber-400/20 border border-amber-400/40 text-amber-200 font-black hover:bg-amber-400/30"
                    >
                      +
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between bg-[#091442] border border-amber-400/30 rounded-xl p-3">
                  <span className="text-xs font-bold text-amber-200">Number of Tables (10 seats/table):</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setTableCount(Math.max(1, tableCount - 1))}
                      className="size-7 rounded-lg bg-amber-400/20 border border-amber-400/40 text-amber-200 font-black hover:bg-amber-400/30"
                    >
                      -
                    </button>
                    <span className="font-black text-base text-[#FEF08A]">{tableCount} Table{tableCount > 1 ? "s" : ""}</span>
                    <button
                      type="button"
                      onClick={() => setTableCount(tableCount + 1)}
                      className="size-7 rounded-lg bg-amber-400/20 border border-amber-400/40 text-amber-200 font-black hover:bg-amber-400/30"
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Step 3: Company & Contact Information */}
            <div className="space-y-3 pt-2 border-t border-amber-400/20">
              <label className="block font-serif text-xs font-black uppercase tracking-wider text-[#FEF08A] flex items-center gap-1.5">
                <Building2 className="size-4 text-[#F59E0B]" /> 3. Company &amp; Contact Details (For Invoice)
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] text-amber-200/80 mb-1 font-bold">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Coupang, ANSYS, Seoul Foreign School"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full rounded-xl bg-[#091442] border border-amber-400/40 px-3 py-2 text-xs text-white placeholder-amber-200/40 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-amber-200/80 mb-1 font-bold">Contact Person *</label>
                  <input
                    type="text"
                    required
                    placeholder="Contact Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full rounded-xl bg-[#091442] border border-amber-400/40 px-3 py-2 text-xs text-white placeholder-amber-200/40 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-amber-200/80 mb-1 font-bold">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="email@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl bg-[#091442] border border-amber-400/40 px-3 py-2 text-xs text-white placeholder-amber-200/40 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-amber-200/80 mb-1 font-bold">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+82-10-xxxx-xxxx"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full rounded-xl bg-[#091442] border border-amber-400/40 px-3 py-2 text-xs text-white placeholder-amber-200/40 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>
            </div>

            {/* Total Price Summary */}
            <div className="rounded-xl border border-amber-400/40 bg-gradient-to-r from-amber-400/20 to-amber-500/10 p-3.5 flex items-center justify-between">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-amber-200/80 font-bold">Total Registration Amount:</span>
                <span className="text-xl font-serif font-black text-[#FEF08A]">₩{totalAmountKRW.toLocaleString()} KRW</span>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (!companyName.trim()) {
                    alert("Please enter your Company Name to generate the official invoice.");
                    return;
                  }
                  setStep("preview");
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] px-5 py-2.5 font-sans text-xs font-black uppercase tracking-wider text-[#060c2c] shadow-lg hover:brightness-110"
              >
                Proceed to Invoice <ChevronRight className="size-4" />
              </button>
            </div>

          </div>
        ) : (
          /* Step 2: Invoice Preview & Download */
          <div className="space-y-4 text-xs">
            <div className="rounded-xl border border-amber-400/40 bg-[#FAF9F6] p-4 text-[#060D2B]">
              <div className="flex items-center justify-between border-b border-amber-800/20 pb-3 mb-3">
                <div>
                  <h4 className="font-serif font-black text-sm uppercase text-[#060D2B]">ICCK Business Awards Invoice Preview</h4>
                  <p className="text-[11px] text-[#D97706] font-bold">Booking ID: {bookingId}</p>
                </div>
                <div className="text-right text-[11px] font-bold text-slate-600">
                  Date: {regDate}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] mb-3">
                <div>
                  <span className="text-slate-500 font-bold">Company:</span> <strong className="text-[#060D2B]">{companyName}</strong>
                </div>
                <div>
                  <span className="text-slate-500 font-bold">Contact:</span> <strong>{contactName}</strong> ({email})
                </div>
              </div>

              <div className="border-t border-b border-slate-200 py-2 space-y-1">
                {sponsorshipTier !== "none" && (
                  <div className="flex justify-between font-bold text-xs text-[#060D2B]">
                    <span>{sponsorshipTier.toUpperCase()} SPONSORSHIP</span>
                    <span>₩{getSponsorshipCost().toLocaleString()} KRW</span>
                  </div>
                )}

                <div className="flex justify-between font-bold text-xs text-[#060D2B]">
                  <span>
                    {bookingType === "table"
                      ? `${tableCount} Standard Corporate Table${tableCount > 1 ? "s" : ""} (10 seats)`
                      : `${individualCount} Individual Delegate Seat${individualCount > 1 ? "s" : ""}`}
                  </span>
                  <span>₩{getTicketsCost().toLocaleString()} KRW</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 font-serif text-sm font-black text-[#D97706]">
                <span>TOTAL DUE:</span>
                <span>₩{totalAmountKRW.toLocaleString()} KRW</span>
              </div>
            </div>

            {/* Generated Filename Specification Box */}
            <div className="rounded-xl border border-amber-400/30 bg-[#091442] p-3 text-[11px] space-y-1">
              <div className="text-amber-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <FileText className="size-3.5" /> Formatted Invoice Filename:
              </div>
              <div className="font-mono text-amber-100 font-bold break-all bg-black/40 p-2 rounded-lg border border-amber-400/20">
                {invoiceFileName}.html
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep("configure")}
                className="text-amber-200 hover:underline font-bold text-xs"
              >
                &larr; Back to Edit Details
              </button>

              <button
                type="button"
                onClick={handleDownloadInvoice}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] px-6 py-3 font-sans text-xs font-black uppercase tracking-wider text-[#060c2c] shadow-xl hover:brightness-110"
              >
                <Download className="size-4" /> Download Official Invoice
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
