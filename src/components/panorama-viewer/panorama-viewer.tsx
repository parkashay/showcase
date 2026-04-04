"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import * as THREE from "three";

const PanoramaViewer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sphereRef = useRef<THREE.Mesh | null>(null);
  const rafRef = useRef<number>(0);
  const isUserInteracting = useRef(false);
  const lon = useRef(0);
  const lat = useRef(0);
  const onPointerDownLon = useRef(0);
  const onPointerDownLat = useRef(0);
  const onPointerDownMouseX = useRef(0);
  const onPointerDownMouseY = useRef(0);
  const phi = useRef(0);
  const theta = useRef(0);
  const fov = useRef(75);

  const [textureUrl, setTextureUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const init = useCallback(
    (url: string) => {
      if (!containerRef.current) return;

      const container = containerRef.current;

      // Clean up previous
      if (rendererRef.current) {
        rendererRef.current.dispose();
        container.removeChild(rendererRef.current.domElement);
      }
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      const scene = new THREE.Scene();
      sceneRef.current = scene;

      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1100
      );
      cameraRef.current = camera;

      const geometry = new THREE.SphereGeometry(500, 60, 40);
      geometry.scale(-1, 1, 1);

      const textureLoader = new THREE.TextureLoader();
      const texture = textureLoader.load(url);
      texture.colorSpace = THREE.SRGBColorSpace;

      const material = new THREE.MeshBasicMaterial({ map: texture });
      const mesh = new THREE.Mesh(geometry, material);
      sphereRef.current = mesh;
      scene.add(mesh);

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      rendererRef.current = renderer;

      container.appendChild(renderer.domElement);

      // Reset controls
      lon.current = 0;
      lat.current = 0;
      fov.current = 75;

      const animate = () => {
        rafRef.current = requestAnimationFrame(animate);

        if (isUserInteracting.current === false) {
          lon.current += 0.05;
        }

        lat.current = Math.max(-85, Math.min(85, lat.current));
        phi.current = THREE.MathUtils.degToRad(90 - lat.current);
        theta.current = THREE.MathUtils.degToRad(lon.current);

        const target = new THREE.Vector3(
          500 * Math.sin(phi.current) * Math.cos(theta.current),
          500 * Math.cos(phi.current),
          500 * Math.sin(phi.current) * Math.sin(theta.current)
        );

        camera.lookAt(target);
        camera.fov = fov.current;
        camera.updateProjectionMatrix();

        renderer.render(scene, camera);
      };

      animate();
    },
    []
  );

  useEffect(() => {
    if (textureUrl) {
      init(textureUrl);
    }

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [textureUrl, init]);

  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current || !rendererRef.current || !cameraRef.current)
        return;

      const container = containerRef.current;
      cameraRef.current.aspect =
        container.clientWidth / container.clientHeight;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const url = event.target?.result as string;
      setTextureUrl(url);
    };
    reader.readAsDataURL(file);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (!textureUrl) return;
    e.preventDefault();
    isUserInteracting.current = true;
    setIsDragging(true);
    onPointerDownMouseX.current = e.clientX;
    onPointerDownMouseY.current = e.clientY;
    onPointerDownLon.current = lon.current;
    onPointerDownLat.current = lat.current;

    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isUserInteracting.current) return;
    lon.current =
      (onPointerDownMouseX.current - e.clientX) * 0.1 +
      onPointerDownLon.current;
    lat.current =
      (e.clientY - onPointerDownMouseY.current) * 0.1 +
      onPointerDownLat.current;
  };

  const onPointerUp = () => {
    isUserInteracting.current = false;
    setIsDragging(false);
  };

  const onWheel = (e: React.WheelEvent) => {
    if (!textureUrl) return;
    fov.current = Math.max(30, Math.min(100, fov.current + e.deltaY * 0.05));
  };

  return (
    <div className="space-y-4">
      {!textureUrl ? (
        <label className="flex flex-col items-center justify-center w-full h-[70vh] rounded-2xl border-2 border-dashed border-[#D6D3D1] dark:border-[#44403C] bg-white dark:bg-[#1C1917]/50 cursor-pointer transition-colors hover:border-[#B45309]/40 dark:hover:border-[#F59E0B]/40 group">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-10 h-10 mb-3 text-[#A8A29E] dark:text-[#78716C] group-hover:text-[#B45309] dark:group-hover:text-[#F59E0B] transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="mb-1 text-sm font-body text-[#57534E] dark:text-[#A8A29E]">
              <span className="font-semibold text-[#B45309] dark:text-[#F59E0B]">
                Click to upload
              </span>{" "}
              a 360° panorama image
            </p>
            <p className="text-xs text-[#A8A29E] dark:text-[#78716C] font-body">
              Supports equirectangular panorama images
            </p>
          </div>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleFileUpload}
          />
        </label>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="inline-flex items-center gap-2 px-4 py-2 text-sm font-body font-medium rounded-xl border border-[#E7E5E4] dark:border-[#44403C] text-[#1C1917] dark:text-[#FAFAF7] hover:bg-[#F5F5F0] dark:hover:bg-[#292524] transition-colors cursor-pointer">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Change Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
            <span className="text-xs font-body text-[#A8A29E] dark:text-[#78716C]">
              Drag to look around &middot; Scroll to zoom
            </span>
          </div>
          <div
            ref={containerRef}
            className={`w-full h-[70vh] rounded-2xl overflow-hidden border-2 border-[#D6D3D1] dark:border-[#44403C] bg-black ${
              isDragging
                ? "cursor-grabbing"
                : "cursor-grab"
            }`}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onWheel={onWheel}
          />
        </div>
      )}
    </div>
  );
};

export default PanoramaViewer;
