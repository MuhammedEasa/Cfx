import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import AnimationContainer from './global/animation-container';
import Wrapper from "./global/wrapper";

const QUICK_LINKS = [
    { label: "Markets", href: "/#markets" },
    { label: "How to Start", href: "/#start-trading" },
    { label: "Account Types", href: "/account-types" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Contact Us", href: "/contact" },
];

const SOCIAL_LINKS = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
];

const Footer = () => {
    return (
        <footer className="relative border-t border-border pt-16 pb-8 md:pb-0 w-full overflow-hidden">
            <Wrapper>
                <AnimationContainer animation="scaleUp" delay={0.2}>
                    <div className="absolute -top-1/8 lg:-top-1/2 inset-x-0 mx-auto bg-primary/50 lg:bg-primary/70 rounded-full w-1/2 h-1/4 blur-[6rem] lg:blur-[12rem]"></div>
                </AnimationContainer>

                <AnimationContainer animation="scaleUp" delay={0.3}>
                    <div className="absolute top-0 w-4/5 mx-auto inset-x-0 h-px bg-gradient-to-r from-primary/0 via-primary/80 to-primary/0"></div>
                </AnimationContainer>

                <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                    <AnimationContainer animation="fadeRight" delay={0.4}>
                        <div className="flex flex-col items-start justify-start space-y-6">
                            <div className="flex items-center gap-3">
                                <Image
                                    src="/icons/cfx_logo.png"
                                    alt="CFX Prime"
                                    width={48}
                                    height={48}
                                    priority
                                    className="object-contain"
                                />
                                <span className="text-2xl lg:text-3xl font-semibold text-foreground">
                                    CFX Prime
                                </span>
                            </div>

                            <div className="space-y-4">
                                <div className="text-muted-foreground text-sm leading-relaxed">
                                    <p className="font-medium text-foreground mb-1">CFX Prime Limited</p>
                                    <p>Registration Number – 1385348</p>
                                    <p>Saint Lucia License No: 38700000244</p>
                                </div>

                                <div className="text-muted-foreground text-sm leading-relaxed">
                                    <p className="font-medium text-foreground mb-1">CFX Prime Financial Brokers LLC</p>
                                    <p>First Floor, Super J Castries-Gros Islet Hwy,</p>
                                    <p>Rodney Bay, St Lucia.</p>
                                </div>

                                <div className="text-muted-foreground text-sm space-y-1">
                                    <p className="hover:text-primary transition-colors cursor-pointer">cfxprime@digitalproglobal.com</p>
                                    {/* <p className="hover:text-primary transition-colors cursor-pointer">+971 558413067</p> */}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-2">
                                {SOCIAL_LINKS.map((social, index) => (
                                    <AnimationContainer
                                        key={index}
                                        animation="fadeUp"
                                        delay={0.6 + (index * 0.1)}
                                    >
                                        <Link
                                            href={social.href}
                                            className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-primary/10"
                                        >
                                            <social.icon className="size-5" />
                                        </Link>
                                    </AnimationContainer>
                                ))}
                            </div>
                        </div>
                    </AnimationContainer>

                    <div className="space-y-10">
                        <AnimationContainer animation="fadeUp" delay={0.5}>
                            <div>
                                <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
                                <ul className="space-y-3 text-sm text-muted-foreground">
                                    {QUICK_LINKS.map((link, index) => (
                                        <AnimationContainer
                                            key={index}
                                            animation="fadeLeft"
                                            delay={0.6 + (index * 0.1)}
                                        >
                                            <li>
                                                <Link
                                                    href={link.href}
                                                    className="hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block relative group"
                                                >
                                                    <span className="relative z-10">{link.label}</span>
                                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 ease-out"></div>
                                                </Link>
                                            </li>
                                        </AnimationContainer>
                                    ))}
                                </ul>
                            </div>
                        </AnimationContainer>

                        <AnimationContainer animation="fadeUp" delay={0.6}>
                            <div className="bg-card/50 rounded-lg p-6 border border-border/50">
                                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                                    Risk Disclaimer
                                </h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Derivatives and CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. You should consider whether you understand how CFDs work and whether you can afford to take the high risk of losing your money. Information on this website should not be considered as investment advice.
                                </p>
                            </div>
                        </AnimationContainer>
                    </div>
                </div>

                <AnimationContainer animation="fadeUp" delay={1}>
                    <div className="mt-20 border-t border-primary/20 py-8 flex flex-col md:flex-row items-center justify-center">
                        <p className="text-sm text-muted-foreground text-center font-medium">
                            © COPYRIGHT 2025 CFX Prime. All rights reserved.
                        </p>
                    </div>
                </AnimationContainer>
            </Wrapper>
        </footer>
    );
};

export default Footer;
