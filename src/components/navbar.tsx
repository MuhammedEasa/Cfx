"use client";

import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/constants";
import { useClickOutside } from "@/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { useState, useCallback } from "react";
import AnimationContainer from "./global/animation-container";
import Icons from "./global/icons";
import Wrapper from "./global/wrapper";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
    const [open, setOpen] = useState<boolean>(false);

    //  user is not logged in by default
    const isLoggedIn: boolean = false;

    const handleMenuToggle = useCallback(() => {
        setOpen(prev => !prev);
    }, []);

    const handleMenuClose = useCallback(() => {
        setOpen(false);
    }, []);

    const mobileMenuRef = useClickOutside(() => {
        if (open) handleMenuClose();
    });

    return (
        <nav className="fixed w-full top-0 inset-x-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border" role="navigation" aria-label="Main navigation">
            {/* Desktop */}
            <div className="hidden lg:block">
                <Wrapper className="flex items-center h-16 px-4">
                    {/* Logo - Fixed width to prevent overlap */}
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex-shrink-0 w-48"
                    >
                        <Link href="/" className="flex items-center gap-2" aria-label="Home">
                            <Icons.logo className="w-max h-10" />
                        </Link>
                    </motion.div>

                    {/* Navigation Links - Centered */}
                    <div className="flex-1 flex items-center justify-center gap-x-1">
                        <AnimatePresence>
                            {NAV_LINKS.map((link, index) => (
                                <AnimationContainer
                                    key={index}
                                    animation="fadeDown"
                                    delay={0.1 * index}
                                >
                                    <Link
                                        href={link.link}
                                        className="relative text-muted-foreground hover:text-foreground transition-all duration-300 rounded-md px-4 py-2 text-sm font-medium whitespace-nowrap group"
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        <div className="absolute inset-0 bg-primary/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                                        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:left-1/8 transition-all duration-300 ease-out"></div>
                                    </Link>
                                </AnimationContainer>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* CTA Button - Fixed width to balance layout */}
                    <AnimationContainer animation="fadeLeft" delay={0.1} className="flex-shrink-0 w-48 flex justify-end">
                        <div className="flex items-center gap-x-3">
                            <ThemeToggle />
                            {isLoggedIn ? (
                                <Link href="/">
                                    <Button variant="default" size="sm">
                                        Dashboard
                                    </Button>
                                </Link>
                            ) : (
                                <Link href="/">
                                    <Button variant="default" size="sm">
                                        Create Account
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </AnimationContainer>
                </Wrapper>
            </div>

            {/* Mobile */}
            <div className="lg:hidden">
                <Wrapper className="flex items-center justify-between h-16 px-4">
                    <AnimationContainer animation="fadeRight" delay={0.1}>
                        <Link href="/" aria-label="Home">
                            <Icons.icon className="w-max h-8" />
                        </Link>
                    </AnimationContainer>

                    <AnimationContainer animation="fadeLeft" delay={0.1}>
                        <div className="flex items-center gap-x-2">
                            <ThemeToggle />
                            <Link href="/">
                                <Button variant="default" size="sm">
                                    Create Account
                                </Button>
                            </Link>
                            <button
                                onClick={handleMenuToggle}
                                className="p-2 rounded-md hover:bg-accent/50 transition-colors"
                                aria-label={open ? "Close menu" : "Open menu"}
                                aria-expanded={open}
                                aria-controls="mobile-menu"
                            >
                                {open ? (
                                    <XIcon className="h-5 w-5 text-foreground" />
                                ) : (
                                    <MenuIcon className="h-5 w-5 text-foreground" />
                                )}
                            </button>
                        </div>
                    </AnimationContainer>
                </Wrapper>

                <AnimatePresence>
                    {open && (
                        <motion.div
                            ref={mobileMenuRef}
                            id="mobile-menu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="bg-background border-t border-border"
                        >
                            <div className="px-4 py-6 space-y-2">
                                {NAV_LINKS.map((navItem, idx) => (
                                    <AnimationContainer
                                        key={`link=${idx}`}
                                        animation="fadeRight"
                                        delay={0.1 * (idx + 1)}
                                        className="w-full"
                                    >
                                        <Link
                                            href={navItem.link}
                                            onClick={handleMenuClose}
                                            className="relative block text-muted-foreground hover:text-foreground w-full px-3 py-3 rounded-md text-sm font-medium transition-all duration-300 group hover:bg-primary/10 hover:translate-x-1"
                                        >
                                            <span className="relative z-10">{navItem.name}</span>
                                            <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-primary group-hover:w-6 transition-all duration-300 ease-out transform -translate-y-1/2"></div>
                                        </Link>
                                    </AnimationContainer>
                                ))}
                                <div className="pt-4 space-y-2">
                                    {isLoggedIn ? (
                                        <Link href="/" className="block">
                                            <Button
                                                onClick={handleMenuClose}
                                                variant="default"
                                                className="w-full"
                                            >
                                                Dashboard
                                            </Button>
                                        </Link>
                                    ) : (
                                        <>
                                            <Link href="/" className="block">
                                                <Button
                                                    onClick={handleMenuClose}
                                                    variant="secondary"
                                                    className="w-full"
                                                >
                                                    Login
                                                </Button>
                                            </Link>
                                            <Link href="/" className="block">
                                                <Button
                                                    onClick={handleMenuClose}
                                                    variant="default"
                                                    className="w-full"
                                                >
                                                    Start for free
                                                </Button>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;