import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-background font-[Inter]">
            <Navigation />

            <main className="pt-24 pb-16">
                <div className="container mx-auto px-6 max-w-4xl">
                    {/* Back Link */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    {/* Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Privacy Policy
                        </h1>
                        <p className="text-muted-foreground">Last updated: 1/1/2026</p>
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
                        <p className="text-foreground/90 leading-relaxed">
                            Dynamic Dispatch & Tech Solution Services ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, share, and safeguard information when you use our back‑office services for luxury ground transportation companies, including our website, communication systems, and payment‑processing services.
                        </p>
                        <p className="text-foreground/90 leading-relaxed">
                            By using our website or services, you agree to the collection and use of information in accordance with this Privacy Policy.
                        </p>

                        {/* Section 1 */}
                        <section className="glass-card">
                            <h2 className="text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
                            <p className="text-foreground/80 mb-4">We may collect the following categories of information:</p>
                            <ul className="space-y-3 text-foreground/80">
                                <li><strong className="text-foreground">Identification and contact details:</strong> Name, company name, email address, phone number, postal/billing address.</li>
                                <li><strong className="text-foreground">Booking and payment information:</strong> Service details, transaction amounts, currency, partial card details (as returned by our payment processors), billing history, and other data related to payments and invoices.</li>
                                <li><strong className="text-foreground">Business information:</strong> Company details, service preferences, communication history, and notes needed to support your account or bookings.</li>
                                <li><strong className="text-foreground">Technical and usage data:</strong> IP address, browser type, device identifiers, pages visited, access times, referring URLs, and clickstream data collected through server logs and similar technologies.</li>
                                <li><strong className="text-foreground">Cookies and similar technologies:</strong> Information collected through cookies, pixels, and similar tools to operate the site, enhance user experience, provide security, and analyze site usage.</li>
                            </ul>
                            <p className="text-foreground/80 mt-4">Where required by law, we rely on one or more of the following legal bases to process your information:</p>
                            <ul className="space-y-2 text-foreground/80 mt-2">
                                <li>• Performance of a contract (to provide and manage our services).</li>
                                <li>• Compliance with legal and regulatory obligations.</li>
                                <li>• Our legitimate interests in operating, improving, and securing our business and services.</li>
                                <li>• Your consent, for example for certain marketing communications or optional cookies/analytics where applicable.</li>
                            </ul>
                        </section>

                        {/* Section 2 */}
                        <section className="glass-card">
                            <h2 className="text-2xl font-bold text-foreground mb-4">2. SMS Communication (10DLC Compliance)</h2>
                            <p className="text-foreground/80 mb-4">As part of our booking and coordination services, we may send SMS messages for status updates, booking confirmations, and quote inquiries.</p>
                            <ul className="space-y-3 text-foreground/80">
                                <li><strong className="text-foreground">Consent:</strong> By providing your mobile number, you consent to receive SMS communications from Dynamic Dispatch & Tech Solution Services.</li>
                                <li><strong className="text-foreground">Opt‑in:</strong> Consent is obtained during the initial intake process or when you submit a request via our contact form.</li>
                                <li><strong className="text-foreground">Opt‑out:</strong> You may opt out of SMS communications at any time by replying "STOP" to any message you receive. After you send "STOP" to us, we will send you an SMS message to confirm that you have been unsubscribed.</li>
                                <li><strong className="text-foreground">Data privacy:</strong> Mobile information will not be shared with third parties/affiliates for marketing or promotional purposes. All other categories exclude text‑messaging originator opt‑in data and consent; this information will not be shared with any third parties.</li>
                                <li><strong className="text-foreground">Messaging rates:</strong> Message and data rates may apply. SMS frequency may vary based on your interactions with us.</li>
                            </ul>
                        </section>

                        {/* Section 3 */}
                        <section className="glass-card">
                            <h2 className="text-2xl font-bold text-foreground mb-4">3. Merchant Payment Services</h2>
                            <p className="text-foreground/80 mb-4">We process payments and manage financial data to support luxury ground transportation bookings for our clients. We take the security of your payment information seriously.</p>
                            <ul className="space-y-3 text-foreground/80">
                                <li><strong className="text-foreground">Information collected:</strong> We collect necessary payment‑related information (such as name, billing address, and limited transaction details) to process payments.</li>
                                <li><strong className="text-foreground">PCI compliance:</strong> All card transactions are handled through secure, PCI‑DSS compliant payment gateways. We do not store full credit card numbers or sensitive authentication data on our internal systems.</li>
                                <li><strong className="text-foreground">Security measures:</strong> We implement industry‑standard encryption, access controls, and security protocols to protect payment and financial data during transmission and storage.</li>
                            </ul>
                        </section>

                        {/* Section 4 */}
                        <section className="glass-card">
                            <h2 className="text-2xl font-bold text-foreground mb-4">4. How We Use Information</h2>
                            <p className="text-foreground/80 mb-4">We use the information we collect to:</p>
                            <ul className="space-y-2 text-foreground/80">
                                <li>• Provide, manage, and maintain our services and internal operations.</li>
                                <li>• Coordinate bookings, logistics, and customer communications.</li>
                                <li>• Process payments, manage invoices, and help prevent fraud and abuse.</li>
                                <li>• Communicate service updates, respond to inquiries, and provide customer support.</li>
                                <li>• Analyze and improve our website, services, and operational excellence.</li>
                                <li>• Comply with legal, regulatory, tax, and accounting requirements.</li>
                            </ul>
                            <p className="text-foreground/80 mt-4">We may also use anonymized or aggregated information that does not identify you personally for reporting, analytics, or service‑improvement purposes.</p>
                        </section>

                        {/* Section 5 */}
                        <section className="glass-card">
                            <h2 className="text-2xl font-bold text-foreground mb-4">5. Sharing of Information & Third Parties</h2>
                            <p className="text-foreground/80 mb-4">We do not sell your personal information. We share it only as needed to operate our business and provide our services. This includes sharing with:</p>
                            <ul className="space-y-3 text-foreground/80">
                                <li><strong className="text-foreground">Payment service providers and gateways:</strong> Third‑party payment processors that securely process payments on our behalf.</li>
                                <li><strong className="text-foreground">Hosting and IT providers:</strong> Companies that host our website, maintain our systems, provide backup and security, and support our infrastructure.</li>
                                <li><strong className="text-foreground">Communication and analytics providers:</strong> Email, SMS, and analytics services that help us send messages, detect delivery issues, and understand website usage.</li>
                                <li><strong className="text-foreground">Professional advisers:</strong> Auditors, accountants, and legal counsel where reasonably necessary for our business operations.</li>
                                <li><strong className="text-foreground">Authorities and compliance:</strong> Law‑enforcement or regulatory authorities, courts, or agencies when required by law or to protect our rights, property, users, or others.</li>
                            </ul>
                        </section>

                        {/* Section 6 */}
                        <section className="glass-card">
                            <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Retention</h2>
                            <p className="text-foreground/80 mb-4">We retain your information for as long as necessary to:</p>
                            <ul className="space-y-2 text-foreground/80">
                                <li>• Provide services and maintain an accurate record of transactions and bookings.</li>
                                <li>• Comply with applicable laws, tax, accounting, anti‑fraud, and anti‑money‑laundering obligations.</li>
                                <li>• Resolve disputes, enforce our agreements, and protect our legal rights.</li>
                            </ul>
                            <p className="text-foreground/80 mt-4">Retention periods may vary depending on the type of data and applicable legal requirements.</p>
                        </section>

                        {/* Section 7 */}
                        <section className="glass-card">
                            <h2 className="text-2xl font-bold text-foreground mb-4">7. International Transfers</h2>
                            <p className="text-foreground/80">Your information may be stored and processed in countries other than the one in which it was collected. We take appropriate safeguards to protect your information, such as using contractual protections.</p>
                        </section>

                        {/* Section 8 */}
                        <section className="glass-card">
                            <h2 className="text-2xl font-bold text-foreground mb-4">8. Your Rights and Choices</h2>
                            <p className="text-foreground/80 mb-4">Depending on your location, you may have the right to:</p>
                            <ul className="space-y-2 text-foreground/80">
                                <li>• Access the personal information we hold about you.</li>
                                <li>• Request correction or update of inaccurate information.</li>
                                <li>• Request deletion of your information, subject to legal restrictions.</li>
                                <li>• Request restriction of processing or object to certain processing.</li>
                                <li>• Request a copy of your information in a portable format.</li>
                            </ul>
                            <p className="text-foreground/80 mt-4">To exercise these rights, contact us using the details below.</p>
                        </section>

                        {/* Section 9 */}
                        <section className="glass-card">
                            <h2 className="text-2xl font-bold text-foreground mb-4">9. Cookies and Web Technologies</h2>
                            <p className="text-foreground/80">Our website uses cookies to enable core functionality, remember preferences, and analyze traffic. You can manage cookies through your browser settings.</p>
                        </section>

                        {/* Section 10 */}
                        <section className="glass-card">
                            <h2 className="text-2xl font-bold text-foreground mb-4">10. Security Measures</h2>
                            <p className="text-foreground/80">We use technical and organizational safeguards including encryption, role-based access controls, and PCI-DSS compliant payment processors. However, no method of transmission is completely secure.</p>
                        </section>

                        {/* Section 11 */}
                        <section className="glass-card">
                            <h2 className="text-2xl font-bold text-foreground mb-4">11. Children's Privacy</h2>
                            <p className="text-foreground/80">Our website is intended for business users and adults and is not directed to children under 18.</p>
                        </section>

                        {/* Section 12 */}
                        <section className="glass-card">
                            <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to This Privacy Policy</h2>
                            <p className="text-foreground/80">We may update this policy periodically. We will revise the "Last updated" date at the top and provide notice for significant changes.</p>
                        </section>

                        {/* Section 13 */}
                        <section className="glass-card">
                            <h2 className="text-2xl font-bold text-foreground mb-4">13. Contact Us</h2>
                            <p className="text-foreground/80 mb-2">Dynamic Dispatch & Tech Solution Services</p>
                            <p className="text-foreground/80 mb-2">H-187 Shahrah-e-Quaideen, Block 2, PECHS, Karachi</p>
                            <p className="text-foreground/80 mb-2">
                                <a href="mailto:info@dynamicdtss.com" className="text-accent hover:text-accent/80 transition-colors">info@dynamicdtss.com</a>
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
