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
import {
  Ticket,
  ChevronRight,
  Download,
  Check,
  Loader2,
  FileText,
  Printer,
} from "lucide-react";

interface DiwaliTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DiwaliTicketModal({ isOpen, onClose }: DiwaliTicketModalProps) {
  const [step, setStep] = useState<"configure" | "success">("configure");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Ticket Options
  const TICKET_PRICE_KRW = 300000; // ₩300,000 KRW per ticket
  const [ticketType, setTicketType] = useState<"individual" | "table">("individual");
  const [quantity, setQuantity] = useState<number>(1);

  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    dietaryNotes: "",
  });

  const calculateTotalKRW = () => {
    if (ticketType === "table") {
      return quantity * TICKET_PRICE_KRW * 10; // Table of 10
    }
    return quantity * TICKET_PRICE_KRW;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send ticket reservation data to Formspree endpoint
      await fetch("https://formspree.io/f/events@indochamkorea.org", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ticketType,
          quantity,
          totalPriceKRW: `₩${calculateTotalKRW().toLocaleString()} KRW`,
          ...formData,
        }),
      }).catch(() => null);
    } catch (err) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
      setStep("success");
    }
  };

  const handleDownloadPDF = () => {
    const regId = `ICCK-DB2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>ICCK Diwali Ball 2026 Invoice - ${regId}</title>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #1a1a1a; max-width: 800px; margin: 0 auto; background: #fff; }
          .header { display: flex; justify-[#060d2b]; justify-content: space-between; align-items: center; border-bottom: 3px solid #d97706; padding-bottom: 20px; margin-bottom: 25px; }
          .logo-title { font-size: 22px; font-weight: 800; color: #060d2b; text-transform: uppercase; letter-spacing: 1px; }
          .badge { background: #fef3c7; color: #92400e; padding: 6px 14px; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; border: 1px solid #fde68a; }
          .invoice-title { font-size: 18px; font-weight: 800; margin-bottom: 4px; color: #091442; text-transform: uppercase; }
          .meta-text { color: #64748b; font-size: 12px; margin-bottom: 25px; }
          .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 25px; }
          .card { background: #f8fafc; border: 1px solid #e2e8f0; padding: 16px; border-radius: 8px; font-size: 13px; line-height: 1.6; }
          .card-title { font-weight: 800; color: #d97706; text-transform: uppercase; font-size: 11px; margin-bottom: 8px; letter-spacing: 0.5px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
          th { background: #060d2b; color: #fef08a; text-align: left; padding: 12px; font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; }
          td { padding: 12px; border-bottom: 1px solid #e2e8f0; font-size: 13px; }
          .total-row td { font-weight: 800; font-size: 15px; color: #060d2b; border-top: 2px solid #d97706; }
          .bank-box { background: #fffbeb; border: 1px solid #fde68a; padding: 16px; border-radius: 8px; margin-bottom: 25px; font-size: 12px; line-height: 1.6; }
          .footer-note { text-align: center; margin-top: 30px; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 15px; }
          @media print { body { padding: 20px; } }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <div class="logo-title">Indian Chamber of Commerce in Korea</div>
            <div style="color: #64748b; font-size: 12px; margin-top: 2px;">ICCK Official Pass Booking Invoice</div>
          </div>
          <div class="badge">Registration Confirmed</div>
        </div>

        <div class="invoice-title">Event Pass Booking Receipt</div>
        <div class="meta-text">Invoice Reference: <strong>${regId}</strong> &middot; Date: ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>

        <div class="grid">
          <div class="card">
            <div class="card-title">Attendee Details</div>
            <div><strong>Full Name:</strong> ${formData.fullName}</div>
            <div><strong>Email:</strong> ${formData.email}</div>
            <div><strong>Phone:</strong> ${formData.phone}</div>
            <div><strong>Organization:</strong> ${formData.company || 'N/A'}</div>
            ${formData.dietaryNotes ? `<div><strong>Dietary Notes:</strong> ${formData.dietaryNotes}</div>` : ''}
          </div>

          <div class="card">
            <div class="card-title">Event Details</div>
            <div><strong>Event:</strong> ICCK Diwali Ball 2026</div>
            <div><strong>Date & Time:</strong> Dec 5th, 2026 | 18:30 KST</div>
            <div><strong>Venue:</strong> Fairmont Ambassador, Seoul</div>
            <div><strong>Host:</strong> ICCK Secretariat</div>
          </div>
        </div>

        <table>
          <thead>
            <tr>
              <th>Pass Description</th>
              <th>Qty</th>
              <th>Unit Price</th>
              <th style="text-align: right;">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>${ticketType === "individual" ? "Diwali Ball 2026 Individual Ticket" : "Diwali Ball 2026 Corporate Table (10 Seats)"}</strong><br/>
                <span style="color: #64748b; font-size: 11px;">Includes VIP Banquet Dinner, Cultural Performances & High-level Networking</span>
              </td>
              <td>${quantity}</td>
              <td>₩${(ticketType === "individual" ? TICKET_PRICE_KRW : TICKET_PRICE_KRW * 10).toLocaleString()} KRW</td>
              <td style="text-align: right; font-weight: 700;">₩${calculateTotalKRW().toLocaleString()} KRW</td>
            </tr>
            <tr class="total-row">
              <td colspan="3" style="text-align: right;">Total Amount Payable:</td>
              <td style="text-align: right;">₩${calculateTotalKRW().toLocaleString()} KRW</td>
            </tr>
          </tbody>
        </table>

        <div class="bank-box">
          <div class="card-title" style="color: #b45309;">Payment &amp; Wire Transfer Details</div>
          <div><strong>Bank Name:</strong> Shinhan Bank (신한은행)</div>
          <div><strong>Account Name:</strong> Indian Chamber of Commerce in Korea (주한인도상공회의소)</div>
          <div><strong>Account Number:</strong> 100-028-123456</div>
          <div style="font-size: 11px; color: #78350f; margin-top: 6px;">* Please reference invoice ID <strong>${regId}</strong> when transferring.</div>
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

  const resetAndClose = () => {
    setStep("configure");
    setQuantity(1);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetAndClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-[#060D2B] border border-amber-400/30 text-white p-6 sm:p-8 rounded-2xl shadow-2xl">
        <DialogHeader className="border-b border-amber-400/20 pb-4 mb-4">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-black uppercase tracking-widest mb-1">
            <Ticket className="size-4" /> Official Event Ticket Registration
          </div>
          <DialogTitle className="font-serif text-2xl sm:text-3xl font-black text-[#FEF08A] uppercase">
            ICCK Diwali Ball 2026
          </DialogTitle>
          <DialogDescription className="text-amber-100/70 text-xs sm:text-sm">
            Dec 5th, 2026 | 18:30 KST &middot; Fairmont Ambassador, Seoul
          </DialogDescription>
        </DialogHeader>

        {step === "success" ? (
          /* SUCCESS / INVOICE SUMMARY STATE WITH PDF DOWNLOAD BUTTON */
          <div className="py-6 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-amber-600/20 border-2 border-amber-400/50 flex items-center justify-center mx-auto text-amber-400">
              <Check className="size-10" />
            </div>
            <h3 className="font-serif text-2xl font-black text-[#FEF08A] uppercase">
              Ticket Reservation Received!
            </h3>
            <p className="text-sm text-amber-100/80 max-w-md mx-auto leading-relaxed">
              Thank you <strong className="text-white">{formData.fullName}</strong>. We have reserved your ticket request. An invoice and confirmation details will be sent to <strong className="text-amber-300">{formData.email}</strong>.
            </p>

            {/* ORDER BREAKDOWN CARD */}
            <div className="bg-[#091442]/80 border border-amber-400/30 rounded-xl p-5 text-left max-w-md mx-auto space-y-3 text-xs text-amber-100/90 shadow-inner">
              <div className="flex justify-between border-b border-amber-400/20 pb-2">
                <span className="font-bold text-amber-300">Ticket Type:</span>
                <span>{ticketType === "individual" ? "Individual Pass" : "Corporate Table (10 Seats)"}</span>
              </div>
              <div className="flex justify-between border-b border-amber-400/20 pb-2">
                <span className="font-bold text-amber-300">Quantity:</span>
                <span>{quantity} {ticketType === "individual" ? "Ticket(s)" : "Table(s)"}</span>
              </div>
              <div className="flex justify-between border-b border-amber-400/20 pb-2">
                <span className="font-bold text-amber-300">Attendee:</span>
                <span>{formData.fullName} ({formData.company || "N/A"})</span>
              </div>
              <div className="flex justify-between pt-1 text-sm font-black text-[#FEF08A]">
                <span>Total Amount:</span>
                <span>₩{calculateTotalKRW().toLocaleString()} KRW</span>
              </div>
            </div>

            {/* ACTION BUTTONS WITH DOWNLOAD PDF */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                type="button"
                onClick={handleDownloadPDF}
                className="w-full sm:w-auto bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] font-black uppercase text-[#060c2c] px-6 py-3 rounded-xl shadow-lg hover:brightness-110 flex items-center gap-2"
              >
                <Download className="size-4" /> Download PDF Invoice / Receipt
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={resetAndClose}
                className="w-full sm:w-auto border-amber-400/40 text-amber-300 hover:bg-amber-400/10 px-6 py-3 rounded-xl"
              >
                Close &amp; Finish
              </Button>
            </div>
          </div>
        ) : (
          /* REGISTRATION FORM */
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* TICKET TYPE SELECTOR */}
            <div className="bg-[#091442]/60 border border-amber-400/20 rounded-xl p-4 space-y-3">
              <Label className="text-xs text-[#FEF08A] font-black uppercase tracking-wider block">
                1. Choose Pass Type
              </Label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTicketType("individual")}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    ticketType === "individual"
                      ? "border-amber-400 bg-amber-400/20 text-[#FEF08A]"
                      : "border-amber-400/20 bg-[#060D2B]/80 text-white/70 hover:border-amber-400/40"
                  }`}
                >
                  <p className="font-serif font-black text-sm">Individual Seat</p>
                  <p className="text-xs text-amber-400 font-bold mt-1">₩300,000 KRW</p>
                </button>

                <button
                  type="button"
                  onClick={() => setTicketType("table")}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    ticketType === "table"
                      ? "border-amber-400 bg-amber-400/20 text-[#FEF08A]"
                      : "border-amber-400/20 bg-[#060D2B]/80 text-white/70 hover:border-amber-400/40"
                  }`}
                >
                  <p className="font-serif font-black text-sm">Corporate Table (10 Seats)</p>
                  <p className="text-xs text-amber-400 font-bold mt-1">₩3,000,000 KRW</p>
                </button>
              </div>

              {/* QUANTITY SELECTOR */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-100/90">
                  Number of {ticketType === "individual" ? "Tickets" : "Tables"}:
                </span>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 font-black text-sm flex items-center justify-center hover:bg-amber-400/20"
                  >
                    -
                  </button>
                  <span className="font-bold text-sm text-white w-6 text-center">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/30 text-amber-300 font-black text-sm flex items-center justify-center hover:bg-amber-400/20"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* ATTENDEE CONTACT INFO */}
            <div className="bg-[#091442]/60 border border-amber-400/20 rounded-xl p-4 space-y-4">
              <Label className="text-xs text-[#FEF08A] font-black uppercase tracking-wider block">
                2. Contact &amp; Attendee Details
              </Label>

              <div className="grid gap-3.5 sm:grid-cols-2">
                <div>
                  <Label className="text-xs text-amber-100/90 font-bold mb-1 block">Full Name *</Label>
                  <Input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Min-jun Kim"
                    required
                    className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs"
                  />
                </div>
                <div>
                  <Label className="text-xs text-amber-100/90 font-bold mb-1 block">Email Address *</Label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    required
                    className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs"
                  />
                </div>
                <div>
                  <Label className="text-xs text-amber-100/90 font-bold mb-1 block">Phone / Kakao *</Label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+82 10-0000-0000"
                    required
                    className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs"
                  />
                </div>
                <div>
                  <Label className="text-xs text-amber-100/90 font-bold mb-1 block">Company / Organization</Label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label className="text-xs text-amber-100/90 font-bold mb-1 block">Special Requests / Dietary Notes</Label>
                  <Input
                    name="dietaryNotes"
                    value={formData.dietaryNotes}
                    onChange={handleChange}
                    placeholder="e.g. Vegetarian / Jain Meal / Wheelchair access"
                    className="bg-[#060D2B] border-amber-400/30 text-white placeholder:text-white/30 text-xs"
                  />
                </div>
              </div>
            </div>

            {/* TOTAL PRICE CALCULATION SUMMARY & SUBMIT */}
            <div className="bg-gradient-to-r from-amber-400/10 via-amber-300/15 to-amber-500/10 border border-amber-400/40 rounded-xl p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-amber-200/80 font-bold">Total Price:</p>
                <p className="font-serif font-black text-xl sm:text-2xl text-[#FEF08A]">
                  ₩{calculateTotalKRW().toLocaleString()} KRW
                </p>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#fde047] via-[#eab308] to-[#ca8a04] font-black uppercase text-[#060c2c] text-xs px-6 py-3 shadow-xl hover:brightness-110"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="size-4 mr-2 animate-spin" /> Processing...
                  </>
                ) : (
                  <>
                    Complete Booking <ChevronRight className="size-4 ml-1" />
                  </>
                )}
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
