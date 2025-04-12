"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import Cookies from "js-cookie";

interface Preferences {
    necessary: boolean;
    functionality: boolean;
    statistics: boolean;
    marketing: boolean;
}

const CookieConsent = () => {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [showPreferences, setShowPreferences] = useState<boolean>(false);
    const [preferences, setPreferences] = useState<Preferences>({
        necessary: true,
        functionality: false,
        statistics: false,
        marketing: false,
    });

    useEffect(() => {
        const consent = Cookies.get("cookieConsent");
        if (!consent) {
            setShowPopup(true);
        }
    }, []);

    const handleAccept = (): void => {
        Cookies.set("cookieConsent", "true", { expires: 365 });
        setShowPopup(false);
    };

    const handlePreferences = (): void => {
        setShowPopup(false);
        setShowPreferences(true);
    };

    const handleSavePreferences = (): void => {
        Cookies.set("cookiePreferences", JSON.stringify(preferences), { expires: 365 });
        setShowPreferences(false);
    };

    return (
        <>
            {/* Cookie Consent Popup */}
            {showPopup && !showPreferences && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="fixed bottom-6 left-6 bg-black text-white p-5 rounded-lg shadow-lg w-80 sm:w-96 z-50"
                >
                    <button
                        onClick={() => setShowPopup(false)}
                        className="absolute top-3 right-3 text-gray-400 hover:text-white"
                    >
                        <X size={18} />
                    </button>

                    <h3 className="text-lg font-semibold">Cookie Settings</h3>
                    <p className="text-sm text-gray-300 mt-2">
                        By clicking "Accept", you agree to store cookies for better user experience.
                    </p>

                    <div className="mt-4 flex justify-between">
                        <button
                            onClick={handleAccept}
                            className="bg-white text-black px-4 py-2 rounded-md font-semibold"
                        >
                            Accept all
                        </button>
                        <button
                            onClick={handlePreferences}
                            className="text-gray-300 hover:text-white font-semibold"
                        >
                            Preferences
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Preferences Popup */}
            {showPreferences && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="fixed bottom-6 left-6 bg-black text-white p-6 rounded-lg shadow-xl w-80 sm:w-96 z-50"
                >
                    <button
                        onClick={() => {
                            setShowPreferences(false);
                            setShowPopup(true);
                        }}
                        className="absolute top-3 left-3 text-white "
                    >
                        <ArrowLeft size={18} />
                    </button>

                    <h3 className="text-lg font-semibold text-center">Customize your preferences</h3>

                    <div className="mt-6 space-y-4">
                        {[
                            { label: "Necessary", key: "necessary", disabled: true },
                            { label: "Functionality", key: "functionality" },
                            { label: "Statistics", key: "statistics" },
                            { label: "Marketing", key: "marketing" },
                        ].map(({ label, key, disabled }) => (
                            <label key={key} className="flex items-center justify-between">
                                <span className="text-white">{label}</span>
                                <button
                                    disabled={disabled}
                                    onClick={() =>
                                        setPreferences((prev) => ({
                                            ...prev,
                                            [key as keyof Preferences]: !prev[key as keyof Preferences],
                                        }))
                                    }
                                    className={`relative w-12 h-6 flex items-center rounded-full p-1 transition ${preferences[key as keyof Preferences] ? "bg-[#c1141d]" : "bg-gray-300"
                                        } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
                                >
                                    <span
                                        className={`absolute left-1 w-5 h-5 bg-white rounded-full transition-transform ${preferences[key as keyof Preferences] ? "translate-x-6" : "translate-x-0"
                                            }`}
                                    ></span>
                                </button>
                            </label>
                        ))}
                    </div>

                    <div className="mt-6">
                        <button
                            onClick={handleSavePreferences}
                            className="w-full bg-white text-black px-4 py-2 rounded-md font-semibold"
                        >
                            Save and Submit
                        </button>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default CookieConsent;
