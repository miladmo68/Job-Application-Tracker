"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";  

export function ImageTabs() {
      const [activeTab, setActiveTab] = useState("ognazie");

  return (
          <section className="bg-white py-16 boarder-t">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl ">
              {/* Tabs */}
              <div className="flex gap-2 justify-center mb-8">
                <Button
                  onClick={() => setActiveTab("ognazie")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "ognazie" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Ognazie Application
                </Button>
                <Button
                  onClick={() => setActiveTab("hired")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "hired" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Get Hired
                </Button>
                <Button
                  onClick={() => setActiveTab("boards")}
                  className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${activeTab === "boards" ? "bg-primary text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                >
                  Manage Board
                </Button>
              </div>
              <div className="relative mx=auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
                {activeTab === "ognazie" && (
                  <Image
                    src="/hero-images/hero1.png"
                    alt="Ognazie Application"
                    width={1200}
                    height={800}
                  />
                )}
                {activeTab === "hired" && (
                  <Image
                    src="/hero-images/hero2.png"
                    alt="Get Hired"
                    width={1200}
                    height={800}
                  />
                )}
                {activeTab === "boards" && (
                  <Image
                    src="/hero-images/hero3.png"
                    alt="Manage Board"
                    width={1200}
                    height={800}
                  />
                )}
              </div>
            </div>
          </div>
        </section>
  );
}