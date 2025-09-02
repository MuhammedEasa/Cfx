"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import AnimationContainer from "@/components/global/animation-container";
import Wrapper from "@/components/global/wrapper";
import SectionBadge from "@/components/ui/section-badge";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        accountType: "",
        message: "",
        agreeToContact: false,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleRadioChange = (value: string) => {
        setFormData(prev => ({ ...prev, accountType: value }));
    };

    const handleCheckboxChange = (checked: boolean) => {
        setFormData(prev => ({ ...prev, agreeToContact: checked }));
    };

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    fullName: "",
                    email: "",
                    phoneNumber: "",
                    accountType: "",
                    message: "",
                    agreeToContact: false,
                });
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Wrapper className="py-20 lg:py-32">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <AnimationContainer animation="fadeUp" delay={0.1}>
                        <SectionBadge title="Get in Touch" />
                    </AnimationContainer>
                    
                    <AnimationContainer animation="fadeUp" delay={0.2}>
                        <h1 className="text-4xl lg:text-5xl font-bold mt-6 mb-4">
                            Contact CFX Prime
                        </h1>
                    </AnimationContainer>
                    
                    <AnimationContainer animation="fadeUp" delay={0.3}>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Ready to start your trading journey? Get in touch with our expert team for personalized support and guidance.
                        </p>
                    </AnimationContainer>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <AnimationContainer animation="fadeLeft" delay={0.4}>
                            <div className="space-y-6 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-card/50 dark:to-card/30 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 dark:border-border/20">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Mail className="h-5 w-5 text-primary" />
                                            <span className="text-muted-foreground">support@cfxprime.com</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-5 w-5 text-primary" />
                                            <span className="text-muted-foreground">+1 (555) 123-4567</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPin className="h-5 w-5 text-primary" />
                                            <span className="text-muted-foreground">Global Trading Hub</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="h-5 w-5 text-primary" />
                                            <span className="text-muted-foreground">24/7 Support Available</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-6">
                                    <h4 className="font-semibold mb-2">Trading Hours</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Markets are open 24/5, from Sunday 5:00 PM ET to Friday 5:00 PM ET.
                                    </p>
                                </div>
                            </div>
                        </AnimationContainer>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <AnimationContainer animation="fadeRight" delay={0.4}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Send us a Message</CardTitle>
                                    <CardDescription>
                                        Fill out the form below and we'll get back to you within 24 hours.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        {/* Full Name */}
                                        <div className="space-y-2">
                                            <Label htmlFor="fullName">Full Name *</Label>
                                            <Input
                                                id="fullName"
                                                name="fullName"
                                                type="text"
                                                required
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address *</Label>
                                            <Input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Enter your email address"
                                            />
                                        </div>

                                        {/* Phone Number */}
                                        <div className="space-y-2">
                                            <Label htmlFor="phoneNumber">Phone Number *</Label>
                                            <Input
                                                id="phoneNumber"
                                                name="phoneNumber"
                                                type="tel"
                                                required
                                                value={formData.phoneNumber}
                                                onChange={handleInputChange}
                                                placeholder="Enter your phone number"
                                            />
                                        </div>

                                        {/* Account Type */}
                                        <div className="space-y-3">
                                            <Label>Account Type *</Label>
                                            <RadioGroup value={formData.accountType} onValueChange={handleRadioChange}>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="demo" id="demo" />
                                                    <Label htmlFor="demo">Demo Account</Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem value="live" id="live" />
                                                    <Label htmlFor="live">Live Account</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-2">
                                            <Label htmlFor="message">Message (Optional)</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell us how we can help you..."
                                                rows={4}
                                            />
                                        </div>

                                        {/* Consent Checkbox */}
                                        <div className="flex items-start space-x-2">
                                            <Checkbox
                                                id="agreeToContact"
                                                checked={formData.agreeToContact}
                                                onCheckedChange={handleCheckboxChange}
                                                required
                                            />
                                            <Label htmlFor="agreeToContact" className="text-sm leading-relaxed">
                                                I agree and understand that CFX Prime has a legitimate interest in contacting me, in order to inform me about its products and services, or for other marketing purposes. I also understand that I can opt out of receiving marketing communications and acquire further information on how my data will be processed. *
                                            </Label>
                                        </div>

                                        {/* Submit Button */}
                                        <Button
                                            type="submit"
                                            className="w-full"
                                            disabled={!formData.agreeToContact || isSubmitting}
                                        >
                                            {isSubmitting ? "Sending..." : "Send Message"}
                                        </Button>

                                        {/* Status Messages */}
                                        {submitStatus === 'success' && (
                                            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-md">
                                                <p className="text-green-800 dark:text-green-200 text-sm">
                                                    Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                                                </p>
                                            </div>
                                        )}

                                        {submitStatus === 'error' && (
                                            <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                                                <p className="text-red-800 dark:text-red-200 text-sm">
                                                    Sorry, there was an error sending your message. Please try again or contact us directly.
                                                </p>
                                            </div>
                                        )}
                                    </form>
                                </CardContent>
                            </Card>
                        </AnimationContainer>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}
