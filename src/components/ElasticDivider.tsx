// ElasticDivider.tsx
"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Elastic } from "gsap/all";

// Register GSAP Elastic plugin
gsap.registerPlugin(Elastic);

const ElasticDivider = () => {
    const dividerRef = useRef<SVGSVGElement>(null);
    const pathRef = useRef<SVGPathElement>(null);
    const isDragging = useRef(false);
    const dragStartY = useRef(0);
    const dragOffsetY = useRef(0);
    const initialHeight = 4; // Initial height of the SVG
    const maxBend = 100; // Maximum bend distance (up or down)

    useEffect(() => {
        const svg = dividerRef.current;
        const path = pathRef.current;

        if (svg && path) {
            const width = svg.clientWidth || 1200; // Fallback width if clientWidth is not available

            // Set initial SVG dimensions
            svg.setAttribute("viewBox", `0 0 ${width} ${initialHeight}`);
            svg.setAttribute("height", `${initialHeight}px`);

            // On mouse down: Start dragging
            const handleMouseDown = (e: MouseEvent) => {
                isDragging.current = true;
                dragStartY.current = e.clientY;
                svg.style.cursor = "grabbing";
            };

            // On mouse move: Update bend while dragging
            const handleMouseMove = (e: MouseEvent) => {
                if (!isDragging.current) return;

                const rect = svg.getBoundingClientRect();
                const mouseY = e.clientY - rect.top;

                // Calculate drag offset
                dragOffsetY.current = e.clientY - dragStartY.current;

                // Clamp the drag offset to the maximum bend
                const clampedOffset = Math.max(-maxBend, Math.min(maxBend, dragOffsetY.current));

                // Update path with drag effect
                const newPath = `M0,${initialHeight / 2} Q${width / 2},${initialHeight / 2 + clampedOffset} ${width},${initialHeight / 2}`;
                path.setAttribute("d", newPath);

                // Adjust SVG height dynamically
                const newHeight = initialHeight + Math.abs(clampedOffset) * 2;
                svg.setAttribute("height", `${newHeight}px`);
                svg.setAttribute("viewBox", `0 0 ${width} ${newHeight}`);
            };

            // On mouse up: Release and apply elastic effect
            const handleMouseUp = () => {
                if (!isDragging.current) return;

                isDragging.current = false;
                svg.style.cursor = "grab";

                // Reset with elastic effect
                gsap.to(path, {
                    attr: { d: `M0,${initialHeight / 2} Q${width / 2},${initialHeight / 2} ${width},${initialHeight / 2}` },
                    duration: 1.5,
                    ease: Elastic.easeOut.config(1, 0.3),
                });
                gsap.to(svg, {
                    height: initialHeight,
                    attr: { viewBox: `0 0 ${width} ${initialHeight}` },
                    duration: 1.5,
                    ease: Elastic.easeOut.config(1, 0.3),
                });
            };

            // Add event listeners
            svg.addEventListener("mousedown", handleMouseDown);
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleMouseUp);

            // Cleanup
            return () => {
                svg.removeEventListener("mousedown", handleMouseDown);
                window.removeEventListener("mousemove", handleMouseMove);
                window.removeEventListener("mouseup", handleMouseUp);
            };
        }
    }, []);

    return (
        <svg
            ref={dividerRef}
            className="w-full my-16"
            style={{ display: "block", overflow: "visible", cursor: "grab" }}
        >
            <path
                ref={pathRef}
                d="M0,2 Q600,2 1200,2"
                stroke="#000"
                strokeWidth="2"
                fill="none"
            />
        </svg>
    );
};

export default ElasticDivider;
